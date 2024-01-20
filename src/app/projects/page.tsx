import { IoIosLink } from 'react-icons/io';

const projects = [
  {
    name: 'Substrackr',
    description: 'A web app that helps users track subscriptions.',
    href: 'https://substrackr.com',
    icon: 'https://www.substrackr.com/logo.png',
  },
  {
    name: 'Red Border Chrome Extension',
    description:
      'A Chrome extension that helps web developers see HTML elements on a site.',
    href: 'https://chromewebstore.google.com/detail/red-border-chrome-extensi/cgbdhepdbbcdfdlopicohifabajofjbg',
    icon: 'https://raw.githubusercontent.com/andrewnjoo/RedBorderChromeExtension/main/redborderchromeextension/images/icon.png',
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
      <div className='flex items-center no-underline transition duration-200 ease-in-out hover:text-slate-600'>
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
      <h1 className='mx-auto mt-12 text-3xl sm:text-5xl'>
        Things I&apos;ve made trying to put my dent in the universe 🌌
      </h1>
      <p className='mt-6 text-base'>
        I love making stuff, and I love doing it well.
      </p>

      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </div>
  );
}
