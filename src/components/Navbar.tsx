import { Suspense } from 'react';
import Link from 'next/link';
import { DarkMode } from './DarkMode';

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
  return (
    <div className='flex flex-row justify-center gap-8 pt-4 sm:pt-8'>
      <div className='flex items-center justify-center'>
        <Suspense fallback={<div className='h-5 w-5' />}>
          <DarkMode />
        </Suspense>
      </div>

      {sitePages.map((page) => (
        <Link
          href={page.href}
          className='group my-2 text-black dark:text-white'
          key={page.name}
        >
          {page.name}
          <span className='block h-0.5 max-w-0 bg-sky-600 transition-all duration-500 group-hover:max-w-full' />
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
