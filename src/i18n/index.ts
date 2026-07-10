export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export type Localized<T = string> = Record<Locale, T>;

export function getLocale(astroLocale: string | undefined): Locale {
  return astroLocale === 'es' ? 'es' : 'en';
}

interface UIStrings {
  nav: {
    about: string;
    work: string;
    experience: string;
    skills: string;
    contact: string;
    cta: string;
    ariaMain: string;
    ariaHome: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    available: string;
    headline: string;
    viewWork: string;
    getInTouch: string;
    scrollToAbout: string;
  };
  about: {
    kicker: string;
    heading: string;
    portraitAlt: string;
  };
  work: {
    kicker: string;
    heading: string;
    intro: string;
  };
  experience: {
    kicker: string;
    heading: string;
    intro: string;
    education: string;
  };
  skills: {
    kicker: string;
    heading: string;
    intro: string;
  };
  contact: {
    kicker: string;
    heading: string;
    intro: string;
    emailMe: string;
    available: string;
  };
  theme: {
    toLight: string;
    toDark: string;
  };
}

export const ui: Localized<UIStrings> = {
  en: {
    nav: {
      about: 'About',
      work: 'Work',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
      cta: 'Get in touch',
      ariaMain: 'Main',
      ariaHome: 'Diego Costa — home',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      available: 'Available for work',
      headline: 'building LLM agent systems & full-stack products.',
      viewWork: 'View work',
      getInTouch: 'Get in touch',
      scrollToAbout: 'Scroll to about',
    },
    about: {
      kicker: 'About',
      heading: 'Engineering AI systems, end to end.',
      portraitAlt: 'Diego Costa working on his laptop',
    },
    work: {
      kicker: 'Work',
      heading: 'Selected work',
      intro:
        'A few things I’ve designed, shipped and maintained — from published tooling to product explorations.',
    },
    experience: {
      kicker: 'Experience',
      heading: "Where I've been building",
      intro: 'A track record of shipping production AI systems and full-stack products.',
      education: 'Education',
    },
    skills: {
      kicker: 'Stack',
      heading: 'Tools I build with',
      intro: 'The languages, frameworks, and platforms I reach for across the stack.',
    },
    contact: {
      kicker: 'Contact',
      heading: 'Let’s build something.',
      intro: 'Have a project, a role, or an idea worth shipping? I’m one message away.',
      emailMe: 'Email me',
      available: 'Available for work',
    },
    theme: {
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      work: 'Trabajo',
      experience: 'Experiencia',
      skills: 'Stack',
      contact: 'Contacto',
      cta: 'Escribime',
      ariaMain: 'Principal',
      ariaHome: 'Diego Costa — inicio',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
    },
    hero: {
      available: 'Disponible para trabajar',
      headline: 'construyendo sistemas de agentes LLM y productos full-stack.',
      viewWork: 'Ver trabajo',
      getInTouch: 'Escribime',
      scrollToAbout: 'Ir a sobre mí',
    },
    about: {
      kicker: 'Sobre mí',
      heading: 'Ingeniería de sistemas de IA, de punta a punta.',
      portraitAlt: 'Diego Costa trabajando en su laptop',
    },
    work: {
      kicker: 'Trabajo',
      heading: 'Trabajo seleccionado',
      intro:
        'Algunas cosas que diseñé, lancé y mantengo — desde herramientas publicadas hasta exploraciones de producto.',
    },
    experience: {
      kicker: 'Experiencia',
      heading: 'Dónde estuve construyendo',
      intro: 'Una trayectoria entregando sistemas de IA en producción y productos full-stack.',
      education: 'Educación',
    },
    skills: {
      kicker: 'Stack',
      heading: 'Herramientas con las que construyo',
      intro: 'Los lenguajes, frameworks y plataformas que uso en todo el stack.',
    },
    contact: {
      kicker: 'Contacto',
      heading: 'Construyamos algo.',
      intro:
        '¿Tenés un proyecto, un rol o una idea que valga la pena lanzar? Estoy a un mensaje de distancia.',
      emailMe: 'Escribime un mail',
      available: 'Disponible para trabajar',
    },
    theme: {
      toLight: 'Cambiar a tema claro',
      toDark: 'Cambiar a tema oscuro',
    },
  },
};

export const t = (locale: Locale): UIStrings => ui[locale];
