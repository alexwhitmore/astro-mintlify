import { COLLECTION_TYPES } from '../config/site'
import type { CollectionType } from '../types'

export function getCollections(): string[] {
  return COLLECTION_TYPES
}

export function isValidCollectionType(type: unknown): type is CollectionType {
  return typeof type === 'string' && COLLECTION_TYPES.includes(type)
}
