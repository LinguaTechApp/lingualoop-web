import type { Dict } from './types';

// Español latinoamericano neutro (tuteo, nunca voseo). Copy aprobado:
// lingualoop-marketing/docs/retention/r43-textos.md — no reescribir acá.
const es: Dict = {
  seo: {
    title: 'Fluo — Habla inglés sin vergüenza | Tutora de IA con feedback',
    description:
      'Practica conversaciones reales en inglés con una tutora de IA y recibe feedback concreto en cada respuesta, explicado en español. Del A1 al C2. Gratis para empezar en Android y iOS.'
  },

  nav: {
    howItWorks: 'Cómo funciona',
    lessons: 'Lecciones',
    faq: 'Preguntas',
    download: 'Descargar',
    navLabel: 'Navegación principal',
    langLabel: 'Idioma',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    menuLabel: 'Menú de navegación'
  },

  hero: {
    titleLead: 'Habla inglés',
    titleAccent: 'sin vergüenza.',
    subtitle:
      'Practica conversaciones reales con tu tutora de IA y recibe feedback concreto en cada respuesta, explicado en español.',
    tutorBubble: 'What did you do last weekend?',
    learnerBefore: 'I',
    learnerWrong: 'go',
    learnerRight: 'went',
    learnerAfter: 'to the beach with my friends.',
    correctionNote: 'Pasado de «go»: «went»',
    trust: ['Gratis para empezar', 'Del A1 al C2', 'Android y iOS'],
    imageAlt: 'Emma, tutora de IA de Fluo'
  },

  conversation: {
    label: 'CÓMO FUNCIONA',
    title: 'Así es una conversación',
    subtitle:
      'Escenas de la vida real, a tu nivel. Hablas, la tutora te responde y te dice qué mejorar.',
    steps: [
      {
        lead: 'Elige una escena.',
        text: 'Pide en un restaurante, preséntate en una entrevista o cuenta cómo fue tu día. Cada escena tiene tareas claras para cumplir.',
        alt: 'Conversación en Fluo: una escena en un restaurante, con el tutor y las tareas'
      },
      {
        lead: 'Habla o escribe, como prefieras.',
        text: 'Responde con tu voz o con el teclado. Si te trabas, la tutora te da ideas de qué decir y te ayuda en español.',
        alt: 'Fluo: elegir cómo responder, tocar para hablar, manos libres o escribir'
      },
      {
        lead: 'Mira qué mejorar.',
        text: 'En cada respuesta ves lo que dijiste, cómo decirlo mejor y por qué, explicado en tu idioma.',
        alt: ''
      }
    ],
    closingNote:
      'Al terminar, un resumen con lo que hiciste bien y una cosa para practicar la próxima vez.'
  },

  lessons: {
    label: 'LECCIONES',
    title: 'Lecciones que te hacen hablar',
    text: 'Cada lección te explica en español, con ejemplos e ilustraciones, te hace repetir en voz alta y cierra con práctica hablada.',
    tags: ['Del A1 al C2', 'Explicaciones en tu idioma', 'Repite en voz alta', 'Práctica hablada al final'],
    alts: [
      'Lección de Fluo: Emma explica una frase en español, con una tarjeta ilustrada',
      'Lección completa en Fluo, con las frases nuevas aprendidas'
    ]
  },

  plan: {
    label: 'TU PLAN',
    title: 'Un plan a tu medida',
    text: 'Cuéntanos tu nivel, tu objetivo y cuánto tiempo tienes. Fluo arma tu práctica de cada día.',
    plusLead: 'Y además:',
    plusText: 'escucha videos reales y conversa de lo que quieras.',
    alts: [
      'Plan de Fluo con nivel, enfoque, meta diaria y horario de práctica',
      'Inicio de Fluo: tu práctica de hoy'
    ]
  },

  compare: {
    title: 'Fluo o una clase particular',
    otherHeader: 'Clase',
    rows: [
      { label: 'Cuándo practicas', fluo: 'a cualquier hora', other: 'en el horario que acuerdes' },
      { label: 'Frente a quién', fluo: 'practicas sin público', other: 'frente a otra persona' },
      { label: 'Feedback', fluo: 'en cada respuesta', other: 'depende del profesor' },
      { label: 'Explicaciones', fluo: 'en español', other: 'depende del profesor' },
      {
        label: 'Precio',
        fluo: 'gratis para empezar; Premium US$39.99 al año',
        other: 'se paga cada clase'
      }
    ]
  },

  faq: {
    title: 'Preguntas',
    items: [
      {
        q: '¿Fluo es gratis?',
        a: 'Sí. Puedes empezar gratis y practicar todos los días, con un límite diario; la primera semana tienes práctica extra. Premium (US$6.99 al mes o US$39.99 al año; el precio puede variar según tu país) desbloquea la práctica ilimitada, todas las escenas y la conversación libre.'
      },
      {
        q: '¿Qué nivel necesito?',
        a: 'Ninguno en especial. Fluo va del A1 (principiante) al C2. Al empezar eliges tu nivel, y si no lo sabes, te ayudamos a descubrirlo.'
      },
      {
        q: '¿Sirve si me da vergüenza hablar?',
        a: 'Para eso está. Practicas con una tutora de IA, sin público y sin apuro. Si te trabas, te da ideas de qué decir y te ayuda en español.'
      },
      {
        q: '¿En qué se diferencia de ChatGPT o Duolingo?',
        a: 'Duolingo enseña con ejercicios cortos; Fluo te pone a conversar desde el primer día. ChatGPT conversa, pero no está hecho para enseñarte: Fluo tiene escenas con tareas, un plan por nivel y feedback de cada respuesta explicado en español.'
      },
      {
        q: '¿Me ayuda con la pronunciación?',
        a: 'Sí. Además de la gramática, puedes escuchar cómo se dice cada frase y practicar la pronunciación.'
      },
      {
        q: '¿Puedo escribir en vez de hablar?',
        a: 'Sí. Puedes responder hablando o escribiendo, como te quede más cómodo.'
      },
      {
        q: '¿En qué teléfonos funciona?',
        a: 'En Android y en iPhone. Descárgala gratis en Google Play o en el App Store. Necesitas conexión a internet.'
      },
      {
        q: '¿Puedo cancelar cuando quiera?',
        a: 'Sí. Cancela desde las suscripciones de tu tienda: Google Play en Android o el App Store en iPhone. Sigues con acceso hasta el final del período que pagaste.'
      }
    ]
  },

  cta: {
    title: 'Tu primera conversación, hoy.',
    subtitle: 'Descarga Fluo gratis y habla inglés sin vergüenza desde el primer día.'
  },

  footer: {
    tagline: 'Inglés que fluye. Hecho por LinguaTech en Buenos Aires.',
    productTitle: 'Producto',
    companyTitle: 'Empresa',
    support: 'Soporte',
    privacy: 'Política de privacidad',
    terms: 'Términos de uso',
    rights: '© 2026 LinguaTech. Todos los derechos reservados.',
    followUs: 'Sigue a Fluo'
  },

  storeBadges: {
    appStoreLabel: 'Descárgalo en el',
    googlePlayLabel: 'DISPONIBLE EN'
  }
};

export default es;
