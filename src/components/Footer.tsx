import React from 'react';
import Link from 'next/link';
import { Box, Button } from '@mui/material';
import { IconContext } from 'react-icons';
import { SiInstagram, SiGoodreads, SiWordpress } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';

const navigation = {
  main: [
    { name: 'Portfolio', href: '/' },
    { name: 'Blog', href: '/blog' },
  ],
};

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/adnjoo',
    icon: (
      <IconContext.Provider value={{ color: 'white' }}>
        <SiInstagram size={20} />
      </IconContext.Provider>
    ),
  },
  {
    name: 'Goodreads',
    url: 'https://goodreads.com/adnjoo',
    icon: (
      <IconContext.Provider value={{ color: 'white' }}>
        <SiGoodreads size={20} />
      </IconContext.Provider>
    ),
  },
  {
    name: 'WordPress',
    url: 'https://adnjoo.wordpress.com/',
    icon: (
      <IconContext.Provider value={{ color: 'white' }}>
        <SiWordpress size={20} />
      </IconContext.Provider>
    ),
  },
  {
    name: 'SiteCode',
    url: 'https://github.com/adnjoo/portfolio-website',
    icon: (
      <IconContext.Provider value={{ color: 'white' }}>
        <BiCodeAlt size={20} />
      </IconContext.Provider>
    ),
  },
];

const footerText = {
  copyright: '©',
  name: 'Andrew Njoo',
};

export default function Footer(): any {
  return (
    <Box className='flex flex-col items-center justify-center bg-teal-600 text-white'>
      {/* Main Navigation */}
      <Box className='my-4 flex gap-6'>
        {navigation.main.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className='transition duration-200 ease-in-out hover:text-slate-400'
          >
            {item.name}
          </Link>
        ))}
      </Box>
      {/* Social Links */}
      <Box>
        {socialLinks.map((link) => (
          <Button
            className='no-underline'
            key={link.name}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            {link.icon}
          </Button>
        ))}
      </Box>
      {/* Copyright */}
      <Box className='my-4 text-white'>
        {`${footerText.copyright} ${new Date().getFullYear()} ${
          footerText.name
        }`}
      </Box>
    </Box>
  );
}
