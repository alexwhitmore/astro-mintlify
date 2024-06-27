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
  for (const group of site.navigation) {
    const page = group.pages.find((p) => {
      const normalizedUrl = p.url.replace(/^\/|\/$/g, '')
      return normalizedUrl === currentUrl
    })
    if (page) {
      return {
        group: group.group,
        page: page.name,
      }
    }
  }
  return null
}

export function rootInDarkMode() {
  return document.documentElement.getAttribute('data-theme') === 'dark'
}
