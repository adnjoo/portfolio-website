import { PostBody } from '../components/PostBody';
import { getPosts, getPost } from '../functions';

export async function generateStaticParams() {
  const posts = await getPosts(false);

  return posts.map((post: any) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug, true);
  const title = post.title;
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
      <h1 className='text-3xl mt-12 sm:mt-24 mb-6'>{post.title}</h1>
      <PostBody>{post.body}</PostBody>
    </div>
  );
}
