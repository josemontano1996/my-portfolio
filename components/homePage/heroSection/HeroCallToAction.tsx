'use client';
import { navigateTo } from '@/utils/navigateTo';

export const HeroCallToAction = () => {
  return <button onClick={(event) => navigateTo(event, 'work')}>Discover more</button>;
};
