import { Text } from '@radix-ui/themes';

type RepositoryDetailsProps = {
  name?: string;
};

export const RepositoryDetails: React.FC<RepositoryDetailsProps> = ({
  name
}) => {
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
