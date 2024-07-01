import type { SiteConfig } from '../types'

const siteConfig: SiteConfig = {
  anchors: [
    {
      name: 'Documentation',
      icon: 'book',
      url: 'https://mintlify.com/docs',
    },
    {
      name: 'Community',
      icon: 'slack',
      url: 'https://mintlify.com/community',
    },
    {
      name: 'Blog',
      icon: 'newspaper',
      url: 'https://mintlify.com/blog',
    },
  ],
  navigation: [
    {
      group: 'Get Started',
      type: 'getting-started',
      pages: [
        { name: 'Introduction', url: '/' },
        { name: 'Quickstart', url: '/getting-started/quickstart' },
        { name: 'Development', url: '/getting-started/development' },
      ],
    },
    {
      group: 'Essentials',
      type: 'essentials',
      pages: [
        { name: 'Markdown', url: '/essentials/markdown' },
        { name: 'Code', url: '/essentials/code' },
        { name: 'Images', url: '/essentials/images' },
        { name: 'Settings', url: '/essentials/settings' },
        { name: 'Navigation', url: '/essentials/navigation' },
        { name: 'Reusable Snippets', url: '/essentials/reusable-snippets' },
      ],
    },
  ],
}

export const COLLECTION_TYPES = siteConfig.navigation.map((nav) => nav.type)

export default siteConfig
