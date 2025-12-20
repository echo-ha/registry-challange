import { Flex, Text } from '@radix-ui/themes';
import { useNavigate } from '@tanstack/react-router';

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

type RepositoryProps = {
  repository: DockerHubRepository;
};

export const Repository: React.FC<RepositoryProps> = ({ repository }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ to: '/repository', search: { name: repository.repo_name } });
  };

  return (
    <Flex className={repositoryCard} onClick={handleClick}>
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
