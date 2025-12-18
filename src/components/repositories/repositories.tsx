import { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';

import { Loader } from 'src/components/loader/loader';
import {
  repositoriesContainer,
  repositoriesList
} from 'src/components/repositories/repositories.css';
import { Repository } from 'src/components/repository/repository';
import { SearchRepoInput } from 'src/components/search-repo-input/search-repo-input';
import { useGetDockerhubRepositories } from 'src/stores/repositories';

const DEBOUNCE_DELAY = 300;

export const Repositories: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>('');

  const debouncedSetSearch = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedSearchValue(value);
      }, DEBOUNCE_DELAY),
    []
  );

  useEffect(() => {
    debouncedSetSearch(searchValue);
    return () => {
      debouncedSetSearch.cancel();
    };
  }, [searchValue, debouncedSetSearch]);

  const { data, isLoading } = useGetDockerhubRepositories({
    name: debouncedSearchValue || '*'
  });

  return (
    <div className={repositoriesContainer}>
      <SearchRepoInput value={searchValue} onChange={setSearchValue} />
      {isLoading ? (
        <Loader />
      ) : (
        data?.results && (
          <div className={repositoriesList}>
            {data.results.map(repository => (
              <Repository key={repository.repo_name} repository={repository} />
            ))}
          </div>
        )
      )}
    </div>
  );
};
