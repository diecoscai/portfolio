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
    name: 'hevy-mcp',
    tagline: {
      en: 'Published Model Context Protocol server for the Hevy fitness API',
      es: 'Servidor Model Context Protocol publicado para la API de fitness de Hevy',
    },
    description: {
      en: 'A public, CI-backed MCP server exposing the Hevy API as 23 strongly-typed tools over stdio for Claude Desktop, Cursor and VS Code. Zod edge-validation with self-correcting errors, dry-run-by-default writes, and schemas auto-generated from Hevy’s OpenAPI spec via a weekly GitHub Actions workflow that opens PRs on drift.',
      es: 'Un servidor MCP público con CI que expone la API de Hevy como 23 tools fuertemente tipadas sobre stdio para Claude Desktop, Cursor y VS Code. Validación de bordes con Zod con errores auto-correctivos, escrituras dry-run por defecto y schemas auto-generados desde el spec OpenAPI de Hevy mediante un workflow semanal de GitHub Actions que abre PRs ante drift.',
    },
    stack: ['TypeScript', 'MCP', 'Zod', 'GitHub Actions (OIDC)', 'Vitest'],
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/@diecoscai/hevy-mcp', kind: 'npm' },
      { label: 'GitHub', href: 'https://github.com/diecoscai/hevy-mcp', kind: 'github' },
    ],
    featured: true,
    highlights: {
      en: ['23 tools', '~611 downloads/mo', 'v0.5.0 · MIT'],
      es: ['23 tools', '~611 descargas/mes', 'v0.5.0 · MIT'],
    },
  },
  {
    name: 'SmartLift',
    tagline: {
      en: 'AI workout-generation API',
      es: 'API de generación de rutinas con IA',
    },
    description: {
      en: 'A Ruby on Rails backend that uses AI to generate personalized workout routines, with user tracking and analytics. Started as a university thesis and continued solo as an independent product exploration.',
      es: 'Un backend en Ruby on Rails que usa IA para generar rutinas de entrenamiento personalizadas, con seguimiento de usuarios y analítica. Nació como tesis universitaria y continuó en solitario como exploración de producto independiente.',
    },
    stack: ['Ruby on Rails', 'PostgreSQL', 'AI', 'REST API'],
    links: [{ label: 'GitHub', href: 'https://github.com/diecoscai/smartlift_back', kind: 'github' }],
  },
  {
    name: 'OpenClaw',
    tagline: {
      en: 'Personal AI assistant framework',
      es: 'Framework de asistente personal de IA',
    },
    description: {
      en: 'A self-hosted AI assistant framework built on Anthropic Claude with a Qwen fallback, deployed on Railway with custom configuration management and gateway authentication.',
      es: 'Un framework de asistente de IA self-hosted construido sobre Anthropic Claude con fallback a Qwen, desplegado en Railway con gestión de configuración a medida y autenticación por gateway.',
    },
    stack: ['TypeScript', 'Anthropic Claude', 'Railway', 'Node.js'],
    links: [],
  },
  {
    name: 'Life OS',
    tagline: {
      en: 'Notion + AI agent productivity system',
      es: 'Sistema de productividad con Notion + agentes de IA',
    },
    description: {
      en: 'A personal operating system spanning 11 Notion databases with AI-agent automation for daily logging and planning, wired together through the Notion API and MCP.',
      es: 'Un sistema operativo personal que abarca 11 bases de datos de Notion con automatización por agentes de IA para registro y planificación diarios, conectado mediante la API de Notion y MCP.',
    },
    stack: ['Notion API', 'MCP', 'AI Agents', 'TypeScript'],
    links: [],
  },
  {
    name: 'Radio Web',
    tagline: {
      en: 'Online radio streaming platform',
      es: 'Plataforma de radio online en streaming',
    },
    description: {
      en: 'A streaming platform with a custom audio player, mini-player, live metadata visualization and social sharing.',
      es: 'Una plataforma de streaming con reproductor de audio a medida, mini-player, visualización de metadata en vivo y compartido social.',
    },
    stack: ['React', 'Redux', 'Material-UI'],
    links: [{ label: 'GitHub', href: 'https://github.com/diecoscai/radio-web', kind: 'github' }],
  },
];
