import { EmptyState } from 'src/components/empty-state/empty-state';
import { GridSkeleton } from 'src/components/grid-skeleton/grid-skeleton';
import { repositoriesList } from 'src/components/repositories/repositories.css';
import { Tag } from 'src/components/tag/tag';
import { useGetRepositoryTags } from 'src/stores/repositories';

type RepositoryTagsProps = {
  repoName: string;
};

export const RepositoryTags: React.FC<RepositoryTagsProps> = ({ repoName }) => {
  const { data: tagsData, isLoading: tagsLoading } =
    useGetRepositoryTags(repoName);

  if (tagsLoading) {
    return <GridSkeleton />;
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
