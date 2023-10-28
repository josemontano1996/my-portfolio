import { Metadata } from 'next';
import About from '@/components/homePage/About';
import Contact from '@/components/homePage/Contact';
import Tech from '@/components/homePage/Tech';
import Hero from '@/components/homePage/heroSection/Hero';
import Experience from '@/components/homePage/Experience';

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
        <div className='relative z-0'>
          <Contact />
        </div>
      </main>
    </>
  );
}

