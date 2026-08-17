export type Locale = 'en' | 'es';

export interface ExperienceEntry {
  role: string;
  company: string;
  date: string;
  loc: string;
  desc: string;
  bullets: string[];
}

export interface ProjectStep {
  k: string;
  h: string;
  t: string;
}

export interface ProjectCard {
  title: string;
  wip: boolean;
  desc: string;
  tags: string[];
  link: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface EducationEntry {
  t: string;
  s: string;
  d: string;
}

export interface Dict {
  meta: { title: string; description: string };
  nav: string[];
  badge: string;
  tagline: string;
  cv: string;
  view: string;
  inDev: string;
  secExp: string;
  secProj: string;
  secAbout: string;
  secEdu: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  exp: ExperienceEntry[];
  p1steps: ProjectStep[];
  p2steps: ProjectStep[];
  cards: ProjectCard[];
  stackGroups: StackGroup[];
  edu: EducationEntry[];
  contactH: string;
  contactBtn: string;
  contactMicro: string;
}

const en: Dict = {
  meta: {
    title: 'Cimar Rodrigo Morales — Backend Developer',
    description:
      'Backend developer based in La Paz, Bolivia. I build backend services in the financial sector — and REST APIs in Go on my own time.',
  },
  nav: ['experience', 'projects', 'about', 'contact'],
  badge: 'Open to remote backend roles',
  tagline:
    'I build backend services in the financial sector — and REST APIs in Go on my own time. Based in La Paz, Bolivia 🇧🇴',
  cv: 'Download CV',
  view: 'view source',
  inDev: 'In development',
  secExp: 'Experience',
  secProj: 'Projects',
  secAbout: 'About me',
  secEdu: 'Education',
  aboutP1: "Hi! I'm a backend developer based in La Paz, Bolivia.",
  aboutP2:
    'I work at Banco Bisa, building backend services and internal applications — .NET and Java on the server, Angular on the front end, Oracle and SQL Server underneath.',
  aboutP3:
    "Right now I'm focused on Go. I'm building REST APIs in my free time, applying hexagonal architecture and DDD, and studying how the language works under the hood — concurrency, internals, the parts most people skip. It's where I want to take my career.",
  exp: [
    {
      role: 'Automation Developer',
      company: 'Banco Bisa S.A.',
      date: 'Jul 2025 – Present',
      loc: 'La Paz, Bolivia',
      desc: "Backend developer on the automation team, building services and internal applications for the bank's operations.",
      bullets: [
        'Designed and built a full-stack internal application end to end: .NET Core REST API, Angular front end, Oracle persistence — from requirements to production.',
        "Develop migration processes for the bank's core platform move from AS400/DB2 to Oracle, including data validation and reconciliation against production systems.",
      ],
    },
    {
      role: 'Junior Application Developer',
      company: 'Banco Bisa S.A.',
      date: 'Feb 2025 – Jul 2025',
      loc: 'La Paz, Bolivia',
      desc: '',
      bullets: [
        "Migrated a tax ID (NIT) validation service from RPG to Java, part of the bank's move off its legacy AS400 stack.",
        'Built a Spring Boot mock service for NIT validation, wrapping an existing standalone program as a REST service so other teams could develop and test against it independently.',
      ],
    },
    {
      role: 'Intern',
      company: 'Faculty of Humanities and Education Sciences (UMSA)',
      date: 'Jul 2024 – Dec 2024',
      loc: 'La Paz, Bolivia',
      desc: '',
      bullets: [
        'Developed and maintained backend applications in Java and Spring Boot.',
        "Built RESTful APIs consumed by the faculty's front-end applications.",
        'Containerized services with Docker and set up CI/CD pipelines.',
      ],
    },
    {
      role: 'Teaching Assistant',
      company: 'Universidad Mayor de San Andrés',
      date: 'Mar 2024 – Jun 2024',
      loc: 'La Paz, Bolivia',
      desc: '',
      bullets: [
        'Taught programming fundamentals to first-semester students and published the course material on GitHub (Aux-111).',
      ],
    },
  ],
  p1steps: [
    {
      k: '01 / Plataforma Académica',
      h: 'The problem',
      t: "Students at UMSA's Faculty of Humanities had no central place to share study material.",
    },
    {
      k: '01 / Plataforma Académica',
      h: 'The build',
      t: 'A sharing platform where students upload course material, comment and vote. Weekly and global leaderboards surface the best contributors. Reported content routes to a moderation queue with reviewer roles. Google OAuth2 — no passwords stored. Spring Boot REST API + Vue.',
    },
    {
      k: '01 / Plataforma Académica',
      h: 'The result',
      t: "My undergraduate thesis — deployed to production on the faculty's intranet, where students still use it.",
    },
  ],
  p2steps: [
    {
      k: '02 / finish-line API',
      h: 'The build',
      t: 'Backend for a race registration platform, built in Go with Gin. QR payment gateway integration with atomic transaction handling, hexagonal architecture, OpenAPI-documented REST API.',
    },
    {
      k: '02 / finish-line API',
      h: 'The status',
      t: 'Work in progress — the registration and payment flows are being built in the open.',
    },
  ],
  cards: [
    {
      title: 'Payment Management API',
      wip: true,
      desc: 'Payment management API for residential building administration — income, expenses, co-owner dues and debt tracking. Go, hexagonal architecture and DDD Lite.',
      tags: ['Go', 'Gin', 'DDD'],
      link: 'https://github.com/CimarRodrigo/go-payment-management-api',
    },
    {
      title: 'Aux-111',
      wip: false,
      desc: 'Teaching material for Introduction to Programming at UMSA — Java exercises written for first-semester students, still used as a reference.',
      tags: ['Java', 'Teaching'],
      link: 'https://github.com/CimarRodrigo/Aux-111',
    },
  ],
  stackGroups: [
    { label: 'building with', items: ['Go', 'Java / Spring Boot', 'C# / .NET'] },
    { label: 'front end when needed', items: ['Vue', 'Angular', 'TypeScript'] },
    { label: 'data', items: ['PostgreSQL', 'Oracle', 'SQL Server', 'MySQL'] },
    { label: 'tooling', items: ['Docker', 'Git', 'GitHub Actions', 'Linux', 'Neovim'] },
  ],
  edu: [
    {
      t: 'Licenciatura en Informática (B.Sc.), Computer Systems Engineering',
      s: 'Universidad Mayor de San Andrés · 2019–2025',
      d: 'Thesis deployed to production at the Faculty of Humanities.',
    },
    {
      t: 'English — B2 (Upper-Intermediate)',
      s: 'Centro Boliviano Americano, La Paz',
      d: '',
    },
  ],
  contactH: 'Want to talk? My inbox is open.',
  contactBtn: 'Say hello',
  contactMicro: '→ 200 OK · replies in < 24h',
};

const es: Dict = {
  meta: {
    title: 'Cimar Rodrigo Morales — Backend Developer',
    description:
      'Desarrollador backend radicado en La Paz, Bolivia. Construyo servicios backend en el sector financiero — y APIs REST en Go en mi tiempo libre.',
  },
  nav: ['experiencia', 'proyectos', 'sobre mí', 'contacto'],
  badge: 'Abierto a roles backend remotos',
  tagline:
    'Construyo servicios backend en el sector financiero — y APIs REST en Go en mi tiempo libre. Desde La Paz, Bolivia 🇧🇴',
  cv: 'Descargar CV',
  view: 'ver código',
  inDev: 'En desarrollo',
  secExp: 'Experiencia',
  secProj: 'Proyectos',
  secAbout: 'Sobre mí',
  secEdu: 'Educación',
  aboutP1: '¡Hola! Soy desarrollador backend, radicado en La Paz, Bolivia.',
  aboutP2:
    'Trabajo en Banco Bisa, construyendo servicios backend y aplicaciones internas — .NET y Java en el servidor, Angular en el front end, Oracle y SQL Server por debajo.',
  aboutP3:
    'Ahora mismo estoy enfocado en Go. Construyo APIs REST en mi tiempo libre, aplicando arquitectura hexagonal y DDD, y estudio cómo funciona el lenguaje por dentro — concurrencia, internals, las partes que la mayoría se salta. Es hacia donde quiero llevar mi carrera.',
  exp: [
    {
      role: 'Desarrollador de Automatización',
      company: 'Banco Bisa S.A.',
      date: 'Jul 2025 – Presente',
      loc: 'La Paz, Bolivia',
      desc: 'Desarrollador backend en el equipo de automatización, construyendo servicios y aplicaciones internas para las operaciones del banco.',
      bullets: [
        'Diseñé y construí una aplicación interna full-stack de punta a punta: API REST en .NET Core, front end en Angular y persistencia en Oracle — desde los requerimientos hasta producción.',
        'Desarrollo procesos de migración para el cambio de la plataforma core del banco de AS400/DB2 a Oracle, incluyendo validación y conciliación de datos sobre sistemas en producción.',
      ],
    },
    {
      role: 'Desarrollador de Aplicaciones Junior',
      company: 'Banco Bisa S.A.',
      date: 'Feb 2025 – Jul 2025',
      loc: 'La Paz, Bolivia',
      desc: '',
      bullets: [
        'Migré un servicio de validación de NIT de RPG a Java, parte de la salida del banco de su stack legado AS400.',
        'Construí un servicio mock en Spring Boot para la validación de NIT, envolviendo un programa standalone existente como servicio REST para que otros equipos pudieran desarrollar y probar de forma independiente.',
      ],
    },
    {
      role: 'Pasante',
      company: 'Facultad de Humanidades y Ciencias de la Educación (UMSA)',
      date: 'Jul 2024 – Dic 2024',
      loc: 'La Paz, Bolivia',
      desc: '',
      bullets: [
        'Desarrollé y mantuve aplicaciones backend en Java y Spring Boot.',
        'Construí APIs RESTful consumidas por las aplicaciones front-end de la facultad.',
        'Empaqueté servicios en contenedores Docker y configuré pipelines de CI/CD.',
      ],
    },
    {
      role: 'Auxiliar de Docencia',
      company: 'Universidad Mayor de San Andrés',
      date: 'Mar 2024 – Jun 2024',
      loc: 'La Paz, Bolivia',
      desc: '',
      bullets: [
        'Enseñé fundamentos de programación a estudiantes de primer semestre y publiqué el material del curso en GitHub (Aux-111).',
      ],
    },
  ],
  p1steps: [
    {
      k: '01 / Plataforma Académica',
      h: 'El problema',
      t: 'Los estudiantes de la Facultad de Humanidades de la UMSA no tenían un lugar central para compartir material de estudio.',
    },
    {
      k: '01 / Plataforma Académica',
      h: 'La construcción',
      t: 'Una plataforma donde los estudiantes suben material de sus cursos, comentan y votan. Rankings semanales y globales destacan a los mejores contribuidores. El contenido reportado pasa a una cola de moderación con roles de revisor. Google OAuth2 — sin contraseñas almacenadas. API REST en Spring Boot + Vue.',
    },
    {
      k: '01 / Plataforma Académica',
      h: 'El resultado',
      t: 'Mi tesis de licenciatura — desplegada a producción en la intranet de la facultad, donde los estudiantes la siguen usando.',
    },
  ],
  p2steps: [
    {
      k: '02 / finish-line API',
      h: 'La construcción',
      t: 'Backend para una plataforma de inscripción a carreras, construido en Go con Gin. Integración con pasarela de pagos QR con manejo atómico de transacciones, arquitectura hexagonal y API REST documentada con OpenAPI.',
    },
    {
      k: '02 / finish-line API',
      h: 'El estado',
      t: 'Trabajo en progreso — los flujos de inscripción y pago se están construyendo en abierto.',
    },
  ],
  cards: [
    {
      title: 'Payment Management API',
      wip: true,
      desc: 'API de gestión de pagos para administración de edificios residenciales — ingresos, gastos, cuotas de copropietarios y seguimiento de deudas. Go, arquitectura hexagonal y DDD Lite.',
      tags: ['Go', 'Gin', 'DDD'],
      link: 'https://github.com/CimarRodrigo/go-payment-management-api',
    },
    {
      title: 'Aux-111',
      wip: false,
      desc: 'Material de enseñanza para Introducción a la Programación en la UMSA — ejercicios en Java escritos para estudiantes de primer semestre, todavía usados como referencia.',
      tags: ['Java', 'Docencia'],
      link: 'https://github.com/CimarRodrigo/Aux-111',
    },
  ],
  stackGroups: [
    { label: 'construyo con', items: ['Go', 'Java / Spring Boot', 'C# / .NET'] },
    { label: 'front end cuando hace falta', items: ['Vue', 'Angular', 'TypeScript'] },
    { label: 'datos', items: ['PostgreSQL', 'Oracle', 'SQL Server', 'MySQL'] },
    { label: 'herramientas', items: ['Docker', 'Git', 'GitHub Actions', 'Linux', 'Neovim'] },
  ],
  edu: [
    {
      t: 'Licenciatura en Informática, Ingeniería de Sistemas Computacionales',
      s: 'Universidad Mayor de San Andrés · 2019–2025',
      d: 'Tesis desplegada a producción en la Facultad de Humanidades.',
    },
    {
      t: 'Inglés — B2 (Intermedio alto)',
      s: 'Centro Boliviano Americano, La Paz',
      d: '',
    },
  ],
  contactH: '¿Hablamos? Mi bandeja de entrada está abierta.',
  contactBtn: 'Escríbeme',
  contactMicro: '→ 200 OK · respondo en < 24h',
};

const dictionaries: Record<Locale, Dict> = { en, es };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}

export function localePath(locale: Locale, hash = ''): string {
  return (locale === 'en' ? '/' : '/es/') + hash;
}

export function cvHref(locale: Locale): string {
  return locale === 'es' ? '/cv-cimar-morales-es.pdf' : '/cv-cimar-morales-en.pdf';
}

export const SOCIAL = {
  github: 'https://github.com/CimarRodrigo',
  linkedin: 'https://linkedin.com/in/cimar-rodrigo-morales',
  email: 'mailto:rdo15072001@gmail.com',
} as const;
