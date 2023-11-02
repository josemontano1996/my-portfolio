'use client';

import { useContext } from 'react';
import { UIContext } from '@/context/ui/UIContext';
import loadTranslations from '@/utils/loadTranslations';
import { onAnchorNavigation } from '@/utils/onAnchorNavigation';

export const HeroCalltoActionButton = () => {
  const { lang } = useContext(UIContext);
  const t = loadTranslations(lang).homePage.heroSection;
  return (
    <a
      href='#about'
      onClick={onAnchorNavigation}
      className='bg-tertiary sm:text-xl tracking-wide font-medium p-4 inline-block mt-3 rounded-2xl'
    >
      {t.callToAction}
    </a>
  );
};
