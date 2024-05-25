import Link from 'next/link';
import { Link as RadixLink } from '@radix-ui/themes';
import { getPosts } from './functions';

export default async function Blog() {
  const posts = await getPosts();

  // console.log(posts);
  return (
    <div className='mt-12 flex flex-col items-center justify-center'>
      <h1 className='mb-12 text-3xl sm:text-5xl'>Blog</h1>
      <ul className='flex flex-col gap-4'>
        {posts.map((post: any) => (
          <li key={post.id} className='flex flex-col'>
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                timeZone: 'UTC',
              })}
            </span>
            <RadixLink asChild>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </RadixLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
