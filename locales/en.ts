import { javascript, typescript } from '@/assets';
import { backend, creator, mobile, web } from '@/public/images';

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
};

export const navBar = {
  about: 'About',
  experience: 'Experience',
  contact: 'Contact',
};
