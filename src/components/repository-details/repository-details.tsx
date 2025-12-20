import { Flex, Text } from '@radix-ui/themes';

import { RepoOwner } from 'src/components/repo-owner/repo-owner';
import {
  repositoryDescription,
  repositoryHeader,
  repositoryInfo,
  repositoryName
} from 'src/components/repository/repository.css';
import { RepositoryListSkeleton } from 'src/components/repository-list-skeleton/repository-list-skeleton';
import { RepositoryLogo } from 'src/components/repository-logo/repository-logo';
import { RepositoryTags } from 'src/components/repository-tags/repository-tags';
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
    return <RepositoryListSkeleton />;
  }

  if (!data) {
    return (
      <Text size="3" color="red">
        Failed to load repository details for: {name}
      </Text>
    );
  }

  const lastUpdatedDate = new Date(data.last_updated).toLocaleDateString(
    'en-GB'
  );
  const fullRepoName = `${data.namespace}/${data.name}`;

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
          <RepoOwner owner={data.namespace} />
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
      <RepositoryTags repoName={fullRepoName} />
    </Flex>
  );
};
