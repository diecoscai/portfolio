import type { Localized } from '../i18n';

export interface ProjectLink {
  label: string;
  href: string;
  kind: 'github' | 'npm' | 'live' | 'docs';
}

export interface Project {
  name: string;
  tagline: Localized;
  description: Localized;
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
  highlights?: Localized<string[]>;
}

export const projects: Project[] = [
  {
    name: 'SBI Bids',
    tagline: {
      en: 'Bid comparison and AI assistant platform for commercial construction',
      es: 'Plataforma de comparación de licitaciones y asistente de IA para construcción',
    },
    description: {
      en: 'Estimators compare vendor bids that arrive as PDFs and spreadsheets, and the numbers end up in a Schedule of Values — the Excel workbook the whole bid rides on. I write the business rules inside it: insurance rates, GC/GR multipliers driven by project duration, net-outs between trades, accepted alternates and exclusions. I also wrote the user manual, and built the tool that answers with the manual in hand — a link to the exact section, and when the manual doesn’t cover it, it says so. Private client repo, hosted on Azure.',
      es: 'Los presupuestistas comparan ofertas de proveedores que llegan como PDFs y planillas, y los números terminan en un Schedule of Values — el Excel del que depende toda la licitación. Yo escribo las reglas de negocio que van adentro: seguros, multiplicadores de GC/GR según la duración de obra, net-outs entre rubros, alternates aceptados y exclusiones. También escribí el manual de usuario y construí la tool que responde con el manual en la mano — con un link a la sección exacta, y cuando el manual no lo cubre, lo dice. Repo privado del cliente, sobre Azure.',
    },
    stack: ['TypeScript', 'React', 'PostgreSQL', 'Anthropic', 'Excel', 'Vitest', 'Azure'],
    links: [],
    featured: true,
    highlights: {
      en: ['Schedule of Values rules', 'Answers link to the manual', 'Private client repo'],
      es: ['Reglas del Schedule of Values', 'Respuestas con link al manual', 'Repo privado'],
    },
  },
  {
    name: 'AnswerAgent',
    tagline: {
      en: 'Production AI agent orchestration platform for enterprise clients',
      es: 'Plataforma de orquestación de agentes de IA en producción para clientes enterprise',
    },
    description: {
      en: 'An agent orchestration platform built on Flowise, running on AWS Fargate. I work on the parts that decide whether an agent can be trusted in production: tenant isolation on the document store, runtime guardrails on the public embed endpoint, and the five-second timeout that turned out to be a no-op because the MCP subprocess never inherited its env. Tracing on every call, so when it misbehaves at 3am there is something to read.',
      es: 'Una plataforma de orquestación de agentes construida sobre Flowise, corriendo en AWS Fargate. Trabajo en las partes que definen si se puede confiar en un agente en producción: el aislamiento por tenant del document store, los guardrails en runtime del endpoint público de embed, y el timeout de cinco segundos que resultó no hacer nada porque el subproceso MCP nunca heredaba su env. Tracing en cada llamada, así cuando se porta mal a las 3 de la mañana hay algo para leer.',
    },
    stack: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'MCP', 'RAG', 'Langfuse', 'Fiddler', 'AWS'],
    links: [
      {
        label: 'My 70 merged PRs',
        href: 'https://github.com/the-answerai/theanswer/pulls?q=is%3Apr+author%3Adiecoscai+is%3Amerged',
        kind: 'github',
      },
      { label: 'Repo', href: 'https://github.com/the-answerai/theanswer', kind: 'github' },
    ],
  },
  {
    name: 'hevy-mcp',
    tagline: {
      en: 'Published Model Context Protocol server for the Hevy fitness API',
      es: 'Servidor Model Context Protocol publicado para la API de fitness de Hevy',
    },
    description: {
      en: 'A public, CI-backed MCP server exposing the Hevy API as 23 strongly-typed tools over stdio for Claude Desktop, Cursor and VS Code. Zod edge-validation with self-correcting errors, dry-run-by-default writes, and schemas auto-generated from Hevy’s OpenAPI spec via a weekly GitHub Actions workflow that opens PRs on drift.',
      es: 'Un servidor MCP público con CI que expone la API de Hevy como 23 tools fuertemente tipadas por stdio para Claude Desktop, Cursor y VS Code. Validación de entrada con Zod, con errores que le dicen al modelo cómo corregirse; escrituras dry-run por defecto; y schemas generados a partir del spec OpenAPI de Hevy, con un workflow semanal de GitHub Actions que abre un PR cuando la API cambia.',
    },
    stack: ['TypeScript', 'MCP', 'Zod', 'GitHub Actions (OIDC)', 'Vitest'],
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/@diecoscai/hevy-mcp', kind: 'npm' },
      { label: 'GitHub', href: 'https://github.com/diecoscai/hevy-mcp', kind: 'github' },
    ],
    highlights: {
      en: ['23 tools', '~340 downloads/mo', 'v0.5.0 · MIT'],
      es: ['23 tools', '~340 descargas/mes', 'v0.5.0 · MIT'],
    },
  },
  {
    name: 'SmartLift',
    tagline: {
      en: 'University thesis — AI workout-generation API',
      es: 'Tesis universitaria — API de generación de rutinas con IA',
    },
    description: {
      en: 'My thesis project at Universidad ORT: a Ruby on Rails backend that generates personalized workout routines with AI, plus user tracking and analytics. The first thing I built where the AI had to hold up in front of someone other than me.',
      es: 'Mi proyecto de tesis en la Universidad ORT: un backend en Ruby on Rails que genera rutinas de entrenamiento personalizadas con IA, con seguimiento de usuarios y métricas. Lo primero que construí donde la IA tenía que aguantar frente a alguien que no fuera yo.',
    },
    stack: ['Ruby on Rails', 'PostgreSQL', 'AI', 'REST API'],
    links: [{ label: 'GitHub', href: 'https://github.com/diecoscai/smartlift_back', kind: 'github' }],
  },
];
