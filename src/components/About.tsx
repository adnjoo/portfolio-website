import React from 'react';
import Image from 'next/image';
import { Box, Link } from '@mui/material';
import { GitHub, LinkedIn, PictureAsPdf } from '@mui/icons-material';
import { FaXTwitter } from 'react-icons/fa6';

const portfolioLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/adnjoo',
  },
  {
    name: 'Twitter',
    href: 'https://x.com/adnjoo',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/adnjoo',
  },
  {
    name: 'Resume',
    href: './assets/Andrew Njoo Resume 2023.pdf',
  },
];

const aboutText = {
  title: "Hi I'm Andrew",
  subtitle: 'I am a software developer',
  portfolioLinks: 'Portfolio Links',
};

export default function About(): any {
  return (
    <>
      <Box className='mb-6 mt-12 flex flex-col items-center justify-center'>
        <h1>{aboutText.title}</h1>
        <p>{aboutText.subtitle}</p>
        <Box className='overflow-hidden rounded-3xl'>
          <Image
            src={'/images/profile.jpg'}
            width={200}
            height={200}
            unoptimized
            alt='pfp'
            className='rounded-md'
          />
        </Box>
      </Box>
      <Box className='my-4 flex flex-col items-center justify-center'>
        <h1>{aboutText.portfolioLinks}</h1>
      </Box>
      <Box className='flex flex-col items-center justify-center'>
        {portfolioLinks.map((link) => (
          <Link
            className='mb-6 flex items-center text-slate-700 no-underline hover:text-blue-400'
            href={link.href}
            target='_blank'
            rel='noreferrer'
            key={link.name}
          >
            {link.name}&nbsp;
            {link.name === 'GitHub' ? <GitHub /> : null}
            {link.name === 'Twitter' ? <FaXTwitter size={24} /> : null}
            {link.name === 'LinkedIn' ? <LinkedIn /> : null}
            {link.name === 'Resume' ? <PictureAsPdf /> : null}
          </Link>
        ))}
      </Box>
    </>
  );
}
