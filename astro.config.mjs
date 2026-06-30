// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The canonical production URL. Override at build time with SITE_URL if needed.
const SITE_URL = process.env.SITE_URL || 'https://www.mindthegender.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
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
