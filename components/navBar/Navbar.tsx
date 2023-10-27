'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.webp';

import { MobileRightMenu } from './MobileRightMenu';
import { navigateTo } from '@/utils/navigateTo';

//TODO: change links when using internationalization
const Navbar = () => {
  return (
    <header className='z-20 sticky top-0'>
      <nav className=' w-full flex items-center py-5 top-0 z-20 bg-primary'>
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
              key={'work'}
              className={`hover:text-white text-[18px] font-medium cursor-pointer  text-secondary`}
            >
              <a href='#work' onClick={(event) => navigateTo(event, 'work')}>
                Work
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

