import { useSearch } from '@tanstack/react-router';

import { RepositoryDetails } from 'src/components/repository-details/repository-details';

export const RepositoryDetailsPage: React.FC = () => {
  const { name } = useSearch({ from: '/repository' });

  return <RepositoryDetails name={name} />;
};
