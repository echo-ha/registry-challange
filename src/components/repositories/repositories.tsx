import { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';

import { EmptyState } from 'src/components/empty-state/empty-state';
import { repositoriesContainer } from 'src/components/repositories/repositories.css';
import { RepositoryList } from 'src/components/repository-list/repository-list';
import { RepositoryListSkeleton } from 'src/components/repository-list-skeleton/repository-list-skeleton';
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

  const hasResults = data?.results && data.results.length > 0;

  return (
    <div className={repositoriesContainer}>
      <SearchRepoInput value={searchValue} onChange={setSearchValue} />
      {isLoading ? (
        <RepositoryListSkeleton />
      ) : hasResults ? (
        <RepositoryList repositories={data.results} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};
