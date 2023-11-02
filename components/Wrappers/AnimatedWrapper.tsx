'use client';
import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AnimatedWrapper: FC<Props> = ({ children }) => {
  return (
    <motion.section
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='mx-auto relative z-0 max-w-[85vw]'
    >
      {children}
    </motion.section>
  );
};

export default AnimatedWrapper;
