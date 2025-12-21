import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import {
  getOrganization,
  getRepositoryDetails,
  getRepositoryTags,
  OFFICIAL_REPO_OWNER,
  searchRepositories
} from 'src/api/dockerhub';
import type {
  DockerHubOrganization,
  DockerHubRepositoryDetails,
  DockerHubSearchResponse,
  DockerHubTagResponse,
  SearchRepositoriesParams
} from 'src/api/dockerhub.types';

export const normalizeRepoName = (repoName: string) => {
  if (!repoName?.includes('/')) {
    return `${OFFICIAL_REPO_OWNER}/${repoName}`;
  }

  return repoName;
};

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

export const useGetRepositoryDetails = (repoName: string) => {
  const queryRepoName = normalizeRepoName(repoName);

  return useQuery<DockerHubRepositoryDetails>({
    queryKey: ['dockerhub', 'repository', 'details', queryRepoName],
    queryFn: () => getRepositoryDetails(queryRepoName!),
    enabled: !!repoName
  });
};

export const useGetRepositoryTags = (repoName: string) => {
  const queryRepoName = normalizeRepoName(repoName);

  return useInfiniteQuery<DockerHubTagResponse>({
    queryKey: ['dockerhub', 'repository', queryRepoName, 'tags'],
    queryFn: ({ pageParam = 1 }) =>
      getRepositoryTags(queryRepoName, pageParam as number),
    getNextPageParam: lastPage => {
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        const page = url.searchParams.get('page');
        return page ? parseInt(page, 10) : undefined;
      }
      return undefined;
    },
    initialPageParam: 1,
    enabled: !!repoName
  });
};
