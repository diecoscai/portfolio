export interface ProjectLink {
  label: string;
  href: string;
  kind: 'github' | 'npm' | 'live' | 'docs';
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    name: 'hevy-mcp',
    tagline: 'Published Model Context Protocol server for the Hevy fitness API',
    description:
      'A public, CI-backed MCP server exposing the Hevy API as 23 strongly-typed tools over stdio for Claude Desktop, Cursor and VS Code. Zod edge-validation with self-correcting errors, dry-run-by-default writes, and schemas auto-generated from Hevy’s OpenAPI spec via a weekly GitHub Actions workflow that opens PRs on drift.',
    stack: ['TypeScript', 'MCP', 'Zod', 'GitHub Actions (OIDC)', 'Vitest'],
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/@diecoscai/hevy-mcp', kind: 'npm' },
      { label: 'GitHub', href: 'https://github.com/diecoscai/hevy-mcp', kind: 'github' },
    ],
    featured: true,
    highlights: ['23 tools', '~611 downloads/mo', 'v0.5.0 · MIT'],
  },
  {
    name: 'SmartLift',
    tagline: 'AI workout-generation API',
    description:
      'A Ruby on Rails backend that uses AI to generate personalized workout routines, with user tracking and analytics. Started as a university thesis and continued solo as an independent product exploration.',
    stack: ['Ruby on Rails', 'PostgreSQL', 'AI', 'REST API'],
    links: [{ label: 'GitHub', href: 'https://github.com/diecoscai/smartlift_back', kind: 'github' }],
  },
  {
    name: 'OpenClaw',
    tagline: 'Personal AI assistant framework',
    description:
      'A self-hosted AI assistant framework built on Anthropic Claude with a Qwen fallback, deployed on Railway with custom configuration management and gateway authentication.',
    stack: ['TypeScript', 'Anthropic Claude', 'Railway', 'Node.js'],
    links: [],
  },
  {
    name: 'Life OS',
    tagline: 'Notion + AI agent productivity system',
    description:
      'A personal operating system spanning 11 Notion databases with AI-agent automation for daily logging and planning, wired together through the Notion API and MCP.',
    stack: ['Notion API', 'MCP', 'AI Agents', 'TypeScript'],
    links: [],
  },
  {
    name: 'Radio Web',
    tagline: 'Online radio streaming platform',
    description:
      'A streaming platform with a custom audio player, mini-player, live metadata visualization and social sharing.',
    stack: ['React', 'Redux', 'Material-UI'],
    links: [{ label: 'GitHub', href: 'https://github.com/diecoscai/radio-web', kind: 'github' }],
  },
];
