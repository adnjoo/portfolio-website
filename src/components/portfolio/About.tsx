import React from 'react';
import Typed from 'react-typed';
import _ from 'lodash';
import { IconContext } from 'react-icons';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiOutlineFilePdf } from 'react-icons/ai';

const person = {
  name: 'Andrew Njoo',
  role: 'Software Builder',
  githubUrl: 'https://github.com/adnjoo',
  twitterUrl: 'https://twitter.com/adnjoo',
  linkedinUrl: 'https://linkedin.com/in/adnjoo',
  resume: 'https://drive.google.com/file/d/1A8r_rYM3RYDzvHSYbB7gZd_MN0IpVwt0/view?usp=sharing'
};

// https://tailwindui.com/components/marketing/sections/team-sections
// With vertical images
export default function About(): any {
  return (
    <div className="bg-white py-10" id="about">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              About
            </h2>
            {/* Introduction */}
            <p className="my-3">
              <Typed
                className="text-3xl"
                strings={["Hi, I'm Andrew. Welcome to my site :) .."]}
                typeSpeed={40}
              />
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              <li key={person.name} className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  {/* Profile Pic */}
                  <img
                    className="object-cover w-auto max-h-40 mx-auto sm:mx-6 rounded-lg shadow-lg"
                    src='./pfp.jpg'
                  />
                  <div className="sm:col-span-2">
                    <div className="space-y-4 text-xl">
                      {/* P1 */}
                      <div className=" text-gray-500 flex justify-center sm:justify-start">
                        I am a software engineer based in Fremont, CA.
                      </div>
                      {/* Social Links */}
                      <ul
                        role="list"
                        className="flex space-x-5 justify-center sm:justify-start"
                      >
                        <li>
                          <a href={person.githubUrl} target="_blank" rel="noreferrer">
                            <IconContext.Provider
                              value={{ color: 'black' }}
                            >
                              <BsGithub size={30} className='w-8 h-8 hover:scale-125 ease-in-out duration-150 delay-50' />
                            </IconContext.Provider>
                          </a>
                        </li>
                        <li>
                          <a href={person.twitterUrl} target="_blank" rel="noreferrer">
                            <IconContext.Provider
                              value={{ color: '#00acee' }}
                            >
                              <BsTwitter size={30} className='w-8 h-8 hover:scale-125 ease-in-out duration-150 delay-50' />
                            </IconContext.Provider>
                          </a>
                        </li>
                        <li>
                          <a href={person.linkedinUrl} target="_blank" rel="noreferrer">
                            <IconContext.Provider
                              value={{ color: '#0072b1' }}
                            >
                              <BsLinkedin size={30} className='w-8 h-8 hover:scale-125 ease-in-out duration-150 delay-50' />
                            </IconContext.Provider>
                          </a>
                        </li>
                        <li>
                          <a href={person.resume} target="_blank" rel="noreferrer">
                            <IconContext.Provider
                              value={{ color: '#415a77' }}
                            >

                              <AiOutlineFilePdf size={30} className='w-8 h-8 hover:scale-125 ease-in-out duration-300 delay-150' />
                            </IconContext.Provider>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
