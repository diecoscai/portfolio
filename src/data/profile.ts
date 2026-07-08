export const profile = {
  name: 'Diego Costa',
  role: 'AI Engineer & Full Stack Developer',
  location: 'Montevideo, Uruguay',
  timezone: 'UTC-3',
  available: true,
  email: 'diecoscai@gmail.com',
  tagline:
    'I build LLM-powered agent systems and full-stack products — from Model Context Protocol servers to production AI platforms serving enterprise clients.',
  summary: [
    'AI Engineer and Full Stack Developer with 5+ years of production software experience, the last two focused on LLM integration and AI agent systems.',
    'I specialize in Retrieval-Augmented Generation, the Model Context Protocol, agent orchestration, and LLM observability (Langfuse) and runtime guardrails (Fiddler AI) — debugging real production AI incidents and shipping end-to-end features in TypeScript monorepos.',
    'Active open-source author of MCP servers and developer tooling. I operate through my own company, Caivanode SAS, exporting software to US clients.',
  ],
  metrics: [
    { value: '5+', label: 'Years shipping software' },
    { value: '267', label: 'Merged pull requests' },
    { value: '70', label: 'Public PRs (open source)' },
    { value: '1', label: 'Published npm package' },
  ],
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'B2 · Upper-intermediate' },
  ],
  socials: [
    { label: 'GitHub', handle: '@diecoscai', href: 'https://github.com/diecoscai', icon: 'github' },
    {
      label: 'LinkedIn',
      handle: 'diego-costa-caivano',
      href: 'https://linkedin.com/in/diego-costa-caivano',
      icon: 'linkedin',
    },
    { label: 'Email', handle: 'diecoscai@gmail.com', href: 'mailto:diecoscai@gmail.com', icon: 'mail' },
  ],
} as const;

export type Profile = typeof profile;
