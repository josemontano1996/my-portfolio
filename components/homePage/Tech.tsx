'use client';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '@/utils/motion';
import { services } from '@/constants/texts';
import { ServiceCard } from './ServiceCard';

const Tech = () => {
  return (
    <section className='my-10'>
      <motion.div variants={textVariant(0.1)}>
        <p className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Introduction.
        </p>
        <h2 className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
          Overview
        </h2>
      </motion.div>
      <motion.div variants={fadeIn('', '', 0.1, 1)}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatum nihil quia
        veniam doloremque modi commodi. Dolore reprehenderit, explicabo tempore omnis voluptatibus
        autem eligendi voluptatum voluptate nesciunt, eius quaerat soluta!
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Tech;

