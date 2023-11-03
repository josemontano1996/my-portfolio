import { motion } from 'framer-motion';
import { FC } from 'react';
import Image from 'next/image';

import { fadeIn } from '../../../utils/motion';
import { IProjectElement } from '@/interfaces/IHomePage';

export const ProjectCard: FC<IProjectElement> = ({
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
      <div className='bg-tertiary relative p-5 rounded-2xl sm:w-[360px] min-h-[550px] flex flex-col'>
        <div className='relative w-full h-[230px]'>
          <Image
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
            {source_code_link && (
              <a
                target='_blank'
                href={`${source_code_link}`}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <svg
                  //Source https://tabler-icons.io/ MIT License
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-brand-github'
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
                </svg>
              </a>
            )}
            {webpage_link && (
              <a
                target='_blank'
                href={`${webpage_link}`}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <svg
                  //Source https://tabler-icons.io/ MIT License
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

        <div className='mt-4 flex flex-wrap gap-2 absolute bottom-3'>
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
