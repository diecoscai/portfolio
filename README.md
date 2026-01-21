# Diego Cosca - Portfolio Website

A modern, responsive portfolio website built with Astro, Tailwind CSS, and DaisyUI.

## Features

- **Light/Dark Theme**: Toggle between themes with preference saved in localStorage
- **Responsive Design**: Mobile-first layout that works on all device sizes
- **Smooth Scroll Navigation**: Auto-scroll sections via wheel, touch, and keyboard
- **GitHub Integration**: Fetches repositories from GitHub API at build time
- **Component-Based Architecture**: Modular Astro components for maintainability

## Sections

1. **Profile**: Introduction with personal bio and resume link
2. **Blog**: Interactive cards linking to Life and Tech blogs
3. **Projects**: GitHub repositories with live API data
4. **Contact**: Contact information and social links

## Tech Stack

- [Astro](https://astro.build/) - Meta-framework for content-driven websites
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Tailwind CSS component library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
# Build the site
npm run build

# Preview the build
npm run preview
```

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── Navbar.astro
│   │   ├── ProfileSection.astro
│   │   ├── BlogSection.astro
│   │   ├── ProjectsSection.astro
│   │   ├── ContactSection.astro
│   │   ├── Footer.astro
│   │   ├── SocialSidebar.astro
│   │   ├── SectionIndicator.astro
│   │   └── BottomIndicator.astro
│   ├── layouts/
│   │   └── Layout.astro  # Base HTML layout
│   ├── pages/
│   │   └── index.astro   # Main page
│   └── styles/
│       └── global.css    # Global styles and themes
├── astro.config.mjs      # Astro configuration
├── tailwind.config.js    # Tailwind configuration
└── package.json
```

## Customization

### Theme Colors

Edit `src/styles/global.css` to customize the DaisyUI themes:

```css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}
```

### Personal Information

Edit the respective component files in `src/components/` to update:
- `ProfileSection.astro` - Name, bio, and resume link
- `ContactSection.astro` - Email and social links
- `ProjectsSection.astro` - GitHub username for API fetch

## License

MIT License - Feel free to use this template for your own portfolio.
