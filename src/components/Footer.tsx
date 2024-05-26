'use client';

import { BsTwitterX, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import { sitePages } from './Navbar';

const socials = {
  X: {
    name: 'X',
    href: 'https://x.com/adnjoo',
    icon: (
      <BsTwitterX
        size={20}
        className='text-gray-600 transition duration-200 ease-in-out hover:text-gray-900 dark:fill-gray-400'
      />
    ),
  },
  Instagram: {
    name: 'Instagram',
    href: 'https://instagram.com/adnjoo',
    icon: (
      <BsInstagram
        size={20}
        className='text-gray-600 transition duration-200 ease-in-out hover:text-gray-900 dark:fill-gray-400'
      />
    ),
  },
  GitHub: {
    name: 'GitHub',
    href: 'https://github.com/adnjoo',
    icon: (
      <BsGithub
        size={20}
        className='text-gray-600 transition duration-200 ease-in-out hover:text-gray-900 dark:fill-gray-400'
      />
    ),
  },
  LinkedIn: {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/adnjoo',
    icon: (
      <BsLinkedin
        size={20}
        className='text-gray-600 transition duration-200 ease-in-out hover:text-gray-900 dark:fill-gray-400'
      />
    ),
  },
};

export default function Footer() {
  return (
    <footer className='py-4'>
      <div className='my-8 w-full border-t border-gray-400'></div>
      <div className='flex justify-between flex-col sm:flex-row mx-4 sm:mx-24'>
        <div>
          <div className='gap-8 flex mx-auto sm:mx-0 mb-8'>
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
          <div className='text-sm font-light hidden sm:block'>
            © {new Date().getFullYear()} Andrew Njoo. All rights reserved.
          </div>
        </div>
        <div className='text-center text-sm mb-8 sm:mb-0'>
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
