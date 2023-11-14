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
  tesloShop,
  typescript,
  udemy,
  web,
} from '@/public/images';

export const homePage: IHomePage = {
  metadata: {
    title: 'jm3 - Portfolio Full Stack Webentwicklung',
    description: `Willkommen in meinem Portfolio! Ich bin ein Full Stack Entwickler, der sich auf 
    Webentwicklung, Anwendungen und Systeme spezialisiert hat. Schauen Sie sich meine Projekte und 
    Erfahrungen in Technologien wie TypeScript, JavaScript, React, Node.js und mehr an.`,
    keyword: `entwickler, web entwickler, full Stack, webentwicklung, anwendungen,javascript, react, node.js,
     typescript, mongo db, express.js, next app router, next pages router, react server components`,
    og: {
      title: `jm3 - Portfolio Full Stack Webentwicklung`,
      description: `Willkommen in meinem Portfolio! Ich bin ein Full Stack Entwickler, der sich auf 
    Webentwicklung, Anwendungen und Systeme spezialisiert hat. Schauen Sie sich meine Projekte und 
    Erfahrungen in Technologien wie TypeScript, JavaScript, React, Node.js und mehr an.`,
      type: 'website',
      image:
        'https://res.cloudinary.com/dfupfbnez/image/upload/v1699010770/portfolioweb_h5atzn.png',
      url: process.env.NEXT_PUBLIC_WEB_URL || '',
    },
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
    title: 'Tech.',
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
        title: 'Back-End',
        icon: backend,
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
        title: 'Datenbanken',
        icon: creator,
        ul: {
          ready: [
            { name: 'Next.js', icon: nextjs, alt: 'Next js', bg: 'white' },
            { name: 'Express.js', icon: expressjs, alt: 'Express js', bg: 'white' },
            { name: 'Node.js', icon: nodejs, alt: 'Node js' },
            { name: 'REST APIs', icon: restapi, alt: 'Rest API', bg: 'white' },
            { name: 'MVC', icon: sql, alt: 'MVC', bg: 'white' },
          ],
        },
      },
      {
        title: 'Webentwickler',
        icon: web,
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
    uppertitle: 'Was ich bisher gemacht habe',
    title: 'Erfahrung.',
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
          'Integration mit PayPal-Zahlungen.',
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
          'Durch das Lernen von TypeScript, um Webanwendungen einfacher und skalierbarer zu entwickeln und zu pflegen.',
        ],
      },
      {
        order: 1,
        title: '100 Tage des Codes - 2023 Webentwicklungs Bootcamp',
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
  projectsSection: {
    uppertitle: 'Meine Arbeit',
    title: 'Projekte',
    inProgressTitle: 'In Entwicklung',
    finishedProyectsTitle: 'Fertig',
    projects: [
      {
        name: 'Portfolio Website',
        description: `Diese Seite, durch die Sie gerade navigieren. 
        Sie kommt mit besten SEO-Praktiken, Internationalisierung in 3 Sprachen,
        SSGs und dem neuen App-Router.`,
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
        description: `Full-Stack-Bekleidungs-E-Commerce mit Paypal-Integration, die es Benutzern ermöglicht, Kleidung zu suchen und zu kaufen. 
          Entwickelt mit Next.js für das Front-End und Back-End und MongoDB als Datenbank`,
        tags: [
          {
            name: 'Fully-Responsive',
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
        name: 'Team Calendar',
        description: `Mit React erstellte Teamkalender-Webseite, auf der sich Personen aus demselben 
        Team registrieren und sich anmelden können, um Ereignisse in einem gemeinsamen Kalender zur
        besseren Organisation zu erstellen, alle und Ereignisdaten
         kommen über diese API und werden ordnungsgemäß verarbeitet.`,
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
      {
        name: 'Discord Clone',
        description: `In Entwicklung: Dieses Projekt befindet sich derzeit in einem frühen Stadium. 
        Das Ziel ist es, einen vollständig funktionsfähigen Discord-Klon zu erstellen`,
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
      },
      {
        name: 'PEP Website',
        description: `In Entwicklung: Erstellung einer brandneuen Website, die es Spendern ermöglicht, 
        Geld über die Website zu spenden, 
        mit Internationalisierung in drei Sprachen und den besten SEO-Praktiken.`,
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
        image: pepWebpage,
        webpage_link: '',
        source_code_link: '',
      },
      {
        name: 'Chef Website',
        description: `In Entwicklung: Private Chef Full-Stack-Webseite, die für 
        die Lebensmittelzustellung und das Veranstaltungsmanagement verwendet wird.`,
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
    ],
  },
};

export const footer: IFooter = {
  uppertitle: 'Möchten Sie mehr über mich erfahren?',
  title: 'Kontaktiere mich.',
};

export const navBar: INavBar = {
  about: 'Über mich',
  experience: 'Erfahrung',
  contact: 'Kontakt',
};

export const contactPopUp: IContactPopUp = {
  upperTitle: 'KOMM IN KONTAKT',
  callToAction: 'Mein LinkedIn-Konto',
  title: 'Kontakt.',
  name: 'Dein Name',
  nameLabel: 'Wie ist dein Name?',
  email: 'Deine E-Mail',
  emailLabel: 'Wie lautet deine E-Mail-Adresse?',
  message: 'Deine Nachricht',
  messageLabel: 'Was möchtest du sagen?',
  send: 'Senden',
  alertError: 'Etwas ist schiefgegangen, bitte versuche es später erneut.',
  alertError1: 'Der Name sollte mindestens 2 Buchstaben lang sein.',
  alertError2: 'Deine E-Mail ist ungültig, bitte überprüfe sie erneut.',
  alertError3: 'Die Nachricht sollte mindestens 10 Buchstaben lang sein.',
  alertSuccess: 'Vielen Dank. Deine Nachricht wurde erfolgreich gesendet.',
};
