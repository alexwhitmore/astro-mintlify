import siteConfig from '../config/site'

export function getPrevNextPage(url: string) {
  console.log('Original URL:', url)

  const basePath = import.meta.env.BASE_URL || '/'
  let relativePath = url.startsWith(basePath) ? url.slice(basePath.length) : url

  relativePath =
    relativePath === '/' ? relativePath : relativePath.replace(/\/$/, '')

  // Ensure the path starts with a '/'
  const normalizedPath = relativePath.startsWith('/')
    ? relativePath
    : `/${relativePath}`

  console.log('Normalized Path:', normalizedPath)

  const navigation = siteConfig.navigation

  for (let i = 0; i < navigation.length; i++) {
    const section = navigation[i]
    console.log('Checking section:', section.group)
    for (let j = 0; j < section.pages.length; j++) {
      console.log(`Comparing ${section.pages[j].url} with ${normalizedPath}`)
      if (section.pages[j].url === normalizedPath) {
        console.log('Match found!')
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

        console.log('Previous Page:', prevPage)
        console.log('Next Page:', nextPage)

        return { prevPage, nextPage }
      }
    }
  }

  console.log('No match found')
  return { prevPage: null, nextPage: null }
}
