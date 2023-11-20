'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { UIContext } from '@/context/ui/UIContext';
import { onAnchorNavigation } from '@/utils/onAnchorNavigation';
import { LanguageChanger } from './languageChanger';
import { menu, close } from '@/public/images';
import loadTranslations from '@/utils/loadTranslations';

export const MobileRightMenu = () => {
  const { lang, isContactPopUpOpen, isSideMenuOpen, toggleSideMenu, toggleContactPopUp } =
    useContext(UIContext);

  const t = loadTranslations(lang).navBar;

  return (
    <div className='sm:hidden flex flex-1 justify-end relative items-center'>
      <Image
        src={isSideMenuOpen ? close : menu}
        alt='menu'
        className='w-[28px] h-[28px] object-contain cursor-pointer'
        onClick={toggleSideMenu}
      />
      <nav
        className={`${
          !isSideMenuOpen ? 'hidden' : 'flex'
        } p-6  bg-tertiary absolute top-10 right-0  my-2 min-w-[140px] z-30 rounded-xl`}
      >
        <ul className='list-none flex justify-end items-start flex-col gap-4'>
          <li
            key={'about2'}
            className={`hover:text-white text-[16px] font-medium cursor-pointer  text-secondary`}
          >
            <a
              href='#about'
              onClick={(event) => {
                toggleSideMenu();
                isContactPopUpOpen && toggleContactPopUp();
                onAnchorNavigation(event);
              }}
            >
              {t.about}
            </a>
          </li>
          <li
            key={'experience2'}
            className={`hover:text-white text-[16px] font-medium cursor-pointer  text-secondary`}
          >
            <a
              href='#experience'
              onClick={(event) => {
                toggleSideMenu();
                isContactPopUpOpen && toggleContactPopUp();
                onAnchorNavigation(event);
              }}
            >
              {t.experience}
            </a>
          </li>
          <li
            key={'projects2'}
            className={`hover:text-white text-[18px] font-medium cursor-pointer  text-secondary`}
          >
            <a
              href='#projects'
              onClick={(event) => {
                onAnchorNavigation(event);
                isContactPopUpOpen && toggleContactPopUp();
              }}
            >
              {t.projects}
            </a>
          </li>
          <li
            key={'contact2'}
            className={`hover:text-white text-[16px] font-medium cursor-pointer  text-secondary`}
          >
            <button
              onClick={(event) => {
                toggleSideMenu();
                toggleContactPopUp();
              }}
            >
              {t.contact}
            </button>
          </li>
          <li className='mx-auto'>
            <div
              className={`hover:text-white text-[18px] ml-[-10px] font-medium cursor-pointer  text-secondary`}
            >
              <LanguageChanger />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
