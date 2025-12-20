import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Flex, Text } from '@radix-ui/themes';

import { OFFICIAL_REPO_OWNER } from 'src/api/dockerhub';
import { Loader } from 'src/components/loader/loader';
import {
  repositoryDescription,
  repositoryHeader,
  repositoryInfo,
  repositoryName,
  repositoryOfficial,
  repositoryOwner
} from 'src/components/repository/repository.css';
import { RepositoryLogo } from 'src/components/repository-logo/repository-logo';
import { useGetRepositoryDetails } from 'src/stores/repositories';

type RepositoryDetailsProps = {
  name?: string;
};

export const RepositoryDetails: React.FC<RepositoryDetailsProps> = ({
  name
}) => {
  const { data, isLoading } = useGetRepositoryDetails(name || '');

  if (!name) {
    return (
      <>
        <Text size="6" weight="bold">
          Repository Page
        </Text>
        <Text size="3" color="gray">
          Please provide a repository name.
        </Text>
      </>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return (
      <>
        <Text size="6" weight="bold">
          Repository Page
        </Text>
        <Text size="3" color="red">
          Failed to load repository details for: {name}
        </Text>
      </>
    );
  }

  const isOfficial = data.namespace === OFFICIAL_REPO_OWNER;

  const ownerDisplay = isOfficial ? (
    <Flex className={repositoryOfficial} align="center" gap="1">
      <CheckCircledIcon />
      <Text size="2">Official repository</Text>
    </Flex>
  ) : (
    <Text className={repositoryOwner} size="2" color="gray">
      by: {data.namespace}
    </Text>
  );

  const lastUpdatedDate = new Date(data.last_updated).toLocaleDateString();

  return (
    <Flex direction="column" gap="4">
      <div className={repositoryHeader}>
        <RepositoryLogo
          repo_owner={data.namespace}
          repo_name={data.name}
          size={128}
        />
        <div className={repositoryInfo}>
          <Text className={repositoryName} size="6" weight="bold">
            {data.name}
          </Text>
          {ownerDisplay}
          <Text size="2" color="gray">
            Last updated: {lastUpdatedDate}
          </Text>
        </div>
      </div>
      {data.description && (
        <Text className={repositoryDescription} size="3" color="gray">
          {data.description}
        </Text>
      )}
    </Flex>
  );
};
