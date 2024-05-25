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
    <main className='mx-6 mt-8 max-w-4xl lg:mx-auto'>
      {/* Hero */}
      <ProfilePicture />
      <h1 className='mt-6 text-lg'>
        Hi <HandWave />, I&apos;m Andrew, a software designer based in the SF
        Bay Area.
      </h1>

      <p className='mt-6 text-base'>
        I&apos;m a co-founder of{' '}
        <Link href='https://bamboostud.io' target='_blank'>
          bamboostud.io
        </Link>
        🎋, where we help empower people to manage their technologies better.
      </p>

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
