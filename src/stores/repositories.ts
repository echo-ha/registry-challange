import { useQuery } from '@tanstack/react-query';

import { getOrganization, searchRepositories } from 'src/api/dockerhub';
import type {
  DockerHubOrganization,
  DockerHubSearchResponse,
  SearchRepositoriesParams
} from 'src/api/dockerhub.types';

export const useGetDockerhubRepositories = (
  params: SearchRepositoriesParams = {}
) => {
  return useQuery<DockerHubSearchResponse>({
    queryKey: ['dockerhub', 'repositories', params],
    queryFn: () => searchRepositories(params)
  });
};

export const useGetDockerhubOrganization = (orgName: string) => {
  return useQuery<DockerHubOrganization>({
    queryKey: ['dockerhub', 'organization', orgName],
    queryFn: () => getOrganization(orgName),
    staleTime: 1000 * 60,
    enabled: !!orgName
  });
};
