import { Suspense } from 'react';

import { getPosts, getPost } from '@/app/blog/functions';
import { PostBody } from '@/components/PostBody';
import ScrollIndicator from '@/components/ScrollIndicator';
import { siteConfig } from '@/config/site';

export async function generateStaticParams() {
  const posts = await getPosts(false);

  return posts.map((post: any) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug, true);
  let title =
    post.title.length > 20 ? `${post.title.slice(0, 20)}...` : post.title;
  title += ` | ${siteConfig.name}`;

  return {
    title,
    description: post.body.slice(0, 50),
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post: any = await getPost(params.slug, true);
  return (
    <div className='mx-4 md:mx-24'>
      <Suspense fallback={null}>
        <ScrollIndicator />
      </Suspense>

      <h1 className='mb-2 mt-12 text-3xl sm:mt-24'>
        {post.title}
        <p className='mb-4 text-sm text-gray-500'>{post.date}</p>
      </h1>
      <PostBody>{post.body}</PostBody>
    </div>
  );
}
