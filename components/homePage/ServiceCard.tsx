import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

interface Props {
  index: number;
  title: string;
  icon: StaticImageData;
}
export const ServiceCard: FC<Props> = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        variants={fadeIn('right', 'spring', 0.5 * index, 1)}
      >
        <div
          // @ts-ignore
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <Image src={icon} alt={`${title} icon`} className='w-16 h-16 object-contain ' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
