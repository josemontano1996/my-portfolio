const About = () => {
  return (
    <section id='about' className="max-w-[85vw] mx-auto">
      <div className='flex flex-row items-start gap-5'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-5 h-5 rounded-full bg-info-strong' />
          <div className='w-1 h-80 violet-gradient' />
        </div>
        <div>
          <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>
            Hi, I am <span className='text-info-strong'>Jose</span>
          </h1>
          <p className='text-info font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] my-4 lg:my-8'>
            Over 1 year of programming experience. <br /> I develop the Full-Stack web applications,
            that your bussiness need.
          </p>
          <ul className='list-disc grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 text-xl pl-8'>
            <li className='italic lg:text-[26px] sm:text-[20px] xs:text-[20px] text-[16px]'>
              Best SEO practices
            </li>
            <li className='italic lg:text-[26px] sm:text-[20px]  xs:text-[20px] text-[16px]'>
              Internationalization
            </li>
            <li className='italic lg:text-[26px] sm:text-[20px]  xs:text-[20px] text-[16px]'>
              Responsive Design
            </li>
            <li className='italic lg:text-[26px] sm:text-[20px]  xs:text-[20px] text-[16px]'>
              Authentication
            </li>
            <li className='italic lg:text-[26px] sm:text-[20px]  xs:text-[20px] text-[16px]'>
              Databases
            </li>
            <li className='italic lg:text-[26px] sm:text-[20px]  xs:text-[20px] text-[16px]'>
              And much more...
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

