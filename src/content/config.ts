import { defineCollection, z } from 'astro:content'

const docsSchema = z.object({
  title: z.string(),
  date: z.string().transform((str) => new Date(str)),
  description: z.string().optional(),
  draft: z.boolean().optional(),
  type: z.string(),
})

export const collections = {
  'getting-started': defineCollection({ schema: docsSchema }),
  essentials: defineCollection({ schema: docsSchema }),
  guides: defineCollection({ schema: docsSchema }),
}
