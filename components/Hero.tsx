'use client';

import { EarthCanvas } from '.';

const Hero = () => {
  return (
    <section className='m-h-[70vh]'>
      <div className='flex justify-between flex-col sm:flex-row '>
        <h2 className='xl:flex-1'>A World of Solutions at the Reach of Your Hand</h2>
        <div className='xl:flex-1 md:h-[550px] h-[350px]'>
          <EarthCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;

