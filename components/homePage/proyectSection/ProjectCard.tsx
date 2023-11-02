import { motion } from 'framer-motion';
import { FC } from 'react';
import { fadeIn } from '../../../utils/motion';
import { Tilt } from 'react-tilt';
import { github } from '@/assets';
import Image from 'next/image';

interface Props {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: any;
  source_code_link: string;
}
export const ProjectCard: FC<Props> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
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

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <a target='_blank' href={`${source_code_link}`}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <Image src={github} alt='source code' className='w-1/2 h-1/2 object-contain' />
            </a>
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
