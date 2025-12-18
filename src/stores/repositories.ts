import { useQuery } from '@tanstack/react-query';
import {
  type DockerHubSearchResponse,
  searchRepositories,
  type SearchRepositoriesParams
} from 'src/api/dockerhub';

export const useGetDockerhubRepositores = (
  params: SearchRepositoriesParams = {}
) => {
  return useQuery<DockerHubSearchResponse>({
    queryKey: ['dockerhub', 'repositories', params.name, params.ordering],
    queryFn: () => searchRepositories(params)
  });
};
