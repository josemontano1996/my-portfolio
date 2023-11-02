import { PEP, backend, creator, mobile, nebrija, udemy, web } from '@/public/images';

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
    body: `Als Full-Stack-Entwickler blühe ich in Vielseitigkeit auf. Meine Reise im 
    Bereich der Technologie hat mich mit den Fähigkeiten ausgestattet, um umfassende
    Lösungen zu erstellen. Vom Front-End-Design bis zur Back-End-Entwicklung navigiere
    ich durch das gesamte Spektrum und gewährleiste, dass die von mir erstellten Websites
    nicht nur funktional, sondern auch äußerst effizient sind.`,
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
  experienceSection: {
    uppertitle: 'Was ich bisher gemacht habe',
    title: 'Erfahrung',
    experiences: [
      {
        order: 6,
        title: 'Webentwickler für PEP e.V',
        company_name: 'PEP e.V',
        icon: PEP,
        iconBg: '#383E56',
        date: 'Oktober 2023 - Heute',
        points: [
          'Erstellung einer brandneuen Website von Grund auf.',
          'Entwicklung einer reaktionsschnellen, mehrsprachigen Website (Deutsch, Spanisch, Englisch) mit erstklassigen SEO-Praktiken.',
          'Verbesserung der Online-Präsenz der Organisation.',
          'Steigerung der Spenderraten und Implementierung einer sicheren Zahlungsplattform für reibungslose Transaktionen.',
        ],
      },

      {
        order: 5,
        title: 'Höherer Softwaretechniker-Abschluss',
        company_name: 'Nebrija Technical School',
        certification_url: '',
        icon: nebrija,
        iconBg: '#383E56',
        date: 'Oktober 2023 - Heute',
        points: [
          'Erlernen des Kerns der Softwareentwicklung.',
          'Entwicklung und Wartung von Webanwendungen unter Verwendung von Technologien wie Java, PHP oder anderen relevanten Sprachen.',
          'Entwicklung von plattformübergreifenden Anwendungen: Desktop, Web und Mobile.',
          'Entwicklung sicherer Anwendungen und Schutz von Informationen.',
        ],
      },
      {
        order: 4,
        title: 'Next.js Das React-Framework für die Produktion',
        company_name: 'Udemy',
        certification_url:
          'https://www.udemy.com/certificate/UC-be34cc73-b369-448c-a463-3f7725e7e110/',
        icon: udemy,
        iconBg: '#383E56',
        date: 'August 2023 - Oktober 2023',
        points: [
          'Erstellung von Full-Stack-Webanwendungen mit Next.js und TypeScript.',
          'Statische Seiten-Generierung, serverseitige Generierung, SWR.',
          'Integration mit PayPal-Zahlungen',
        ],
      },
      {
        order: 3,
        title: 'React: Von Null zum Experten (Hooks und MERN)',
        company_name: 'Udemy',
        certification_url:
          'https://www.udemy.com/certificate/UC-c1f827a0-82ba-4f37-affb-f7592a6ccee4/',
        icon: udemy,
        iconBg: '#383E56',
        date: 'Juli 2023 - Juli 2023',
        points: [
          'Erlernen von React von Grund auf bis hin zur Entwicklung vollständiger Anwendungen mit globalem Statusmanagement.',
          'Hooks, Testing, JWT, Redux, Mongoose...',
        ],
      },
      {
        order: 2,
        title: 'TypeScript: Ihr vollständiger Leitfaden und Handbuch',
        company_name: 'Udemy',
        certification_url:
          'https://www.udemy.com/certificate/UC-046682ed-559f-42a0-ac8b-5359562580d7/',
        icon: udemy,
        iconBg: '#383E56',
        date: 'April 2023 - Juli 2023',
        points: [
          'Durch das Lernen von TypeScript, um Webanwendungen einfacher und skalierbarer zu entwickeln und zu pflegen',
        ],
      },
      {
        order: 1,
        title: '100 Tage des Codes - 2023 Webentwicklungsbootcamp',
        company_name: 'Udemy',
        certification_url:
          'https://www.udemy.com/certificate/UC-d08e5c85-4041-4286-ac6a-d6cac5a907cf/',
        icon: udemy,
        iconBg: '#383E56',
        date: 'November 2022 - März 2023',
        points: [
          'Erstellung von Full-Stack-Anwendungen mit HTML, CSS und JavaScript.',
          'MVC, Express.js, Git, Github, DOM, Css, MongoDB, REST APIs...',
        ],
      },
    ],
  },
};

export const navBar = {
  about: 'Über mich',
  experience: 'Erfahrung',
  contact: 'Kontakt',
};
