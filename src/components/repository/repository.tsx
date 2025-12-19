import { Box, Text } from '@radix-ui/themes';

import type { DockerHubRepository } from 'src/api/dockerhub.types';
import {
  repositoryCard,
  repositoryDescription,
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
      <RepositoryLogo repository={repository} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <Text className={repositoryName} weight="bold">
          {repository.repo_name}
        </Text>
        {author && (
          <Text className={repositoryOwner} size="2" color="gray">
            by: {author}
          </Text>
        )}
        {repository.short_description && (
          <Text className={repositoryDescription} size="2" color="gray">
            {repository.short_description}
          </Text>
        )}
      </div>
    </Box>
  );
};
