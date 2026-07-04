// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The canonical production URL. Override at build time with SITE_URL if needed.
const SITE_URL = process.env.SITE_URL || 'https://menwomenpsychology.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Enforce the trailing-slash URL form everywhere. Matches the default
  // `directory` build format and the sitemap, so every page has exactly one
  // canonical URL and Google does not split signals across `/x` and `/x/`.
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Keep auxiliary/legal pages out of the priority signal but still indexable.
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date('2026-06-30'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
