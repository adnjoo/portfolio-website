import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';

import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps (): Promise<any> {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog ({ allPostsData }: { allPostsData: any }): any {
  return (
    <Layout>
      <ul>
        {allPostsData.map(({ id, date, title }: { id: any, date: any, title: any }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small>
              {date}
            </small>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
