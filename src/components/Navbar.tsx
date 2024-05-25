'use client';

import Link from 'next/link';
import { TabNav } from '@radix-ui/themes';

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
    <TabNav.Root justify='center'>
      {sitePages.map((page) => (
        <Link href={page.href} className='text-black group ml-8 my-2' key={page.name}>
          {page.name}
          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600' />
        </Link>
      ))}
    </TabNav.Root>
  );
};

export default Navbar;
