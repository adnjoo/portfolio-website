import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const portfolioLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/adnjoo',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/adnjoo',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/adnjoo',
  },
  {
    name: 'Resume',
    href: 'https://drive.google.com/file/d/1A8r_rYM3RYDzvHSYbB7gZd_MN0IpVwt0/view',
  },
];

export default function About (): any {
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
                <h1>Hi I'm Andrew</h1>
                <p>I am a software developer</p>
                <Box
                    sx={{
                      borderRadius: '10%',
                      overflow: 'hidden',
                    }}
                >
                    <Image src="/images/profile.jpg" width={200} height={200} unoptimized alt="pfp"
                    />
                </Box>
            </Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
                <h1>Portfolio Links</h1>
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
                    <Link href={link.href} target="_blank" rel="noreferrer"
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
                        {link.name === 'GitHub' ? <GitHubIcon /> : null}
                        {link.name === 'Twitter' ? <TwitterIcon /> : null}
                        {link.name === 'LinkedIn' ? <LinkedInIcon /> : null}
                        {link.name === 'Resume' ? <PictureAsPdfIcon /> : null}
                    </Link>
                ))}
            </Box>
        </>
  );
}
