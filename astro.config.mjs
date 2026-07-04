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
      // fr/it are built but hidden until launch — keep them out of the sitemap.
      // /download is a noindex redirect utility — exclude it too.
      filter: (page) =>
        !/^https?:\/\/[^/]+\/(fr|it)\//.test(page) &&
        !/^https?:\/\/[^/]+\/download\/?$/.test(page),
      i18n: {
        defaultLocale: 'en',
        // @astrojs/sitemap rejects digits in hreflang values (e.g. es-419), so
        // the sitemap advertises generic `es`. The richer es/es-419 pair is
        // emitted as <link rel="alternate"> in the page <head> (see SEOHead).
        // fr/it omitted here (hidden); re-add when those markets launch.
        locales: {
          en: 'en',
          es: 'es',
          'pt-br': 'pt-BR'
        }
      }
    })
  ],
  build: {
    format: 'directory',
    inlineStylesheets: 'always'
  }
});