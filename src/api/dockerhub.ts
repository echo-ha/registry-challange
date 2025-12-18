import createError from 'http-errors';

import type {
  DockerHubOrganization,
  DockerHubRepositoryDetail,
  DockerHubSearchResponse,
  SearchRepositoriesParams
} from 'src/api/dockerhub.types';

const PROXY_BASE_URL = '/api/dockerhub/search/repositories/';
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_ORDERING = '-star_count';

const enforceDescOrdering = (ordering?: string): string => {
  if (!ordering) {
    return DEFAULT_ORDERING;
  }
  return ordering.startsWith('-') ? ordering : `-${ordering}`;
};

export const searchRepositories = async (
  params: SearchRepositoriesParams = {}
): Promise<DockerHubSearchResponse> => {
  const { name = '*', ordering } = params;

  const normalizedOrdering = enforceDescOrdering(ordering);

  const url = new URL(PROXY_BASE_URL, window.location.origin);
  url.searchParams.set('query', name);
  url.searchParams.set('page_size', DEFAULT_PAGE_SIZE.toString());
  url.searchParams.set('ordering', normalizedOrdering);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw createError(response.status, response.statusText);
  }

  return response.json();
};

export const getRepository = async (
  repoName: string
): Promise<DockerHubRepositoryDetail> => {
  const url = new URL(
    `/api/dockerhub/repositories/${repoName}`,
    window.location.origin
  );

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw createError(response.status, response.statusText);
  }

  return response.json();
};

export const getOrganization = async (
  orgName: string
): Promise<DockerHubOrganization> => {
  if (!orgName) {
    throw createError(400, 'Organization name is required');
  }

  const url = new URL(`/api/dockerhub/orgs/${orgName}`, window.location.origin);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw createError(response.status, response.statusText);
  }

  return response.json();
};
