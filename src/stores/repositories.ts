import { useQuery } from '@tanstack/react-query';

import {
  getOrganization,
  getRepository,
  searchRepositories
} from 'src/api/dockerhub';
import type {
  DockerHubOrganization,
  DockerHubRepositoryDetail,
  DockerHubSearchResponse,
  GetOrganizationParams,
  GetRepositoryParams,
  SearchRepositoriesParams
} from 'src/api/dockerhub.types';

export const useGetDockerhubRepositories = (
  params: SearchRepositoriesParams = {}
) => {
  return useQuery<DockerHubSearchResponse>({
    queryKey: ['dockerhub', 'repositories', params],
    queryFn: () => searchRepositories(params),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  });
};

export const useGetDockerhubRepository = (params: GetRepositoryParams) => {
  return useQuery<DockerHubRepositoryDetail>({
    queryKey: ['dockerhub', 'repository', params],
    queryFn: () => getRepository(params),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60
  });
};

export const useGetDockerhubOrganization = (params: GetOrganizationParams) => {
  return useQuery<DockerHubOrganization>({
    queryKey: ['dockerhub', 'organization', params],
    queryFn: () => getOrganization(params),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60
  });
};
