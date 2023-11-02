import {
  PEP,
  backend,
  calendarApp,
  chefWebpage,
  creator,
  mobile,
  nebrija,
  pepWebpage,
  portfolioWeb,
  tesloShop,
  udemy,
  web,
} from '@/public/images';

export const homePage = {
  metadata: {
    title: 'jm3 Web Development',
    description: 'Home page for jm3 full stack web developer',
  },
  heroSection: {
    title: 'A World of Solutions at the Reach of Your Hand',
    subtitle: 'The web developer you search, for the solutions you need.',
    callToAction: 'Discover more',
  },
  aboutSection: {
    title: 'Hi, I am',
    subtitle: 'I develop the Full-Stack web applications, that your bussiness need.',
    ul: [
      'Best SEO practices',
      'Internationalization',
      'Responsive Design',
      'Authentication',
      'Databases',
      'And much more...',
    ],
  },
  techSection: {
    upperTitle: 'Overview',
    title: 'Tech',
    body: `As a Full-Stack Developer, I thrive on versatility. My journey in the realm of technology
          has equipped me with the skills to create comprehensive solutions. From front-end design
          to back-end development, I navigate the entire spectrum, ensuring that the websites I
          build are not just functional but also highly efficient.`,
    callToAction: 'Click me',
    cards: [
      {
        title: 'Programming Languages',
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
        title: 'Databases',
        icon: creator,
        ul: {
          ready: ['MongoDB', 'Mongoose'],
          incoming: ['SQL', 'MySQL'],
        },
      },
    ],
  },
  experienceSection: {
    uppertitle: 'What I have done so far',
    title: 'Experience',
    experiences: [
      {
        order: 6,
        title: 'Web Developer for PEP e.V',
        company_name: 'PEP e.V',

        icon: PEP,
        iconBg: '#383E56',
        date: 'October 2023 - Present',
        points: [
          'Creating a brand-new website from scratch',
          'Developing a responsive, multilingual site (German, Spanish, English) with top-notch SEO practices.',
          `Enhancing the organization's online presence.`,
          'Boosting donation rates and implementing a secure payment platform for seamless transactions.',
        ],
      },

      {
        order: 5,
        title: 'Higher Software Technician Degree',
        company_name: 'Nebrija Technical School',
        certification_url: '',

        icon: nebrija,
        iconBg: '#383E56',
        date: 'October 2023 - Present',
        points: [
          'Learning the core of software development',
          'Development and maintenance of web applications using technologies such as Java, PHP, or other relevant languages.',
          'Development of cross-platform applications: desktop, web and mobile.',
          'Development of secure applications and protection of information.',
        ],
      },
      {
        order: 4,
        title: 'Next.js The React Framework for production',
        company_name: 'Udemy',

        certification_url:
          'https://www.udemy.com/certificate/UC-be34cc73-b369-448c-a463-3f7725e7e110/',
        icon: udemy,
        iconBg: '#383E56',
        date: 'August 2023 - October 2023',
        points: [
          'Building Full-Stack Web Applications with Next.js and TypeScript.',
          'Static Site Generation, Server Side Generation, SWR.',
          'Integration with paypal payments.',
        ],
      },
      {
        order: 3,
        title: 'React: From Zero to Expert (Hooks and MERN)',
        company_name: 'Udemy',

        certification_url:
          'https://www.udemy.com/certificate/UC-c1f827a0-82ba-4f37-affb-f7592a6ccee4/',
        icon: udemy,
        iconBg: '#383E56',
        date: 'July 2023 - July 2023',
        points: [
          'Learning React from scratch until building full applications with global state management.',
          'Hooks, Testing, JWT, Redux, Mongoose...',
        ],
      },
      {
        order: 2,
        title: 'TypeScript: Your complete guide and handbook',
        company_name: 'Udemy',

        certification_url:
          'https://www.udemy.com/certificate/UC-046682ed-559f-42a0-ac8b-5359562580d7/',
        icon: udemy,
        iconBg: '#383E56',
        date: 'April 2023 - July 2023',
        points: [
          'Learning TypeScript in order to develop more easy and scalable to mantain web apps.',
        ],
      },
      {
        order: 1,
        title: '100 Days of Code - 2023 Web Development Bootcamp',
        company_name: 'Udemy',

        certification_url:
          'https://www.udemy.com/certificate/UC-d08e5c85-4041-4286-ac6a-d6cac5a907cf/',
        icon: udemy,
        iconBg: '#383E56',
        date: 'November 2022 - March 2023',
        points: [
          'Building Full-Stack applications with HTML, Css and JavaScript.',
          'MVC, Express.js, Git, Github, DOM, Css, MongoDB, REST APIs...',
        ],
      },
    ],
  },
  projectsSection: {
    uppertitle: 'My Work',
    title: 'Projects',
    inProgressTitle: 'In development',
    finishedProyectsTitle: 'Finished',
    projects: [
      {
        name: 'Portfolio Webpage',
        description: `This page you are navigating through. It comes with best SEO practices, internationalization in 3 languages, SSGs and the
        new App Router`,
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
            color: 'pink-text-gradient',
          },
          {
            name: 'Tailwind',
            color: 'blue-text-gradient',
          },
          {
            name: 'React i18next',
            color: 'green-text-gradient',
          },
        ],
        image: portfolioWeb,
        webpage_link: 'https://jm3development.vercel.app',
        source_code_link: 'https://github.com/josemontano1996/my-portfolio',
      },
      {
        name: 'Teslo Shop',
        description: `Full-Stack clothing e-commerce with paypal integration, that allows users to search and buy clothing. 
          Developed using Next.js for the front- end and backend, and MongoDB as a database`,
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
            color: 'pink-text-gradient',
          },
          {
            name: 'Paypal',
            color: 'blue-text-gradient',
          },
          {
            name: 'Mongoose',
            color: 'green-text-gradient',
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
        name: 'Team Calendar',
        description: `Team calendar webpage made with React, where people from the same team can register 
        and log in to create events in a shared calendar for better organization, all the user and
        events data come through this API and are properly handled.`,
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
            color: 'blue-text-gradient',
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
        description: `PEP .e.V webpage development, currently in progress.`,
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
            color: 'pink-text-gradient',
          },
          {
            name: 'Tailwind',
            color: 'blue-text-gradient',
          },
          {
            name: 'React i18next',
            color: 'green-text-gradient',
          },
        ],
        image: pepWebpage,
        webpage_link: '',
        source_code_link: '',
      },
      {
        name: 'Chef Webpage',
        description: `Private Chef Full-Stack webpage that will be used for food delivery and events management`,
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
            color: 'pink-text-gradient',
          },
          {
            name: 'Tailwind',
            color: 'blue-text-gradient',
          },
          {
            name: 'React i18next',
            color: 'green-text-gradient',
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
  about: 'About',
  experience: 'Experience',
  contact: 'Contact',
};

export const contactPopUp = {
  upperTitle: 'GET IN TOUCH',
  callToAction: 'My Linkedin Account',
  title: 'Contact.',
  name: 'Your name',
  nameLabel: `What's your good name?`,
  email: 'Your Email',
  emailLabel: `What's your email address`,
  message: 'Your Message',
  messageLabel: `What do you have to say?`,
  send: 'Send',
  alertError: 'Something went wrong, please try again later.',
  alertError1: 'Name length should have a length of at least 2 letters.',
  alertError2: 'Your email is invalid, check it again please.',
  alertError3: 'The message should be at least 10 letters long.',
  alertSuccess: 'Thank you. Your message was succesfully sent.',
};
