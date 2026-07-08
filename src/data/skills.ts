export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: 'AI & LLM Engineering',
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
    title: 'LLM Observability & Safety',
    items: ['Langfuse', 'Fiddler AI Guardrails', 'Evaluation pipelines', 'Model selection'],
  },
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Ruby', 'C# (.NET)', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Astro', 'Redux', 'Tailwind CSS', 'Material-UI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'Ruby on Rails', 'REST APIs', 'Flowise'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Supabase', 'Vector databases', 'Redis · BullMQ'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'GitHub Actions (OIDC)', 'Azure', 'Railway', 'Render', 'CI/CD'],
  },
  {
    title: 'Testing',
    items: ['Vitest', 'Playwright (E2E)', 'TDD', 'Regression testing'],
  },
];
