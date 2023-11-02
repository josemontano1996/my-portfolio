import Image, { StaticImageData } from 'next/image';
import { FC, useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

interface Props {
  index: number;
  title: string;
  icon: StaticImageData;
  callToAction: string;
  ul: {
    ready: string[];
    incoming?: string[];
  };
}
export const TechStackCart: FC<Props> = ({ index, title, ul, icon, callToAction }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Tilt className='xs:w-[250px] w-full mx-auto'>
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
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            opacity: [0, 1],
          }}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div
            // @ts-ignore
            options={{ max: 45, scale: 1, speed: 450 }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col cursor-pointer'
          >
            <ul>
              {ul.ready.map((li) => (
                <li key={li} className='list-disc text-white my-1 text-lg font-bold'>
                  {li}
                </li>
              ))}
              {ul.incoming && <div className='mt-6 mb-3 text-xl my-1'>In progress</div>}
              {ul.incoming?.map((li) => (
                <li key={li} className='list-disc text-white text-lg font-bold'>
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </Tilt>
  );
};
