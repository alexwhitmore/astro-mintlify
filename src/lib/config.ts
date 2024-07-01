import type { CollectionEntry } from 'astro:content'
import { collections } from '../config/site.json'

export type CollectionKey = keyof typeof collections

export type ContentEntryMap = {
  [K in CollectionKey]: CollectionEntry<K>
}
