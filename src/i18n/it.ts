import type { Dict } from './types';

// Italiano standard (registro informale "tu", convenzione delle app moderne).
// Voce del brand: calda, diretta, incoraggiante. Si guida con il wedge:
// conversazione con un tutor IA + feedback concreto. (Virgolette doppie per le apostrofi.)
const it: Dict = {
  seo: {
    title: "Fluo — Parla inglese con naturalezza | App di inglese con IA",
    description:
      "Fluo aiuta chi parla italiano a imparare l'inglese in modo naturale: allenati a parlare con tutor IA, affina l'orecchio con video veri e fai progressi con percorsi strutturati. Scaricala gratis su iOS e Android.",
    schemaDescription:
      "App per imparare l'inglese con IA, pensata per chi parla italiano. Allenati a parlare con tutor IA, migliora la comprensione con video veri e padroneggia la grammatica con percorsi strutturati."
  },

  nav: {
    features: "Funzioni",
    howItWorks: "Come funziona",
    whyFluo: "Perché Fluo",
    download: "Scarica",
    navLabel: "Navigazione principale",
    langLabel: "Lingua",
    menuOpen: "Apri il menu",
    menuClose: "Chiudi il menu",
    menuLabel: "Menu di navigazione"
  },

  hero: {
    trustAria: "Valutata 4,8 su 5 sull'App Store da oltre 2.000 studenti",
    ratingScore: "4,8",
    trustLearners: "+2.000 studenti",
    titleLine1: "L'inglese che",
    titleAccent: "fluisce.",
    subtitle:
      "Allenati a parlare con tutor IA, affina l'orecchio con video veri e sviluppa le tue competenze con lezioni strutturate: pensato per chi parla italiano.",
    cardFeedback: { title: "Feedback immediato", meta: "Fluidità nella conversazione" },
    cardListening: { title: "Ascolto con IA" },
    imageAlt: "L'app Fluo che mostra una conversazione in role-play con un tutor IA"
  },

  testimonials: {
    label: "Amata dagli studenti",
    titleLine1: "Progressi veri,",
    titleAccent: "storie vere.",
    ratingAria: "Valutata 4,8 su 5 sull'App Store",
    ratingScore: "4,8",
    ratingDetail: "su 5 · oltre 2.000 recensioni sull'App Store",
    cardStarsAria: "5 stelle su 5",
    items: [
      {
        quote:
          "Dopo 3 mesi con Fluo, conduco riunioni in inglese senza andare nel panico. Il role-play con l'IA ha fatto la differenza.",
        name: "Valentina R.",
        country: "Argentina",
        level: "B1 → B2"
      },
      {
        quote:
          "Il role-play dei colloqui mi ha preparato al lavoro dei miei sogni in un'azienda globale. Finalmente mi sento sicuro a parlare inglese.",
        name: "Carlos M.",
        country: "Brasile",
        level: "A2 → B1"
      },
      {
        quote:
          "Quello che amo di più è allenarmi a qualsiasi ora, senza la pressione di un insegnante dal vivo. Progressi costanti, giorno dopo giorno.",
        name: "Ana L.",
        country: "Messico",
        level: "B2 → C1"
      }
    ]
  },

  features: {
    label: "FUNZIONI",
    title: "Tre modi per padroneggiare l'inglese",
    subtitle:
      "Ogni modulo allena un'abilità diversa. Insieme costruiscono una vera scioltezza, non solo punteggi nei test.",
    items: [
      {
        title: "Conversazione",
        desc: "Allenati con conversazioni vere con tutor IA dalle personalità uniche. Dal chiedere un caffè al brillare a un colloquio di lavoro: scenari che ti preparano alla vita reale.",
        tags: ["Role-play con IA", "Feedback in tempo reale", "Calibrato sul QCER"],
        alt: "Conversazione in Fluo: role-play con un tutor IA in uno scenario di prenotazione del treno"
      },
      {
        title: "Ascolto",
        desc: "Affina l'orecchio con dettati e quiz costruiti su video veri in inglese. Ascolta madrelingua a velocità naturale e sviluppa una comprensione che si trasferisce davvero.",
        tags: ["Video veri", "Dettato", "Quiz di comprensione"],
        alt: "Ascolto in Fluo: quiz su un video sulla tecnologia 5G"
      },
      {
        title: "Percorso di studio",
        desc: "Lezioni strutturate di grammatica e vocabolario che ti portano da principiante ad avanzato. Bloccato su qualcosa? Chiedi al Tutor IA e ricevi una spiegazione chiara all'istante.",
        tags: ["Programma strutturato", "Chat con il Tutor IA", "A1 → C2"],
        alt: "Percorso di studio di Fluo: unità di livello B1 intermedio con lezioni sui tempi passati e presenti"
      }
    ]
  },

  howItWorks: {
    label: "COME FUNZIONA",
    title: "Semplice. Efficace. Quotidiano.",
    subtitle: "Crea un'abitudine che dura con pochi minuti al giorno.",
    steps: [
      {
        title: "Scegli il tuo obiettivo",
        desc: "Scegli Conversazione, Ascolto o Percorso di studio in base a ciò che ti serve oggi. Fluo si adatta al tuo livello.",
        alt: "Schermata iniziale di Fluo con le unità del Percorso di studio e le opzioni di pratica consigliata"
      },
      {
        title: "Allenati con l'IA",
        desc: "Fai conversazioni vere, allena l'orecchio o avanza nelle lezioni: tutto grazie a un'IA avanzata che capisce la tua lingua.",
        alt: "Conversazione in Fluo con un tutor IA in un role-play di prenotazione del treno"
      },
      {
        title: "Costruisci la tua serie",
        desc: "Tieni traccia dei tuoi progressi quotidiani e guarda crescere la tua sicurezza. La costanza batte l'intensità: ogni sessione conta.",
        alt: "Schermata del profilo di Fluo con le statistiche dei progressi totali e la serie di giorni"
      }
    ]
  },

  whyFluo: {
    label: "PERCHÉ FLUO",
    title: "Fatto per come impari davvero",
    subtitle: "La maggior parte delle app insegna l'inglese come se tutti imparassero allo stesso modo. Fluo è diverso.",
    benefits: [
      {
        title: "Pensato per chi parla italiano",
        desc: "Capiamo le difficoltà precise che incontri: falsi amici, schemi di pronuncia e lacune grammaticali tipiche della tua lingua."
      },
      {
        title: "Un'IA che sembra umana",
        desc: "I nostri tutor IA hanno personalità proprie e si adattano al tuo livello. Allenati quando vuoi, senza la pressione di un insegnante dal vivo."
      },
      {
        title: "Parla fin dal primo giorno",
        desc: "Niente mesi di esercizi di grammatica prima della prima conversazione. Con Fluo inizi a parlare subito, in scenari di vita reale."
      },
      {
        title: "Tutte le competenze, un'unica app",
        desc: "Conversazione, ascolto, grammatica e vocabolario in un solo posto. Senza destreggiarti tra più app o abbonamenti."
      }
    ],
    imageAlt: "Il Tutor IA di Fluo che spiega i tuoi errori di grammatica con esempi chiari"
  },

  faq: {
    label: "FAQ",
    title: "Domande frequenti",
    subtitle: "Tutto quello che ti serve sapere prima di iniziare.",
    items: [
      {
        q: "Fluo è gratis?",
        a: "Sì. C'è un piano gratuito con pratica quotidiana che non scade mai. Chi è alle prime armi riceve pratica extra durante la prima settimana. Il Premium (US$ 6,99/mese o US$ 39,99/anno) sblocca pratica illimitata e tutti gli scenari."
      },
      {
        q: "Che livello di inglese serve per iniziare?",
        a: "Qualsiasi livello. Fai un test di livello di 2 minuti all'iscrizione o scegli il livello a mano: Fluo va dall'A1 (principiante) al C2 (avanzato)."
      },
      {
        q: "Serve internet per usare Fluo?",
        a: "Sì. Le conversazioni con l'IA in tempo reale e gli esercizi di dettato richiedono una connessione a internet."
      },
      {
        q: "L'app è disponibile su Android?",
        a: "Sì. Fluo è disponibile su iOS e Android. Scaricala gratis su App Store o Google Play."
      },
      {
        q: "Posso disdire quando voglio?",
        a: "Sì. Disdici direttamente dalle impostazioni dell'abbonamento del tuo App Store; il tuo accesso continua fino alla fine del periodo di fatturazione in corso."
      }
    ]
  },

  cta: {
    title: "Pronto a parlare con sicurezza?",
    subtitle: "Scarica Fluo gratis e inizia la tua prima conversazione oggi.",
    socialProof: "Unisciti a oltre 2.000 studenti che parlano inglese ogni giorno."
  },

  footer: {
    tagline: "L'inglese che fluisce. Creato da LinguaTech per chi parla italiano.",
    productTitle: "Prodotto",
    companyTitle: "Azienda",
    support: "Assistenza",
    privacy: "Informativa sulla privacy",
    terms: "Termini di utilizzo",
    rights: "© 2026 LinguaTech. Tutti i diritti riservati.",
    craft: "Progettato a Buenos Aires · Fatto con cura"
  },

  storeBadges: {
    appStoreLabel: "Scarica su",
    googlePlayLabel: "DISPONIBILE SU"
  }
};

export default it;
