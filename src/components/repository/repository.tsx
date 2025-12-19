import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Flex, Text } from '@radix-ui/themes';

import { OFFICIAL_REPO_OWNER } from 'src/api/dockerhub';
import type { DockerHubRepository } from 'src/api/dockerhub.types';
import {
  repositoryCard,
  repositoryDescription,
  repositoryHeader,
  repositoryInfo,
  repositoryName,
  repositoryOfficial,
  repositoryOwner
} from 'src/components/repository/repository.css';
import { RepositoryLogo } from 'src/components/repository-logo/repository-logo';

type RepositoryProps = {
  repository: DockerHubRepository;
};

export const Repository: React.FC<RepositoryProps> = ({ repository }) => {
  const author = repository.repo_owner;
  const isOfficial = author === OFFICIAL_REPO_OWNER;

  const repoBy = isOfficial ? (
    <Flex className={repositoryOfficial} align="center" gap="1">
      <CheckCircledIcon />
      <Text size="2">Official repository</Text>
    </Flex>
  ) : author ? (
    <Text className={repositoryOwner} size="2" color="gray">
      by: {author}
    </Text>
  ) : null;

  return (
    <Flex className={repositoryCard}>
      <div className={repositoryHeader}>
        <RepositoryLogo repository={repository} />
        <div className={repositoryInfo}>
          <Text className={repositoryName} size="4" weight="bold">
            {repository.repo_name}
          </Text>
          {repoBy}
        </div>
      </div>
      {repository.short_description && (
        <Text className={repositoryDescription} size="2" color="gray">
          {repository.short_description}
        </Text>
      )}
    </Flex>
  );
};
