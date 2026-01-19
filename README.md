# Diego Cosca - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- **Light/Dark Theme**: Toggle between light and dark themes with preference saved in localStorage
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Smooth Animations**: Scroll-triggered animations and smooth transitions
- **Carousel Showcase**: Interactive project showcase with navigation
- **Modern UI**: Clean, minimal design with attention to typography and spacing

## Sections

1. **Profile**: Introduction with personal bio and resume link
2. **Showcases**: Highlighted projects with descriptions
3. **Projects**: GitHub repositories display
4. **Contact**: Contact information and social links

## Technologies

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript
- Google Fonts (Inter)

## Getting Started

Simply open `index.html` in a web browser to view the portfolio.

For development, you can use any local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve
```

## Customization

### Personal Information
Edit `index.html` to update:
- Name and bio in the profile section
- Project information in showcases and projects sections
- Contact information and social links

### Theme Colors
Edit `styles.css` CSS variables in `:root` (light theme) and `[data-theme="dark"]` (dark theme):
- `--bg-primary`: Main background color
- `--text-primary`: Main text color
- `--accent-color`: Accent/highlight color

### Adding Projects
Add new project cards in the `projects-grid` section of `index.html`.

## License

MIT License - Feel free to use this template for your own portfolio.
