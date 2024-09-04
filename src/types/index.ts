// types/index.ts

export interface Anchor {
  name: string
  icon: string
  url: string
}

export interface Page {
  name: string
  url: string
}

export interface NavigationItem {
  group: string
  type: string
  pages: Page[]
  slug: String
}

export interface SiteConfig {
  anchors: Anchor[]
  navigation: NavigationItem[]
}

import type { CollectionEntry, ContentEntryMap } from 'astro:content'

export type AnyCollectionEntry = CollectionEntry<keyof ContentEntryMap>

export type CollectionType = keyof ContentEntryMap

declare global {
  interface ImportMetaEnv {
    readonly SITE_CONFIG: SiteConfig
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}

export type CollectionTypes<T extends SiteConfig> =
  T['navigation'][number]['type']

export function getCollectionTypes(
  config: SiteConfig
): CollectionTypes<SiteConfig>[] {
  return config.navigation.map((nav) => nav.type)
}

export function ensureCollectionType(type: string): CollectionType {
  if (isValidCollectionType(type)) {
    return type
  }
  throw new Error(`Invalid collection type: ${type}`)
}

function isValidCollectionType(type: string): type is CollectionType {
  return getCollectionTypes(import.meta.env.SITE_CONFIG).includes(
    type as CollectionType
  )
}
