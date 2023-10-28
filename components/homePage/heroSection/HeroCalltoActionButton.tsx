'use client';

import { navigateTo } from '@/utils/navigateTo';

export const HeroCalltoActionButton = () => {
  return (
    <a href='#about' onClick={(e) => navigateTo(e, 'about')}>
      Discover more
    </a>
  );
};
