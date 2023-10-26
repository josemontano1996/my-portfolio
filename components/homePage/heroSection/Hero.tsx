import EarthCanvas from '@/components/canvas/Earth';
import StarsCanvas from '@/components/canvas/Stars';
import { HeroCallToAction } from './HeroCallToAction';

const Hero = () => {
  return (
    <section className='m-h-[70vh]'>
      <div className='flex justify-between flex-col sm:flex-row '>
        <div className='xl:flex-1 xl:pl-14 xl:pr-0 mt-4'>
          <h2 className=' font-medium text-2xl xl:relative xl:top-[25%] text-center xl:text-4xl'>
            A World of Solutions at the Reach of Your Hand
          </h2>
          <HeroCallToAction />
        </div>
        <div className='xl:flex-1 md:h-[550px] h-[350px]'>
          <EarthCanvas />
        </div>
      </div>
      <StarsCanvas />
    </section>
  );
};

export default Hero;

