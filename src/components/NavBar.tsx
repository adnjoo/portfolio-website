import * as React from 'react';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BsCodeSquare, BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

const sitePages = [
  {
    name: 'Portfolio',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
];

const siteTitle = "andrew njoo's site";

export default function ResponsiveAppBar(): any {
  const [anchorElNav, setAnchorElNav] = React.useState<any>(false);
  const { theme, setTheme } = useTheme();

  const handleOpenNavMenu = (event: any): any => {
    setAnchorElNav(anchorElNav ? false : event.currentTarget);
  };

  return (
    <AppBar position='static' className='bg-teal-600 dark:bg-teal-800'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* Desktop view */}
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            className='mr-2 hidden md:flex'
          >
            <Box className='mr-2 hidden md:flex'>
              <BsCodeSquare size={36} />
            </Box>
            {siteTitle}
          </Typography>
          {/* Desktop View Nav Buttons */}
          <Box className='hidden md:flex'>
            {sitePages.map((page) => (
              <MenuItem
                className='my-2 text-white'
                component={Link}
                key={page.name}
                href={page.href}
                tabIndex={0}
              >
                {page.name}
              </MenuItem>
            ))}

          </Box>
          {theme === 'dark' ? (
              <MenuItem
                className='my-2 text-sky-200 transition duration-200 ease-in-out hover:text-sky-400 md:flex md:relative absolute right-0'
                onClick={() => setTheme('light')}
              >
                <BsFillSunFill size={24} />
              </MenuItem>
            ) : (
              <MenuItem
                className='my-2 text-sky-200 transition duration-200 ease-in-out hover:text-sky-400 md:flex md:relative absolute right-0'
                onClick={() => setTheme('dark')}
              >
                <BsMoonFill size={24} />
              </MenuItem>
            )}
          {/* Mobile view */}
          <Box className='absolute top-1 z-10 flex md:hidden'>
            <IconButton
              size='large'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleOpenNavMenu}
              className='flex flex-col md:hidden'
              sx={{
                flexDirection: 'column',
              }}
            >
              {sitePages.map((page) => (
                <MenuItem
                  className='my-2 text-sky-600 transition duration-200 ease-in-out hover:text-sky-400'
                  component={Link}
                  key={page.name}
                  href={page.href}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Mobile View Title Text */}
          <Typography
            className='flex flex-grow justify-center md:hidden'
            variant='h5'
            noWrap
            component='a'
            href='/'
          >
            {siteTitle}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
