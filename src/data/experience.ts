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
    company: 'AnswerAgent AI (The Answer AI)',
    title: { en: 'AI Engineer', es: 'Ingeniero de IA' },
    period: { en: 'Jun 2025 — Present', es: 'Jun 2025 — Actualidad' },
    location: { en: 'Remote · Montevideo', es: 'Remoto · Montevideo' },
    summary: {
      en: 'Contributing engineer on a production AI agent orchestration platform (built on Flowise, deployed on AWS Fargate) serving enterprise clients. 70 merged PRs on the public monorepo.',
      es: 'Ingeniero en una plataforma de orquestación de agentes de IA en producción (construida sobre Flowise, desplegada en AWS Fargate) que sirve a clientes enterprise. 70 PRs mergeados en el monorepo público.',
    },
    highlights: {
      en: [
        'Diagnosed and resolved production incidents in client-facing AI research agents via LLM-observability debugging (Langfuse traces + Langfuse MCP) and config-level fixes.',
        'Improved MCP reliability with request timeouts and batched vectorstore chunk lookups; applied Fiddler runtime guardrails to the embed endpoint.',
        'Enforced multi-tenant document-store isolation and fixed a PostgreSQL parameter-overflow on bulk chunk deletes.',
        'Owned the Schedule-of-Values Excel engine for an enterprise construction-bid product — grew the test suite 135 → 392 and eliminated 490 spreadsheet errors.',
      ],
      es: [
        'Diagnostiqué y resolví incidentes en producción en agentes de investigación de IA de cara al cliente, mediante debugging con observabilidad de LLMs (trazas de Langfuse + Langfuse MCP) y fixes a nivel de configuración.',
        'Mejoré la confiabilidad de MCP con timeouts de requests y lookups en lote de chunks del vectorstore; apliqué guardrails en runtime de Fiddler al endpoint de embed.',
        'Reforcé el aislamiento multi-tenant del document store y corregí un desborde de parámetros de PostgreSQL en borrados masivos de chunks.',
        'Fui responsable del motor Excel de Schedule of Values para un producto enterprise de licitaciones de construcción — llevé la suite de tests de 135 a 392 y eliminé 490 errores de planilla.',
      ],
    },
    tags: ['TypeScript', 'RAG', 'MCP', 'Langfuse', 'Fiddler', 'AWS', 'PostgreSQL'],
  },
  {
    company: 'Caivanode SAS',
    title: { en: 'Founder & AI Engineer', es: 'Fundador e Ingeniero de IA' },
    period: { en: 'Feb 2024 — Present', es: 'Feb 2024 — Actualidad' },
    location: { en: 'Montevideo', es: 'Montevideo' },
    summary: {
      en: 'Independent practice designing, building and deploying AI agent systems and full-stack apps for clients across advertising, e-commerce and operations. Operating through a Uruguayan company exporting to US clients.',
      es: 'Práctica independiente diseñando, construyendo y desplegando sistemas de agentes de IA y aplicaciones full-stack para clientes de publicidad, e-commerce y operaciones. Opero a través de una empresa uruguaya que exporta a clientes de Estados Unidos.',
    },
    highlights: {
      en: [
        'Architected production AI agents on Claude (Sonnet/Opus), GPT-4o-mini and OpenRouter for research, content generation and operations automation.',
        'Built MCP integrations connecting agents to Notion, Slack and Google Workspace.',
        'Developed a Deal Management module for a DSP advertising platform (React + Node.js), improving campaign targeting.',
        'Configured a client Shopify storefront from scratch and built an SEO plan to improve search ranking.',
      ],
      es: [
        'Arquitecté agentes de IA en producción sobre Claude (Sonnet/Opus), GPT-4o-mini y OpenRouter para investigación, generación de contenido y automatización de operaciones.',
        'Construí integraciones MCP conectando agentes con Notion, Slack y Google Workspace.',
        'Desarrollé un módulo de Deal Management para una plataforma publicitaria DSP (React + Node.js), mejorando la segmentación de campañas.',
        'Configuré desde cero la tienda Shopify de un cliente y armé un plan de SEO para mejorar su posicionamiento en buscadores.',
      ],
    },
    tags: ['Anthropic', 'OpenAI', 'React', 'Node.js', 'MCP', 'Shopify'],
  },
  {
    company: 'Entravision',
    title: { en: 'Advertising Operator & Developer', es: 'Operador Publicitario y Desarrollador' },
    period: { en: 'Jul 2017 — Dec 2023', es: 'Jul 2017 — Dic 2023' },
    location: { en: 'Montevideo', es: 'Montevideo' },
    summary: {
      en: 'Built and operated tools for a programmatic advertising (DSP) platform and interactive ad experiences, while training regional teams and driving process automation.',
      es: 'Construí y operé herramientas para una plataforma de publicidad programática (DSP) y experiencias publicitarias interactivas, mientras entrenaba equipos regionales e impulsaba la automatización de procesos.',
    },
    highlights: {
      en: [
        'Built interactive ad experiences for Spotify campaigns (React, HTML5, CSS3, Bootstrap).',
        'Developed and maintained backend tooling for the DSP platform (Node.js, SQL).',
        'Automated internal processes with custom scripts, cutting manual operational tasks by 30%.',
        'Trained 200+ team members across regions, reducing support tickets by 25%; acted as Scrum Master.',
      ],
      es: [
        'Construí experiencias publicitarias interactivas para campañas de Spotify (React, HTML5, CSS3, Bootstrap).',
        'Desarrollé y mantuve tooling de backend para la plataforma DSP (Node.js, SQL).',
        'Automaticé procesos internos con scripts a medida, reduciendo un 30% las tareas operativas manuales.',
        'Entrené a más de 200 personas en distintas regiones, reduciendo un 25% los tickets de soporte; actué como Scrum Master.',
      ],
    },
    tags: ['React', 'Node.js', 'SQL', 'Scrum'],
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
