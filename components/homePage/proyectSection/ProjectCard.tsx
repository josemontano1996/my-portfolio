import { motion } from 'framer-motion';
import { FC } from 'react';
import { fadeIn } from '../../../utils/motion';

import Image from 'next/image';
import { github } from '@/public/images';

interface Props {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: any;
  source_code_link: string;
  webpage_link: string;
}
export const ProjectCard: FC<Props> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  webpage_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.2, 0.75)} className='mx-auto'>
      <div className='bg-tertiary relative p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
          <Image
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
            <a
              target='_blank'
              href={`${source_code_link}`}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
              <Image src={github} alt='source code' className='w-1/2 h-1/2 object-contain' />
            </a>
              {webpage_link && (
                <a
                  target='_blank'
                  href={`${webpage_link}`}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-link'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M9 15l6 -6'></path>
                    <path d='M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464'></path>
                    <path d='M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463'></path>
                  </svg>
                </a>
              )}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
