import { PEP, backend, creator, mobile, nebrija, udemy, web } from '@/public/images';

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
    body: `Como Desarrollador Full-Stack, prospero en la versatilidad. Mi trayectoria en el campo 
    de la tecnología me ha dotado de las habilidades para crear soluciones integrales. Desde el
    diseño del front-end hasta el desarrollo del back-end, navego por todo el espectro, asegurando
    que los sitios web que construyo no solo sean funcionales, sino también altamente eficientes.`,
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
  experienceSection: {
    uppertitle: 'Lo que he hecho hasta ahora',
    title: 'Experiencia',
    experiences: [
      {
        order: 6,
        title: 'Desarrollador Web para PEP e.V',
        company_name: 'PEP e.V',
        certification_url: '',
        icon: PEP,
        iconBg: '#383E56',
        date: 'Octubre 2023 - Presente',
        points: [
          'Creación de un sitio web completamente nuevo desde cero.',
          'Desarrollo de un sitio web receptivo y multilingüe (alemán, español, inglés) con prácticas SEO de primera categoría.',
          'Mejora de la presencia en línea de la organización.',
          'Aumento de las tasas de donación e implementación de una plataforma de pago segura para transacciones sin inconvenientes.',
        ],
      },
      {
        order: 5,
        title: 'Grado de Técnico Superior en Desarrollo de Software',
        company_name: 'Escuela Técnica Nebrija',
        certification_url: '',
        icon: nebrija,
        iconBg: '#383E56',
        date: 'Octubre 2023 - Presente',
        points: [
          'Desarrollo y mantenimiento de aplicaciones web utilizando tecnologías como Java, PHP u otros lenguajes relevantes.',
          'Desarrollo de aplicaciones multiplataforma: escritorio, web y móvil.',
          'Desarrollo de aplicaciones seguras y protección de la información.',
        ],
      },
      {
        order: 4,
        title: 'Next.js: El Framework React para producción',
        company_name: 'Udemy',

        certification_url:
          'https://www.udemy.com/certificate/UC-be34cc73-b369-448c-a463-3f7725e7e110/',
        icon: udemy,
        iconBg: '#383E56',
        date: 'Agosto 2023 - Octubre 2023',
        points: [
          'Construcción de aplicaciones web Full-Stack con Next.js y TypeScript.',
          'Generación de sitios estáticos, generación del lado del servidor, SWR.',
          'Integración con pagos de PayPal.',
        ],
      },
      {
        order: 3,
        title: 'React: De Cero a Experto (Hooks y MERN)',
        company_name: 'Udemy',

        certification_url:
          'https://www.udemy.com/certificate/UC-c1f827a0-82ba-4f37-affb-f7592a6ccee4/',
        icon: udemy,
        iconBg: '#383E56',
        date: 'Julio 2023 - Julio 2023',
        points: [
          'Aprendizaje de React desde cero hasta la construcción de aplicaciones completas con gestión de estado global.',
          'Hooks, Testing, JWT, Redux, Mongoose...',
        ],
      },
      {
        order: 2,
        title: 'TypeScript: Tu guía completa y manual de mano',
        company_name: 'Udemy',

        certification_url:
          'https://www.udemy.com/certificate/UC-046682ed-559f-42a0-ac8b-5359562580d7/',
        icon: udemy,
        iconBg: '#383E56',
        date: 'Abril 2023 - Julio 2023',
        points: [
          'Aprendizaje de TypeScript para desarrollar aplicaciones web más fáciles y escalables de mantener.',
        ],
      },
      {
        order: 1,
        title: '100 Días de Código - Bootcamp de Desarrollo Web 2023',
        company_name: 'Udemy',

        certification_url:
          'https://www.udemy.com/certificate/UC-d08e5c85-4041-4286-ac6a-d6cac5a907cf/',
        icon: udemy,
        iconBg: '#383E56',
        date: 'Noviembre 2022 - Marzo 2023',
        points: [
          'Construcción de aplicaciones Full-Stack con HTML, CSS y JavaScript.',
          'MVC, Express.js, Git, Github, DOM, Css, MongoDB, REST APIs...',
        ],
      },
    ],
  },
};

export const navBar = {
  about: 'Sobre mi',
  experience: 'Experiencia',
  contact: 'Contacto',
};
