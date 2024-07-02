import siteConfig from '../config/site'

export function getPrevNextPage(url: string) {
  const navigation = siteConfig.navigation

  for (let i = 0; i < navigation.length; i++) {
    const section = navigation[i]
    const pageIndex = section.pages.findIndex((page) => page.url === url)

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

      console.log('Current URL:', url)
      console.log('Previous Page:', prevPage)
      console.log('Next Page:', nextPage)

      return { prevPage, nextPage }
    }
  }

  return { prevPage: null, nextPage: null }
}
