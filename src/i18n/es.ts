import type { Dict } from './types';

// Español latinoamericano neutro (leve sesgo México, sin "vosotros").
// Voz de marca: cálida, directa, alentadora. Lidera con el wedge:
// conversación con tutor de IA + feedback concreto.
const es: Dict = {
  seo: {
    title: 'Fluo — Habla inglés con naturalidad | App de inglés con IA',
    description:
      'Fluo ayuda a los hispanohablantes a aprender inglés de forma natural: practica conversaciones con tutores de IA, entrena el oído con videos reales y avanza con rutas de aprendizaje estructuradas. Descárgala gratis en iOS y Android.',
    schemaDescription:
      'App para aprender inglés con IA, pensada para hispanohablantes. Practica conversación con tutores de IA, mejora tu comprensión con videos reales y domina la gramática con rutas estructuradas.'
  },

  nav: {
    features: 'Funciones',
    howItWorks: 'Cómo funciona',
    whyFluo: 'Por qué Fluo',
    download: 'Descargar',
    navLabel: 'Navegación principal',
    langLabel: 'Idioma',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    menuLabel: 'Menú de navegación'
  },

  hero: {
    trustAria: 'Calificada 4.8 de 5 en el App Store por más de 2,000 estudiantes',
    ratingScore: '4.8',
    trustLearners: '+2,000 estudiantes',
    titleLine1: 'Inglés que',
    titleAccent: 'fluye.',
    subtitle:
      'Practica conversaciones reales con tutores de IA, entrena tu oído con videos reales y desarrolla tus habilidades con lecciones estructuradas: diseñado para hispanohablantes.',
    cardFeedback: { title: 'Feedback al instante', meta: 'Fluidez al conversar' },
    cardListening: { title: 'Comprensión con IA' },
    imageAlt: 'App de Fluo mostrando una conversación de role-play de Conversación con un tutor de IA'
  },

  testimonials: {
    label: 'Amada por estudiantes',
    titleLine1: 'Progreso real,',
    titleAccent: 'historias reales.',
    ratingAria: 'Calificada 4.8 de 5 en el App Store',
    ratingScore: '4.8',
    ratingDetail: 'de 5 · +2,000 reseñas en el App Store',
    cardStarsAria: '5 de 5 estrellas',
    items: [
      {
        quote:
          'Después de 3 meses con Fluo, dirijo reuniones en inglés sin entrar en pánico. El role-play con IA marcó la diferencia.',
        name: 'Valentina R.',
        country: 'Argentina',
        level: 'B1 → B2'
      },
      {
        quote:
          'El role-play de entrevistas me preparó para el trabajo de mis sueños en una empresa global. Por fin me siento seguro hablando inglés.',
        name: 'Carlos M.',
        country: 'Brasil',
        level: 'A2 → B1'
      },
      {
        quote:
          'Lo que más me gusta es practicar a cualquier hora, sin la presión de un profesor en vivo. Un avance constante, día a día.',
        name: 'Ana L.',
        country: 'México',
        level: 'B2 → C1'
      }
    ]
  },

  features: {
    label: 'FUNCIONES',
    title: 'Tres formas de dominar el inglés',
    subtitle:
      'Cada módulo trabaja una habilidad distinta. Juntos construyen fluidez real, no solo puntajes de examen.',
    items: [
      {
        title: 'Conversación',
        desc: 'Practica conversaciones reales con tutores de IA que tienen personalidades únicas. Desde pedir un café hasta brillar en una entrevista de trabajo: escenarios que te preparan para la vida real.',
        tags: ['Role-play con IA', 'Feedback en tiempo real', 'Calibrado al MCER'],
        alt: 'Conversación en Fluo: role-play con un tutor de IA en un escenario de reserva de tren'
      },
      {
        title: 'Comprensión auditiva',
        desc: 'Entrena tu oído con dictados y quizzes hechos con videos reales en inglés. Escucha a hablantes nativos a velocidad natural y desarrolla una comprensión que de verdad se transfiere.',
        tags: ['Videos reales', 'Dictado', 'Quizzes de comprensión'],
        alt: 'Comprensión auditiva en Fluo: quiz sobre un video acerca de la tecnología 5G'
      },
      {
        title: 'Ruta de aprendizaje',
        desc: 'Lecciones estructuradas de gramática y vocabulario que te llevan de principiante a avanzado. ¿Te trabaste con algo? Pregúntale al Tutor de IA y recibe una explicación clara al instante.',
        tags: ['Plan estructurado', 'Chat con Tutor de IA', 'A1 → C2'],
        alt: 'Ruta de aprendizaje de Fluo: unidades de nivel B1 intermedio con lecciones de tiempos pasados y presentes'
      }
    ]
  },

  howItWorks: {
    label: 'CÓMO FUNCIONA',
    title: 'Simple. Efectivo. Diario.',
    subtitle: 'Crea un hábito que se sostiene con solo unos minutos al día.',
    steps: [
      {
        title: 'Elige tu enfoque',
        desc: 'Elige Conversación, Comprensión auditiva o Ruta de aprendizaje según lo que necesites hoy. Fluo se adapta a tu nivel.',
        alt: 'Pantalla de inicio de Fluo con unidades de la Ruta de aprendizaje y opciones de práctica recomendada'
      },
      {
        title: 'Practica con IA',
        desc: 'Ten conversaciones reales, entrena tu oído o avanza con las lecciones: todo impulsado por una IA avanzada que entiende tu idioma.',
        alt: 'Conversación en Fluo con un tutor de IA en un role-play de reserva de tren'
      },
      {
        title: 'Construye tu racha',
        desc: 'Sigue tu progreso diario y mira crecer tu confianza. La constancia le gana a la intensidad: cada sesión cuenta.',
        alt: 'Pantalla de perfil de Fluo con estadísticas de progreso total y racha diaria'
      }
    ]
  },

  whyFluo: {
    label: 'POR QUÉ FLUO',
    title: 'Hecho para la forma en que realmente aprendes',
    subtitle: 'La mayoría de las apps enseñan inglés como si todos aprendieran igual. Fluo es diferente.',
    benefits: [
      {
        title: 'Hecho para hispanohablantes',
        desc: 'Entendemos los retos específicos que enfrentas: falsos amigos, patrones de pronunciación y vacíos de gramática propios de tu idioma.'
      },
      {
        title: 'Una IA que se siente humana',
        desc: 'Nuestros tutores de IA tienen personalidades propias y se adaptan a tu nivel. Practica cuando quieras, sin la presión de un profesor en vivo.'
      },
      {
        title: 'Habla desde el primer día',
        desc: 'Nada de meses de ejercicios de gramática antes de tu primera conversación. Con Fluo empiezas a hablar de inmediato en escenarios de la vida real.'
      },
      {
        title: 'Todas las habilidades, una sola app',
        desc: 'Conversación, comprensión, gramática y vocabulario en un solo lugar. Sin malabares con varias apps ni suscripciones.'
      }
    ],
    imageAlt: 'El Tutor de IA de Fluo explicando tus errores de gramática con ejemplos claros'
  },

  faq: {
    label: 'FAQ',
    title: 'Preguntas frecuentes',
    subtitle: 'Todo lo que necesitas saber antes de empezar.',
    items: [
      {
        q: '¿Fluo es gratis?',
        a: 'Sí. Hay un plan gratuito con práctica diaria que nunca caduca. Quienes recién empiezan reciben práctica extra durante su primera semana. Premium (US$6.99/mes o US$39.99/año) desbloquea práctica ilimitada y todos los escenarios.'
      },
      {
        q: '¿Qué nivel de inglés necesito para empezar?',
        a: 'Cualquier nivel. Haz una prueba de nivel de 2 minutos al registrarte o elige tu nivel a mano: Fluo va del A1 (principiante) al C2 (avanzado).'
      },
      {
        q: '¿Necesito internet para usar Fluo?',
        a: 'Sí. Las conversaciones con IA en tiempo real y los ejercicios de dictado requieren conexión a internet.'
      },
      {
        q: '¿La app está disponible en Android?',
        a: 'Sí. Fluo está disponible en iOS y Android. Descárgala gratis en el App Store o en Google Play.'
      },
      {
        q: '¿Puedo cancelar cuando quiera?',
        a: 'Sí. Cancela desde los ajustes de suscripción de tu tienda — App Store en iOS o Google Play en Android. Tu acceso continúa hasta el final del período de facturación vigente.'
      }
    ]
  },

  cta: {
    title: '¿Listo para hablar con confianza?',
    subtitle: 'Descarga Fluo gratis y empieza tu primera conversación hoy.',
    socialProof: 'Únete a más de 2,000 estudiantes que hablan inglés todos los días.'
  },

  footer: {
    tagline: 'Inglés que fluye. Hecho por LinguaTech para hispanohablantes.',
    productTitle: 'Producto',
    companyTitle: 'Empresa',
    support: 'Soporte',
    privacy: 'Política de privacidad',
    terms: 'Términos de uso',
    rights: '© 2026 LinguaTech. Todos los derechos reservados.',
    craft: 'Diseñado en Buenos Aires · Hecho con dedicación',
    followUs: 'Sigue a Fluo'
  },

  storeBadges: {
    appStoreLabel: 'Descárgalo en el',
    googlePlayLabel: 'DISPONIBLE EN'
  }
};

export default es;
