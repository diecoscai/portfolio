import type { Localized } from '../i18n';

export const profile = {
  name: 'Diego Costa',
  role: {
    en: 'AI Engineer',
    es: 'Ingeniero de IA',
  } satisfies Localized,
  location: 'Montevideo, Uruguay',
  timezone: 'UTC-3',
  available: true,
  email: 'diecoscai@gmail.com',
  cv: '/diego-costa-cv.pdf',
  tagline: {
    en: 'Construction bidding at work, fitness tooling on my own time, six years of ad operations before either — I put AI inside products for people who never asked for AI, and the win isn’t the model. It’s the hours it hands back.',
    es: 'Licitaciones de obra en el trabajo, herramientas de fitness en mi tiempo, seis años de ad-ops antes que todo eso — meto IA adentro de productos para gente que nunca pidió IA, y lo que vale no es el modelo: son las horas que le sacás de encima.',
  } satisfies Localized,
  summary: {
    en: [
      'For six years I worked in ad operations. Plenty of the job was repetitive by design, so I started automating my own part of it — scripts first, then small tools — until the work got done faster and my time went to the decisions instead of the clicking. Automating turned out to be the part I wanted to do full time, so I left, finished the degree I had started while working, took the freelance jobs I could get, and came out the other side a developer.',
      'Since mid-2025 I’ve been building products with an LLM inside, all day. The model is rarely the hard part. The hard part is everything around it: grounding an assistant in the manual so a construction estimator can check the answer instead of trusting it, making sure a client’s documents stay inside their own tenant, and being able to tell what the thing actually did at 3am when it misbehaved. That’s the work I do on AnswerAgent, on SBI Bids, and on my own MCP tooling.',
      'I also write the manual. On SBI Bids I documented the product screen by screen and validated it against the code across all eight workflows — because a feature nobody can explain isn’t shipped, it’s just deployed.',
      'I build from Montevideo through my own company, Caivanode SAS, mostly alongside teams in the US, and my working language on the job is English: the pull requests, the docs and the code. What I’m looking for now is a product team to build with — one where AI is the means and the product is still the point.',
    ],
    es: [
      'Seis años trabajé en ad operations. Buena parte del trabajo era repetitivo a propósito, así que empecé a automatizar mi propia parte — primero scripts, después herramientas — hasta que salía más rápido y el tiempo se me iba en las decisiones y no en los clics. Automatizar resultó ser lo que quería hacer a tiempo completo, así que me fui, terminé la carrera que había arrancado mientras trabajaba, agarré los trabajos freelance que aparecieron, y salí de ahí programador.',
      'Desde mediados de 2025 hago productos con un LLM adentro, todo el día. El modelo casi nunca es lo difícil. Lo difícil es todo lo que lo rodea: que el asistente conteste desde el manual y no de memoria, para que un presupuestista de obra pueda verificar la respuesta en vez de creerle; que los documentos de un cliente no se salgan de su propio tenant; y poder saber qué hizo la cosa a las 3 de la mañana cuando se portó mal. Ese es el trabajo que hago en AnswerAgent, en SBI Bids y en mis propias herramientas MCP.',
      'También escribo el manual. En SBI Bids documenté el producto pantalla por pantalla y lo validé contra el código en los ocho flujos — porque una funcionalidad que nadie sabe explicar no está entregada, está apenas deployada.',
      'Trabajo desde Montevideo, facturando a través de mi propia empresa, Caivanode SAS, sobre todo con equipos de Estados Unidos, y en el trabajo mi idioma es el inglés: los pull requests, los docs y el código. Lo que busco ahora es un equipo de producto para hacer cosas — uno donde la IA sea el medio y el producto siga siendo el fin.',
    ],
  } satisfies Localized<string[]>,
  metrics: [
    {
      value: '3',
      label: {
        en: 'Products I’ve shipped to production',
        es: 'Productos que salieron a producción',
      },
    },
    { value: '23', label: { en: 'MCP tools published on npm', es: 'Tools MCP publicadas en npm' } },
    {
      value: '6',
      label: {
        en: 'Years in ad ops before software',
        es: 'Años en ad-ops antes del software',
      },
    },
  ],
  languages: [
    {
      name: { en: 'Spanish', es: 'Español' },
      level: { en: 'Native', es: 'Nativo' },
    },
    {
      name: { en: 'English', es: 'Inglés' },
      level: {
        en: 'Working language — I run my day in it: standups and calls, pull requests, docs, code',
        es: 'Idioma de trabajo — vivo el día en inglés: dailies y llamadas, pull requests, docs, código',
      },
    },
  ],
  socials: [
    { label: 'GitHub', handle: '@diecoscai', href: 'https://github.com/diecoscai', icon: 'github' },
    {
      label: 'LinkedIn',
      handle: 'diecoscai',
      href: 'https://linkedin.com/in/diecoscai',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      handle: 'diecoscai@gmail.com',
      href: 'mailto:diecoscai@gmail.com',
      icon: 'mail',
    },
  ],
} as const;

export type Profile = typeof profile;
