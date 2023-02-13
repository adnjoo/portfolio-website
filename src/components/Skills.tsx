import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {
  SiTypescript,
  SiReact,
  SiRedux,
  SiJest,
  SiNodedotjs,
  SiPython,
  SiRuby,
  SiGit,
} from 'react-icons/si';
import { SlRefresh } from 'react-icons/sl';
import { IconContext } from 'react-icons';

const skills = [
  {
    name: 'TypeScript',
    icon: (
      <IconContext.Provider value={{ color: '#3178c6' }}>
        <SiTypescript size={40} />
      </IconContext.Provider>
    ),
  },
  {
    name: 'React',
    icon: (
      <IconContext.Provider value={{ color: '#61dafb' }}>
        <SiReact size={40} />
      </IconContext.Provider>
    ),
  },
  {
    name: 'Redux',
    icon: (
      <IconContext.Provider value={{ color: '#764abc' }}>
        <SiRedux size={40} />
      </IconContext.Provider>
    ),
  },
  {
    name: 'Jest',
    icon: (
      <IconContext.Provider value={{ color: '#c21325' }}>
        <SiJest size={40} />
      </IconContext.Provider>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <IconContext.Provider value={{ color: '#339933' }}>
        <SiNodedotjs size={40} />
      </IconContext.Provider>
    ),
  },
  {
    name: 'Python',
    icon: (
      <IconContext.Provider value={{ color: '#3776ab' }}>
        <SiPython size={40} />
      </IconContext.Provider>
    ),
  },
  {
    name: 'Rails',
    icon: (
      <IconContext.Provider value={{ color: '#cc0000' }}>
        <SiRuby size={40} />
      </IconContext.Provider>
    ),
  },
  {
    name: 'Git',
    icon: (
      <IconContext.Provider value={{ color: '#f14e32' }}>
        <SiGit size={40} />
      </IconContext.Provider>
    ),
  },
  {
    name: 'Agile',
    icon: (
      <IconContext.Provider value={{ color: '#7fe881' }}>
        <SlRefresh size={40} />
      </IconContext.Provider>
    ),
  },
];

export default function Skills(): any {
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
      <h1>Skills</h1>
      <Grid container>
        {skills.map((skill) => (
          <Grid
            item
            xs={6}
            sm={4}
            key={skill.name}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              mb: 2,
            }}
          >
            <h3>{skill.name}</h3>
            <Box
              sx={{
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            >
              {skill.icon}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
