import { siteConfig } from '@/config/site';
import { PostBody } from '../components/PostBody';
import { getPosts, getPost } from '../functions';

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
      <h1 className='mb-6 mt-12 text-3xl sm:mt-24'>{post.title}</h1>
      <PostBody>{post.body}</PostBody>
    </div>
  );
}
