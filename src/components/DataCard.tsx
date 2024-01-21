'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

export const DataCard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://api.github.com/users/adnjoo/repos'
      );
      const sortedData = response.data.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
      const top3Data = sortedData.slice(0, 5);
      setData(top3Data);
    };

    fetchData();
  }, []);

  return (
    <div className='card mt-12 w-96 bg-base-100 shadow-xl md:mt-24'>
      <div className='card-body'>
        <h1 className='card-title mb-4 text-lg font-semibold'>
          Latest activity from GitHub
        </h1>

        {data &&
          data?.map((d: any) => (
            <div key={d.id} className='mb-4'>
              <a
                href={d.html_url}
                target='_blank'
                className='text-blue-500 hover:underline'
              >
                {d.name}
              </a>{' '}
              <div className='text-gray-500'>Issues: {d.open_issues}</div>
              <div className='text-gray-500'>
                🕒 Latest Push:{' '}
                {new Date(d.pushed_at).toLocaleDateString('en-US', {
                  year: '2-digit',
                  month: 'numeric',
                  day: 'numeric',
                })}
              </div>{' '}
            </div>
          ))}
      </div>
    </div>
  );
};
