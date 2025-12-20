import { Flex, Skeleton } from '@radix-ui/themes';

import { repositoriesList } from 'src/components/repositories/repositories.css';
import {
  repositoryCard,
  repositoryDescription,
  repositoryHeader,
  repositoryInfo,
  repositoryLogo
} from 'src/components/repository/repository.css';

const GridItemSkeleton: React.FC = () => {
  return (
    <Flex className={repositoryCard}>
      <div className={repositoryHeader}>
        <div className={repositoryLogo}>
          <Skeleton width="100%" height="100%" />
        </div>
        <div className={repositoryInfo}>
          <Skeleton height="20px" width="70%" />
          <Skeleton height="14px" width="50%" />
        </div>
      </div>
      <div className={repositoryDescription}>
        <Skeleton height="32px" width="1000px" />
      </div>
    </Flex>
  );
};

export const GridSkeleton: React.FC = () => {
  return (
    <div className={repositoriesList}>
      {Array.from({ length: 9 }).map((_, index) => (
        <GridItemSkeleton key={index} />
      ))}
    </div>
  );
};
