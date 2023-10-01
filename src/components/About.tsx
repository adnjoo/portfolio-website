import React from 'react';
import Image from 'next/image';
import { Link } from '@mui/material';
import { GitHub, LinkedIn, PictureAsPdf } from '@mui/icons-material';
import { FaTwitter } from 'react-icons/fa6';

const portfolioLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/adnjoo',
    icon: <GitHub />,
  },
  {
    name: 'Twitter',
    href: 'https://x.com/adnjoo',
    icon: <FaTwitter size={24} />,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/adnjoo',
    icon: <LinkedIn />,
  },
  {
    name: 'Resume',
    href: './assets/Andrew Njoo Resume 2023.pdf',
    icon: <PictureAsPdf />,
  },
];

const aboutText = {
  title: "Hi I'm Andrew",
  subtitle: 'I am a software developer',
  portfolioLinks: 'Portfolio Links',
};

export default function About() {
  return (
    <div className='mb-6 mt-12 flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-semibold'>{aboutText.title}</h1>
      <p className='mt-2 text-lg'>{aboutText.subtitle}</p>
      <div className='mt-4 h-40 w-40 overflow-hidden rounded-full'>
        <Image
          src={'/images/profile.jpg'}
          width={200}
          height={200}
          unoptimized
          alt='pfp'
          className='rounded-md'
        />
      </div>

      <div className='my-4 flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-semibold'>{aboutText.portfolioLinks}</h1>
      </div>

      <div className='flex flex-col items-center justify-center'>
        {portfolioLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target='_blank'
            rel='noreferrer'
            className='mb-6 flex items-center text-slate-700 no-underline hover:text-blue-400'
          >
            {link.icon}
            <span className='ml-2'>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
