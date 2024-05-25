import { BsTwitterX, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from '@radix-ui/themes';
import HandWave from '@/components/HandWave';
import ProfilePicture from '@/components/ProfilePicture';
import { OrbitingCirclesDemo } from '@/components/circles';

const socials = {
  X: {
    name: 'X',
    href: 'https://x.com/adnjoo',
    icon: <BsTwitterX size={24} />,
  },
  Instagram: {
    name: 'Instagram',
    href: 'https://instagram.com/adnjoo',
    icon: <BsInstagram size={24} />,
  },
  GitHub: {
    name: 'GitHub',
    href: 'https://github.com/adnjoo',
    icon: <BsGithub size={24} />,
  },
  LinkedIn: {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/adnjoo',
    icon: <BsLinkedin size={24} />,
  },
};

const plugins = [
  {
    name: 'Amazon Q',
    href: 'https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-getting-started-installing.html',
    description: 'terminal autcomplete',
  },
  {
    name: 'Codeium',
    href: 'https://codeium.com',
    description: 'faster coding',
  },
  {
    name: 'VSCode',
    href: 'https://code.visualstudio.com',
    description: 'useful plugins',
  },
  {
    name: 'Starship',
    href: 'https://starship.rs',
    description: 'colorize terminal',
  },
  {
    name: 'ChatGPT',
    href: 'https://chat.openai.com',
    description: 'glue ideas',
  },
  {
    name: 'Rectangle',
    href: 'https://rectangleapp.com',
    description: 'move windows faster',
  },
];

export default function Home() {
  return (
    <main className='mx-6 mt-8 max-w-4xl lg:mx-auto lg:mt-28'>
      {/* Hero */}
      <ProfilePicture />
      <h1 className='text-3xl sm:text-5xl'>
        Software designer, founder, and maker.
      </h1>
      <p className='mt-6 text-base'>
        Hi <HandWave />, I&apos;m Andrew, a software designer based in the SF
        Bay Area.
      </p>

      <p className='mt-6 text-base'>
        I&apos;m a co-founder of{' '}
        <a
          href='https://bamboostud.io'
          target='_blank'
          className='link-primary'
        >
          bamboostud.io
        </a>
        🎋, where we help empower people to manage their technologies better.
      </p>

      <div className='mt-2 flex gap-6'>
        {Object.entries(socials).map(([name, social]) => (
          <a
            key={name}
            href={social.href}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6 flex items-center no-underline transition duration-200 ease-in-out hover:text-slate-600 hover:animate-pulse'
          >
            {social?.icon}
          </a>
        ))}
      </div>

      {/* Tech */}
      <div className='mt-12'>
        <OrbitingCirclesDemo />
      </div>

      {/* Plugins */}
      <div className='mt-12'>
        ⚡️ Plugins:
        <ul className='list-inside list-disc '>
          {plugins.map((plugin) => (
            <li key={plugin.name} className='mt-1'>
              <Link
                href={plugin.href}
                target='_blank'
                rel='noopener noreferrer'
                className='link-primary'
              >
                {plugin.name}
              </Link>{' '}
              - {plugin.description}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
