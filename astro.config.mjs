import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  prefetch: true,
  integrations: [react(), tailwind(), mdx()],
})
