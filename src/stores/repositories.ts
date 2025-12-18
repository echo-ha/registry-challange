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

export const useGetDockerhubRepository = (repoName: string) => {
  return useQuery<DockerHubRepositoryDetail>({
    queryKey: ['dockerhub', 'repository', repoName],
    queryFn: () => getRepository(repoName),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60
  });
};

export const useGetDockerhubOrganization = (orgName: string) => {
  return useQuery<DockerHubOrganization>({
    queryKey: ['dockerhub', 'organization', orgName],
    queryFn: () => getOrganization(orgName),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60,
    enabled: !!orgName
  });
};
