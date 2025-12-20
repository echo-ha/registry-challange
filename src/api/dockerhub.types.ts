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

export interface DockerHubOrganization {
  id: string;
  uuid: string;
  orgname: string;
  full_name: string;
  location: string;
  company: string;
  profile_url: string;
  date_joined: string;
  gravatar_url: string;
  gravatar_email: string;
  type: string;
  badge: string;
  is_active: boolean;
}

export interface DockerHubRepositoryDetails {
  user: string;
  name: string;
  namespace: string;
  repository_type: string;
  status: number;
  description: string;
  star_count: number;
  pull_count: number;
  last_updated: string;
  date_registered: string;
  collaborator_count: number;
}
