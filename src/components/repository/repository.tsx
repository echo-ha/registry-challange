import { Box, Text } from '@radix-ui/themes';

import { type DockerHubRepository } from 'src/api/dockerhub';
import {
  repositoryCard,
  repositoryDescription,
  repositoryLogo,
  repositoryLogoImage,
  repositoryName,
  repositoryOwner
} from 'src/components/repository/repository.css';

type RepositoryProps = {
  repository: DockerHubRepository;
};

export const Repository: React.FC<RepositoryProps> = ({ repository }) => {
  const logoUrl = repository.repo_owner
    ? `https://hub.docker.com/v2/repositories/${repository.repo_owner}/${repository.repo_name}/images/`
    : null;

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
        {repository.repo_owner && (
          <Text className={repositoryOwner} size="2" color="gray">
            {repository.repo_owner}
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
