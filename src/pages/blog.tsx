import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import DateConversion from '../utils/DateConversion';

export async function getStaticProps(): Promise<any> {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }: { allPostsData: any }): any {
  return (
    <Layout>
      {allPostsData.map(
        ({ id, date, title }: { id: any; date: any; title: any }) => (
          <Box key={id} sx={{ m: 5 }}>
            <Link
              href={`/posts/${id}`}
              className='no-underline hover:text-blue-700'
            >
              <h3>{title}</h3>
            </Link>
            <Box>
              <DateConversion dateString={date} />
            </Box>
          </Box>
        )
      )}
    </Layout>
  );
}
