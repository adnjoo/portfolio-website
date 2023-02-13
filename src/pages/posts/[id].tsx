import React from 'react';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { parseISO, format } from 'date-fns';

import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export function Date({ dateString }: { dateString: any }): any {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export default function Post({ postData }: { postData: any }): any {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1rem',
          }}
        >
          <h1>
            {postData.title}
          </h1>
          <h3>
            <Date dateString={postData.date} />
          </h3>
          <Box
            sx={{
              fontSize: '1.1rem',
              margin: '1rem',
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

// return list of possible values for id
export async function getStaticPaths(): Promise<any> {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// fetch necessary for the blog post with a given id
export async function getStaticProps({ params }: { params: any }): Promise<any> {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
