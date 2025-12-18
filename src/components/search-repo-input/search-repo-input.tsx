import { useCallback } from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';

type SearchRepoInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchRepoInput: React.FC<SearchRepoInputProps> = ({
  value,
  onChange
}) => {
  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

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
