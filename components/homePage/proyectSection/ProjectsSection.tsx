'use client';

import AnimatedWrapper from '@/components/Wrappers/AnimatedWrapper';
import { textVariant } from '@/utils/motion';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { useContext } from 'react';
import { UIContext } from '@/context/ui/UIContext';
import loadTranslations from '@/utils/loadTranslations';

const ProyectsSection = () => {
  const { lang } = useContext(UIContext);
  const t = loadTranslations(lang).homePage.projectsSection;
  return (
    <section className='my-10 '>
      <AnimatedWrapper>
        <motion.div variants={textVariant(0.1)}>
          <h5 className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
            {t.uppertitle}
          </h5>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
            {t.title}
          </h2>
        </motion.div>

        {/* <div className='flex'>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatum nihil quia
            veniam doloremque modi commodi. Dolore reprehenderit, explicabo tempore omnis
            voluptatibus autem eligendi voluptatum voluptate nesciunt, eius quaerat soluta!
          </motion.p>
        </div> */}

        <div className='my-8'>
          <h4 className='sm:text-[18px]  text-[14px] text-secondary uppercase tracking-wider'>
            {t.inProgressTitle}
          </h4>
          <div className='mt-8 flex flex-wrap xl:grid xl:grid-cols-3 gap-7'>
            {t.inprogress.map((project, index) => (
              // eslint-disable-next-line react/jsx-no-undef
              <ProjectCard key={index} index={index} {...project} />
            ))}
          </div>
        </div>
        <div>
          <h4 className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
            {t.finishedProyectsTitle}
          </h4>
          <div className='mt-8 flex flex-wrap gap-7'>
            {t.projects.map((project, index) => (
              // eslint-disable-next-line react/jsx-no-undef
              <ProjectCard key={index} index={index} {...project} />
            ))}
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default ProyectsSection;
