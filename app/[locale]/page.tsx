import { Metadata } from 'next';
import About from '@/components/homePage/About';
import Contact from '@/components/homePage/Contact';
import Tech from '@/components/homePage/techStackSection/TechStack';
import Hero from '@/components/homePage/heroSection/Hero';
import Experience from '@/components/homePage/experienceSection/Experience';
import ProjectsSection from '@/components/homePage/proyectSection/ProjectsSection';
import loadTranslations from '@/utils/loadTranslations';

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = loadTranslations(locale).homePage;
  return {
    title: t.metadata.title,
    description: t.metadata.description,
  };
}
interface Props {
  params: {
    locale: string;
  };
}
export default async function Home({ params: { locale } }: Props) {
  return (
    <>
      <main>
        <Hero locale={locale} />
        <About />
        <Tech />
        <Experience />
        <ProjectsSection />
        <Contact />
      </main>
    </>
  );
}

