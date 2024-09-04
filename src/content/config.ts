import { defineCollection, z } from 'astro:content'
import type { CollectionTypes, SiteConfig } from '../types'

const docsSchema = z.object({
  title: z.string(),
  date: z.coerce.date().optional(),
  description: z.string().optional(),
  draft: z.boolean().optional(),
})

export type DocsSchema = z.infer<typeof docsSchema>

export function createCollections<T extends SiteConfig>(siteConfig: T) {
  const COLLECTION_TYPES = siteConfig.navigation.map(
    (nav) => nav.type
  ) as CollectionTypes<T>[]

  return Object.fromEntries(
    COLLECTION_TYPES.map((type) => [
      type,
      defineCollection({ schema: docsSchema }),
    ])
  ) as { [K in CollectionTypes<T>]: ReturnType<typeof defineCollection> }
}

export const collections: ReturnType<typeof createCollections> = {}
