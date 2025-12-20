import { useQuery } from '@tanstack/react-query';

import {
  getOrganization,
  getRepositoryDetails,
  OFFICIAL_REPO_OWNER,
  searchRepositories
} from 'src/api/dockerhub';
import type {
  DockerHubOrganization,
  DockerHubRepositoryDetails,
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

export const useGetRepositoryDetails = (repoName?: string) => {
  let queryRepoName = repoName;

  if (!repoName?.includes('/')) {
    queryRepoName = `${OFFICIAL_REPO_OWNER}/${repoName}`;
  }

  return useQuery<DockerHubRepositoryDetails>({
    queryKey: ['dockerhub', 'repository', 'details', queryRepoName],
    queryFn: () => getRepositoryDetails(queryRepoName!),
    enabled: !!repoName
  });
};
