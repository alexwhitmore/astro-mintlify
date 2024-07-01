import { defineCollection, z } from 'astro:content'
import { collections as TemplateCollections } from '../config/site.json'

const docsSchema = z.object({
  title: z.string(),
  date: z.string().transform((str) => new Date(str)),
  description: z.string().optional(),
  draft: z.boolean().optional(),
})

export const collections = Object.fromEntries(
  Object.entries(TemplateCollections).map(([key]) => [
    key,
    defineCollection({ schema: docsSchema }),
  ])
)
