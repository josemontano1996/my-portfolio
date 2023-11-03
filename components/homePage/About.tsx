import { FC } from 'react';
import { IAboutSection } from '@/interfaces/IHomePage';
import loadTranslations from '@/utils/loadTranslations';

interface Props {
  locale: string;
}
const About: FC<Props> = ({ locale }) => {
  const t = loadTranslations(locale).homePage.aboutSection as IAboutSection;
  return (
    <section id='about' className='max-w-[85vw] mx-auto'>
      <div className='flex flex-row items-start gap-5'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-5 h-5 rounded-full bg-info-strong' />
          <div className='w-1 h-80 violet-gradient' />
        </div>
        <div className='w-screen'>
          <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>
            {t.title} <span className='text-info-strong'>{process.env.NEXT_PUBLIC_NAME}</span>
          </h1>
          <p className='text-info font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] my-4 lg:my-8'>
            {t.subtitle}
          </p>
          <ul className='list-disc grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 text-xl pl-8'>
            {t.ul.map((li, index) => (
              <li
                key={index}
                className='italic lg:text-[26px] sm:text-[20px] xs:text-[20px] text-[16px]'
              >
                {li}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

