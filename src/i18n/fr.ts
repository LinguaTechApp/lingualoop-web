import type { Dict } from './types';

// Français de France (vouvoiement). Voix de marque : chaleureuse, directe,
// encourageante. On mène avec le wedge : conversation avec un tuteur IA +
// feedback concret. (Guillemets doubles pour éviter d'échapper les apostrophes.)
const fr: Dict = {
  seo: {
    title: "Fluo — Parlez anglais avec aisance | App d'anglais avec IA",
    description:
      "Fluo aide les francophones à apprendre l'anglais naturellement : entraînez-vous à parler avec des tuteurs IA, affûtez votre oreille avec de vraies vidéos et progressez grâce à des parcours structurés. À télécharger gratuitement sur iOS et Android.",
    schemaDescription:
      "App d'apprentissage de l'anglais avec IA, pensée pour les francophones. Entraînez-vous à parler avec des tuteurs IA, améliorez votre compréhension avec de vraies vidéos et maîtrisez la grammaire grâce à des parcours structurés."
  },

  nav: {
    features: "Fonctionnalités",
    howItWorks: "Comment ça marche",
    whyFluo: "Pourquoi Fluo",
    download: "Télécharger",
    navLabel: "Navigation principale",
    langLabel: "Langue",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    menuLabel: "Menu de navigation"
  },

  hero: {
    trustAria: "Noté 4,8 sur 5 sur l'App Store par plus de 2 000 apprenants",
    ratingScore: "4,8",
    trustLearners: "2 000+ apprenants",
    titleLine1: "L'anglais, en toute",
    titleAccent: "fluidité.",
    subtitle:
      "Entraînez-vous à parler avec des tuteurs IA, affûtez votre oreille avec de vraies vidéos et développez vos compétences avec des leçons structurées : conçu pour les francophones.",
    cardFeedback: { title: "Retour en temps réel", meta: "Fluidité de l'échange" },
    cardListening: { title: "Compréhension IA" },
    imageAlt: "L'app Fluo affichant une conversation en jeu de rôle avec un tuteur IA"
  },

  testimonials: {
    label: "Adoré des apprenants",
    titleLine1: "Vrais progrès,",
    titleAccent: "vraies histoires.",
    ratingAria: "Noté 4,8 sur 5 sur l'App Store",
    ratingScore: "4,8",
    ratingDetail: "sur 5 · 2 000+ avis sur l'App Store",
    cardStarsAria: "5 étoiles sur 5",
    items: [
      {
        quote:
          "Après 3 mois avec Fluo, j'anime des réunions en anglais sans paniquer. Le jeu de rôle avec l'IA a tout changé.",
        name: "Valentina R.",
        country: "Argentine",
        level: "B1 → B2"
      },
      {
        quote:
          "Le jeu de rôle d'entretien m'a préparé au poste de mes rêves dans une entreprise internationale. Je me sens enfin à l'aise à l'oral en anglais.",
        name: "Carlos M.",
        country: "Brésil",
        level: "A2 → B1"
      },
      {
        quote:
          "Ce que je préfère, c'est m'entraîner à toute heure, sans la pression d'un prof en direct. Des progrès réguliers, jour après jour.",
        name: "Ana L.",
        country: "Mexique",
        level: "B2 → C1"
      }
    ]
  },

  features: {
    label: "FONCTIONNALITÉS",
    title: "Trois façons de maîtriser l'anglais",
    subtitle:
      "Chaque module travaille une compétence différente. Ensemble, ils construisent une vraie aisance, pas juste des scores aux tests.",
    items: [
      {
        title: "Conversation",
        desc: "Entraînez-vous à de vraies conversations avec des tuteurs IA aux personnalités uniques. De la commande d'un café à l'entretien d'embauche réussi : des scénarios qui vous préparent à la vie réelle.",
        tags: ["Jeu de rôle IA", "Retour en temps réel", "Calibré sur le CECR"],
        alt: "Conversation dans Fluo : jeu de rôle avec un tuteur IA dans un scénario de réservation de train"
      },
      {
        title: "Compréhension orale",
        desc: "Affûtez votre oreille avec des dictées et des quiz basés sur de vraies vidéos en anglais. Écoutez des locuteurs natifs à vitesse naturelle et développez une compréhension qui se transpose vraiment.",
        tags: ["Vraies vidéos", "Dictée", "Quiz de compréhension"],
        alt: "Compréhension orale dans Fluo : quiz sur une vidéo à propos de la technologie 5G"
      },
      {
        title: "Parcours d'apprentissage",
        desc: "Des leçons structurées de grammaire et de vocabulaire qui vous mènent de débutant à avancé. Bloqué sur un point ? Demandez au Tuteur IA et obtenez une explication claire, instantanément.",
        tags: ["Programme structuré", "Chat avec le Tuteur IA", "A1 → C2"],
        alt: "Parcours d'apprentissage de Fluo : unités de niveau B1 intermédiaire avec des leçons sur les temps passés et présents"
      }
    ]
  },

  howItWorks: {
    label: "COMMENT ÇA MARCHE",
    title: "Simple. Efficace. Quotidien.",
    subtitle: "Installez une habitude qui tient en quelques minutes par jour.",
    steps: [
      {
        title: "Choisissez votre objectif",
        desc: "Choisissez Conversation, Compréhension orale ou Parcours d'apprentissage selon vos besoins du jour. Fluo s'adapte à votre niveau.",
        alt: "Écran d'accueil de Fluo avec les unités du Parcours d'apprentissage et des suggestions de pratique"
      },
      {
        title: "Entraînez-vous avec l'IA",
        desc: "Ayez de vraies conversations, exercez votre oreille ou avancez dans les leçons : le tout porté par une IA avancée qui comprend votre langue.",
        alt: "Conversation dans Fluo avec un tuteur IA dans un jeu de rôle de réservation de train"
      },
      {
        title: "Construisez votre série",
        desc: "Suivez vos progrès quotidiens et regardez votre confiance grandir. La régularité l'emporte sur l'intensité : chaque session compte.",
        alt: "Écran de profil de Fluo avec les statistiques de progression globale et la série quotidienne"
      }
    ]
  },

  whyFluo: {
    label: "POURQUOI FLUO",
    title: "Conçu pour votre façon d'apprendre",
    subtitle: "La plupart des applis enseignent l'anglais comme si tout le monde apprenait pareil. Fluo, c'est différent.",
    benefits: [
      {
        title: "Conçu pour les francophones",
        desc: "Nous comprenons les difficultés précises que vous rencontrez : faux amis, schémas de prononciation et lacunes grammaticales propres à votre langue."
      },
      {
        title: "Une IA qui semble humaine",
        desc: "Nos tuteurs IA ont leur propre personnalité et s'adaptent à votre niveau. Entraînez-vous quand vous voulez, sans la pression d'un prof en direct."
      },
      {
        title: "Parlez dès le premier jour",
        desc: "Fini les mois d'exercices de grammaire avant la première conversation. Avec Fluo, vous parlez tout de suite, dans des situations réelles."
      },
      {
        title: "Toutes les compétences, une seule appli",
        desc: "Expression orale, compréhension, grammaire et vocabulaire au même endroit. Plus besoin de jongler entre plusieurs applis ou abonnements."
      }
    ],
    imageAlt: "Le Tuteur IA de Fluo qui explique vos erreurs de grammaire avec des exemples clairs"
  },

  faq: {
    label: "FAQ",
    title: "Questions fréquentes",
    subtitle: "Tout ce qu'il faut savoir avant de commencer.",
    items: [
      {
        q: "Fluo est-il gratuit ?",
        a: "Oui. Il existe une offre gratuite avec une pratique quotidienne qui n'expire jamais. Les nouveaux venus reçoivent de la pratique en plus pendant leur première semaine. Le Premium (6,99 $US/mois ou 39,99 $US/an) débloque la pratique illimitée et tous les scénarios."
      },
      {
        q: "Quel niveau d'anglais faut-il pour commencer ?",
        a: "N'importe lequel. Passez un test de niveau de 2 minutes à l'inscription ou choisissez votre niveau à la main : Fluo va de l'A1 (débutant) au C2 (maîtrise)."
      },
      {
        q: "Faut-il une connexion internet pour utiliser Fluo ?",
        a: "Oui. Les conversations avec l'IA en temps réel et les exercices de dictée nécessitent une connexion internet."
      },
      {
        q: "L'application est-elle disponible sur Android ?",
        a: "Oui. Fluo est disponible sur iOS et Android. Téléchargez-la gratuitement sur l'App Store ou Google Play."
      },
      {
        q: "Puis-je résilier à tout moment ?",
        a: "Oui. Résiliez directement dans les réglages d'abonnement de votre App Store ; votre accès se poursuit jusqu'à la fin de la période de facturation en cours."
      }
    ]
  },

  cta: {
    title: "Prêt à parler avec assurance ?",
    subtitle: "Téléchargez Fluo gratuitement et lancez votre première conversation aujourd'hui.",
    socialProof: "Rejoignez plus de 2 000 apprenants qui parlent anglais chaque jour."
  },

  footer: {
    tagline: "L'anglais en toute fluidité. Créé par LinguaTech pour les francophones.",
    productTitle: "Produit",
    companyTitle: "Entreprise",
    support: "Assistance",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    rights: "© 2026 LinguaTech. Tous droits réservés.",
    craft: "Conçu à Buenos Aires · Fait avec soin"
  },

  storeBadges: {
    appStoreLabel: "Télécharger dans l'",
    googlePlayLabel: "TÉLÉCHARGER SUR"
  }
};

export default fr;
