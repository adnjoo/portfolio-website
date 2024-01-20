import matter from 'gray-matter';
import fs from 'fs/promises';
import { cache } from 'react';

type Post = {
  id: string;
  title: string;
  date: string;
};

export const getPosts = cache(async () => {
  const posts = await fs.readdir('./posts');

  return Promise.all(
    posts.map(async (post) => {
      const postContent = await fs.readFile(`./posts/${post}`, 'utf-8');
      const { data, content } = matter(postContent);
      const id = post.replace(/\.mdx$/, '');

      return {
        ...data,
        id,
        body: content,
      };
    })
  );
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.id === slug);
}

export default async function Blog() {
  const posts = await getPosts();

  // console.log(posts);
  return (
    <div className='mt-12 flex flex-col items-center justify-center'>
      <h1 className='mb-12 text-3xl sm:text-5xl'>Blog</h1>
      <ul className='flex flex-col gap-4'>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
