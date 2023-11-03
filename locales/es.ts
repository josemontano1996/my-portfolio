import {
  PEP,
  backend,
  bootstrap,
  calendarApp,
  chefWebpage,
  creator,
  css,
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
  tesloShop,
  typescript,
  udemy,
  web,
} from '@/public/images';

export const homePage = {
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
      url: process.env.NEXT_PUBLIC_WEB_URL,
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
        title: 'Lenguajes de Programación',
        icon: web,
        ul: {
          ready: [
            { name: 'TypeScript', icon: typescript, alt: 'Typescript' },
            { name: 'JavaScript', icon: javascript, alt: 'JavaScript' },
          ],
          incoming: [
            { name: 'Java', icon: java, alt: 'Java' },
            { name: 'PHP', icon: php, alt: 'PHP' },
          ],
        },
      },
      {
        title: 'Front-End',
        icon: mobile,
        ul: {
          ready: [
            { name: 'React', icon: react, alt: 'React' },
            { name: 'Css3', icon: css, alt: 'Css' },
            { name: 'Sass', icon: sass, alt: 'Sass' },
            { name: 'Tailwind', icon: tailwind, alt: 'Tailwind' },
            { name: 'Bootstrap', icon: bootstrap, alt: 'Bootstrap' },
            { name: 'Material UI', icon: mui, alt: 'Material UI' },
          ],
        },
      },
      {
        title: 'Back-End',
        icon: backend,
        ul: {
          ready: [
            { name: 'Next.js', icon: nextjs, alt: 'Next js', bg: '#fff' },
            { name: 'Express.js', icon: expressjs, alt: 'Express js', bg: '#fff' },
            { name: 'Node.js', icon: nodejs, alt: 'Node js' },
            { name: 'REST APIs', icon: restapi, alt: 'Rest API', bg: '#fff' },
            { name: 'MVC', icon: sql, alt: 'MVC', bg: '#fff' },
          ],
        },
      },
      {
        title: 'Bases de Datos',
        icon: creator,
        ul: {
          ready: [
            { name: 'MongoDB', icon: mongodb, alt: 'MongoDB' },
            { name: 'Mongoose', icon: mongodb, alt: 'Mongoose' },
          ],
          incoming: [{ name: 'MySQL', icon: mysql, alt: 'MySQL' }],
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
        webpage_link: 'https://thriving-moonbeam-22f2bd.netlify.app/',
        source_code_link: 'https://github.com/josemontano1996/react-calendar-app',
      },
    ],
    inprogress: [
      {
        name: 'PEP Website',
        description: `Página web para PEP .e.V, actualmente en desarrollo.`,
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
      {
        name: 'Chef Webpage',
        description: `Página web Full-Stack para Chef privado, se usará para el 
        envío de comida y la organización de eventos.`,
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
        source_code_link: '',
      },
    ],
  },
};

export const navBar = {
  about: 'Sobre mi',
  experience: 'Experiencia',
  contact: 'Contacto',
};

export const contactPopUp = {
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
