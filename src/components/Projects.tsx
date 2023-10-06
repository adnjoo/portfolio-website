import React from 'react';
import Link from 'next/link';

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

export default function Projects() {
  return (
    <div className='mx-16 py-10 md:mx-32 lg:mx-48 xl:mx-64'>
      <h1 className='mb-6 text-center text-3xl font-semibold'>
        {projectsText.title}
      </h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {projects.map((project) => (
          <div
            key={project.name}
            className='rounded-lg border-2 p-4 text-center shadow-lg'
          >
            <Link
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='transition duration-200 ease-in-out hover:text-slate-600'
            >
              {project.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
