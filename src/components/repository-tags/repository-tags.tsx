import { useEffect, useRef } from 'react';
import { Flex } from '@radix-ui/themes';

import type { DockerHubTag } from 'src/api/dockerhub.types';
import type { DockerHubTagResponse } from 'src/api/dockerhub.types';
import { EmptyState } from 'src/components/empty-state/empty-state';
import { GridSkeleton } from 'src/components/grid-skeleton/grid-skeleton';
import { repositoriesList } from 'src/components/repositories/repositories.css';
import { Tag } from 'src/components/tag/tag';
import { useGetRepositoryTags } from 'src/stores/repositories';

type RepositoryTagsProps = {
  repoName: string;
};

const flattenTagsFromPages = (data: unknown): DockerHubTag[] => {
  if (!data) {
    return [];
  }

  return (data as unknown as { pages: DockerHubTagResponse[] }).pages.flatMap(
    (page: DockerHubTagResponse) => page.results
  );
};

export const RepositoryTags: React.FC<RepositoryTagsProps> = ({ repoName }) => {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useGetRepositoryTags(repoName);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = loadMoreRef.current;
    if (!element || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && fetchNextPage()
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return <GridSkeleton />;
  }

  const allTags = flattenTagsFromPages(data);

  if (allTags.length === 0) {
    return <EmptyState />;
  }

  return (
    <Flex direction="column" gap="4">
      <div className={repositoriesList}>
        {allTags.map((tag: DockerHubTag) => (
          <Tag key={tag.id} tag={tag} repoName={repoName} />
        ))}
      </div>
      {hasNextPage && (
        <div ref={loadMoreRef}>{isFetchingNextPage && <GridSkeleton />}</div>
      )}
    </Flex>
  );
};
