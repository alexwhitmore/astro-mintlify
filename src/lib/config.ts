import type { CollectionEntry } from 'astro:content'
import { contentConfig } from '../../astro.config.mjs'

export type CollectionKey = keyof typeof contentConfig.collections

export type ContentEntryMap = {
  [K in CollectionKey]: CollectionEntry<K>
}
