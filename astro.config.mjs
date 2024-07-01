import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read the JSON file
const siteConfigPath = path.resolve(__dirname, './src/config/site.json')
const siteConfig = JSON.parse(fs.readFileSync(siteConfigPath, 'utf-8'))

export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  prefetch: true,
  integrations: [react(), tailwind(), mdx()],
  content: siteConfig.collections,
})
