export interface Git {
  name: string;
  description: string;
  stargazers: Forks;
  forks: Forks;
  owner: Owner;
  url: string;
  id: number;
}

export interface Forks {
  totalCount: number;
}

export interface Owner {
  url: string;
  avatarUrl: string;
  login: string;
}
