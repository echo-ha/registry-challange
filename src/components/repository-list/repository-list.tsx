import type { DockerHubRepository } from 'src/api/dockerhub.types';
import { repositoriesList } from 'src/components/repositories/repositories.css';
import { Repository } from 'src/components/repository/repository';

type RepositoryListProps = {
  repositories: DockerHubRepository[];
};

export const RepositoryList: React.FC<RepositoryListProps> = ({
  repositories
}) => {
  return (
    <div className={repositoriesList}>
      {repositories.map(repository => (
        <Repository key={repository.repo_name} repository={repository} />
      ))}
    </div>
  );
};
