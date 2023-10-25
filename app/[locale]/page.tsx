import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'jm3 | Portfolio',
  description: 'kdfa;sfnakl',
};

export default function Home() {
  return (
    <>
      <header className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
      </header>
      <main className='bg-primary'>
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


