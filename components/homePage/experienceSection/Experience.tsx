'use client';
import { VerticalTimeline } from 'react-vertical-timeline-component';

import AnimatedWrapper from '../../Wrappers/AnimatedWrapper';
import { motion } from 'framer-motion';
import { textVariant } from '../../../utils/motion';
import { experiences } from '@/constants/texts';
import { ExperienceCard } from './ExperienceCard';

const Experience = () => {
  return (
    <section id='experience' className='mx-auto relative z-0 max-w-[85vw]'>
      <AnimatedWrapper>
        <motion.div variants={textVariant(0.2)}>
          <h5 className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
            What I have done so far
          </h5>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
            Experience
          </h2>
        </motion.div>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default Experience;

