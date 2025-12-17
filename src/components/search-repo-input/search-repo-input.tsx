import { useCallback, useEffect, useMemo, useState } from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';
import { debounce } from 'lodash';

const DEBOUNCE_DELAY = 300;

export const SearchRepoInput: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const runQuery = useCallback((q: string) => {
    console.log('query:', q);
  }, []);

  const debouncedQuery = useMemo(
    () => debounce(runQuery, DEBOUNCE_DELAY),
    [runQuery]
  );

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      debouncedQuery(e.target.value);
    },
    [debouncedQuery]
  );

  useEffect(() => () => debouncedQuery.cancel(), [debouncedQuery]);

  return (
    <TextField.Root
      placeholder="Search any image..."
      onChange={onInputChange}
      value={value}
    >
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  );
};
