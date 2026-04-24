import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://linguatech.app',
  integrations: [sitemap()],
  build: {
    format: 'directory',
    inlineStylesheets: 'always'
  }
});