'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

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
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const checkLocalStorage = localStorage.getItem('theme');
    if (!checkLocalStorage) {
      const checkDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
      setTheme(checkDarkTheme ? 'dark' : 'light');
    }
  }, []);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='flex flex-row justify-center gap-8 pt-4 sm:pt-8'>
      <div className='flex items-center justify-center'>
        {theme === 'light' ? (
          <button
            className='hover:animate-pulse'
            onClick={() => setTheme('dark')}
          >
            🌚
          </button>
        ) : (
          <button
            className='hover:animate-pulse'
            onClick={() => setTheme('light')}
          >
            🌝
          </button>
        )}
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
