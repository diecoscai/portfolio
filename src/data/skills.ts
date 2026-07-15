import type { Localized } from '../i18n';

export interface SkillGroup {
  title: Localized;
  note: Localized;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: { en: 'AnswerAgent', es: 'AnswerAgent' },
    note: {
      en: 'Agent orchestration in production: the tenant isolation on the document store, the MCP subprocess, the guardrails on the public embed endpoint.',
      es: 'Orquestación de agentes en producción: el aislamiento por tenant del document store, el subproceso MCP, los guardrails del endpoint público de embed.',
    },
    items: [
      'TypeScript',
      'Node.js',
      'React',
      'PostgreSQL',
      'MCP',
      'RAG',
      'Flowise',
      'Langfuse',
      'Fiddler',
      'AWS',
    ],
  },
  {
    title: { en: 'SBI Bids', es: 'SBI Bids' },
    note: {
      en: 'Construction bidding: the Schedule-of-Values rules, the user manual, and the tool that answers from it.',
      es: 'Licitaciones de obra: las reglas del Schedule of Values, el manual de usuario y la tool que responde con el manual en la mano.',
    },
    items: ['TypeScript', 'React', 'PostgreSQL', 'Anthropic', 'Excel', 'Vitest'],
  },
  {
    title: { en: 'An internal desktop product', es: 'Un producto de escritorio interno' },
    note: {
      en: 'Signed builds, auto-updates and the production monitoring behind them. It shipped, then the company shut it down.',
      es: 'Builds firmados, auto-updates y el monitoreo de producción detrás. Salió a producción y después la empresa lo dio de baja.',
    },
    items: ['Electron', 'Docker', 'Playwright', 'AWS (CloudWatch · Lambda)', 'GitHub Actions'],
  },
  {
    title: { en: 'hevy-mcp', es: 'hevy-mcp' },
    note: {
      en: '23 tools on npm: schemas generated from an OpenAPI spec, validated at the edge, tested on every push.',
      es: '23 tools en npm: schemas generados desde un spec OpenAPI, validados en la entrada y testeados en cada push.',
    },
    items: ['TypeScript', 'MCP', 'Zod', 'Vitest', 'GitHub Actions (OIDC)'],
  },
  {
    title: { en: 'This page', es: 'Esta página' },
    note: {
      en: 'Static, no framework runtime, 100/100 on Lighthouse. You are looking at the evidence.',
      es: 'Estática, sin runtime de framework, 100/100 en Lighthouse. Estás mirando la evidencia.',
    },
    items: ['Astro', 'Tailwind CSS'],
  },
];
