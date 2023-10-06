import React from 'react';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import Layout from '@/components/Layout';
import {
  getAllPostIds,
  getPostData,
  getNextPostId,
  getPreviousPostId,
} from '@/lib/posts';
import DateConversion from '@/utils/DateConversion';

export default function Post({ postData }: { postData: any }): any {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Container>
        <Box className='mt-12 flex min-h-screen flex-col items-center justify-center md:mt-16'>
          <h1 className='mb-6 text-2xl font-semibold'>{postData.title}</h1>
          <DateConversion dateString={postData.date} />
          <Box
            className='mt-4'
            sx={{
              width: '100%',
              code: {
                color: 'primary.contrastText',
                backgroundColor: 'primary.main',
              },
              pre: {
                overflow: 'auto',
              },
            }}
          >
            <div
              className='markdown-body flex flex-col'
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </Box>
        </Box>
        <Box className='mt-12 flex min-h-screen flex-row items-center justify-between'>
          {postData.previousPostId && (
            <Link
              href={`/posts/${postData.previousPostId}`}
              sx={{
                textDecoration: 'none',
              }}
            >
              Previous Post
            </Link>
          )}
          {postData.nextPostId && (
            <Link
              href={`/posts/${postData.nextPostId}`}
              sx={{
                textDecoration: 'none',
              }}
            >
              Next Post
            </Link>
          )}
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
export async function getStaticProps({
  params,
}: {
  params: any;
}): Promise<any> {
  const postData = await getPostData(params.id);
  const nextPostId = getNextPostId(params.id);
  const previousPostId = getPreviousPostId(params.id);
  return {
    props: {
      postData: {
        ...postData,
        nextPostId,
        previousPostId,
      },
    },
  };
}
