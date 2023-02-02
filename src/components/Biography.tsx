import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';

export default function Biography (): any {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          title
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;

  return (
    <div className='text-center flex flex-col items-center'>
      <h2 className="text-3xl font-bold my-3">
        {data.site.siteMetadata?.title || 'Title'}
      </h2>
      <p className="text-xl text-gray-500 mx-6 my-3">
        This is <strong>{`${author.name}'s`}</strong> {author?.summary || null}
      </p>
      <img src='/pfp.jpg' className='rounded-xl' style={{ width: '100px' }} />
      <div className='flex mx-6 gap-8 my-3'>
        <a
          href="https://www.twitter.com/adnjoo/"
          target="_blank"
          rel="noreferrer"
          className='text-gray-400 hover:text-gray-500'
        >
          <BsTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/adnjoo/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-gray-500"
        >
          <BsLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}
