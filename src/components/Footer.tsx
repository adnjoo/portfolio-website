import React from 'react';
import { BsInstagram, BsWordpress } from 'react-icons/bs';
import { FaGoodreadsG } from 'react-icons/fa';

interface NavigationItem {
  name: string;
  href: string;
  icon: () => any;
}

const navigation: NavigationItem[] = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/adnjoo/',
    icon: () => (<BsInstagram size={28} />)
  },
  {
    name: 'Goodreads',
    href: 'https://goodreads.com/adnjoo',
    icon: () => (<FaGoodreadsG size={28} />)
  },
  {
    name: 'Wordpress',
    href: 'https://adnjoo.wordpress.com/',
    icon: () => (<BsWordpress size={28} />)
  }
];

export default function Footer (): any {
  return (
      <footer className="bg-white" id="contact">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
                target="_blank" rel="noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon />
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-xl text-gray-400 md:inline-block">
              <a
                href="https://github.com/adnjoo/portfolio-website"
                target="_blank" rel="noreferrer"
              >
                Site Code{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </a>
            </p>
            <p className="text-center text-xl text-gray-400">
              &copy; {new Date().getFullYear()} Andrew Njoo
            </p>
          </div>
        </div>
      </footer>
  );
}
