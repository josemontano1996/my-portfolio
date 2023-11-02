'use client';

import { navigateTo } from '@/utils/navigateTo';

export const HeroCalltoActionButton = () => {
  return (
    <a
      href='#about'
      onClick={(e) => navigateTo(e, 'about')}
      className='bg-tertiary p-5 rounded-2xl'
    >
      Discover more
    </a>
  );
};
