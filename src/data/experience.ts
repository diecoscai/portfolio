export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export const experience: Role[] = [
  {
    company: 'AnswerAgent AI (The Answer AI)',
    title: 'AI Engineer',
    period: 'Jun 2025 — Present',
    location: 'Remote · Montevideo',
    summary:
      'Contributing engineer on a production AI agent orchestration platform (built on Flowise, deployed on AWS Fargate) serving enterprise clients. 70 merged PRs on the public monorepo.',
    highlights: [
      'Diagnosed and resolved production incidents in client-facing AI research agents via LLM-observability debugging (Langfuse traces + Langfuse MCP) and config-level fixes.',
      'Improved MCP reliability with request timeouts and batched vectorstore chunk lookups; applied Fiddler runtime guardrails to the embed endpoint.',
      'Enforced multi-tenant document-store isolation and fixed a PostgreSQL parameter-overflow on bulk chunk deletes.',
      'Owned the Schedule-of-Values Excel engine for an enterprise construction-bid product — grew the test suite 135 → 392 and eliminated 490 spreadsheet errors.',
    ],
    tags: ['TypeScript', 'RAG', 'MCP', 'Langfuse', 'Fiddler', 'AWS', 'PostgreSQL'],
  },
  {
    company: 'Caivanode SAS',
    title: 'Founder & AI Engineer',
    period: 'Feb 2024 — Present',
    location: 'Montevideo',
    summary:
      'Independent practice designing, building and deploying AI agent systems and full-stack apps for clients across advertising, e-commerce and operations. Operating through a Uruguayan company exporting to US clients.',
    highlights: [
      'Architected production AI agents on Claude (Sonnet/Opus), GPT-4o-mini and OpenRouter for research, content generation and operations automation.',
      'Built MCP integrations connecting agents to Notion, Slack and Google Workspace.',
      'Developed a Deal Management module for a DSP advertising platform (React + Node.js), improving campaign targeting.',
      'Configured a client Shopify storefront from scratch and built an SEO plan to improve search ranking.',
    ],
    tags: ['Anthropic', 'OpenAI', 'React', 'Node.js', 'MCP', 'Shopify'],
  },
  {
    company: 'Entravision',
    title: 'Advertising Operator & Developer',
    period: 'Jun 2018 — Dec 2023',
    location: 'Montevideo',
    summary:
      'Built and operated tools for a programmatic advertising (DSP) platform and interactive ad experiences, while training regional teams and driving process automation.',
    highlights: [
      'Built interactive ad experiences for Spotify campaigns (React, HTML5, CSS3, Bootstrap).',
      'Developed and maintained backend tooling for the DSP platform (Node.js, SQL).',
      'Automated internal processes with custom scripts, cutting manual operational tasks by 30%.',
      'Trained 200+ team members across regions, reducing support tickets by 25%; acted as Scrum Master.',
    ],
    tags: ['React', 'Node.js', 'SQL', 'Scrum'],
  },
];

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export const education: Education[] = [
  {
    school: 'Universidad ORT Uruguay',
    degree: 'Programmer Analyst (Analista en Programación)',
    period: '2022 — 2025',
  },
  {
    school: 'CEIBAL · Jóvenes a Programar',
    degree: 'Web Development Diploma',
    period: '2021',
  },
];
