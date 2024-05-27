'use client';

import { useState } from 'react';
import { FaLink } from 'react-icons/fa';
import copy from 'clipboard-copy';
import slugify from 'slugify';

export const H2Component = (props: any) => {
  const [copied, setCopied] = useState(false);

  const headingText = props.children;
  const headingId = slugify(headingText, { lower: true });

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${headingId}`;
    copy(url)
      .then(() => setCopied(true))
      .catch((error) => console.error('Copy failed', error));
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <h2
      id={headingId}
      className='flex flex-row items-center text-xl font-semibold my-4'
      {...props}
    >
      {headingText}
      <button
        className='ml-2 text-gray-500 hover:text-gray-700 focus:outline-none'
        onClick={handleCopyLink}
        title='Copy Link'
      >
        <FaLink size={14} />
      </button>
      {copied && <span className='ml-1 text-sm text-green-500'>Copied!</span>}
    </h2>
  );
};
