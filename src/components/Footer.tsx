'use client';

import Link from 'next/link';
import { Instagram, Twitter, Github, Linkedin } from 'lucide-react';
import { sitePages } from './Navbar';

const socials = {
  X: {
    name: 'X',
    href: 'https://x.com/adnjoo',
    icon: (
      <Twitter
        size={20}
        className='text-black hover:text-gray-500 dark:text-white'
      />
    ),
  },
  Instagram: {
    name: 'Instagram',
    href: 'https://instagram.com/adnjoo',
    icon: (
      <Instagram
        size={20}
        className='text-black hover:text-gray-500 dark:text-white'
      />
    ),
  },
  GitHub: {
    name: 'GitHub',
    href: 'https://github.com/adnjoo',
    icon: (
      <Github
        size={20}
        className='text-black hover:text-gray-500 dark:text-white'
      />
    ),
  },
  LinkedIn: {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/adnjoo',
    icon: (
      <Linkedin
        size={20}
        className='text-black hover:text-gray-500 dark:text-white'
      />
    ),
  },
};

export default function Footer() {
  return (
    <footer className='py-4'>
      <div className='my-8 w-full border-t border-gray-400'></div>
      <div className='mx-4 flex flex-col justify-between sm:mx-24 sm:flex-row'>
        <div>
          <div className='mx-auto mb-8 flex gap-8 sm:mx-0'>
            {sitePages.map((page) => (
              <Link
                key={page.name}
                href={page.href}
                className='my-link text-sm font-light'
              >
                {page.name}
              </Link>
            ))}
          </div>
          <div className='hidden text-sm font-light sm:block'>
            © {new Date().getFullYear()} Andrew Njoo. All rights reserved.
          </div>
        </div>
        <div className='mb-8 text-center text-sm sm:mb-0'>
          <div className='flex gap-6'>
            {Object.entries(socials).map(([name, social]) => (
              <a
                key={name}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center no-underline'
              >
                {social?.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
