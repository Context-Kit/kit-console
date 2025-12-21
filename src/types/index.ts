export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: Date;
  lastUsed?: Date;
}

export interface NavItem {
  title: string;
  href: string;
  icon?: string;
}

export interface NavSection {
  heading: string;
  items: NavItem[];
}

export type AppView = 'console' | 'docs';
export type Theme = 'light' | 'dark';
