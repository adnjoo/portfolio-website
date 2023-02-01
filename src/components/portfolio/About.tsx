import React from 'react';
import Typed from 'react-typed';
import _ from 'lodash';
import { BiRefresh } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiOutlineFilePdf } from 'react-icons/ai';

const quotes = [
  {
    quote: "Il moto è causa d'ogni vita",
    translation: 'Motion is the cause of all life'
  },
  {
    quote: 'La conoscenza di tutte le cose è possibile',
    translation: 'The knowledge of all things is possible'
  },
  {
    quote: "La passione dell'animo caccia via la lussuria",
    translation: 'Passion of the soul chases away lust'
  },
  {
    quote: 'Chi poco pensa molto erra',
    translation: 'Those who think little, err'
  },
  {
    quote: "Chi tempo ha e tempo aspetta, perde l'amico e danari non ha mai",
    translation:
      'He who has time and awaits time, has neither friends nor money'
  },
  {
    quote: "L'arte non è mai finita, solo abbandonata",
    translation: 'Art is never finished, only abandoned'
  },
  {
    quote: 'Ogni nostra cognizione prencipia da sentimenti',
    translation: 'Our every cognition begins with feelings'
  },
  {
    quote: 'Amor ogni cosa vince',
    translation: 'Love conquers all'
  },
  {
    quote: "No' si volta chi a stella è fisso",
    translation: 'He who is fixed to a star does not change his mind'
  },
  {
    quote:
      "Quelli che s'innamoran di pratica sanza scienzia son come 'l nocchier ch'entra in navilio senza timone o bussola, che mai ha certezza dove si vada",
    translation:
      'Those who fall in love with practice without science are like the helmsman who enters a ship without a rudder or compass, who is never sure where to go.'
  },
  {
    quote: "Sempre la pratica dev'essere edificata sopra la buona teorica",
    translation: 'Practice must always be built on good theory'
  },
  {
    quote: 'La scienza è il capitano, e la pratica sono i soldati',
    translation: 'Science is the captain, and practice is the soldiers'
  },
  {
    quote: 'La vita bene spesa lunga è',
    translation: 'A life well lived is long'
  },
  {
    quote: "L'acqua è la forza motrice della natura",
    translation: 'Water is the driving force of nature'
  },
  {
    quote: "Sono rimasto colpito dall'urgenza di fare. Conoscere non è abbastanza; dobbiamo applicare. Essere disposti non è abbastanza; dobbiamo fare",
    translation: 'I was struck by the urgency to do. Knowing is not enough; we must apply. Being willing is not enough; we must do'
  },
  {
    quote: 'La semplicità è la sofisticazione suprema',
    translation: 'Simplicity is the ultimate sophistication'
  },
  {
    quote: 'Il tempo rimane abbastanza a lungo per coloro che lo utilizzano',
    translation: 'Time stays long enough for those who use it'
  }
];

const person = {
  name: 'Andrew Njoo',
  role: 'Software Builder',
  imageUrl: 'https://pbs.twimg.com/media/FnCuaaMaAAEP3w6?format=jpg&name=medium',
  githubUrl: 'https://github.com/adnjoo',
  twitterUrl: 'https://twitter.com/adnjoo',
  linkedinUrl: 'https://linkedin.com/in/adnjoo',
  resume: 'https://drive.google.com/file/d/1YIO5gU0npf3bA_3qAPWCAkV9aJlP_jW1/view?usp=sharing'
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
                      scrolling="no"
                      frameBorder="no"
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
