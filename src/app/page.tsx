import { Link } from '@radix-ui/themes';
import HandWave from '@/components/HandWave';
import ProfilePicture from '@/components/ProfilePicture';
import { OrbitingCirclesDemo } from '@/components/circles';

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
    <main className='mx-6 mt-12 max-w-4xl lg:mx-auto'>
      {/* Hero */}
      <span className='flex items-center gap-4'>
        <ProfilePicture />
        <div>
          <h1 className='text-xl'>Andrew Njoo</h1>
          <h1 className='text-lg'>Software Engineer in SFBA 🌁</h1>
        </div>
      </span>

      {/* Tech */}
      <div className='mt-6'>
        <div className='mb-2'>I like to build with e.g.</div>
        <OrbitingCirclesDemo />
      </div>

      {/* Plugins */}
      <div className='mt-8'>
        Some plugins I use:
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
