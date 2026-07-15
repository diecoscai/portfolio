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
    cv: string;
    timezone: string;
  };
  theme: {
    toLight: string;
    toDark: string;
  };
  footer: {
    claim: string;
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
      available: 'Open to work',
      headline: 'AI engineer for industries that still run on spreadsheets.',
      viewWork: 'View work',
      getInTouch: 'Get in touch',
      scrollToAbout: 'Scroll to about',
    },
    about: {
      kicker: 'About',
      heading: 'I got here by automating my own job.',
      portraitAlt: 'Diego Costa working on his laptop',
    },
    work: {
      kicker: 'Work',
      heading: 'Some of what I’ve made',
      intro:
        'Two products in production at one company, one published tool, and the thesis where I first put AI in front of someone who wasn’t me. SBI Bids is the client’s repo and stays private — that one I describe, I don’t show. The rest you can open.',
    },
    experience: {
      kicker: 'Experience',
      heading: "Where I've been building",
      intro:
        'Six years in ad operations, then software. The order matters — it’s why I know what a spreadsheet costs the person who has to fill it.',
      education: 'Education',
    },
    skills: {
      kicker: 'Stack',
      heading: 'Tools I build with',
      intro:
        'Grouped by what I built with them, not by how well I think I know them. If something shows up in three places, that’s your answer on how often I use it.',
    },
    contact: {
      kicker: 'Contact',
      heading: 'Looking for a product team.',
      intro:
        'Remote, on a team that ships — as a contractor through my own company, or as a full-time hire. Either way, write to me and ask me about anything above. It’s all checkable.',
      emailMe: 'Email me',
      cv: 'CV (PDF)',
      timezone:
        'Montevideo · UTC-3 — one to two hours ahead of New York depending on the season: the full East Coast day, and West Coast mornings through early afternoon',
    },
    theme: {
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
    },
    footer: {
      claim: 'Ask me about any number on this page. I’ll show you where it comes from.',
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      work: 'Trabajo',
      experience: 'Experiencia',
      skills: 'Stack',
      contact: 'Contacto',
      cta: 'Hablemos',
      ariaMain: 'Principal',
      ariaHome: 'Diego Costa — inicio',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
    },
    hero: {
      available: 'Disponible',
      headline: 'Ingeniero de IA para industrias que todavía se manejan con planillas.',
      viewWork: 'Ver trabajo',
      getInTouch: 'Hablemos',
      scrollToAbout: 'Ir a la sección Sobre mí',
    },
    about: {
      kicker: 'Sobre mí',
      heading: 'Llegué acá automatizando mi propio trabajo.',
      portraitAlt: 'Diego Costa trabajando en su laptop',
    },
    work: {
      kicker: 'Trabajo',
      heading: 'Algunas cosas que hice',
      intro:
        'Dos plataformas de clientes en producción, una herramienta publicada y la tesis donde puse IA por primera vez frente a alguien que no fuera yo. SBI Bids es el repo del cliente y se queda privado — ese lo cuento, no lo muestro. Los demás los podés abrir.',
    },
    experience: {
      kicker: 'Experiencia',
      heading: 'Por dónde pasé',
      intro:
        'Seis años en ad operations y después software. El orden importa: por eso sé lo que le cuesta una planilla al que la tiene que llenar.',
      education: 'Educación',
    },
    skills: {
      kicker: 'Stack',
      heading: 'Con qué trabajo',
      intro:
        'Agrupadas por lo que hice con ellas, no por lo bien que creo que las manejo. Si algo aparece en tres lugares, ya sabés cuánto lo uso.',
    },
    contact: {
      kicker: 'Contacto',
      heading: 'Busco un equipo de producto.',
      intro:
        'Remoto, en un equipo que saca producto — como contractor a través de mi empresa, o en relación de dependencia. Como sea, escribime y preguntame por cualquier cosa de acá arriba: todo se puede verificar.',
      emailMe: 'Escribime',
      cv: 'CV (PDF)',
      timezone:
        'Montevideo · UTC-3 — una o dos horas adelante de Nueva York según la época: la jornada entera de la costa este, y la mañana de la costa oeste',
    },
    theme: {
      toLight: 'Cambiar a tema claro',
      toDark: 'Cambiar a tema oscuro',
    },
    footer: {
      claim: 'Preguntame por cualquier número de esta página y te muestro de dónde sale.',
    },
  },
};

export const t = (locale: Locale): UIStrings => ui[locale];
