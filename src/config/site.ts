import type { SiteConfig } from '../types'

const siteConfig: SiteConfig = {
  anchors: [
    {
      name: 'Community',
      icon: 'discord',
      url: 'https://kcd.im/discord',
    },
    {
      name: 'Blog',
      icon: 'newspaper',
      url: 'https://kentcdodds.com/blog',
    },
  ],
  navigation: [
    {
      group: 'Getting started',
      type: 'introduction',
      pages: [
        { name: 'Introduction', url: '/' },
        { name: 'Getting Started', url: '/introduction/installation' },
        { name: 'Features', url: '/introduction/features' },
        { name: 'Guiding Principles', url: '/introduction/guiding-principles' },
      ],
    },
    {
      group: 'Core Concepts',
      type: 'core-concepts',
      pages: [
        { name: 'Authentication', url: '/core-concepts/authentication' },
        { name: 'Database', url: '/core-concepts/database' },
        { name: 'Routing', url: '/core-concepts/routing' },
        { name: 'Caching', url: '/core-concepts/caching' },
        { name: 'Email', url: '/core-concepts/email' },
      ],
    },
    {
      group: 'Frontend',
      type: 'frontend',
      pages: [
        { name: 'Client Hints', url: '/frontend/client-hints' },
        { name: 'Fonts', url: '/frontend/fonts' },
        { name: 'Icons', url: '/frontend/icons' },
        { name: 'Toasts', url: '/frontend/toasts' },
      ],
    },
    {
      group: 'Backend',
      type: 'backend',
      pages: [
        { name: 'APIs', url: '/backend/apis' },
        { name: 'Permissions', url: '/backend/permissions' },
        { name: 'Redirects', url: '/backend/redirects' },
        { name: 'Server Timing', url: '/backend/server-timing' },
      ],
    },
    {
      group: 'Deployment & Operations',
      type: 'deployment-operations',
      pages: [
        { name: 'Deployment', url: '/deployment-operations/deployment' },
        { name: 'Monitoring', url: '/deployment-operations/monitoring' },
        {
          name: 'Memory Management',
          url: '/deployment-operations/memory-management',
        },
        {
          name: 'Secrets Management',
          url: '/deployment-operations/secrets-management',
        },
      ],
    },
    {
      group: 'Best Practices',
      type: 'best-practices',
      pages: [
        { name: 'Security', url: '/best-practices/security' },
        { name: 'SEO', url: '/best-practices/seo' },
        { name: 'Testing', url: '/best-practices/testing' },
        { name: 'Timezone Handling', url: '/best-practices/timezone-handling' },
      ],
    },
    {
      group: 'Miscellaneous',
      type: 'miscellaneous',
      pages: [
        { name: 'Community', url: '/miscellaneous/community' },
        { name: 'Examples', url: '/miscellaneous/examples' },
        { name: 'Managing Updates', url: '/miscellaneous/managing-updates' },
        { name: 'Troubleshooting', url: '/miscellaneous/troubleshooting' },
      ],
    },
  ],
}

export const COLLECTION_TYPES = siteConfig.navigation.map((nav) => nav.type)

export default siteConfig
