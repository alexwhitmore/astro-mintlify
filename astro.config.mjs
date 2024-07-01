import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'
import { collections } from './src/config/site.json'

export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  prefetch: true,
  integrations: [
    react(),
    tailwind(),
    mdx(),
    {
      name: 'generate-pages',
      hooks: {
        'astro:config:setup': async ({ injectRoute }) => {
          injectRoute({
            pattern: '/',
            entryPoint: 'src/pages/index.astro',
          })
          injectRoute({
            pattern: '/:type/:slug?',
            entryPoint: 'src/pages/[type]/[...slug].astro',
          })
        },
      },
    },
  ],
  content: collections,
})
