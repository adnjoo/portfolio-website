import React from 'react';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const projects = [
  {
    name: 'Movie App 🎥',
    link: 'https://movie-app-adnjoo.vercel.app/',
  },
  {
    name: 'HelloRemote 👋',
    link: 'https://helloremote.dev/',
  },
  {
    name: 'Bookkss 📚',
    link: 'https://bookkss.com',
  },
];

const projectsText = {
  title: 'Projects',
};

export default function Projects(): any {
  return (
    <Box className='section-container'>
      <h1>{projectsText.title}</h1>
      <Grid container>
        {projects.map((project) => (
          <Grid
            item
            xs={12}
            md={4}
            key={project.name}
            sx={{
              textAlign: 'center',
            }}
          >
            <Link
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                textDecoration: 'none',
              }}
            >
              <h3>{project.name}</h3>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
