'use client';

import { onAnchorNavigation } from '@/utils/onAnchorNavigation';

export const HeroCalltoActionButton = () => {
  return (
    <a
      href='#about'
      onClick={onAnchorNavigation}
      className='bg-tertiary sm:text-xl tracking-wide font-medium p-4 inline-block mt-3 rounded-2xl'
    >
      Discover more
    </a>
  );
};
