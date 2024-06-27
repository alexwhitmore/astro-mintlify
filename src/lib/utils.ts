import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface Page {
  name: string
  url: string
}

interface NavigationGroup {
  group: string
  pages: Page[]
}

interface Site {
  navigation: NavigationGroup[]
}

interface PageInfo {
  group: string
  page: string
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCurrentPageInfo(
  currentUrl: string,
  site: Site
): PageInfo | null {
  console.log('Current URL:', currentUrl)
  for (const group of site.navigation) {
    console.log('Checking group:', group.group)
    const page = group.pages.find((p) => {
      const normalizedUrl = p.url.replace(/^\/|\/$/g, '')
      console.log('Checking page:', p.name, 'with URL:', normalizedUrl)
      return normalizedUrl === currentUrl
    })
    if (page) {
      console.log('Match found:', page.name)
      return {
        group: group.group,
        page: page.name,
      }
    }
  }
  console.log('No match found for URL:', currentUrl)
  return null
}
