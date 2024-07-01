import { defineCollection, z, type CollectionEntry } from 'astro:content'
import { COLLECTION_TYPES, type CollectionTypes } from '../config/site'

const docsSchema = z.object({
  title: z.string(),
  date: z.coerce.date().optional(),
  description: z.string().optional(),
  draft: z.boolean().optional(),
})

export const collections = Object.fromEntries(
  COLLECTION_TYPES.map((type) => [
    type,
    defineCollection({ schema: docsSchema }),
  ])
)

export type ContentEntryMap = {
  [K in CollectionTypes]: CollectionEntry<K>
}

export function getCollections(): CollectionTypes[] {
  return [...COLLECTION_TYPES]
}

export function isValidCollection(value: string): value is CollectionTypes {
  return COLLECTION_TYPES.includes(value as CollectionTypes)
}
