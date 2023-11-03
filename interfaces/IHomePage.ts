export interface IHomePage {
  metadata: IMetadada;
  heroSection: IHeroSection;
  aboutSection: IAboutSection;
  techSection: ITechSection;
  experienceSection: IExperienceSection;
  projectsSection: IProjectsSection;
}

export interface IMetadada {
  title: string;
  description: string;
  keyword: string;
  og: {
    title: string;
    description: string;
    type: string;
    image: string;
    url: string;
  };
}
export interface IHeroSection {
  title: string;
  subtitle: string;
  callToAction: string;
}

export interface IAboutSection {
  title: string;
  subtitle: string;
  ul: string[];
}

export interface ITechSection {
  upperTitle: string;
  title: string;
  body: string;
  callToAction: string;
  cards: ITechElement[];
}

export interface ITechElement {
  title: string;
  icon: any;
  ul: {
    ready: {
      name: string;
      icon: any; // Icon path/reference
      alt: string;
      bg?: string; // Optional background color
    }[];
    incoming?: {
      name: string;
      icon: any; // Icon path/reference
      alt: string;
      bg?: string; // Optional background color
    }[];
  };
}

export interface IExperienceSection {
  uppertitle: string;
  title: string;
  experiences: IExperienceElement[];
}

export interface IExperienceElement {
  order: number;
  title: string;
  company_name: string;
  certification_url?: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
}

export interface IProjectsSection {
  uppertitle: string;
  title: string;
  inProgressTitle: string;
  finishedProyectsTitle: string;
  projects: IProjectElement[];
  inprogress?: IProjectElement[];
}

export interface IProjectElement {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: any; // Assuming image property holds the path or reference to the image
  webpage_link?: string;
  source_code_link?: string;
}
