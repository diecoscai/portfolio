import type { Localized } from '../i18n';

export interface Role {
  company: string;
  title: Localized;
  period: Localized;
  location: Localized;
  summary: Localized;
  highlights: Localized<string[]>;
  tags: string[];
}

export const experience: Role[] = [
  {
    company: 'AnswerAgentAI',
    title: { en: 'AI Engineer', es: 'Ingeniero de IA' },
    period: { en: 'Jun 2025 — Present', es: 'Jun 2025 — Actualidad' },
    location: {
      en: 'Remote · US team · contracting through Caivanode SAS',
      es: 'Remoto · equipo en EE.UU. · contrato a través de Caivanode SAS',
    },
    summary: {
      en: 'Engineer across three products in the same engagement: AnswerAgent, an AI agent orchestration platform (Flowise, AWS) for enterprise clients; SBI Bids, the construction-bid product, a separate codebase on Azure; and an internal desktop app that shipped and was later discontinued.',
      es: 'Ingeniero en tres productos de la misma empresa: AnswerAgent, una plataforma de orquestación de agentes de IA (Flowise, AWS) para clientes enterprise; SBI Bids, el producto de licitaciones, otro repo, en Azure; y una app de escritorio interna que salió a producción y después la dieron de baja.',
    },
    highlights: {
      en: [
        'Write the business rules inside the Schedule-of-Values export on SBI Bids — the Excel workbook the whole bid rides on: insurance rates, GC/GR multipliers driven by project duration, inter-trade net-outs, accepted alternates and exclusions — and I run the acceptance pass the client signs off on, PII-scrubbed, gate by gate.',
        'Wrote the user manual the assistant now cites — the eight workflows, screen by screen, checked against the code — and built query_manual, the tool that answers “how do I do X” straight from that manual with a link to the exact section, and says the manual doesn’t cover it instead of inventing UI.',
        'Closed the multi-tenancy gap in the document store — chunks were being written with no owner id, so tenant filters couldn’t match them and users couldn’t see their own documents — and put Fiddler’s runtime guardrails on the public embed endpoint, which had been skipping them because embed requests carry no user.',
        'A client’s agent was timing out at five seconds, intermittently. The timeout everyone had configured was a no-op — the MCP subprocess never inherited the env — and behind it the vectorstore query ran one unindexed lookup per result document, so under load the tail crossed the limit. Fixed both.',
        'Got the company’s Electron desktop app shipping again on macOS and Windows: signed builds had been failing notarization for a month, and auto-update published a single manifest for two architectures, so arm64 users updated into the wrong binary. Then built the production monitoring that had never existed behind it — the CPU, memory and disk alarms had sat in INSUFFICIENT_DATA since March because nothing was installed to emit the metrics.',
      ],
      es: [
        'Escribo las reglas de negocio del export Schedule of Values en SBI Bids — el Excel del que depende toda la licitación: tasas de seguro, multiplicadores de GC/GR según la duración de obra, net-outs entre rubros, alternates aceptados y exclusiones — y soy el que hace la pasada de aceptación que el cliente firma, con los datos sensibles borrados, gate por gate.',
        'Escribí el manual de usuario que hoy cita el asistente — los ocho flujos, pantalla por pantalla, contrastados con el código — y construí query_manual, la tool que responde “cómo hago X” con el manual en la mano y un link a la sección exacta; si el manual no lo cubre, lo dice en vez de inventar pantallas.',
        'Cerré el hueco de multi-tenancy en el document store — los chunks se guardaban sin id de dueño, así que el filtro por tenant no los encontraba y los usuarios no veían sus propios documentos — y le puse los guardrails de Fiddler en runtime al endpoint público de embed, que se los salteaba porque los requests de embed no traen usuario.',
        'El agente de un cliente cortaba a los cinco segundos, de a ratos. El timeout que todos creían configurado no hacía nada — el subproceso MCP nunca heredaba el env — y atrás, la consulta al vectorstore hacía un lookup sin índice por cada documento, así que bajo carga la latencia de cola se iba del límite. Arreglé las dos cosas.',
        'Hice que la app de escritorio en Electron de la empresa volviera a salir en macOS y Windows: hacía un mes que los builds firmados no pasaban la notarización, y el auto-update publicaba un solo manifiesto para dos arquitecturas, así que los usuarios arm64 se actualizaban al binario equivocado. Después construí el monitoreo de producción que nunca había existido — las alarmas de CPU, memoria y disco estaban en INSUFFICIENT_DATA desde marzo porque nunca se instaló nada que emitiera métricas.',
      ],
    },
    tags: [
      'TypeScript',
      'RAG',
      'MCP',
      'Langfuse',
      'Fiddler',
      'AWS',
      'Electron',
      'Docker',
      'PostgreSQL',
    ],
  },
  {
    company: 'Freelance',
    title: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
    period: { en: '2024', es: '2024' },
    location: { en: 'Montevideo · Remote', es: 'Montevideo · Remoto' },
    summary: {
      en: 'A short engagement building the Deal Management module for a DSP ad platform — the same kind of platform I had spent six years operating, now from the other side of it.',
      es: 'Un contrato corto para armar el módulo de Deal Management de una plataforma DSP — el mismo tipo de plataforma que había operado seis años, ahora del otro lado.',
    },
    highlights: {
      en: [
        'Angular front end over a Node API on MySQL: the screens where an ad-ops team sets up deals and the endpoints behind them.',
        'Knowing the job from the inside was the whole advantage — I had been the person filing the tickets against a module like this one.',
      ],
      es: [
        'Front en Angular sobre una API en Node con MySQL: las pantallas donde un equipo de ad-ops arma los deals y los endpoints que las sostienen.',
        'Conocer el trabajo desde adentro fue toda la ventaja — yo había sido el que reportaba los bugs de un módulo como este.',
      ],
    },
    tags: ['Angular', 'Node.js', 'MySQL'],
  },
  {
    company: 'Entravision',
    title: { en: 'Ad Operations · Programmatic', es: 'Ad Operations · Programática' },
    period: { en: 'Jul 2017 — Dec 2023', es: 'Jul 2017 — Dic 2023' },
    location: { en: 'Montevideo', es: 'Montevideo' },
    summary: {
      en: 'Six years running campaigns on a programmatic advertising platform — and automating my own part of the job until automating became the job.',
      es: 'Seis años operando campañas en una plataforma de publicidad programática — y automatizando mi propia parte del trabajo hasta que automatizar se volvió el trabajo.',
    },
    highlights: {
      en: [
        'Automated internal ad-ops processes with custom scripts — the work that turned me into a developer.',
        'Built the backend tooling the DSP ran on (Node.js, SQL).',
        'Built the interactive ad units that shipped in Spotify campaigns (React, HTML5, CSS3).',
        'Was the person who explained the platform to the regional teams that had to use it — the habit that later turned into writing the SBI Bids manual.',
      ],
      es: [
        'Automaticé procesos internos de ad-ops con scripts a medida — el trabajo que terminó convirtiéndome en programador.',
        'Armé el tooling de backend sobre el que corría el DSP (Node.js, SQL).',
        'Hice las piezas publicitarias interactivas que salieron en campañas de Spotify (React, HTML5, CSS3).',
        'Fui el que les explicaba la plataforma a los equipos de la región que tenían que usarla — la costumbre que después terminó en el manual de SBI Bids.',
      ],
    },
    tags: ['React', 'Node.js', 'SQL', 'Ad Ops'],
  },
];

export interface Education {
  school: string;
  degree: Localized;
  period: string;
}

export const education: Education[] = [
  {
    school: 'Universidad ORT Uruguay',
    degree: {
      en: 'Programmer Analyst (Analista en Programación)',
      es: 'Analista en Programación',
    },
    period: '2022 — 2025',
  },
  {
    school: 'CEIBAL · Jóvenes a Programar',
    degree: { en: 'Web Development Diploma', es: 'Diploma en Desarrollo Web' },
    period: '2021',
  },
];
