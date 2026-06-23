/**
 * Canonical shape for every locale dictionary.
 *
 * Each `src/i18n/{locale}.ts` file is annotated `const dict: Dict = { … }`, so a
 * missing or mistyped key surfaces in the editor and in `astro check`. Only
 * user-facing *text* lives here — structural data (icons, colors, image paths,
 * gradients, store URLs) stays in the components and is zipped against these
 * strings by index.
 */

export interface SeoCopy {
  /** <title> */
  title: string;
  /** <meta name="description"> + og/twitter description */
  description: string;
  /** JSON-LD SoftwareApplication.description */
  schemaDescription: string;
}

export interface NavCopy {
  features: string;
  howItWorks: string;
  whyFluo: string;
  download: string;
  /** aria-label for <nav> */
  navLabel: string;
  /** aria-label for the language switcher */
  langLabel: string;
  /** aria-label, hamburger open */
  menuOpen: string;
  /** aria-label, mobile menu close */
  menuClose: string;
  /** aria-label for the mobile menu dialog */
  menuLabel: string;
}

export interface HeroCard {
  title: string;
  meta?: string;
}

export interface HeroCopy {
  trustAria: string;
  /** Average rating, e.g. "4.8" / "4,8" — decimal separator is locale-specific. */
  ratingScore: string;
  trustLearners: string;
  titleLine1: string;
  titleAccent: string;
  subtitle: string;
  cardFeedback: HeroCard;
  cardListening: HeroCard;
  imageAlt: string;
}

export interface TestimonialItem {
  quote: string;
  /** Person name — not translated, but country is. */
  name: string;
  country: string;
  level: string;
}

export interface TestimonialsCopy {
  label: string;
  titleLine1: string;
  titleAccent: string;
  ratingAria: string;
  /** Average rating, e.g. "4.8" / "4,8" — decimal separator is locale-specific. */
  ratingScore: string;
  ratingDetail: string;
  cardStarsAria: string;
  items: [TestimonialItem, TestimonialItem, TestimonialItem];
}

export interface FeatureItem {
  title: string;
  desc: string;
  tags: [string, string, string];
  alt: string;
}

export interface FeaturesCopy {
  label: string;
  title: string;
  subtitle: string;
  items: [FeatureItem, FeatureItem, FeatureItem];
}

export interface StepItem {
  title: string;
  desc: string;
  alt: string;
}

export interface HowItWorksCopy {
  label: string;
  title: string;
  subtitle: string;
  steps: [StepItem, StepItem, StepItem];
}

export interface BenefitItem {
  title: string;
  desc: string;
}

export interface WhyFluoCopy {
  label: string;
  title: string;
  subtitle: string;
  benefits: [BenefitItem, BenefitItem, BenefitItem, BenefitItem];
  imageAlt: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCopy {
  label: string;
  title: string;
  subtitle: string;
  items: FaqItem[];
}

export interface CtaCopy {
  title: string;
  subtitle: string;
  socialProof: string;
}

export interface FooterCopy {
  tagline: string;
  productTitle: string;
  companyTitle: string;
  support: string;
  privacy: string;
  terms: string;
  rights: string;
  craft: string;
}

export interface StoreBadgesCopy {
  appStoreLabel: string;
  androidNote: string;
  googlePlayLabel: string;
  googlePlayComingSoon: string;
  googlePlayDisabledTitle: string;
}

export interface Dict {
  seo: SeoCopy;
  nav: NavCopy;
  hero: HeroCopy;
  testimonials: TestimonialsCopy;
  features: FeaturesCopy;
  howItWorks: HowItWorksCopy;
  whyFluo: WhyFluoCopy;
  faq: FaqCopy;
  cta: CtaCopy;
  footer: FooterCopy;
  storeBadges: StoreBadgesCopy;
}
