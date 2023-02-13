import * as React from 'react';
import {
  AppBar,
  Box,
  Button,
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
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* Desktop view */}
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {siteLogo()}
            {siteTitle}
          </Typography>
          {/* Desktop View Nav Buttons */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sitePages.map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography
                  component='a'
                  href={page.href}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  {page.name}
                </Typography>
              </Button>
            ))}
          </Box>
          {/* Mobile view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {sitePages.map((page) => (
                <MenuItem key={page.name} onClick={handleOpenNavMenu}>
                  <Link
                    href={page.href}
                    sx={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <Typography>{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Mobile View Title Text */}
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
