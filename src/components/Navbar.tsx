'use client';

import { IoMenu } from 'react-icons/io5';
import { ThemeChanger } from '@/components/ThemeChanger';
import ProfilePicture from '@/components/ProfilePicture';
import { usePathname } from 'next/navigation';

export const sitePages = [
  {
    name: 'About',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start ml-4'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <IoMenu size={24} />
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
          >
            {sitePages.map((page) => (
              <li key={page.name}>
                <a href={page.href}>{page.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className='' href='/'>
          {pathname !== '/' ? (
            <ProfilePicture className='!my-0 ml-2 !h-8 !w-8' />
          ) : null}
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          {sitePages.map((page) => (
            <li key={page.name}>
              <a href={page.href}>{page.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar-end mr-4'>
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Navbar;
