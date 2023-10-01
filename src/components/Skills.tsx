import React from 'react';
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

const spinStyle = {
  animation: 'spin 30s infinite linear',
};

const skills = [
  {
    name: 'TypeScript',
    icon: <SiTypescript size={40} className='text-blue-500' />,
  },
  {
    name: 'React',
    icon: (
      <SiReact
        size={40}
        className='animate-spin text-blue-300'
        style={spinStyle}
      />
    ),
  },
  {
    name: 'Redux',
    icon: <SiRedux size={40} className='text-purple-600' />,
  },
  {
    name: 'Jest',
    icon: <SiJest size={40} className='text-red-600' />,
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs size={40} className='text-green-500' />,
  },
  {
    name: 'Python',
    icon: <SiPython size={40} className='text-blue-700' />,
  },
  {
    name: 'Rails',
    icon: <SiRuby size={40} className='text-red-800' />,
  },
  {
    name: 'Git',
    icon: <SiGit size={40} className='text-red-600' />,
  },
  {
    name: 'Agile',
    icon: <SlRefresh size={40} className='text-green-400' />,
  },
];

const skillsText = {
  title: 'Skills',
};

export default function Skills() {
  return (
    <div className='bg-gray-100 py-10'>
      <h1 className='mb-6 text-center text-3xl font-semibold'>
        {skillsText.title}
      </h1>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className='place-self-center flex w-24 h-24 flex-col justify-center items-center rounded-lg bg-white p-4 text-center shadow-lg transition-transform duration-200 ease-in-out hover:scale-110'
          >
            {skill.icon}
            <h3 className='mt-2'>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
