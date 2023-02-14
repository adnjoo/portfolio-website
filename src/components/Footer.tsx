import React from 'react';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
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
  }
];
export default function Footer(): any {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        minHeight: '10vh',
        marginTop: '5vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Main Navigation */}
      <Box>
        {navigation.main.map((item) => (
          <Button
            key={item.name}
            href={item.href}
            color='inherit'
            sx={{ color: 'primary.contrastText', textDecoration: 'none' }}
          >
            {item.name}
          </Button>
        ))}
      </Box>
      {/* Social Links */}
      <Box>
        {socialLinks.map((link) => (
          <Button
            key={link.name}
            href={link.url}
            target='_blank'
            sx={{
              textDecoration: 'none',
            }}
          >
            {link.icon}
          </Button>
        ))}
      </Box>
      {/* Copyright */}
      <Box
        sx={{
          color: 'primary.contrastText',
          margin: '1rem',
        }}
      >
        © {new Date().getFullYear()} Andrew Njoo
      </Box>
    </Box >
  );
}
