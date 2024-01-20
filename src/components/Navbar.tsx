import { IoMenu } from 'react-icons/io5';
import { ThemeChanger } from '@/components/ThemeChanger';
import { metadata } from '@/app/layout';

const sitePages = [
  {
    name: 'Portfolio',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
];

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start ml-4'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <IoMenu size={24} />
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
          >
            {sitePages.map((page) => (
              <li key={page.name}>
                <a href={page.href}>{page.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className='btn btn-ghost text-xl' href='/'>
          {metadata.title as string}
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          {sitePages.map((page) => (
            <li key={page.name}>
              <a href={page.href}>{page.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar-end mr-4'>
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Navbar;
