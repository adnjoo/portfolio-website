import React from 'react';
import Link from 'next/link';
import { getPosts } from './functions';

export default async function Blog() {
  const posts = await getPosts();
  let lastYear: number | null = null;

  return (
    <div className='mt-12 flex flex-col items-center justify-center'>
      <h1 className='mb-8 text-3xl'>Blog</h1>
      <ul className='flex flex-col gap-1 mx-4'>
        {posts.map((post: any) => {
          const postYear = new Date(post.date).getFullYear();
          const showYearSeparator = postYear !== lastYear;
          lastYear = postYear;

          return (
            <React.Fragment key={post.id}>
              {showYearSeparator && (
                <li className='flex flex-col items-center'>
                  <div className='mt-6 mb-2 text-xl font-bold'>{postYear}</div>
                </li>
              )}
              <li className='flex flex-col'>
                <div className='flex gap-1 sm:gap-4'>
                  <Link href={`/blog/${post.id}`} className='text-sm my-link'>
                    {post.title}
                  </Link>

                  <span className='flex text-xs items-center'>
                    {new Date(post.date).toLocaleDateString('fr-CH', {
                      year: '2-digit',
                      month: 'numeric',
                      day: 'numeric',
                      timeZone: 'UTC',
                    })}
                  </span>

                  <span className='flex text-xs items-center'>
                    {post.readingTime}
                  </span>
                </div>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
