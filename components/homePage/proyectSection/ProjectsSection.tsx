'use client';

import { useContext } from 'react';
import { motion } from 'framer-motion';
import AnimatedWrapper from '@/components/Wrappers/AnimatedWrapper';
import { UIContext } from '@/context/ui/UIContext';
import { textVariant } from '@/utils/motion';
import loadTranslations from '@/utils/loadTranslations';
import { ProjectCard } from './ProjectCard';
import { IProjectsSection } from '@/interfaces/IHomePage';

const ProyectsSection = () => {
  const { lang } = useContext(UIContext);
  const t = loadTranslations(lang).homePage.projectsSection as IProjectsSection;
  return (
    <section id='projects' className='my-10 max-w-screen'>
      <AnimatedWrapper>
        <motion.div variants={textVariant(0.1)}>
          <h5 className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
            {t.uppertitle}
          </h5>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
            {t.title}
          </h2>
        </motion.div>
      </AnimatedWrapper>
      <div className='my-8'>
        <h4 className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
          {t.finishedProyectsTitle}
        </h4>
        <div className='mt-8 flex flex-wrap gap-7'>
          {t.projects.map((project, index) => (
            // eslint-disable-next-line react/jsx-no-undef
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
        <div className='my-8'>
          <h4 className='sm:text-[18px]  text-[14px] text-secondary uppercase tracking-wider'>
            {t.inProgressTitle}
          </h4>
          <div className='mt-8 flex flex-wrap xl:grid xl:grid-cols-3 gap-7'>
            {t.inprogress?.map((project, index) => (
              // eslint-disable-next-line react/jsx-no-undef
              <ProjectCard key={index} index={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProyectsSection;
