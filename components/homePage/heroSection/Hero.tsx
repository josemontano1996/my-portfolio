import { FC } from 'react';
import EarthCanvas from '@/components/canvas/Earth';
import StarsCanvas from '@/components/canvas/Stars';
import loadTranslations from '@/utils/loadTranslations';
import { HeroCalltoActionButton } from './HeroCalltoActionButton';
import { IHeroSection } from '@/interfaces/IHomePage';

interface Props {
  locale: string;
}

const Hero:FC<Props> = ({ locale }) => {
  const t = loadTranslations(locale).homePage.heroSection as IHeroSection;
  return (
    <section className='min-h-[70vh]'>
      <div className='flex relative justify-between flex-col lg:flex-row '>
        <div className='lg:w-1/2 mt-4 text-center'>
          <div className='lg:absolute lg:w-[45vw] lg:top-[20%]'>
            <h2 className='font-medium text-2xl lg:text-4xl'>{t.title}</h2>
            <h3 className='font-medium text-xl my-4 lg:my-8'>{t.subtitle}</h3>
            <HeroCalltoActionButton />
            <div></div>
          </div>
        </div>
        <div className='lg:w-1/2 md:h-[550px] h-[350px]'>
          <EarthCanvas />
        </div>
      </div>
      <StarsCanvas />
    </section>
  );
};

export default Hero;

