'use client';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline } from 'react-vertical-timeline-component';

import { UIContext } from '@/context/ui/UIContext';
import loadTranslations from '@/utils/loadTranslations';
import AnimatedWrapper from '../../Wrappers/AnimatedWrapper';
import { textVariant } from '../../../utils/motion';
import { ExperienceCard } from './ExperienceCard';
import { IExperienceSection } from '@/interfaces/IHomePage';

const Experience = () => {
  const { lang } = useContext(UIContext);
  const t = loadTranslations(lang).homePage.experienceSection as IExperienceSection;
  return (
    <section id='experience' className='mx-auto relative z-0 max-w-[85vw]'>
      <AnimatedWrapper>
        <motion.div variants={textVariant(0.2)}>
          <h5 className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
            {t.uppertitle}
          </h5>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
            {t.title}
          </h2>
        </motion.div>
      </AnimatedWrapper>
      
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {t.experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
   
    </section>
  );
};

export default Experience;

