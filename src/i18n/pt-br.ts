import type { Dict } from './types';

// Português do Brasil. Voz de marca: calorosa, direta, encorajadora.
// Lidera com o wedge: conversa com tutor de IA + feedback concreto.
const ptBR: Dict = {
  seo: {
    title: 'Fluo — Fale inglês com naturalidade | App de inglês com IA',
    description:
      'O Fluo ajuda quem fala português a aprender inglês de forma natural: pratique conversas com tutores de IA, treine o ouvido com vídeos reais e evolua com trilhas de aprendizado estruturadas. Baixe grátis no iOS e no Android.',
    schemaDescription:
      'App para aprender inglês com IA, feito para quem fala português. Pratique conversação com tutores de IA, melhore sua compreensão com vídeos reais e domine a gramática com trilhas estruturadas.'
  },

  nav: {
    features: 'Recursos',
    howItWorks: 'Como funciona',
    whyFluo: 'Por que o Fluo',
    download: 'Baixar',
    navLabel: 'Navegação principal',
    langLabel: 'Idioma',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    menuLabel: 'Menu de navegação'
  },

  hero: {
    trustAria: 'Avaliado em 4,8 de 5 na App Store por mais de 2.000 estudantes',
    ratingScore: '4,8',
    trustLearners: '+2.000 estudantes',
    titleLine1: 'Inglês que',
    titleAccent: 'flui.',
    subtitle:
      'Pratique conversas reais com tutores de IA, treine o ouvido com vídeos reais e desenvolva suas habilidades com lições estruturadas: feito para quem fala português.',
    cardFeedback: { title: 'Feedback na hora', meta: 'Fluência na conversa' },
    cardListening: { title: 'Compreensão com IA' },
    imageAlt: 'App do Fluo mostrando uma conversa de role-play de Conversação com um tutor de IA'
  },

  testimonials: {
    label: 'Amado por estudantes',
    titleLine1: 'Progresso real,',
    titleAccent: 'histórias reais.',
    ratingAria: 'Avaliado em 4,8 de 5 na App Store',
    ratingScore: '4,8',
    ratingDetail: 'de 5 · +2.000 avaliações na App Store',
    cardStarsAria: '5 de 5 estrelas',
    items: [
      {
        quote:
          'Depois de 3 meses com o Fluo, conduzo reuniões em inglês sem entrar em pânico. O role-play com IA fez toda a diferença.',
        name: 'Valentina R.',
        country: 'Argentina',
        level: 'B1 → B2'
      },
      {
        quote:
          'O role-play de entrevistas me preparou para o emprego dos meus sonhos em uma empresa global. Finalmente me sinto confiante falando inglês.',
        name: 'Carlos M.',
        country: 'Brasil',
        level: 'A2 → B1'
      },
      {
        quote:
          'O que eu mais amo é praticar a qualquer hora, sem a pressão de um professor ao vivo. Progresso constante, todo dia.',
        name: 'Ana L.',
        country: 'México',
        level: 'B2 → C1'
      }
    ]
  },

  features: {
    label: 'RECURSOS',
    title: 'Três formas de dominar o inglês',
    subtitle:
      'Cada módulo trabalha uma habilidade diferente. Juntos, constroem fluência de verdade, não só nota em prova.',
    items: [
      {
        title: 'Conversação',
        desc: 'Pratique conversas reais com tutores de IA que têm personalidades únicas. De pedir um café a arrasar numa entrevista de emprego: cenários que preparam você para a vida real.',
        tags: ['Role-play com IA', 'Feedback em tempo real', 'Calibrado pelo CEFR'],
        alt: 'Conversação no Fluo: role-play com um tutor de IA num cenário de reserva de trem'
      },
      {
        title: 'Compreensão oral',
        desc: 'Treine o ouvido com ditados e quizzes feitos com vídeos reais em inglês. Ouça falantes nativos em velocidade natural e desenvolva uma compreensão que realmente se transfere.',
        tags: ['Vídeos reais', 'Ditado', 'Quizzes de compreensão'],
        alt: 'Compreensão oral no Fluo: quiz sobre um vídeo a respeito da tecnologia 5G'
      },
      {
        title: 'Trilha de aprendizado',
        desc: 'Lições estruturadas de gramática e vocabulário que levam você de iniciante a avançado. Travou em algo? Pergunte ao Tutor de IA e receba uma explicação clara na hora.',
        tags: ['Currículo estruturado', 'Chat com Tutor de IA', 'A1 → C2'],
        alt: 'Trilha de aprendizado do Fluo: unidades de nível B1 intermediário com lições sobre tempos passados e presentes'
      }
    ]
  },

  howItWorks: {
    label: 'COMO FUNCIONA',
    title: 'Simples. Eficaz. Diário.',
    subtitle: 'Crie um hábito que gruda com só alguns minutos por dia.',
    steps: [
      {
        title: 'Escolha seu foco',
        desc: 'Escolha Conversação, Compreensão oral ou Trilha de aprendizado conforme o que você precisa hoje. O Fluo se adapta ao seu nível.',
        alt: 'Tela inicial do Fluo com unidades da Trilha de aprendizado e opções de prática recomendada'
      },
      {
        title: 'Pratique com IA',
        desc: 'Tenha conversas reais, treine o ouvido ou avance nas lições: tudo com uma IA avançada que entende o seu idioma.',
        alt: 'Conversação no Fluo com um tutor de IA num role-play de reserva de trem'
      },
      {
        title: 'Construa sua sequência',
        desc: 'Acompanhe seu progresso diário e veja sua confiança crescer. Constância vence intensidade: cada sessão conta.',
        alt: 'Tela de perfil do Fluo com estatísticas de progresso total e sequência diária'
      }
    ]
  },

  whyFluo: {
    label: 'POR QUE O FLUO',
    title: 'Feito do jeito que você realmente aprende',
    subtitle: 'A maioria dos apps ensina inglês como se todo mundo aprendesse igual. O Fluo é diferente.',
    benefits: [
      {
        title: 'Feito para quem fala português',
        desc: 'A gente entende os desafios específicos que você enfrenta: falsos cognatos, padrões de pronúncia e lacunas de gramática típicas do seu idioma.'
      },
      {
        title: 'Uma IA que parece humana',
        desc: 'Nossos tutores de IA têm personalidades próprias e se adaptam ao seu nível. Pratique quando quiser, sem a pressão de um professor ao vivo.'
      },
      {
        title: 'Fale desde o primeiro dia',
        desc: 'Nada de meses de exercícios de gramática antes da primeira conversa. Com o Fluo, você começa a falar na hora, em cenários do mundo real.'
      },
      {
        title: 'Todas as habilidades, um só app',
        desc: 'Conversação, compreensão, gramática e vocabulário num só lugar. Sem fazer malabarismo com vários apps ou assinaturas.'
      }
    ],
    imageAlt: 'O Tutor de IA do Fluo explicando seus erros de gramática com exemplos claros'
  },

  faq: {
    label: 'FAQ',
    title: 'Perguntas frequentes',
    subtitle: 'Tudo o que você precisa saber antes de começar.',
    items: [
      {
        q: 'O Fluo é gratuito?',
        a: 'Sim. Tem um plano gratuito com prática diária que nunca expira. Quem está começando ganha prática extra na primeira semana. O Premium (US$ 6,99/mês ou US$ 39,99/ano) libera prática ilimitada e todos os cenários.'
      },
      {
        q: 'Que nível de inglês eu preciso para começar?',
        a: 'Qualquer nível. Faça um teste de nivelamento de 2 minutos no cadastro ou escolha seu nível na mão: o Fluo vai do A1 (iniciante) ao C2 (avançado).'
      },
      {
        q: 'Preciso de internet para usar o Fluo?',
        a: 'Sim. As conversas com IA em tempo real e os exercícios de ditado exigem conexão com a internet.'
      },
      {
        q: 'O app está disponível no Android?',
        a: 'Sim. O Fluo está disponível no iOS e no Android. Baixe grátis na App Store ou no Google Play.'
      },
      {
        q: 'Posso cancelar quando quiser?',
        a: 'Sim. Cancele direto nas configurações de assinatura da sua App Store; seu acesso continua até o fim do período de cobrança atual.'
      }
    ]
  },

  cta: {
    title: 'Pronto para falar com confiança?',
    subtitle: 'Baixe o Fluo grátis e comece sua primeira conversa hoje.',
    socialProof: 'Junte-se a mais de 2.000 estudantes que falam inglês todos os dias.'
  },

  footer: {
    tagline: 'Inglês que flui. Feito pela LinguaTech para quem fala português.',
    productTitle: 'Produto',
    companyTitle: 'Empresa',
    support: 'Suporte',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Uso',
    rights: '© 2026 LinguaTech. Todos os direitos reservados.',
    craft: 'Desenhado em Buenos Aires · Feito com carinho'
  },

  storeBadges: {
    appStoreLabel: 'Baixe na',
    googlePlayLabel: 'DISPONÍVEL NO'
  }
};

export default ptBR;
