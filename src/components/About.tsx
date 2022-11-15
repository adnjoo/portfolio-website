import React from "react";
import Typed from "react-typed";
import AboutLink from "./ui_elements/AboutLink";
import _ from "lodash";
// @ts-ignore
import { quotes } from "../assets/quotes";
import RefreshButton from "./ui_elements/RefreshButton";
const person = {
  name: "Andrew Njoo",
  role: "Software Builder",
  imageUrl: "https://i1.sndcdn.com/avatars-000127627772-lsnb1f-t500x500.jpg",
  githubUrl: "https://github.com/adnjoo",
  twitterUrl: "https://twitter.com/adnjoo",
  linkedinUrl: "https://linkedin.com/in/adnjoo",
};

// https://tailwindui.com/components/marketing/sections/team-sections
// With vertical images
export default function About() {
  const [vinciQuotes, setVinciQuotes] = React.useState(quotes);

  let [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    setVinciQuotes(_.shuffle(quotes));
  }, []);

  const handleClick = () =>
    counter === vinciQuotes.length - 1
      ? setCounter(0)
      : setCounter(() => counter + 1);

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
                      className="object-cover shadow-lg rounded-lg"
                      src={person.imageUrl}
                      alt=""
                      style={{ maxWidth: "200px" }}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4 text-2xl">
                      {/* P1 */}
                      <div className=" text-gray-500">
                        I currently work at
                        {
                          <AboutLink
                            href="https://aws.amazon.com/cloudformation/"
                            text=" AWS "
                          />
                        }
                        in the CloudFormation console team.
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
                          {vinciQuotes[counter].translation}{" "}
                          <RefreshButton handleClick={handleClick} />
                        </p>
                      </div>
                      {/* Social Links */}
                      <ul
                        role="list"
                        className="flex space-x-5 flex-column"
                        style={{ minHeight: "100px" }}
                      >
                        <li>
                          <a href={person.githubUrl} target="_blank">
                            <span className="sr-only">Github</span>
                            <svg
                              className="w-8 h-8 hover:w-12 hover:h-12 icon-transition"
                              aria-hidden="true"
                              fill="black"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={person.twitterUrl} target="_blank">
                            <span className="sr-only">Twitter</span>
                            <svg
                              className="w-8 h-8 hover:w-12 hover:h-12 icon-transition"
                              aria-hidden="true"
                              fill="#00acee"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={person.linkedinUrl} target="_blank">
                            <span className="sr-only">LinkedIn</span>
                            <svg
                              className="w-8 h-8 hover:w-12 hover:h-12 icon-transition"
                              aria-hidden="true"
                              fill="#0072b1"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Soundcloud */}
                    <p className='text-gray-500 text-xl'>🎶:</p>
                    <iframe
                      width="100%"
                      height="300"
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1480612231&color=%2369c854&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
                    ></iframe>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    // wow that's alot of nested divs lol
  );
}
