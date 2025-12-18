import { Spinner } from '@radix-ui/themes';

import { loader } from 'src/components/loader/loader.css';

export const Loader: React.FC = () => {
  return (
    <div className={loader}>
      <Spinner size="3" />
    </div>
  );
};
