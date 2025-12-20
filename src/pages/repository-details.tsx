import { Text } from '@radix-ui/themes';
import { useSearch } from '@tanstack/react-router';

export const RepositoryDetailsPage: React.FC = () => {
  const { name } = useSearch({ from: '/repository' });

  return (
    <>
      <Text size="6" weight="bold">
        Repository Page
      </Text>
      {name ? (
        <Text size="3" color="gray">
          Viewing repository: {name}
        </Text>
      ) : (
        <Text size="3" color="gray">
          This is a mock route to test routing functionality.
        </Text>
      )}
    </>
  );
};
