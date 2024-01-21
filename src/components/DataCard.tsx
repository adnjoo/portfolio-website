'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';

export const DataCard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        '/api/trending-repos'
      );
      setData(response.data);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div className='mt-12 md:mt-24'>Loading...</div>;
  }

  return (
    <div className='card mt-12 w-96 bg-base-100 shadow-xl md:mt-24 p-4 max-h-[400px] overflow-auto'>
        <h1 className='card-title mb-4 text-md'>
          Trending 
          <BsGithub className='inline' />
          Repos
        </h1>

        {data &&
          data?.map((d: any) => (
            <div key={d.id} className='mb-4'>
              <a
                href={d.url}
                target='_blank'
                className='link hover:underline'
              >
                {d.name}
              </a>{' '}
              <div className='text-sm'>{d.description}</div>
            </div>
          ))}
    </div>
  );
};
