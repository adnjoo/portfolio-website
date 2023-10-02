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
import { BsCodeSquare } from 'react-icons/bs';

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

const siteLogo = (): any => (
  <Box
    sx={{
      mr: 2,
      display: { xs: 'none', md: 'flex' },
    }}
  >
    <BsCodeSquare size={36} />
  </Box>
);

export default function ResponsiveAppBar(): any {
  const [anchorElNav, setAnchorElNav] = React.useState<any>(false);

  const handleOpenNavMenu = (event: any): any => {
    setAnchorElNav(anchorElNav ? false : event.currentTarget);
  };

  return (
    <AppBar position='static' className='!bg-sky-600'>
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
            {siteLogo()}
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
              >
                {page.name}
              </MenuItem>
            ))}
          </Box>
          {/* Mobile view */}
          <Box className='flex md:hidden'>
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
            className='ml-[-50px] flex flex-grow justify-center md:hidden'
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
