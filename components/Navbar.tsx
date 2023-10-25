'use client';

import { styles } from '@/constants/styles';
import { navLinks } from '@/constants/texts';
import { logo, menu, close } from '@/assets';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

//TODO: change links when using internationalization
const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const navigateTo = (event: any, id: string): void => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setActive(id);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className='sm:px-16 px-6 w-full flex items-center py-5 top-0 z-20 bg-primary'>
      <div className='w-full flex justify-between items-center max-w-8xl mx-auto'>
        <Link
          href='#home'
          id='home'
          className='flex items-center gap-2'
          onClick={(event) => {
            toggle && setToggle(!toggle);
            navigateTo(event, 'home');
          }}
        >
          <Image src={logo} alt='logo image' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Jose &nbsp;
            <span className='sm:block hidden'>| Full-Stack Web Developer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <li
            key={'about'}
            className={`hover:text-white text-[18px] font-medium cursor-pointer ${
              active === 'about' ? 'text-white' : 'text-secondary'
            }`}
          >
            <a href='#about' onClick={(event) => navigateTo(event, 'about')}>
              About
            </a>
          </li>
          <li
            key={'work'}
            className={`hover:text-white text-[18px] font-medium cursor-pointer ${
              active === 'work' ? 'text-white' : 'text-secondary'
            }`}
          >
            <a href='#about' onClick={(event) => navigateTo(event, 'work')}>
              Work
            </a>
          </li>
          <li
            key={'contact'}
            className={`hover:text-white text-[18px] font-medium cursor-pointer ${
              active === 'contact' ? 'text-white' : 'text-secondary'
            }`}
          >
            <a href='#about' onClick={(event) => navigateTo(event, 'contact')}>
              Contact
            </a>
          </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <nav
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6  black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              <li
                key={'about2'}
                className={`hover:text-white text-[16px] font-medium cursor-pointer ${
                  active === 'about' ? 'text-white' : 'text-secondary'
                }`}
              >
                <a
                  href='#about'
                  onClick={(event) => {
                    setToggle(!toggle);
                    navigateTo(event, 'about');
                  }}
                >
                  About
                </a>
              </li>
              <li
                key={'work2'}
                className={`hover:text-white text-[16px] font-medium cursor-pointer ${
                  active === 'work' ? 'text-white' : 'text-secondary'
                }`}
              >
                <a
                  href='#about'
                  onClick={(event) => {
                    setToggle(!toggle);
                    navigateTo(event, 'work');
                  }}
                >
                  Work
                </a>
              </li>
              <li
                key={'work3'}
                className={`hover:text-white text-[16px] font-medium cursor-pointer ${
                  active === 'contact' ? 'text-white' : 'text-secondary'
                }`}
              >
                <a
                  href='#about'
                  onClick={(event) => {
                    setToggle(!toggle);
                    navigateTo(event, 'contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

