import { Metadata } from 'next';

import loadTranslations from '@/utils/loadTranslations';
import About from '@/components/homePage/About';
import Tech from '@/components/homePage/techStackSection/TechStack';
import Hero from '@/components/homePage/heroSection/Hero';
import Experience from '@/components/homePage/experienceSection/Experience';
import ProjectsSection from '@/components/homePage/proyectSection/ProjectsSection';
import { IMetadada } from '@/interfaces/IHomePage';

import Footer from '@/components/homePage/Footer';

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = loadTranslations(locale).homePage.metadata as IMetadada;
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL || ''),
    alternates: {
      canonical: '/en',
      languages: {
        es: '/es',
        de: '/de',
      },
    },
    title: t.title,
    description: t.description,
    keywords: t.keyword,
    openGraph: {
      title: t.og.title,
      description: t.og.description,
      type: 'website',
      images: t.og.image,
      url: t.og.url,
    },
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
        <About locale={locale} />
        <Tech />
        <Experience />
        <ProjectsSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

