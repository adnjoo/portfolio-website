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

export default function Projects(): any {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem',
      }}
    >
      <h1>Projects</h1>
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
