import { useQuery } from '@tanstack/react-query';

import {
  type DockerHubSearchResponse,
  searchRepositories,
  type SearchRepositoriesParams
} from 'src/api/dockerhub';

export const useGetDockerhubRepositories = (
  params: SearchRepositoriesParams = {}
) => {
  return useQuery<DockerHubSearchResponse>({
    queryKey: ['dockerhub', 'repositories', params.name, params.ordering],
    queryFn: () => searchRepositories(params),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  });
};
