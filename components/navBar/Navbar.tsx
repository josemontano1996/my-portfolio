'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.webp';

import { MobileRightMenu } from './MobileRightMenu';
import { onAnchorNavigation } from '@/utils/onAnchorNavigation';
import { useContext } from 'react';
import { UIContext } from '@/context/ui/UIContext';
import loadTranslations from '@/utils/loadTranslations';
import { LanguageChanger } from './languageChanger';
import { useRouter } from 'next/navigation';

//TODO: change links when using internationalization
const Navbar = () => {
  const { lang, isContactPopUpOpen, toggleContactPopUp } = useContext(UIContext);
  const t = loadTranslations(lang).navBar;
  const router = useRouter();

  const navigateTo = (event: any, navigateUrl: string) => {
    event.preventDefault();
    isContactPopUpOpen && toggleContactPopUp();
    router.push(navigateUrl);
  };

  return (
    <header className='z-20 fixed top-0 py-2 h-[10vh] px-6 w-full left-0 bg-primary'>
      <nav className='  flex items-center'>
        <div className='w-full flex justify-between items-center max-w-8xl mx-auto'>
          <Link
            href={`/${lang}`}
            className='flex items-center gap-2'
            onClick={(event) => navigateTo(event, `/${lang}`)}
          >
            <Image src={logo} alt='logo image' className='w-auto h-14 object-contain' />
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            <li
              key={'about'}
              className={`hover:text-white text-[18px] font-medium cursor-pointer text-secondary`}
            >
              <a
                href='#about'
                onClick={(event) => {
                  onAnchorNavigation(event);
                  isContactPopUpOpen && toggleContactPopUp();
                }}
              >
                {t.about}
              </a>
            </li>
            <li
              key={'experience'}
              className={`hover:text-white text-[18px] font-medium cursor-pointer  text-secondary`}
            >
              <a
                href='#experience'
                onClick={(event) => {
                  onAnchorNavigation(event);
                  isContactPopUpOpen && toggleContactPopUp();
                }}
              >
                {t.experience}
              </a>
            </li>
            <li
              key={'contact'}
              className={`hover:text-white text-[18px] font-medium cursor-pointer  text-secondary`}
            >
              <button onClick={toggleContactPopUp}>{t.contact}</button>
            </li>
            <li>
              <div
                className={`hover:text-white text-[18px] ml-[-10px] font-medium cursor-pointer  text-secondary`}
              >
                <LanguageChanger />
              </div>
            </li>
          </ul>
          <MobileRightMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

