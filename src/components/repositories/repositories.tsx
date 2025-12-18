import { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';
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

  const { data } = useGetDockerhubRepositories({
    name: debouncedSearchValue || '*'
  });

  useEffect(() => {
    if (data) {
      console.log('Received data:', data);
    }
  }, [data]);

  return (
    <div>
      <SearchRepoInput value={searchValue} onChange={setSearchValue} />
    </div>
  );
};
