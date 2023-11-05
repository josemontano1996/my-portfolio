'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

import { ITechElement } from '../../../interfaces/IHomePage';

interface Props extends ITechElement {
  index: number;
  callToAction: string;
}
export const TechStackCard: FC<Props> = ({ index, title, ul, icon, callToAction }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Tilt glareEnable={true} className='xs:w-[230px] w-screen mx-auto'>
      {!isOpen ? (
        <motion.div
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
          variants={fadeIn('', 'spring', 0.3 * index, 1)}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div
            // @ts-ignore
            options={{ max: 45, scale: 1, speed: 450 }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <Image src={icon} alt={`${title} icon`} className='w-16 h-16 object-contain ' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            <p>{callToAction}</p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
          variants={fadeIn('', 'spring', 0.3 * index, 1)}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div
            // @ts-ignore
            options={{ max: 45, scale: 1, speed: 450 }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-between items-center flex-col cursor-pointer'
          >
            <ul>
              {ul.ready.map((li) => (
                <li
                  key={li.name}
                  className='text-white my-2 text-lg flex items-center gap-3 font-bold'
                >
                  {li.icon && (
                    <Image
                      src={li.icon}
                      width={30}
                      alt={li.alt || ''}
                      className={li.bg ? `bg-white p-1` : ''}
                    />
                  )}
                  <span>{li.name}</span>
                </li>
              ))}
              {ul.incoming && <div className='mt-6 mb-3 text-xl my-'>In progress</div>}
              {ul.incoming?.map((li) => (
                <li key={li.name} className='text-white text-lg font-bold my-2 flex gap-2'>
                  {li.icon && (
                    <Image
                      src={li.icon}
                      width={30}
                      alt={li.alt || ''}
                      className={li.bg ? `bg-[${li.bg}] p-1` : ''}
                    />
                  )}
                  <span>{li.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </Tilt>
  );
};
