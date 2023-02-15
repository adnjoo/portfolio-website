import React from 'react';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const projects = [
  {
    name: 'Movie App 🎥',
    link: 'https://andrew-movie-app.netlify.app/',
  },
  {
    name: 'Sonic | Spotify Clone 🎵',
    link: 'https://sonic-azure.vercel.app/',
  },
  {
    name: 'Weather App ☀️',
    link: 'https://adnjoo.github.io/React-Weather/',
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
