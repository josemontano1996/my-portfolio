'use client';

import { navigateTo } from '@/utils/navigateTo';

export const HeroCalltoActionButton = () => {
  return (
    <a href='#work' onClick={(e) => navigateTo(e, 'work')}>
      Discover more
    </a>
  );
};
