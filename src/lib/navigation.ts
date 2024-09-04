import type { SiteConfig } from '../types'
const siteConfig: SiteConfig = import.meta.env.SITE_CONFIG

export function getPrevNextPage(url: string) {
  const basePath = import.meta.env.BASE_URL || '/'
  let relativePath = url.startsWith(basePath) ? url.slice(basePath.length) : url

  relativePath =
    relativePath === '/' ? relativePath : relativePath.replace(/\/$/, '')

  const normalizedPath = relativePath.startsWith('/')
    ? relativePath
    : `/${relativePath}`

  const navigation = siteConfig.navigation

  for (let i = 0; i < navigation.length; i++) {
    const section = navigation[i]
    for (let j = 0; j < section.pages.length; j++) {
      if (section.pages[j].url === normalizedPath) {
        const prevPage =
          j > 0
            ? section.pages[j - 1]
            : i > 0
            ? navigation[i - 1].pages[navigation[i - 1].pages.length - 1]
            : null
        const nextPage =
          j < section.pages.length - 1
            ? section.pages[j + 1]
            : i < navigation.length - 1
            ? navigation[i + 1].pages[0]
            : null
        return { prevPage, nextPage }
      }
    }
  }
  return { prevPage: null, nextPage: null }
}
