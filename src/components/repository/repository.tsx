import { Box, Text } from '@radix-ui/themes';

import type { DockerHubRepository } from 'src/api/dockerhub.types';
import {
  repositoryCard,
  repositoryDescription,
  repositoryHeader,
  repositoryInfo,
  repositoryName,
  repositoryOwner
} from 'src/components/repository/repository.css';
import { RepositoryLogo } from 'src/components/repository-logo/repository-logo';

type RepositoryProps = {
  repository: DockerHubRepository;
};

export const Repository: React.FC<RepositoryProps> = ({ repository }) => {
  const author = repository.repo_owner;

  return (
    <Box className={repositoryCard}>
      <div className={repositoryHeader}>
        <RepositoryLogo repository={repository} />
        <div className={repositoryInfo}>
          <Text className={repositoryName} weight="bold">
            {repository.repo_name}
          </Text>
          {author && (
            <Text className={repositoryOwner} size="2" color="gray">
              by: {author}
            </Text>
          )}
        </div>
      </div>
      {repository.short_description && (
        <Text className={repositoryDescription} size="2" color="gray">
          {repository.short_description}
        </Text>
      )}
    </Box>
  );
};
