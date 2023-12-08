import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GitHub, LinkedIn, PictureAsPdf } from '@mui/icons-material';
import { FaXTwitter } from 'react-icons/fa6';

const portfolioLinks = [
  {
    name: '',
    href: 'https://x.com/adnjoo',
    icon: <FaXTwitter size={24} />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/adnjoo',
    icon: <GitHub />,
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
      <div className='mt-4 h-40 w-40 overflow-hidden rounded-full shadow-lg shadow-green-500/50'>
        <Image
          src={'/images/profile.jpg'}
          width={200}
          height={200}
          unoptimized
          alt='pfp'
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
            className='mb-6 flex items-center no-underline transition duration-200 ease-in-out hover:text-slate-600'
          >
            {link.icon}
            <span className='ml-2 dark:bg-white'>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
