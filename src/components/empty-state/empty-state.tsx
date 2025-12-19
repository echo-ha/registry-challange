import { ValueNoneIcon } from '@radix-ui/react-icons';
import { Text } from '@radix-ui/themes';

import {
  emptyStateContainer,
  emptyStateIcon,
  emptyStateMessage,
  emptyStateSubtitle
} from 'src/components/empty-state/empty-state.css';

type EmptyStateProps = {
  message?: string;
  subtitle?: string;
};

export const EmptyState: React.FC<EmptyStateProps> = ({
  message = 'No repositories found',
  subtitle = 'Try searching with a different query'
}) => {
  return (
    <div className={emptyStateContainer}>
      <ValueNoneIcon className={emptyStateIcon} />
      <Text size="5" className={emptyStateMessage}>
        {message}
      </Text>
      <Text size="3" className={emptyStateSubtitle} color="gray">
        {subtitle}
      </Text>
    </div>
  );
};
