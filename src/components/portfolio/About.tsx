import React from 'react';
import Typed from 'react-typed';
import _ from 'lodash';
import { BiRefresh } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiOutlineFilePdf } from 'react-icons/ai';

import { quotes } from '../../assets/quotes'

const person = {
  name: 'Andrew Njoo',
  role: 'Software Builder',
  imageUrl: 'https://pbs.twimg.com/media/FnCuaaMaAAEP3w6?format=jpg&name=medium',
  githubUrl: 'https://github.com/adnjoo',
  twitterUrl: 'https://twitter.com/adnjoo',
  linkedinUrl: 'https://linkedin.com/in/adnjoo',
  resume: 'https://drive.google.com/file/d/1A8r_rYM3RYDzvHSYbB7gZd_MN0IpVwt0/view?usp=sharing'
};

// https://tailwindui.com/components/marketing/sections/team-sections
// With vertical images
export default function About (): any {
  const [vinciQuotes, setVinciQuotes] = React.useState(quotes);
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    setVinciQuotes(_.shuffle(quotes));
  }, []);

  const handleClick = (): any => {
    counter === vinciQuotes.length - 1
      ? setCounter(0)
      : setCounter(() => counter + 1);
  };

  return (
    <div className="bg-white py-10" id="about">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              About
            </h2>
            {/* Introduction */}
            <Typed
              className="text-3xl"
              strings={["Hi, I'm Andrew. Welcome to my site :) .."]}
              typeSpeed={40}
            />
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              <li key={person.name} className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    {/* Profile Pic */}
                    <img
                      className="object-cover w-auto max-h-40 mx-auto rounded-lg shadow-lg"
                      src={person.imageUrl}
                      alt=""
                      style={{ width: 'auto' }}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4 text-xl">
                      {/* P1 */}
                      <div className=" text-gray-500">
                        I am a software engineer based in Fremont, CA.
                      </div>
                      {/* P2 */}
                      <div className="order-3 ">
                        <p className="text-gray-500">
                          In my free time, I like to play guitar 🎸 and go
                          cycling 🚴‍♀️.
                        </p>
                      </div>
                      {/* P3 - Quote */}
                      <div className="order-1">
                        <p className="text-gray-500">
                          <i>{vinciQuotes[counter].quote}</i> - Leonardo da
                          Vinci
                        </p>
                        <p className="text-gray-500">
                          {vinciQuotes[counter].translation}{' '}
                          <button onClick={handleClick}>
                            <BiRefresh size={24} className='w-8 h-8 hover:scale-125 ease-in-out duration-300 delay-50' />
                          </button>
                        </p>
                      </div>
                      {/* Social Links */}
                      <ul
                        role="list"
                        className="flex space-x-5 flex-column"
                        style={{ minHeight: '100px' }}
                      >
                        <li>
                          <a href={person.githubUrl} target="_blank" rel="noreferrer">
                          <IconContext.Provider
                              value={{ color: 'black' }}
                            >
                              <BsGithub size={30} className='w-8 h-8 hover:scale-125 ease-in-out duration-300 delay-150' />
                            </IconContext.Provider>
                          </a>
                        </li>
                        <li>
                          <a href={person.twitterUrl} target="_blank" rel="noreferrer">
                            <IconContext.Provider
                              value={{ color: '#00acee' }}
                            >
                              <BsTwitter size={30} className='w-8 h-8 hover:scale-125 ease-in-out duration-300 delay-150' />
                            </IconContext.Provider>
                          </a>
                        </li>
                        <li>
                          <a href={person.linkedinUrl} target="_blank" rel="noreferrer">
                            <IconContext.Provider
                              value={{ color: '#0072b1' }}
                            >
                              <BsLinkedin size={30} className='w-8 h-8 hover:scale-125 ease-in-out duration-300 delay-150' />
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
                    {/* Soundcloud */}
                    <p className='text-gray-500 text-xl'>🎶:</p>
                    <iframe
                      width="100%"
                      height="300"
                      allow="autoplay"
                      src={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1480612231&color=%2369c854&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'}
                    ></iframe>
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
