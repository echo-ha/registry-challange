import { Flex, Text } from '@radix-ui/themes';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { getRepositoryDetails } from 'src/api/dockerhub';
import type { DockerHubRepository } from 'src/api/dockerhub.types';
import { RepoOwner } from 'src/components/repo-owner/repo-owner';
import {
  repositoryCard,
  repositoryDescription,
  repositoryHeader,
  repositoryInfo,
  repositoryName
} from 'src/components/repository/repository.css';
import { RepositoryLogo } from 'src/components/repository-logo/repository-logo';
import { normalizeRepoName } from 'src/stores/repositories';

type RepositoryProps = {
  repository: DockerHubRepository;
};

export const Repository: React.FC<RepositoryProps> = ({ repository }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleClick = () => {
    navigate({ to: '/repository', search: { name: repository.repo_name } });
  };

  const handleMouseEnter = () => {
    const normalizedName = normalizeRepoName(repository.repo_name);

    queryClient.prefetchQuery({
      queryKey: ['dockerhub', 'repository', 'details', normalizedName],
      queryFn: () => getRepositoryDetails(normalizedName)
    });
  };

  return (
    <Flex
      className={repositoryCard}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      <div className={repositoryHeader}>
        <RepositoryLogo
          repo_owner={repository.repo_owner}
          repo_name={repository.repo_name}
        />
        <div className={repositoryInfo}>
          <Text className={repositoryName} size="4" weight="bold">
            {repository.repo_name}
          </Text>
          <RepoOwner owner={repository.repo_owner} />
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
