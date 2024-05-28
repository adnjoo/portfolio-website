import { IoIosLink } from 'react-icons/io';

const projects = [
  {
    name: 'Red Border Chrome Extension',
    description:
      'A Chrome extension that helps web developers see HTML elements on a site.',
    href: 'https://chromewebstore.google.com/detail/red-border-chrome-extensi/cgbdhepdbbcdfdlopicohifabajofjbg',
    icon: 'https://raw.githubusercontent.com/andrewnjoo/RedBorderChromeExtension/main/redborderchromeextension/images/icon128.png',
  },
  {
    name: 'Movie App',
    description: 'A web app that helps users search for movies.',
    href: 'https://movie-app-code-182.vercel.app/',
    icon: 'https://raw.githubusercontent.com/andrewnjoo/Movie-App/main/client/public/movie.png',
  },
];

const Project = ({ name, description, href, icon, userCount }: any) => {
  return (
    <div className='mt-8'>
      <div className='flex items-center'>
        <div className='flex items-center gap-4'>
          <img src={icon} className='h-6 w-6' />
          <div className='flex flex-col'>
            <h2 className='text-xl'>{name}</h2>
            <p className='inline-flex gap-2 text-base'>
              {description}
              <a href={href} target='_blank' rel='noopener noreferrer'>
                <IoIosLink size={24} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className='mx-4 flex max-w-4xl flex-col lg:mx-auto'>
      {/* Gradient Background */}
      <div className='absolute bottom-0 left-[70%] right-0 top-[20%] -z-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-10 blur-3xl'></div>

      <h1 className='mx-auto mt-12 text-3xl'>
        Things I&apos;ve made trying to put my dent in the universe 🌌
      </h1>

      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </div>
  );
}
