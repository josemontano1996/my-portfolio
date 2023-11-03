'use client';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import AnimatedWrapper from '../../Wrappers/AnimatedWrapper';
import loadTranslations from '@/utils/loadTranslations';
import { UIContext } from '@/context/ui/UIContext';
import { fadeIn, textVariant } from '@/utils/motion';
import { TechStackCart } from './TechStackCard';
import { ITechSection } from '@/interfaces/IHomePage';

const Tech = () => {
  const { lang } = useContext(UIContext);
  const t = loadTranslations(lang).homePage.techSection as ITechSection;
  return (
    <section className='my-14'>
      <AnimatedWrapper>
        <motion.div variants={textVariant(0.1)}>
          <h5 className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
            {t.upperTitle}
          </h5>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
            {t.title}
          </h2>
        </motion.div>
        <motion.div variants={fadeIn('', '', 0.1, 1)} className='text-lg tracking-wide'>
          {t.body}
        </motion.div>
        <div className='mt-10 flex flex-wrap gap-10'>
          {t.cards.map((card, index) => (
            <TechStackCart key={card.title} callToAction={t.callToAction} index={index} {...card} />
          ))}
        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default Tech;

