import type { Dict } from './types';

// Português do Brasil. Copy aprovado:
// lingualoop-marketing/docs/retention/r43-textos.md — não reescrever aqui.
const ptBR: Dict = {
  seo: {
    title: 'Fluo — Fale inglês sem vergonha | Tutora de IA com feedback',
    description:
      'Pratique conversas reais em inglês com uma tutora de IA e receba feedback concreto em cada resposta, explicado em português. Do A1 ao C2. Grátis para começar no Android e no iOS.'
  },

  nav: {
    howItWorks: 'Como funciona',
    lessons: 'Aulas',
    faq: 'Perguntas',
    download: 'Baixar',
    navLabel: 'Navegação principal',
    langLabel: 'Idioma',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    menuLabel: 'Menu de navegação'
  },

  hero: {
    titleLead: 'Fale inglês',
    titleAccent: 'sem vergonha.',
    subtitle:
      'Pratique conversas reais com sua tutora de IA e receba feedback concreto em cada resposta, explicado em português.',
    tutorBubble: 'What did you do last weekend?',
    learnerBefore: 'I',
    learnerWrong: 'go',
    learnerRight: 'went',
    learnerAfter: 'to the beach with my friends.',
    correctionNote: 'Passado de «go»: «went»',
    trust: ['Grátis para começar', 'Do A1 ao C2', 'Android e iOS'],
    imageAlt: 'Emma, tutora de IA do Fluo'
  },

  conversation: {
    label: 'COMO FUNCIONA',
    title: 'Assim é uma conversa',
    subtitle:
      'Cenas da vida real, no seu nível. Você fala, a tutora responde e mostra o que melhorar.',
    steps: [
      {
        lead: 'Escolha uma cena.',
        text: 'Peça num restaurante, apresente-se numa entrevista ou conte como foi seu dia. Cada cena tem tarefas claras para cumprir.',
        alt: 'Conversa no Fluo: uma cena num restaurante, com o tutor e as tarefas'
      },
      {
        lead: 'Fale ou escreva, como preferir.',
        text: 'Responda com a voz ou pelo teclado. Se travar, a tutora dá ideias do que dizer e ajuda em português.',
        alt: 'Fluo: escolher como responder, tocar para falar, mãos livres ou escrever'
      },
      {
        lead: 'Veja o que melhorar.',
        text: 'Em cada resposta você vê o que disse, como dizer melhor e por quê, explicado no seu idioma.',
        alt: ''
      }
    ],
    closingNote:
      'No final, um resumo com o que você fez bem e uma coisa para praticar da próxima vez.'
  },

  lessons: {
    label: 'AULAS',
    title: 'Aulas que fazem você falar',
    text: 'Cada aula explica em português, com exemplos e ilustrações, faz você repetir em voz alta e termina com prática de conversa.',
    tags: ['Do A1 ao C2', 'Explicações no seu idioma', 'Repita em voz alta', 'Prática de conversa no final'],
    alts: [
      'Aula do Fluo: Emma explica uma frase, com um cartão ilustrado',
      'Aula concluída no Fluo, com as frases novas aprendidas'
    ]
  },

  plan: {
    label: 'SEU PLANO',
    title: 'Um plano do seu jeito',
    text: 'Conte seu nível, seu objetivo e quanto tempo você tem. O Fluo monta sua prática de cada dia.',
    plusLead: 'E mais:',
    plusText: 'ouça vídeos reais e converse sobre o que quiser.',
    alts: [
      'Plano do Fluo com nível, foco, meta diária e horário de prática',
      'Início do Fluo: sua prática de hoje'
    ]
  },

  compare: {
    title: 'Fluo ou uma aula particular',
    otherHeader: 'Aula',
    rows: [
      { label: 'Quando você pratica', fluo: 'a qualquer hora', other: 'no horário combinado' },
      { label: 'Na frente de quem', fluo: 'você pratica sem plateia', other: 'na frente de outra pessoa' },
      { label: 'Feedback', fluo: 'em cada resposta', other: 'depende do professor' },
      { label: 'Explicações', fluo: 'em português', other: 'depende do professor' },
      {
        label: 'Preço',
        fluo: 'grátis para começar; Premium US$ 39,99 por ano',
        other: 'paga-se cada aula'
      }
    ]
  },

  faq: {
    title: 'Perguntas',
    items: [
      {
        q: 'O Fluo é grátis?',
        a: 'Sim. Você pode começar grátis e praticar todos os dias, com um limite diário; na primeira semana você tem prática extra. O Premium (US$ 6,99 por mês ou US$ 39,99 por ano; o preço pode variar conforme o país) libera prática ilimitada, todas as cenas e a conversa livre.'
      },
      {
        q: 'Que nível eu preciso ter?',
        a: 'Nenhum em especial. O Fluo vai do A1 (iniciante) ao C2. No começo você escolhe seu nível e, se não souber, a gente ajuda a descobrir.'
      },
      {
        q: 'Serve para quem tem vergonha de falar?',
        a: 'É para isso que ele existe. Você pratica com uma tutora de IA, sem plateia e sem pressa. Se travar, ela dá ideias do que dizer e ajuda em português.'
      },
      {
        q: 'Qual é a diferença para o ChatGPT ou o Duolingo?',
        a: 'O Duolingo ensina com exercícios curtos; o Fluo coloca você para conversar desde o primeiro dia. O ChatGPT conversa, mas não foi feito para ensinar: o Fluo tem cenas com tarefas, um plano por nível e feedback de cada resposta explicado em português.'
      },
      {
        q: 'Ajuda com a pronúncia?',
        a: 'Sim. Além da gramática, você pode ouvir como se diz cada frase e praticar a pronúncia.'
      },
      {
        q: 'Posso escrever em vez de falar?',
        a: 'Sim. Você pode responder falando ou escrevendo, como for mais confortável.'
      },
      {
        q: 'Funciona em quais celulares?',
        a: 'No Android e no iPhone. Baixe grátis no Google Play ou na App Store. É preciso ter conexão com a internet.'
      },
      {
        q: 'Posso cancelar quando quiser?',
        a: 'Sim. Cancele nas assinaturas da sua loja: Google Play no Android ou App Store no iPhone. Você continua com acesso até o fim do período pago.'
      }
    ]
  },

  cta: {
    title: 'Sua primeira conversa, hoje.',
    subtitle: 'Baixe o Fluo grátis e fale inglês sem vergonha desde o primeiro dia.'
  },

  footer: {
    tagline: 'Inglês que flui. Feito pela LinguaTech em Buenos Aires.',
    productTitle: 'Produto',
    companyTitle: 'Empresa',
    support: 'Suporte',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Uso',
    rights: '© 2026 LinguaTech. Todos os direitos reservados.',
    followUs: 'Siga a Fluo'
  },

  storeBadges: {
    appStoreLabel: 'Baixe na',
    googlePlayLabel: 'DISPONÍVEL NO'
  }
};

export default ptBR;
