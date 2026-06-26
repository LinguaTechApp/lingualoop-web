import type { Dict } from './types';

const en: Dict = {
  seo: {
    title: 'Fluo — Speak English Naturally | AI-Powered English Learning App',
    description:
      'Fluo helps Spanish and Portuguese speakers learn English naturally through AI-powered speaking practice, real-video listening, and structured learning paths. Download free on iOS and Android.',
    schemaDescription:
      'AI-powered English learning app for Spanish and Portuguese speakers. Practice speaking with AI tutors, improve listening with real videos, and master grammar through structured paths.'
  },

  nav: {
    features: 'Features',
    howItWorks: 'How It Works',
    whyFluo: 'Why Fluo',
    download: 'Download',
    navLabel: 'Main navigation',
    langLabel: 'Language',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    menuLabel: 'Navigation menu'
  },

  hero: {
    trustAria: 'Rated 4.8 out of 5 on the App Store by over 2,000 learners',
    ratingScore: '4.8',
    trustLearners: '2,000+ learners',
    titleLine1: 'English that',
    titleAccent: 'flows.',
    subtitle:
      'Practice speaking with AI tutors, sharpen your ear with real videos, and build skills through structured lessons — designed for Spanish and Portuguese speakers.',
    cardFeedback: { title: 'Real-time feedback', meta: 'Conversation flow' },
    cardListening: { title: 'AI listening' },
    imageAlt: 'Fluo app showing a Speaking roleplay conversation with an AI tutor'
  },

  testimonials: {
    label: 'Loved by learners',
    titleLine1: 'Real progress,',
    titleAccent: 'real stories.',
    ratingAria: 'Rated 4.8 out of 5 on the App Store',
    ratingScore: '4.8',
    ratingDetail: 'out of 5 · 2,000+ App Store reviews',
    cardStarsAria: '5 out of 5 stars',
    items: [
      {
        quote:
          'After 3 months with Fluo, I can lead meetings in English without panicking. The AI roleplay made the difference.',
        name: 'Valentina R.',
        country: 'Argentina',
        level: 'B1 → B2'
      },
      {
        quote:
          'The interview roleplay prepared me for my dream job at a global company. I finally feel confident speaking English.',
        name: 'Carlos M.',
        country: 'Brazil',
        level: 'A2 → B1'
      },
      {
        quote:
          'What I love most is practicing anytime without the pressure of a live teacher. Consistent daily progress.',
        name: 'Ana L.',
        country: 'Mexico',
        level: 'B2 → C1'
      }
    ]
  },

  features: {
    label: 'FEATURES',
    title: 'Three ways to master English',
    subtitle:
      'Each module targets a different skill. Together, they build real fluency — not just test scores.',
    items: [
      {
        title: 'Speaking',
        desc: 'Practice real conversations with AI tutors that have unique personalities. From ordering coffee to acing job interviews — scenarios that prepare you for real life.',
        tags: ['AI Role-play', 'Real-time Feedback', 'CEFR Calibrated'],
        alt: 'Fluo Speaking conversation: roleplay with an AI tutor in a train booking scenario'
      },
      {
        title: 'Listening',
        desc: 'Sharpen your ear with dictation and quizzes built on real English videos. Hear native speakers at natural speed and build comprehension that actually transfers.',
        tags: ['Real Videos', 'Dictation', 'Comprehension Quizzes'],
        alt: 'Fluo Listening: comprehension quiz on a video about 5G technology'
      },
      {
        title: 'Learning Path',
        desc: 'Structured grammar and vocabulary lessons that take you from beginner to advanced. Stuck on something? Ask the AI Tutor and get an instant, clear explanation.',
        tags: ['Structured Curriculum', 'AI Tutor Chat', 'A1 → C2'],
        alt: 'Fluo Learning Path: B1 Intermediate units with lessons on Past & Present Bridges'
      }
    ]
  },

  howItWorks: {
    label: 'HOW IT WORKS',
    title: 'Simple. Effective. Daily.',
    subtitle: 'Build a habit that sticks in just a few minutes a day.',
    steps: [
      {
        title: 'Choose your focus',
        desc: 'Pick Speaking, Listening, or Learning Path based on what you need today. Fluo adapts to your level.',
        alt: 'Fluo home screen showing Learning Path units and Recommended Practice options'
      },
      {
        title: 'Practice with AI',
        desc: 'Have real conversations, train your ear, or work through lessons — all powered by advanced AI that understands your native language.',
        alt: 'Fluo Speaking conversation with an AI tutor in a train booking roleplay'
      },
      {
        title: 'Build your streak',
        desc: 'Track your daily progress and watch your confidence grow. Consistency beats intensity — every session counts.',
        alt: 'Fluo profile screen showing Lifetime Progress stats and daily streak'
      }
    ]
  },

  whyFluo: {
    label: 'WHY FLUO',
    title: 'Built for the way you actually learn',
    subtitle: 'Most apps teach English as if every learner is the same. Fluo is different.',
    benefits: [
      {
        title: 'Made for Spanish & Portuguese speakers',
        desc: 'We understand the specific challenges you face — false cognates, pronunciation patterns, and grammar gaps unique to your native language.'
      },
      {
        title: 'AI that feels human',
        desc: 'Our AI tutors have distinct personalities and adapt to your level. Practice anytime without the pressure of a live teacher.'
      },
      {
        title: 'Speak from day one',
        desc: 'No months of grammar drills before your first conversation. Fluo gets you speaking immediately in real-world scenarios.'
      },
      {
        title: 'All skills, one app',
        desc: 'Speaking, listening, grammar, and vocabulary in one place. No need to juggle multiple apps or subscriptions.'
      }
    ],
    imageAlt: 'Fluo AI Tutor explaining your grammar mistakes with clear examples'
  },

  faq: {
    label: 'FAQ',
    title: 'Frequently asked questions',
    subtitle: 'Everything you need to know before getting started.',
    items: [
      {
        q: 'Is Fluo free to use?',
        a: "Yes — there's a free tier with daily practice that never expires. New users get extra practice during their first week. Premium ($6.99/month or $39.99/year) unlocks unlimited practice and all scenarios."
      },
      {
        q: 'What level of English do I need to start?',
        a: 'Any level. Take a 2-minute placement test on signup or pick a level manually — Fluo supports A1 (Beginner) through C2 (Proficient).'
      },
      {
        q: 'Do I need internet to use Fluo?',
        a: 'Yes. Real-time AI conversations and dictation exercises require an internet connection.'
      },
      {
        q: 'Is the app available on Android?',
        a: 'Yes — Fluo is available on both iOS and Android. Download it free from the App Store or Google Play.'
      },
      {
        q: 'Can I cancel anytime?',
        a: "Yes. Cancel from your store's subscription settings — the App Store on iOS or Google Play on Android. Your access continues until the end of the current billing period."
      }
    ]
  },

  cta: {
    title: 'Ready to speak with confidence?',
    subtitle: 'Download Fluo free and start your first conversation today.',
    socialProof: 'Join 2,000+ learners speaking English daily.'
  },

  footer: {
    tagline: 'English that flows. Made by LinguaTech for Spanish & Portuguese speakers.',
    productTitle: 'Product',
    companyTitle: 'Company',
    support: 'Support',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    rights: '© 2026 LinguaTech. All rights reserved.',
    craft: 'Designed in Buenos Aires · Built with care'
  },

  storeBadges: {
    appStoreLabel: 'Download on the',
    googlePlayLabel: 'GET IT ON'
  }
};

export default en;
