/**
 * Canonical shape for every locale dictionary.
 *
 * Each `src/i18n/{locale}.ts` file is annotated `const dict: Dict = { … }`, so a
 * missing or mistyped key surfaces in the editor and in `astro check`. Only
 * user-facing *text* lives here — structural data (icons, image paths, store
 * URLs) stays in the components and is zipped against these strings by index.
 *
 * Visible copy comes verbatim from lingualoop-marketing/docs/retention/r43-textos.md.
 * Where a string is split (e.g. `titleLead` + `titleAccent`, `lead` + `text`), the
 * parts joined with a space are the approved text.
 */

export interface SeoCopy {
  /** <title> */
  title: string;
  /** <meta name="description"> + og/twitter description + JSON-LD description */
  description: string;
}

export interface NavCopy {
  howItWorks: string;
  lessons: string;
  faq: string;
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

export interface HeroCopy {
  /** H1 = `${titleLead} ${titleAccent}`; the accent gets the brand gradient. */
  titleLead: string;
  titleAccent: string;
  subtitle: string;
  /** Tutor bubble (English in every locale). */
  tutorBubble: string;
  /** Learner bubble: `${before} ~~wrong~~ **right** ${after}` (English in every locale). */
  learnerBefore: string;
  learnerWrong: string;
  learnerRight: string;
  learnerAfter: string;
  /** Correction note, without the leading ✓ (rendered as an icon). */
  correctionNote: string;
  /** Trust line items, shown joined by « · ». */
  trust: [string, string, string];
  /** alt of Emma's portrait (not in r43-textos; written for accessibility). */
  imageAlt: string;
}

export interface StepItem {
  /** Bold lead sentence. */
  lead: string;
  text: string;
  /** alt of the step screen (not in r43-textos; written for accessibility). */
  alt: string;
}

export interface ConversationCopy {
  label: string;
  title: string;
  subtitle: string;
  steps: [StepItem, StepItem, StepItem];
  closingNote: string;
}

export interface LessonsCopy {
  label: string;
  title: string;
  text: string;
  tags: [string, string, string, string];
  /** alts of the two screens (not in r43-textos). */
  alts: [string, string];
}

export interface PlanCopy {
  label: string;
  title: string;
  text: string;
  /** «Y además:» — the line is `${plusLead} ${plusText}`. */
  plusLead: string;
  plusText: string;
  /** alts of the two screens (not in r43-textos). */
  alts: [string, string];
}

export interface CompareRow {
  label: string;
  fluo: string;
  other: string;
}

export interface CompareCopy {
  title: string;
  /** Column header for the private class (the «Clase:» key of every row). */
  otherHeader: string;
  rows: [CompareRow, CompareRow, CompareRow, CompareRow, CompareRow];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCopy {
  title: string;
  items: FaqItem[];
}

export interface CtaCopy {
  title: string;
  subtitle: string;
}

export interface FooterCopy {
  tagline: string;
  productTitle: string;
  companyTitle: string;
  support: string;
  privacy: string;
  terms: string;
  rights: string;
  followUs: string;
}

export interface StoreBadgesCopy {
  appStoreLabel: string;
  googlePlayLabel: string;
}

export interface Dict {
  seo: SeoCopy;
  nav: NavCopy;
  hero: HeroCopy;
  conversation: ConversationCopy;
  lessons: LessonsCopy;
  plan: PlanCopy;
  compare: CompareCopy;
  faq: FaqCopy;
  cta: CtaCopy;
  footer: FooterCopy;
  storeBadges: StoreBadgesCopy;
}
