import createError from 'http-errors';

const DOCKERHUB_BASE_URL = 'https://hub.docker.com/v2/search/repositories/';
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_ORDERING = '-star_count';

export interface DockerHubRepository {
  repo_name: string;
  short_description: string;
  star_count: number;
  pull_count: number;
  repo_owner: string;
  is_automated: boolean;
  is_official: boolean;
}

export interface DockerHubSearchResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: DockerHubRepository[];
}

export interface SearchRepositoriesParams {
  name?: string;
  ordering?: string;
}

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

  const url = new URL(DOCKERHUB_BASE_URL);
  url.searchParams.set('query', name);
  url.searchParams.set('page_size', DEFAULT_PAGE_SIZE.toString());
  url.searchParams.set('ordering', normalizedOrdering);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw createError(response.status, response.statusText);
  }

  return response.json();
};
