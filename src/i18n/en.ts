import type { Dict } from './types';

// English (default locale, served at /). Approved copy:
// lingualoop-marketing/docs/retention/r43-textos.md — do not rewrite here.
const en: Dict = {
  seo: {
    title: 'Fluo — Speak English without fear | AI tutor with feedback',
    description:
      'Practice real English conversations with an AI tutor and get clear feedback on every answer, explained in Spanish or Portuguese. A1 to C2. Free to start on Android and iOS.'
  },

  nav: {
    howItWorks: 'How it works',
    lessons: 'Lessons',
    faq: 'FAQ',
    download: 'Download',
    navLabel: 'Main navigation',
    langLabel: 'Language',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    menuLabel: 'Navigation menu'
  },

  hero: {
    titleLead: 'Speak English',
    titleAccent: 'without fear.',
    subtitle:
      'Practice real conversations with your AI tutor and get clear feedback on every answer, explained in your language.',
    tutorBubble: 'What did you do last weekend?',
    learnerBefore: 'I',
    learnerWrong: 'go',
    learnerRight: 'went',
    learnerAfter: 'to the beach with my friends.',
    correctionNote: 'Past of “go”: “went”',
    trust: ['Free to start', 'A1 to C2', 'Android and iOS'],
    imageAlt: 'Emma, Fluo’s AI tutor'
  },

  conversation: {
    label: 'HOW IT WORKS',
    title: 'What a conversation looks like',
    subtitle:
      'Real-life scenes at your level. You speak, your tutor replies and shows you what to improve.',
    steps: [
      {
        lead: 'Pick a scene.',
        text: 'Order at a restaurant, introduce yourself at a job interview or talk about your day. Each scene has clear tasks to complete.',
        alt: 'A conversation in Fluo: a restaurant scene with the tutor and its tasks'
      },
      {
        lead: 'Speak or type, your choice.',
        text: 'Answer with your voice or the keyboard. If you get stuck, your tutor suggests what to say and helps in your language.',
        alt: 'Fluo: choosing how to answer, tap to talk, hands-free or type'
      },
      {
        lead: 'See what to improve.',
        text: 'On every answer you see what you said, how to say it better and why, explained in your language.',
        alt: ''
      }
    ],
    closingNote: 'At the end, a summary of what you did well and one thing to practice next time.'
  },

  lessons: {
    label: 'LESSONS',
    title: 'Lessons that get you speaking',
    text: 'Each lesson explains things in your language, with examples and illustrations, has you repeat out loud and ends with speaking practice.',
    tags: ['A1 to C2', 'Explanations in your language', 'Repeat out loud', 'Speaking practice at the end'],
    alts: [
      'A Fluo lesson: Emma explains a phrase with an illustrated card',
      'A completed Fluo lesson with the new phrases learned'
    ]
  },

  plan: {
    label: 'YOUR PLAN',
    title: 'A plan that fits you',
    text: 'Tell us your level, your goal and how much time you have. Fluo builds your practice for each day.',
    plusLead: 'Plus:',
    plusText: 'listen to real videos and talk about anything you like.',
    alts: [
      'A Fluo plan with level, focus, daily goal and practice time',
      'Fluo home: your practice for today'
    ]
  },

  compare: {
    title: 'Fluo or a private class',
    otherHeader: 'Class',
    rows: [
      { label: 'When you practice', fluo: 'any time', other: 'at the time you book' },
      { label: 'In front of whom', fluo: 'no audience', other: 'in front of another person' },
      { label: 'Feedback', fluo: 'on every answer', other: 'depends on the teacher' },
      { label: 'Explanations', fluo: 'in your language', other: 'depends on the teacher' },
      {
        label: 'Price',
        fluo: 'free to start; Premium US$39.99 a year',
        other: 'you pay per class'
      }
    ]
  },

  faq: {
    title: 'FAQ',
    items: [
      {
        q: 'Is Fluo free?',
        a: 'Yes. You can start for free and practice every day, with a daily limit; your first week includes extra practice. Premium (US$6.99 a month or US$39.99 a year; prices may vary by country) unlocks unlimited practice, every scene and free conversation.'
      },
      {
        q: 'What level do I need?',
        a: "None in particular. Fluo goes from A1 (beginner) to C2. You pick your level when you start, and if you're not sure, we help you find it."
      },
      {
        q: "Does it help if I'm shy about speaking?",
        a: "That's what it's for. You practice with an AI tutor, with no audience and no rush. If you get stuck, it suggests what to say and helps in your language."
      },
      {
        q: 'How is it different from ChatGPT or Duolingo?',
        a: "Duolingo teaches with short exercises; Fluo gets you talking from day one. ChatGPT can chat, but it isn't built to teach you: Fluo has scenes with tasks, a plan for your level and feedback on every answer, explained in your language."
      },
      {
        q: 'Does it help with pronunciation?',
        a: 'Yes. Besides grammar, you can hear how each phrase is said and practice your pronunciation.'
      },
      {
        q: 'Can I type instead of speaking?',
        a: 'Yes. You can answer by speaking or typing, whichever feels better.'
      },
      {
        q: 'Which phones does it work on?',
        a: 'Android and iPhone. Download it free on Google Play or the App Store. You need an internet connection.'
      },
      {
        q: 'Can I cancel anytime?',
        a: "Yes. Cancel from your store's subscriptions: Google Play on Android or the App Store on iPhone. You keep access until the end of the period you paid for."
      }
    ]
  },

  cta: {
    title: 'Your first conversation, today.',
    subtitle: 'Download Fluo for free and speak English without fear from day one.'
  },

  footer: {
    tagline: 'English that flows. Made by LinguaTech in Buenos Aires.',
    productTitle: 'Product',
    companyTitle: 'Company',
    support: 'Support',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    rights: '© 2026 LinguaTech. All rights reserved.',
    followUs: 'Follow Fluo'
  },

  storeBadges: {
    appStoreLabel: 'Download on the',
    googlePlayLabel: 'GET IT ON'
  }
};

export default en;
