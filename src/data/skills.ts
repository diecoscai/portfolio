import type { Localized } from '../i18n';

export interface SkillGroup {
  title: Localized;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: { en: 'AI & LLM Engineering', es: 'Ingeniería de IA y LLMs' },
    items: [
      'OpenAI',
      'Anthropic Claude',
      'Google Gemini',
      'OpenRouter',
      'RAG',
      'Model Context Protocol',
      'Agent orchestration',
      'Prompt engineering',
    ],
  },
  {
    title: { en: 'LLM Observability & Safety', es: 'Observabilidad y Seguridad de LLMs' },
    items: ['Langfuse', 'Fiddler AI Guardrails', 'Evaluation pipelines', 'Model selection'],
  },
  {
    title: { en: 'Languages', es: 'Lenguajes' },
    items: ['TypeScript', 'JavaScript', 'Python', 'Ruby', 'C# (.NET)', 'SQL'],
  },
  {
    title: { en: 'Frontend', es: 'Frontend' },
    items: ['React', 'Next.js', 'Astro', 'Redux', 'Tailwind CSS', 'Material-UI'],
  },
  {
    title: { en: 'Backend', es: 'Backend' },
    items: ['Node.js', 'Express', 'Ruby on Rails', 'REST APIs', 'Flowise'],
  },
  {
    title: { en: 'Data', es: 'Datos' },
    items: ['PostgreSQL', 'MongoDB', 'Supabase', 'Vector databases', 'Redis · BullMQ'],
  },
  {
    title: { en: 'Cloud & DevOps', es: 'Cloud y DevOps' },
    items: ['AWS', 'Docker', 'GitHub Actions (OIDC)', 'Azure', 'Railway', 'Render', 'CI/CD'],
  },
  {
    title: { en: 'Testing', es: 'Testing' },
    items: ['Vitest', 'Playwright (E2E)', 'TDD', 'Regression testing'],
  },
];
