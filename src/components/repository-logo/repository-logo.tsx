import type { DockerHubRepository } from 'src/api/dockerhub.types';
import fallbackRepoLogo from 'src/assets/fallback-repo-logo.svg';
import {
  repositoryLogo,
  repositoryLogoImage
} from 'src/components/repository/repository.css';
import { useGetDockerhubOrganization } from 'src/stores/repositories';

type RepositoryLogoProps = {
  repository: DockerHubRepository;
};

export const RepositoryLogo: React.FC<RepositoryLogoProps> = ({
  repository
}) => {
  const { data: orgData } = useGetDockerhubOrganization(repository.repo_owner);

  const orgLogoUrl = orgData?.gravatar_url || null;
  const logoUrl = `https://hub.docker.com/api/media/repos_logo/v1/${encodeURIComponent(
    `${repository.repo_owner}/${repository.repo_name}`
  )}?type=logo`;

  return (
    <div className={repositoryLogo}>
      <img
        className={repositoryLogoImage}
        src={logoUrl}
        alt={`${repository.repo_name} logo`}
        onError={e => {
          const img = e.target as HTMLImageElement;
          const currentSrc = img.src;

          if (currentSrc === logoUrl && orgLogoUrl) {
            img.onerror = null;
            img.src = orgLogoUrl;
          } else if (currentSrc === orgLogoUrl || !orgLogoUrl) {
            img.onerror = null;
            img.src = fallbackRepoLogo;
          }
        }}
      />
    </div>
  );
};
