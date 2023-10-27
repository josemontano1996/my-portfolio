import { Metadata } from 'next';
import About from '@/components/homePage/About';
import Contact from '@/components/homePage/Contact';
import Experience from '@/components/homePage/Experience';
import Feedbacks from '@/components/homePage/Feedbacks';
import Tech from '@/components/homePage/Tech';
import Works from '@/components/homePage/Works';
import Hero from '@/components/homePage/heroSection/Hero';

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
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
      </main>
    </>
  );
}

