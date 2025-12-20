import fallbackRepoLogo from 'src/assets/fallback-repo-logo.svg';
import {
  repositoryLogo,
  repositoryLogoImage
} from 'src/components/repository/repository.css';
import { useGetDockerhubOrganization } from 'src/stores/repositories';

type RepositoryLogoProps = {
  repo_owner: string;
  repo_name: string;
  size?: number;
};

export const RepositoryLogo: React.FC<RepositoryLogoProps> = ({
  repo_name,
  repo_owner,
  size = 48
}) => {
  const { data: orgData } = useGetDockerhubOrganization(repo_owner);

  const orgLogoUrl = orgData?.gravatar_url || null;
  const logoUrl = `https://hub.docker.com/api/media/repos_logo/v1/${encodeURIComponent(
    `${repo_owner}/${repo_name}`
  )}?type=logo`;

  return (
    <div className={repositoryLogo} style={{ width: size, height: size }}>
      <img
        className={repositoryLogoImage}
        src={logoUrl}
        alt={`${repo_name} logo`}
        onError={e => {
          const img = e.target as HTMLImageElement;
          const currentSrc = img.src;

          if (currentSrc === logoUrl && orgLogoUrl) {
            img.onerror = null;
            img.src = orgLogoUrl;
          } else {
            img.onerror = null;
            img.src = fallbackRepoLogo;
          }
        }}
      />
    </div>
  );
};
