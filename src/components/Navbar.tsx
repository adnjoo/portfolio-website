import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import NavLink from "./NavLink";
import NavDisclosureButton from "./NavDisclosureButton";

interface IProps {
  navLocation: string;
  setNavLocation: Function;
}

export default function Navbar({ navLocation, setNavLocation }: IProps) {
  return (
    <Disclosure as="nav" className="bg-white shadow border fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between sm:justify-around px-12 h-16">
              <div className="flex">
                {/* Nav Icon */}
                <div className="flex-shrink-0 flex items-center">
                  <a href="./">
                    <img className="h-8 w-auto" src="./whale.png" alt="whale" />
                  </a>
                </div>
                {/* Nav Items */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <NavLink
                    href="about"
                    navLocation={navLocation}
                    setNavLocation={setNavLocation}
                  />
                  <NavLink
                    href="skills"
                    navLocation={navLocation}
                    setNavLocation={setNavLocation}
                  />
                  <NavLink
                    href="projects"
                    navLocation={navLocation}
                    setNavLocation={setNavLocation}
                  />
                  <NavLink
                    href="contact"
                    navLocation={navLocation}
                    setNavLocation={setNavLocation}
                  />
                </div>
              </div>
              {/* Responsive */}
              <div className="-mr-2 flex items-center sm:hidden">
                {/* 🍔 menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* 🍔 menu options */}
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <NavDisclosureButton
                href="about"
                navLocation={navLocation}
                setNavLocation={setNavLocation}
              ></NavDisclosureButton>
              <NavDisclosureButton
                href="skills"
                navLocation={navLocation}
                setNavLocation={setNavLocation}
              ></NavDisclosureButton>
              <NavDisclosureButton
                href="projects"
                navLocation={navLocation}
                setNavLocation={setNavLocation}
              ></NavDisclosureButton>
              <NavDisclosureButton
                href="contact"
                navLocation={navLocation}
                setNavLocation={setNavLocation}
              ></NavDisclosureButton>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}