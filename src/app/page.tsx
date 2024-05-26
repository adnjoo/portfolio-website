import { Suspense } from 'react';
import FramerPill from '@/components/FramerPill';
import Songs from '@/components/Songs';

const tech = [
  'https://www.svgrepo.com/show/374146/typescript-official.svg',
  'https://www.svgrepo.com/show/452092/react.svg',
  'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
  'https://www.svgrepo.com/show/378837/node.svg',
  'https://www.svgrepo.com/show/354200/postgresql.svg',
  'https://www.svgrepo.com/show/452210/git.svg',
];

const plugins = [
  'https://www.svgrepo.com/show/306500/openai.svg',
  'https://www.svgrepo.com/show/374171/vscode.svg',
  'https://www.svgrepo.com/show/452202/figma.svg',
  'https://www.svgrepo.com/show/511330/apple-173.svg',
  'https://www.svgrepo.com/show/475684/spotify-color.svg',
  'https://www.svgrepo.com/show/452103/soundcloud.svg',
];

export default async function Home() {
  return (
    <main className='mx-6 mt-12 max-w-4xl lg:mx-auto'>
      {/* Grid Background */}
      <div className='absolute -z-10 inset-0 h-full w-full bg-background dark:bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]' />

      {/* Hero */}
      <span className='flex items-center gap-4'>
        <img
          className='h-11 w-11 rounded-full'
          src='https://avatars.githubusercontent.com/u/22807629?v=4'
          alt='pfp'
        />
        <div>
          <h1 className='text-xl'>Andrew Njoo</h1>
          <h1 className='text-lg'>
            Software Engineer |{' '}
            <a
              href='https://www.google.com/maps?q=37.773972,-122.431297'
              target='_blank'
              rel='noopener noreferrer'
            >
              SFBA 🌁
            </a>
          </h1>
        </div>
      </span>

      {/* Tech */}
      <div className='mt-8'>
        <div className='mb-2'>💻</div>
        <FramerPill items={tech} idx={0} />
      </div>

      {/* Plugins */}
      <div className='mt-8'>
        <div className='mb-2'>❤️</div>
        <FramerPill items={plugins} idx={1} />
      </div>

      <Suspense fallback='Loading...'>
        <Songs />
      </Suspense>
    </main>
  );
}
