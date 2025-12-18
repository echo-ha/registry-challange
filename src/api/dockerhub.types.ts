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

export interface DockerHubRepositoryDetail {
  user: string;
  name: string;
  namespace: string;
  repository_type: string;
  status: number;
  status_description: string;
  description: string;
  is_private: boolean;
  is_automated: boolean;
  star_count: number;
  pull_count: number;
  last_updated: string;
  last_modified: string;
  date_registered: string;
  collaborator_count: number;
  affiliation: string | null;
  hub_user: string;
  has_starred: boolean;
  permissions: {
    read: boolean;
    write: boolean;
    admin: boolean;
  };
  media_types: string[];
  content_types: string[];
  categories: string[];
  immutable_tags_settings: {
    enabled: boolean;
    rules: string[];
  };
  storage_size: number;
  source: string | null;
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
