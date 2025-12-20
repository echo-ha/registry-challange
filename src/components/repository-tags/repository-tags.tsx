import { EmptyState } from 'src/components/empty-state/empty-state';
import { repositoriesList } from 'src/components/repositories/repositories.css';
import { RepositoryListSkeleton } from 'src/components/repository-list-skeleton/repository-list-skeleton';
import { Tag } from 'src/components/tag/tag';
import { useGetRepositoryTags } from 'src/stores/repositories';

type RepositoryTagsProps = {
  repoName: string;
};

export const RepositoryTags: React.FC<RepositoryTagsProps> = ({ repoName }) => {
  const { data: tagsData, isLoading: tagsLoading } =
    useGetRepositoryTags(repoName);

  if (tagsLoading) {
    return <RepositoryListSkeleton />;
  }

  if (!tagsData || !tagsData.results || tagsData.results.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className={repositoriesList}>
      {tagsData.results.map(tag => (
        <Tag key={tag.id} tag={tag} repoName={repoName} />
      ))}
    </div>
  );
};
