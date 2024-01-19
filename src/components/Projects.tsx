import React from 'react';
import Link from 'next/link';

const projects = [
  {
    name: 'Movie App 🎥',
    link: 'https://movie-app-code-182.vercel.app/',
  },
  {
    name: 'SubsTrackr 🧾',
    link: 'https://substrackr.com/',
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
    <div className='mx-auto flex flex-col py-10 max-w-6xl mb-16'>
      <h1 className='mb-6 text-center text-3xl font-semibold'>
        {projectsText.title}
      </h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 mx-auto md:gap-12'>
        {projects.map((project) => (
          <div
            key={project.name}
            className='rounded-lg border-2 p-4 text-center shadow-lg max-w-md'
          >
            <Link
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='transition duration-200 ease-in-out hover:underline'
            >
              {project.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
