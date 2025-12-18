import { Box, Text } from '@radix-ui/themes';

import type { DockerHubRepository } from 'src/api/dockerhub.types';
import {
  repositoryCard,
  repositoryDescription,
  repositoryLogo,
  repositoryLogoImage,
  repositoryName,
  repositoryOwner
} from 'src/components/repository/repository.css';
import { useGetDockerhubOrganization } from 'src/stores/repositories';

type RepositoryProps = {
  repository: DockerHubRepository;
};

export const Repository: React.FC<RepositoryProps> = ({ repository }) => {
  const { data: orgData } = useGetDockerhubOrganization(repository.repo_owner);

  const author = repository.repo_owner;
  const logoUrl = orgData?.gravatar_url || null;

  return (
    <Box className={repositoryCard}>
      <div className={repositoryLogo}>
        {logoUrl ? (
          <img
            className={repositoryLogoImage}
            src={logoUrl}
            alt={`${repository.repo_name} logo`}
            onError={e => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <div
            style={{
              width: 48,
              height: 48,
              backgroundColor: '#0db7ed',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 24
            }}
          >
            🐳
          </div>
        )}
      </div>
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
