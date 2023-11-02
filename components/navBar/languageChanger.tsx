'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import i18nConfig from '@/i18nConfig';
import { useContext } from 'react';
import { UIContext } from '@/context/ui/UIContext';

export const LanguageChanger = () => {
  const { lang } = useContext(UIContext);
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e: any) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (lang === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${lang}`, `/${newLocale}`));
    }
  };

  return (
    <select onChange={handleChange} value={lang} className='bg-primary'>
      <option value='en'>EN</option>
      <option value='es'>ES</option>
      <option value='de'>DE</option>
    </select>
  );
};
