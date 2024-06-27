import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCurrentPageInfo(currentUrl: string, site: any) {
  for (const group of site.navigation) {
    const page = group.pages.find((p: any) => p.url === currentUrl)
    if (page) {
      return { group: group.group, page: page.name }
    }
  }
  return null
}
