import { defineCollection, z } from 'astro:content'
import { COLLECTION_TYPES } from '../config/site'

const docsSchema = z.object({
  title: z.string(),
  date: z.coerce.date().optional(),
  description: z.string().optional(),
  draft: z.boolean().optional(),
})

export type DocsSchema = z.infer<typeof docsSchema>

export const collections = Object.fromEntries(
  COLLECTION_TYPES.map((type) => [
    type,
    defineCollection({ schema: docsSchema }),
  ])
)
