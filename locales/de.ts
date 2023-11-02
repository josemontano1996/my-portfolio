import { backend, creator, mobile, web } from '@/public/images';

export const homePage = {
  metadata: {
    title: 'jm3 Webentwicklung',
    description: 'Startseite für den Full-Stack-Webentwickler jm3',
  },
  heroSection: {
    title: 'Eine Welt voller Lösungen in greifbarer Nähe',
    subtitle: 'Der Webentwickler, den Sie suchen, für die Lösungen, die Sie benötigen.',
    callToAction: 'Mehr entdecken',
  },
  aboutSection: {
    title: 'Hallo, ich bin',
    subtitle: 'Ich entwickle die Full-Stack-Webanwendungen, die Ihr Unternehmen benötigt.',
    ul: [
      'Beste SEO-Praktiken',
      'Internationalisierung',
      'Responsives Design',
      'Authentifizierung',
      'Datenbanken',
      'Und vieles mehr...',
    ],
  },
  techSection: {
    upperTitle: 'Übersicht',
    title: 'Tech',
    body: `Als Full-Stack-Entwickler blühe ich in Vielseitigkeit auf. Meine Reise im Bereich der Technologie hat mich mit den Fähigkeiten ausgestattet, um umfassende Lösungen zu erstellen. Vom Front-End-Design bis zur Back-End-Entwicklung navigiere ich durch das gesamte Spektrum und gewährleiste, dass die von mir erstellten Websites nicht nur funktional, sondern auch äußerst effizient sind.`,
    callToAction: 'Klick mich',
    cards: [
      {
        title: 'Front-End',
        icon: mobile,
        ul: {
          ready: ['TypeScript', 'JavaScript'],
          incoming: ['Java', 'PHP'],
        },
      },
      {
        title: 'Back-End',
        icon: backend,
        ul: {
          ready: ['React', 'Css3', 'Sass', 'Tailwind', 'Bootstrap', 'Material UI'],
        },
      },
      {
        title: 'Datenbanken',
        icon: creator,
        ul: {
          ready: ['Next.js', 'Express.js', 'REST APIs', 'EJS', 'MVC'],
        },
      },
      {
        title: 'Webentwickler',
        icon: web,
        ul: {
          ready: ['MongoDB', 'Mongoose'],
          incoming: ['SQL', 'MySQL'],
        },
      },
    ],
  },
};

export const navBar = {
  about: 'Über mich',
  experience: 'Erfahrung',
  contact: 'Kontakt',
};
