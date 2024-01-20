import React from 'react';
import Link from 'next/link';
import { Box, Button } from '@mui/material';
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
      <SiInstagram
        className='text-white transition duration-200 ease-in-out hover:text-slate-400'
        size={20}
      />
    ),
  },
  {
    name: 'Goodreads',
    url: 'https://goodreads.com/adnjoo',
    icon: (
      <SiGoodreads
        className='text-white transition duration-200 ease-in-out hover:text-slate-400'
        size={20}
      />
    ),
  },
  {
    name: 'WordPress',
    url: 'https://adnjoo.wordpress.com/',
    icon: (
      <SiWordpress
        className='text-white transition duration-200 ease-in-out hover:text-slate-400'
        size={20}
      />
    ),
  },
  {
    name: 'SiteCode',
    url: 'https://github.com/adnjoo/portfolio-website',
    icon: (
      <BiCodeAlt
        className='text-white transition duration-200 ease-in-out hover:text-slate-400'
        size={20}
      />
    ),
  },
];

const footerText = {
  copyright: '©',
  name: 'Andrew Njoo',
};

export default function Footer(): any {
  return (
    <Box className='flex flex-col items-center justify-center bg-grey-800 text-white border-t'>
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
