'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.webp';

import { MobileRightMenu } from './MobileRightMenu';
import { navigateTo } from '@/utils/navigateTo';

//TODO: change links when using internationalization
const Navbar = () => {
  return (
    <header className='z-20 fixed top-0 py-2 px-6 w-full left-0 bg-primary'>
      <nav className='  flex items-center'>
        <div className='w-full flex justify-between items-center max-w-8xl mx-auto'>
          <Link href='/en' id='home' className='flex items-center gap-2'>
            <Image src={logo} alt='logo image' className='w-auto h-14 object-contain' />
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            <li
              key={'about'}
              className={`hover:text-white text-[18px] font-medium cursor-pointer text-secondary`}
            >
              <a href='#about' onClick={(event) => navigateTo(event, 'about')}>
                About
              </a>
            </li>
            <li
              key={'experience'}
              className={`hover:text-white text-[18px] font-medium cursor-pointer  text-secondary`}
            >
              <a href='#experience' onClick={(event) => navigateTo(event, 'experience')}>
                Experience
              </a>
            </li>
            <li
              key={'contact'}
              className={`hover:text-white text-[18px] font-medium cursor-pointer  text-secondary`}
            >
              <a href='#contact' onClick={(event) => navigateTo(event, 'contact')}>
                Contact
              </a>
            </li>
          </ul>
          <MobileRightMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;



