'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';

import { TrendingRepos } from '@/app/api/trending-repos/route';

export const DataCard = () => {
  const [data, setData] = useState<TrendingRepos[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/trending-repos');
      setData(response.data);
    };

    fetchData();
  }, []);
  return (
    <div className='card mt-12 w-96 bg-base-100 p-4 shadow-xl md:mt-24'>
      <h1 className='text-md card-title mb-4'>
        Trending
        <BsGithub className='inline' />
        Repos
      </h1>

      <div className='max-h-[400px] overflow-auto'>
        {data ? (
          data?.map((d: TrendingRepos) => (
            <div key={d.url} className='mb-4'>
              <a href={d.url} target='_blank' className='link hover:underline'>
                {d.name}
              </a>{' '}
              <div className='text-sm'>{d.description}</div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
