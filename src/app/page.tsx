import { BsTwitterX, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import ProfilePicture from '@/components/ProfilePicture';

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

export default function Home() {
  return (
    <main className='mx-6 mt-8 max-w-4xl lg:mx-auto lg:mt-28'>
      {/* Hero */}
      <ProfilePicture />
      <h1 className='text-3xl sm:text-5xl'>
        Software designer, founder, and maker.
      </h1>
      <p className='mt-6 text-base '>
        I&apos;m Andrew, a software designer and entrepreneur based in the SF
        Bay Area. I&apos;m the co-founder and CEO of{' '}
        <a href='https://bamboostud.io' about='_blank' className='link-primary'>
          bamboostud.io
        </a>
        🎋, where we develop technologies that empower companies and people to
        manage their technologies and finances better.
      </p>

      <div className='mt-2 flex gap-6'>
        {Object.entries(socials).map(([name, social]) => (
          <a
            key={name}
            href={social.href}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6 flex items-center no-underline transition duration-200 ease-in-out hover:text-slate-600'
          >
            {social?.icon}
          </a>
        ))}
      </div>

      {/* Pics? */}

      {/* Latest 3 blog posts */}

      {/* Work experience */}
    </main>
  );
}
