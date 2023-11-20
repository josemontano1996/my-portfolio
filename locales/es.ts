import { IFooter, IHomePage } from '@/interfaces/IHomePage';
import { IContactPopUp, INavBar } from '@/interfaces/IShared';
import {
  PEP,
  backend,
  bootstrap,
  calendarApp,
  chefWebpage,
  creator,
  css,
  discordproject,
  expressjs,
  java,
  javascript,
  mobile,
  mongodb,
  mui,
  mysql,
  nebrija,
  nextjs,
  nodejs,
  pepWebpage,
  php,
  portfolioWeb,
  react,
  restapi,
  sass,
  sql,
  tailwind,
  teslaLanding,
  tesloShop,
  typescript,
  udemy,
  web,
} from '@/public/images';

export const homePage: IHomePage = {
  metadata: {
    title: 'jm3 - Portfolio Desarrollador Web Full Stack',
    description: `¡Bienvenido a mi porfolio! Soy un programador full stack especializado 
    en el desarrollo web, aplicaciones y sistemas. Echa un vistazo a mis proyectos y experiencia
    en tecnologías como TypeScript, JavaScript, React, Node.js, y más.`,
    keyword: `programador, desarrollador, desarrollador web, full stack, desarrollo web, aplicaciones, javascript, react, node, typescript, mongo db, express, next app router, next pages router
    , react server components`,
    og: {
      title: `jm3 - Portfolio Desarrollador Web Full Stack`,
      description: `¡Bienvenido a mi porfolio! Soy un programador full stack especializado 
    en el desarrollo web, aplicaciones y sistemas. Echa un vistazo a mis proyectos y experiencia
    en tecnologías como TypeScript, JavaScript, React, Node.js, y más.`,
      type: 'website',
      image:
        'https://res.cloudinary.com/dfupfbnez/image/upload/v1699010770/portfolioweb_h5atzn.png',
      url: process.env.NEXT_PUBLIC_WEB_URL || '',
    },
  },
  heroSection: {
    title: 'Un Mundo de soluciones al alcance de tu mano',
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
    title: 'Tech.',
    body: `Como Desarrollador Full-Stack, prospero en la versatilidad. Mi trayectoria en el campo 
    de la tecnología me ha dotado de las habilidades para crear soluciones integrales. Desde el
    diseño del front-end hasta el desarrollo del back-end, navego por todo el espectro, asegurando
    que los sitios web que construyo no solo sean funcionales, sino también altamente eficientes.`,
    callToAction: 'Haz clic en mí',
    cards: [
      {
        title: 'Front-End',
        icon: mobile,
        ul: {
          ready: [
            { name: 'TypeScript', icon: '/images/tech/typescript.png', alt: 'Typescript' },
            { name: 'JavaScript', icon: '/images/tech/javascript.png', alt: 'JavaScript' },
          ],
          incoming: [
            { name: 'Java', icon: '/images/tech/java.png', alt: 'Java' },
            { name: 'PHP', icon: '/images/tech/php.png', alt: 'PHP' },
          ],
        },
      },
      {
        title: 'Back-End',
        icon: backend,
        ul: {
          ready: [
            { name: 'React', icon: '/images/tech/react.png', alt: 'React' },
            { name: 'Css3', icon: '/images/tech/css.png', alt: 'Css' },
            { name: 'Sass', icon: '/images/tech/sass.png', alt: 'Sass' },
            { name: 'Tailwind', icon: '/images/tech/tailwind.png', alt: 'Tailwind' },
            { name: 'Bootstrap', icon: '/images/tech/bootstrap.png', alt: 'Bootstrap' },
            { name: 'Material UI', icon: '/images/tech/mui.png', alt: 'Material UI' },
          ],
        },
      },
      {
        title: 'Datenbanken',
        icon: creator,
        ul: {
          ready: [
            { name: 'Next.js', icon: '/images/tech/nextjs.png', alt: 'Next js', bg: 'white' },
            {
              name: 'Express.js',
              icon: '/images/tech/expressjs.png',
              alt: 'Express js',
              bg: 'white',
            },
            { name: 'Node.js', icon: '/images/tech/nodejs.png', alt: 'Node js' },
            {
              name: 'REST APIs',
              icon: '/images/tech/restapi.png',
              alt: 'Rest API',
              bg: 'white',
            },
            { name: 'MVC', icon: '/images/tech/sql.png', alt: 'MVC', bg: 'white' },
          ],
        },
      },
      {
        title: 'Webentwickler',
        icon: web,
        ul: {
          ready: [
            { name: 'MongoDB', icon: '/images/tech/mongodb.png', alt: 'MongoDB' },
            { name: 'Mongoose', icon: '/images/tech/mongodb.png', alt: 'Mongoose' },
          ],
          incoming: [{ name: 'MySQL', icon: '/images/tech/mysql.png', alt: 'MySQL' }],
        },
      },
    ],
  },
  experienceSection: {
    uppertitle: 'Lo que he hecho hasta ahora',
    title: 'Experiencia.',
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
  projectsSection: {
    uppertitle: 'Mi trabajo',
    title: 'Proyectos',
    inProgressTitle: 'En desarrollo',
    finishedProyectsTitle: 'Terminados',
    projects: [
      {
        name: 'Portfolio',
        description: `Esta es la página por la que está navegando. Viene con las mejores prácticas SEO, 
        internacionalización en 3 idiomas, SSGs y el nuevo App Router.`,
        tags: [
          {
            name: 'Fully-Responsive',
            color: 'pink-text-gradient',
          },
          {
            name: 'TypeScript',
            color: 'blue-text-gradient',
          },
          {
            name: 'Next.js',
            color: 'green-text-gradient',
          },
          {
            name: 'Three.js',
            color: 'green-text-gradient',
          },
          {
            name: 'Tailwind',
            color: 'blue-text-gradient',
          },
          {
            name: 'React i18next',
            color: 'pink-text-gradient',
          },
        ],
        image: portfolioWeb,
        webpage_link: 'https://jm3development.vercel.app',
        source_code_link: 'https://github.com/josemontano1996/my-portfolio',
      },
      {
        name: 'Teslo Shop',
        description: `E-commerce Full-Stack de ropa con integración de paypal, que permite a los usuarios buscar y comprar ropa. 
          Desarrollado usando Next.js para el front-end y back-end, y MongoDB como base de datos.`,
        tags: [
          {
            name: 'Desktop',
            color: 'pink-text-gradient',
          },
          {
            name: 'Next.js',
            color: 'blue-text-gradient',
          },
          {
            name: 'NextAuth',
            color: 'green-text-gradient',
          },
          {
            name: 'Paypal',
            color: 'green-text-gradient',
          },
          {
            name: 'Mongoose',
            color: 'blue-text-gradient',
          },
          {
            name: 'Cloudinary',
            color: 'pink-text-gradient',
          },
        ],
        image: tesloShop,
        webpage_link: 'https://teslo-shop-ruby.vercel.app',
        source_code_link: 'https://github.com/josemontano1996/teslo-shop',
      },
      {
        name: 'Calendario Grupal',
        description: `Página web de calendario de equipo hecha con React, donde las personas de un mismo equipo pueden registrarse 
        e iniciar sesión para crear eventos en un calendario compartido para una mejor organización, todos los usuarios y
        eventos vienen a través de esta API y se manejan adecuadamente.`,
        tags: [
          {
            name: 'Desktop',
            color: 'pink-text-gradient',
          },
          {
            name: 'React',
            color: 'blue-text-gradient',
          },
          {
            name: 'Redux Toolkit',
            color: 'green-text-gradient',
          },
          {
            name: 'Express.js',
            color: 'green-text-gradient',
          },
          {
            name: 'Mongoose',
            color: 'pink-text-gradient',
          },
        ],
        image: calendarApp,
        webpage_link: 'https://react-calendar-app-iota.vercel.app',
        source_code_link: 'https://github.com/josemontano1996/react-calendar-app',
      },
    ],
    inprogress: [
      /*  {
        name: 'Discord Clone',
        description: `En desarrollo: este proyecto se encuentra actualmente en una etapa inicial, 
        el objetivo es crear un clon de Discord completamente funcional.`,
        tags: [
          {
            name: 'TypeScript',
            color: 'blue-text-gradient',
          },
          {
            name: 'Next.js',
            color: 'pink-text-gradient',
          },
          {
            name: 'React',
            color: 'pink-text-gradient',
          },
          {
            name: 'RSC React',
            color: 'pink-text-gradient',
          },
          {
            name: 'Zustand',
            color: 'blue-text-gradient',
          },
          {
            name: 'Clerk',
            color: 'green-text-gradient',
          },
          {
            name: 'Prisma',
            color: 'pink-text-gradient',
          },
          {
            name: 'MySQL',
            color: 'green-text-gradient',
          },
          {
            name: 'Shadcn',
            color: 'blue-text-gradient',
          },
          {
            name: 'Tailwind',
            color: 'pink-text-gradient',
          },
        ],
        image: discordproject,
        webpage_link: '',
        source_code_link: 'https://github.com/josemontano1996/discord-clone',
      }, */
      {
        name: 'Tesla landing page',
        description: `En desarrollo: Replica de la landing page oficial de Tesla.`,
        tags: [
          {
            name: 'Desktop',
            color: 'pink-text-gradient',
          },
          {
            name: 'TypeScript',
            color: 'blue-text-gradient',
          },
          {
            name: 'Next.js',
            color: 'green-text-gradient',
          },
          {
            name: 'React',
            color: 'pink-text-gradient',
          },
          {
            name: 'RSC',
            color: 'green-text-gradient',
          },
          {
            name: 'Tailwind',
            color: 'blue-text-gradient',
          },
        ],
        image: teslaLanding,
        webpage_link: 'https://peaceful-paletas-a104e7.netlify.app/',
        source_code_link: 'https://github.com/josemontano1996/tesla-landing-clone',
      },
      {
        name: 'Chef Webpage',
        description: `En desarrollo: Página web completa de Private Chef 
        que se utilizará para la entrega de alimentos y la gestión de eventos.`,
        tags: [
          {
            name: 'Fully-Responsive',
            color: 'pink-text-gradient',
          },
          {
            name: 'TypeScript',
            color: 'blue-text-gradient',
          },
          {
            name: 'Next.js',
            color: 'green-text-gradient',
          },
          {
            name: 'React',
            color: 'pink-text-gradient',
          },
          {
            name: 'RSC React',
            color: 'pink-text-gradient',
          },
          {
            name: 'Stripe Payments',
            color: 'green-text-gradient',
          },
          {
            name: 'Tailwind',
            color: 'blue-text-gradient',
          },
          {
            name: 'React i18next',
            color: 'pink-text-gradient',
          },
        ],
        image: chefWebpage,
        webpage_link: '',
        source_code_link: 'https://github.com/josemontano1996/nextjs13-ingrid-webpage',
      },
      {
        name: 'PEP Website',
        description: `En desarrollo: Creación de un sitio web completamente nuevo que permite 
        a los donantes donar dinero a través del sitio web, 
        con internacionalización en tres idiomas y las mejores prácticas de SEO.`,
        tags: [
          {
            name: 'Fully-Responsive',
            color: 'pink-text-gradient',
          },
          {
            name: 'TypeScript',
            color: 'blue-text-gradient',
          },
          {
            name: 'Next.js',
            color: 'green-text-gradient',
          },
          {
            name: 'React',
            color: 'pink-text-gradient',
          },
          {
            name: 'RSC',
            color: 'pink-text-gradient',
          },
          {
            name: 'Stripe Payments',
            color: 'green-text-gradient',
          },
          {
            name: 'Tailwind',
            color: 'blue-text-gradient',
          },
          {
            name: 'React i18next',
            color: 'pink-text-gradient',
          },
        ],
        image: pepWebpage,
        webpage_link: '',
        source_code_link: '',
      },
    ],
  },
};

export const footer: IFooter = {
  uppertitle: '¿Te gustaría saber más sobre mí?',
  title: 'Contáctame.',
};

export const navBar: INavBar = {
  about: 'Sobre mi',
  experience: 'Experiencia',
  projects: 'Proyectos',
  contact: 'Contacto',
};

export const contactPopUp: IContactPopUp = {
  upperTitle: 'PONTE EN CONTACTO',
  callToAction: 'Mi cuenta de Linkedin',
  title: 'Contacto.',
  name: 'Tu nombre',
  nameLabel: '¿Cuál es tu nombre?',
  email: 'Tu correo electrónico',
  emailLabel: '¿Cuál es tu dirección de correo electrónico?',
  message: 'Tu mensaje',
  messageLabel: '¿Qué te gustaría decir?',
  send: 'Enviar',
  alertError: 'Algo salió mal, por favor inténtalo de nuevo más tarde.',
  alertError1: 'El nombre debe tener al menos 2 letras.',
  alertError2: 'Tu correo electrónico no es válido, por favor revísalo de nuevo.',
  alertError3: 'El mensaje debe tener al menos 10 letras de longitud.',
  alertSuccess: 'Gracias. Tu mensaje se envió correctamente.',
};
