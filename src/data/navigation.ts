import type { NavSection } from '@/types';

export const consoleNavigation: NavSection[] = [
  {
    heading: 'BUILD',
    items: [
      { title: 'Dashboard', href: '/dashboard', icon: 'LayoutDashboard' },
    ],
  },
  {
    heading: 'MANAGE',
    items: [
      { title: 'API Keys', href: '/api-keys', icon: 'Key' },
    ],
  },
];

export const docsNavigation: NavSection[] = [
  {
    heading: 'FIRST STEPS',
    items: [
      { title: 'Intro', href: '/docs/intro', icon: 'BookOpen' },
      { title: 'Quickstart', href: '/docs/quickstart', icon: 'Rocket' },
    ],
  },
];
