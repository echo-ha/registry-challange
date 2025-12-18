import { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';

import { Loader } from 'src/components/loader/loader';
import { repositoriesContainer } from 'src/components/repositories/repositories.css';
import { RepositoryList } from 'src/components/repository-list/repository-list';
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
        data?.results && <RepositoryList repositories={data.results} />
      )}
    </div>
  );
};
