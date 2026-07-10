import type { Localized } from '../i18n';

export const profile = {
  name: 'Diego Costa',
  role: {
    en: 'AI Engineer & Full Stack Developer',
    es: 'Ingeniero de IA y Desarrollador Full Stack',
  } satisfies Localized,
  location: 'Montevideo, Uruguay',
  timezone: 'UTC-3',
  available: true,
  email: 'diecoscai@gmail.com',
  tagline: {
    en: 'I build LLM-powered agent systems and full-stack products — from Model Context Protocol servers to production AI platforms serving enterprise clients.',
    es: 'Construyo sistemas de agentes potenciados por LLMs y productos full-stack — desde servidores Model Context Protocol hasta plataformas de IA en producción para clientes enterprise.',
  } satisfies Localized,
  summary: {
    en: [
      'AI Engineer and Full Stack Developer with 5+ years of production software experience, the last two focused on LLM integration and AI agent systems.',
      'I specialize in Retrieval-Augmented Generation, the Model Context Protocol, agent orchestration, and LLM observability (Langfuse) and runtime guardrails (Fiddler AI) — debugging real production AI incidents and shipping end-to-end features in TypeScript monorepos.',
      'Active open-source author of MCP servers and developer tooling. I operate through my own company, Caivanode SAS, exporting software to US clients.',
    ],
    es: [
      'Ingeniero de IA y Desarrollador Full Stack con más de 5 años de experiencia en software en producción, los últimos dos enfocados en integración de LLMs y sistemas de agentes de IA.',
      'Me especializo en Retrieval-Augmented Generation, el Model Context Protocol, orquestación de agentes, observabilidad de LLMs (Langfuse) y guardrails en runtime (Fiddler AI) — depurando incidentes reales de IA en producción y entregando features end-to-end en monorepos TypeScript.',
      'Autor open-source activo de servidores MCP y herramientas para desarrolladores. Opero a través de mi propia empresa, Caivanode SAS, exportando software a clientes de Estados Unidos.',
    ],
  } satisfies Localized<string[]>,
  metrics: [
    { value: '3+', label: { en: 'Years as a developer', es: 'Años como desarrollador' } },
    { value: '267', label: { en: 'Merged pull requests', es: 'Pull requests mergeados' } },
    { value: '70', label: { en: 'Public PRs (open source)', es: 'PRs públicos (open source)' } },
    { value: '1', label: { en: 'Published npm package', es: 'Paquete npm publicado' } },
  ],
  languages: [
    {
      name: { en: 'Spanish', es: 'Español' },
      level: { en: 'Native', es: 'Nativo' },
    },
    {
      name: { en: 'English', es: 'Inglés' },
      level: { en: 'B2 · Upper-intermediate', es: 'B2 · Intermedio alto' },
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
    { label: 'Email', handle: 'diecoscai@gmail.com', href: 'mailto:diecoscai@gmail.com', icon: 'mail' },
  ],
} as const;

export type Profile = typeof profile;
