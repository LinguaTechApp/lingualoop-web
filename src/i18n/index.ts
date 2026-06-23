/**
 * i18n core: locale config + the typed `t()` helper used across the landing.
 *
 * Routing is handled by Astro's native i18n (see astro.config.mjs): the default
 * locale `en` is served at `/`, the rest under `/es/`, `/pt-br/`, `/fr/`, `/it/`.
 * Components derive the active locale from `Astro.url` via `getLocaleFromUrl`,
 * then read copy with `useTranslations(locale)`.
 *
 * To add a string: add it to the `Dict` interface in `types.ts`, then to every
 * `{locale}.ts` file (the `: Dict` annotation flags any you miss).
 * To add a language: add the code below + to astro.config.mjs, create
 * `src/i18n/{code}.ts` and `src/pages/{code}/index.astro`, and fill the maps.
 */
import type { Dict } from './types';
import en from './en';
import es from './es';
import ptBR from './pt-br';
import fr from './fr';
import it from './it';

export const LOCALES = ['en', 'es', 'pt-br', 'fr', 'it'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

const dictionaries: Record<Locale, Dict> = {
  en,
  es,
  'pt-br': ptBR,
  fr,
  it
};

/** Native language name, shown in the switcher menu. */
export const LANGUAGE_NAMES: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  'pt-br': 'Português',
  fr: 'Français',
  it: 'Italiano'
};

/** Compact code shown on the switcher toggle. */
export const LANGUAGE_SHORT: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
  'pt-br': 'PT',
  fr: 'FR',
  it: 'IT'
};

/** Value for `<html lang>`. */
export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  'pt-br': 'pt-BR',
  fr: 'fr',
  it: 'it'
};

/** og:locale (underscore form). */
export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_LA',
  'pt-br': 'pt_BR',
  fr: 'fr_FR',
  it: 'it_IT'
};

/**
 * hreflang code(s) per locale. The Spanish page advertises both the generic
 * `es` and the explicit LATAM `es-419` so no Spanish speaker falls through to
 * the English x-default.
 */
export const HREFLANG: Record<Locale, string[]> = {
  en: ['en'],
  es: ['es', 'es-419'],
  'pt-br': ['pt-BR'],
  fr: ['fr'],
  it: ['it']
};

/** Resolve the active locale from a page URL (path-prefix based, deterministic). */
export function getLocaleFromUrl(url: URL): Locale {
  const segment = url.pathname.split('/')[1];
  return (LOCALES as readonly string[]).includes(segment)
    ? (segment as Locale)
    : DEFAULT_LOCALE;
}

/**
 * Strip the locale prefix from a path, yielding the "logical" path shared by all
 * locales (always starts with `/`). `/es/` → `/`, `/` → `/`.
 */
export function getBasePath(url: URL): string {
  const locale = getLocaleFromUrl(url);
  if (locale === DEFAULT_LOCALE) return url.pathname || '/';
  const stripped = url.pathname.slice(locale.length + 1);
  return stripped === '' ? '/' : stripped;
}

/** Build the path for a logical base path in a given locale (keeps trailing slash). */
export function localizedPath(locale: Locale, basePath = '/'): string {
  if (locale === DEFAULT_LOCALE) return basePath;
  return basePath === '/' ? `/${locale}/` : `/${locale}${basePath}`;
}

/**
 * Returns a typed accessor `t('section')` for the locale, falling back to the
 * English copy for any section the locale somehow lacks.
 */
export function useTranslations(locale: Locale) {
  const dict = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
  const fallback = dictionaries[DEFAULT_LOCALE];
  return function t<K extends keyof Dict>(section: K): Dict[K] {
    return dict[section] ?? fallback[section];
  };
}
