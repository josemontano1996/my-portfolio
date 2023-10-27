'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { menu, close } from '@/assets';
import { UIContext } from '@/context/ui/UIContext';
import { navigateTo } from '@/utils/navigateTo';

export const MobileRightMenu = () => {
  const { isSideMenuOpen, toggleSideMenu } = useContext(UIContext);

  return (
    <div className='sm:hidden flex flex-1 justify-end items-center'>
      <Image
        src={isSideMenuOpen ? close : menu}
        alt='menu'
        className='w-[28px] h-[28px] object-contain cursor-pointer'
        onClick={toggleSideMenu}
      />
      <nav
        className={`${
          !isSideMenuOpen ? 'hidden' : 'flex'
        } p-6  black-gradient absolute top-16 right-0  my-2 min-w-[140px] z-30 rounded-xl`}
      >
        <ul className='list-none flex justify-end items-start flex-col gap-4'>
          <li
            key={'about2'}
            className={`hover:text-white text-[16px] font-medium cursor-pointer  text-secondary`}
          >
            <a
              href='#about'
              onClick={(event) => {
                toggleSideMenu;
                navigateTo(event, 'about');
              }}
            >
              About
            </a>
          </li>
          <li
            key={'work2'}
            className={`hover:text-white text-[16px] font-medium cursor-pointer  text-secondary`}
          >
            <a
              href='#about'
              onClick={(event) => {
                toggleSideMenu;
                navigateTo(event, 'work');
              }}
            >
              Work
            </a>
          </li>
          <li
            key={'work3'}
            className={`hover:text-white text-[16px] font-medium cursor-pointer  text-secondary`}
          >
            <a
              href='#about'
              onClick={(event) => {
                toggleSideMenu;
                navigateTo(event, 'contact');
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
