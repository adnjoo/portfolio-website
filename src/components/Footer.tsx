'use client';

import { sitePages } from './Navbar';

export default function Footer() {
  return (
    <footer className='my-4'>
      <div className='my-8 w-full border-t border-gray-400'></div>
      <div className='flex flex-col justify-between sm:flex-row mx-4 sm:mx-24'>
        <div className='gap-8 flex mx-auto sm:mx-0 mb-8'>
          {sitePages.map((page) => (
            <a
              key={page.name}
              href={page.href}
              className='hover:underline text-sm font-light'
            >
              {page.name}
            </a>
          ))}
        </div>
        <p className='text-center text-sm font-light'>
          © {new Date().getFullYear()} Andrew Njoo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
