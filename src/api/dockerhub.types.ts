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

export interface DockerHubTagImage {
  architecture: string;
  os: string;
  digest: string;
  status: string;
  last_pulled: string | null;
  last_pushed: string;
}

export interface DockerHubTag {
  name: string;
  full_size: number;
  images: DockerHubTagImage[];
  id: number;
  repository: number;
  creator: number;
  last_updated: string;
  last_updater: number;
  last_updater_username: string;
  tag_status: string;
  tag_last_pulled: string | null;
  tag_last_pushed: string;
  media_type: string;
  content_type: string;
  digest: string;
}

export interface DockerHubTagResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: DockerHubTag[];
}
