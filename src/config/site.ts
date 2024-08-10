import type { SiteConfig } from '../types'

const siteConfig: SiteConfig = {
  anchors: [
    // {
    //   name: 'Documentation',
    //   icon: 'book',
    //   url: 'https://mintlify.com/docs',
    // },
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
      group: 'Introduction',
      type: 'introduction',
      pages: [
        { name: 'Getting Started', url: '/' },
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
        { name: 'Client Hints', url: '/client-hints' },
        { name: 'Fonts', url: '/fonts' },
        { name: 'Icons', url: '/icons' },
        { name: 'Toasts', url: '/toasts' },
      ],
    },
    {
      group: 'Backend',
      type: 'backend',
      pages: [
        { name: 'APIs', url: '/apis' },
        { name: 'Permissions', url: '/permissions' },
        { name: 'Redirects', url: '/redirects' },
        { name: 'Server Timing', url: '/server-timing' },
      ],
    },
    {
      group: 'Deployment & Operations',
      type: 'deployment-ops',
      pages: [
        { name: 'Deployment', url: '/deployment' },
        { name: 'Monitoring', url: '/monitoring' },
        { name: 'Memory Management', url: '/memory' },
        { name: 'Secrets Management', url: '/secrets' },
      ],
    },
    {
      group: 'Best Practices',
      type: 'best-practices',
      pages: [
        { name: 'SEO', url: '/seo' },
        { name: 'Security', url: '/security' },
        { name: 'Testing', url: '/testing' },
        { name: 'Timezone Handling', url: '/timezone' },
      ],
    },
    {
      group: 'Miscellaneous',
      type: 'miscellaneous',
      pages: [
        { name: 'Community', url: '/community' },
        { name: 'Examples', url: '/examples' },
        { name: 'Managing Updates', url: '/managing-updates' },
        { name: 'Troubleshooting', url: '/troubleshooting' },
      ],
    },
  ],
}

export const COLLECTION_TYPES = siteConfig.navigation.map((nav) => nav.type)

export default siteConfig
