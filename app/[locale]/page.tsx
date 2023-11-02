import { Metadata } from 'next';
import About from '@/components/homePage/About';
import Contact from '@/components/homePage/Contact';
import Tech from '@/components/homePage/techStackSection/TechStack';
import Hero from '@/components/homePage/heroSection/Hero';
import Experience from '@/components/homePage/experienceSection/Experience';
import ProjectsSection from '@/components/homePage/proyectSection/ProjectsSection';


export const metadata: Metadata = {
  title: 'jm3 | Portfolio',
  description: 'kdfa;sfnakl',
};

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Tech />
        <Experience />
        <ProjectsSection />
        <Contact />
      </main>
    </>
  );
}

