import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://getfluo.app',
  i18n: {
    locales: ['en', 'es', 'pt-br', 'fr', 'it'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        // @astrojs/sitemap rejects digits in hreflang values (e.g. es-419), so
        // the sitemap advertises generic `es`. The richer es/es-419 pair is
        // emitted as <link rel="alternate"> in the page <head> (see SEOHead).
        locales: {
          en: 'en',
          es: 'es',
          'pt-br': 'pt-BR',
          fr: 'fr',
          it: 'it'
        }
      }
    })
  ],
  build: {
    format: 'directory',
    inlineStylesheets: 'always'
  }
});