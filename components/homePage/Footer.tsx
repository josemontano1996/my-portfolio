'use client';

import { useContext } from 'react';
import { motion } from 'framer-motion';
import AnimatedWrapper from '@/components/Wrappers/AnimatedWrapper';
import { UIContext } from '@/context/ui/UIContext';
import { textVariant } from '@/utils/motion';
import loadTranslations from '@/utils/loadTranslations';
import { IFooter } from '@/interfaces/IHomePage';

const Footer = () => {
  const { lang, toggleContactPopUp } = useContext(UIContext);
  const t = loadTranslations(lang).footer as IFooter;

  return (
    <section className='my-12 '>
      <AnimatedWrapper>
        <motion.div variants={textVariant(0.1)} className='text-center'>
          <h5 className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
            {t.uppertitle}
          </h5>
          <button
            className='text-white underline lg:no-underline hover:underline font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'
            onClick={toggleContactPopUp}
          >
            {t.title}
          </button>
        </motion.div>
      </AnimatedWrapper>
    </section>
  );
};

export default Footer;
