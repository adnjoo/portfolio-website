'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  console.log(pathname);

  return (
    <TabNav.Root justify='center'>
      {sitePages.map((page) => (
        <TabNav.Link
          key={page.name}
          asChild
          active={
            pathname === page.href ||
            (pathname.includes(page.href) && page.href !== '/')
          }
        >
          <Link href={page.href}>{page.name}</Link>
        </TabNav.Link>
      ))}
    </TabNav.Root>
  );
};

export default Navbar;
