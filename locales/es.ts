import { backend, creator, mobile, web } from '@/public/images';

export const homePage = {
  metadata: {
    title: 'Desarrollo web jm3',
    description: 'Página de inicio para el desarrollador web full stack jm3',
  },
  heroSection: {
    title: 'Un mundo de soluciones al alcance de tu mano',
    subtitle: 'El desarrollador web que buscas, para las soluciones que necesitas.',
    callToAction: 'Descubrir más',
  },
  aboutSection: {
    title: 'Hola, soy',
    subtitle: 'Desarrollo las aplicaciones web, que su negocio necesita.',
    ul: [
      'SEO friendly',
      'Internacionalización',
      'Responsive Design',
      'Autenticación',
      'Bases de datos',
      '¡Y mucho más...',
    ],
  },
  techSection: {
    upperTitle: 'Resumen',
    title: 'Tech',
    body: `Como Desarrollador Full-Stack, prospero en la versatilidad. Mi trayectoria en el campo de la tecnología me ha dotado de las habilidades para crear soluciones integrales. Desde el diseño del front-end hasta el desarrollo del back-end, navego por todo el espectro, asegurando que los sitios web que construyo no solo sean funcionales, sino también altamente eficientes.`,
    callToAction: 'Haz clic en mí',
    cards: [
      {
        title: 'Lenguajes de Programación',
        icon: web,
        ul: {
          ready: ['TypeScript', 'JavaScript'],
          incoming: ['Java', 'PHP'],
        },
      },
      {
        title: 'Front-End',
        icon: mobile,
        ul: {
          ready: ['React', 'Css3', 'Sass', 'Tailwind', 'Bootstrap', 'Material UI'],
        },
      },
      {
        title: 'Back-End',
        icon: backend,
        ul: {
          ready: ['Next.js', 'Express.js', 'REST APIs', 'EJS', 'MVC'],
        },
      },
      {
        title: 'Bases de Datos',
        icon: creator,
        ul: {
          ready: ['MongoDB', 'Mongoose'],
          incoming: ['SQL', 'MySQL'],
        },
      },
    ],
  },
};

export const navBar = {
  about: 'Sobre mi',
  experience: 'Experiencia',
  contact: 'Contacto',
};
