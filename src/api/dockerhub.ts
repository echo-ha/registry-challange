import createError, { BadRequest } from 'http-errors';

import type {
  DockerHubOrganization,
  DockerHubRepositoryDetails,
  DockerHubSearchResponse,
  DockerHubTagResponse,
  SearchRepositoriesParams
} from 'src/api/dockerhub.types';

const PROXY_BASE_URL = '/api/dockerhub';
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_ORDERING = '-star_count';
export const OFFICIAL_REPO_OWNER = 'library'; // according to dockerhub api

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

  const url = new URL(
    `${PROXY_BASE_URL}/search/repositories/`,
    window.location.origin
  );
  url.searchParams.set('query', name);
  url.searchParams.set('page_size', DEFAULT_PAGE_SIZE.toString());
  url.searchParams.set('ordering', normalizedOrdering);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw createError(response.status, response.statusText);
  }

  const data: DockerHubSearchResponse = await response.json();
  data.results.forEach(repo => {
    const owner = repo.repo_name.split('/');

    if (owner.length == 2) {
      repo.repo_owner = owner[0];
    } else if (repo.is_official) {
      repo.repo_owner = OFFICIAL_REPO_OWNER;
    }
  });

  return data;
};

export const getOrganization = async (
  orgName: string
): Promise<DockerHubOrganization> => {
  if (!orgName) {
    throw BadRequest('Organization name is required');
  }

  const url = new URL(
    `${PROXY_BASE_URL}/orgs/${orgName}`,
    window.location.origin
  );

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw createError(response.status, response.statusText);
  }

  return response.json();
};

export const getRepositoryDetails = async (
  repoName: string
): Promise<DockerHubRepositoryDetails> => {
  if (!repoName || !repoName.includes('/')) {
    throw BadRequest('Repository name is required');
  }

  const url = new URL(
    `${PROXY_BASE_URL}/repositories/${repoName}`,
    window.location.origin
  );

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw createError(response.status, response.statusText);
  }

  return response.json();
};

export const getRepositoryTags = async (
  repoName: string
): Promise<DockerHubTagResponse> => {
  if (!repoName || !repoName.includes('/')) {
    throw BadRequest('Repository name is required');
  }

  const [namespace, name] = repoName.split('/');

  const url = new URL(
    `${PROXY_BASE_URL}/namespaces/${namespace}/repositories/${name}/tags`,
    window.location.origin
  );

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw createError(response.status, response.statusText);
  }

  return response.json();
};
