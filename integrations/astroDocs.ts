import type { AstroIntegration } from 'astro'

export interface DocConfig {
  anchors: {
    name: string
    icon: string
    url: string
  }[]
  navigation: {
    group: string
    type: string
    pages: {
      name: string
      url: string
    }[]
  }[]
}

export default function astroDocs(config: DocConfig): AstroIntegration {
  return {
    name: 'doc-integration',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({
          vite: {
            define: {
              'import.meta.env.SITE_CONFIG': JSON.stringify(config),
            },
          },
        })
      },
    },
  }
}
