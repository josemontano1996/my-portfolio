'use client';
import { FC } from 'react';
import Image from 'next/image';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { IExperienceElement } from '@/interfaces/IHomePage';
import { motion } from 'framer-motion';
import { textVariant } from '@/utils/motion';

interface Props {
  experience: IExperienceElement;
}

export const ExperienceCard: FC<Props> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
            {experience.company_name}
          </p>
        </div>

        {experience.certification_url && (
          <a href={experience.certification_url} target='_blank' className='inline-block my-1'>
            View Certification
          </a>
        )}

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
    </VerticalTimelineElement>
  );
};
