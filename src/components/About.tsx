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
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = (): void => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>{aboutText.title}</h1>
        <p>{aboutText.subtitle}</p>
        <Box
          sx={{
            borderRadius: '10%',
            overflow: 'hidden',
          }}
        >
          <Image
            src={'/images/profile.jpg'}
            width={200}
            height={200}
            unoptimized
            alt='pfp'
            onClick={handleClick}
            className='rounded-md'
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>{aboutText.portfolioLinks}</h1>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {portfolioLinks.map((link) => (
          <Link
            href={link.href}
            target='_blank'
            rel='noreferrer'
            key={link.name}
            sx={{
              textDecoration: 'none',
              color: '#595959',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem',
              '&:hover': {
                color: '#000',
              },
            }}
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
