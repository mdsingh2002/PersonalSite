const GITHUB_API_URL = 'https://api.github.com';

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  languages?: string[];
  topics: string[];
  updated_at: string;
  fork: boolean;
  demo_url?: string;
  docs_url?: string;
  project_details_url?: string;
  custom_description?: string;
}

export interface UserProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  html_url: string;
  blog: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export async function fetchUserRepos(username: string): Promise<Repository[]> {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos?sort=updated&per_page=100`);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: Repository[] = await response.json();

    // Filter out forks and sort by stars
    return repos
      .filter(repo => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
}

export async function fetchUserProfile(username: string): Promise<UserProfile> {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}`);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    throw error;
  }
}

export async function fetchSpecificRepo(owner: string, repo: string): Promise<Repository> {
  try {
    const response = await fetch(`${GITHUB_API_URL}/repos/${owner}/${repo}`);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching specific repo:', error);
    throw error;
  }
}

export async function fetchRepoLanguages(owner: string, repo: string): Promise<string[]> {
  try {
    const response = await fetch(`${GITHUB_API_URL}/repos/${owner}/${repo}/languages`);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const languagesData = await response.json();
    // Return languages sorted by bytes of code (descending)
    return Object.keys(languagesData).sort((a, b) => languagesData[b] - languagesData[a]);
  } catch (error) {
    console.error('Error fetching repo languages:', error);
    return [];
  }
}
