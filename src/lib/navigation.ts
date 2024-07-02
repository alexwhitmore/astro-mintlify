import siteConfig from '../config/site'

export function getPrevNextPage(url: string) {
  // Remove the base path if it exists
  const basePath = import.meta.env.BASE_URL || '/'
  const relativePath = url.startsWith(basePath)
    ? url.slice(basePath.length)
    : url

  // Ensure the path starts with a '/'
  const normalizedPath = relativePath.startsWith('/')
    ? relativePath
    : `/${relativePath}`

  const navigation = siteConfig.navigation

  for (let i = 0; i < navigation.length; i++) {
    const section = navigation[i]
    const pageIndex = section.pages.findIndex(
      (page) => page.url === normalizedPath
    )

    if (pageIndex !== -1) {
      const prevPage =
        pageIndex > 0
          ? section.pages[pageIndex - 1]
          : i > 0
          ? navigation[i - 1].pages[navigation[i - 1].pages.length - 1]
          : null

      const nextPage =
        pageIndex < section.pages.length - 1
          ? section.pages[pageIndex + 1]
          : i < navigation.length - 1
          ? navigation[i + 1].pages[0]
          : null

      console.log('Current URL:', normalizedPath)
      console.log('Previous Page:', prevPage)
      console.log('Next Page:', nextPage)

      return { prevPage, nextPage }
    }
  }

  return { prevPage: null, nextPage: null }
}
