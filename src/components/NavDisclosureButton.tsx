const selected =
  'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium';
const unselected =
  'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium';

import { Disclosure } from '@headlessui/react';

interface IProps {
  href: string;
  navLocation: string;
  setNavLocation: Function;
}

export default function NavDisclosureButton({
  href,
  navLocation,
  setNavLocation,
}: IProps) {
  return (
    <Disclosure.Button
      as='a'
      href={`#${href}`}
      className={href === navLocation ? selected : unselected}
      onClick={() => setNavLocation(href)}
    >
      {href}
    </Disclosure.Button>
  );
}
