import EarthCanvas from '@/components/canvas/Earth';
import StarsCanvas from '@/components/canvas/Stars';


const Hero = () => {
  return (
    <section className='min-h-[70vh]'>
      <div className='flex relative justify-between flex-col lg:flex-row '>
        <div className='lg:w-1/2 mt-4 text-center'>
          <div className='lg:absolute lg:w-[45vw] lg:top-[20%]'>
            <h2 className=' font-medium text-2xl lg:text-4xl'>
              A World of Solutions at the Reach of Your Hand
            </h2>
            <h3 className='font-medium text-xl my-4 lg:my-8'>
              The web developer you search, for the solutions you need.
            </h3>
            <a href='#work'>Discover more</a>
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


