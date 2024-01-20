import matter from 'gray-matter';
import fs from 'fs/promises';
import { cache } from 'react';

export const getPosts = cache(async () => {
  const posts = await fs.readdir('./posts');

  const postPromises = posts.map(async (post) => {
    const postContent = await fs.readFile(`./posts/${post}`, 'utf-8');
    const { data, content } = matter(postContent);
    const id = post.replace(/\.mdx$/, '');

    return {
      ...data,
      id,
      body: content,
    };
  }) as any;

  const sortedPosts = (await Promise.all(postPromises)).sort((a, b) => {
    return b.date.localeCompare(a.date);
  });

  return sortedPosts;
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.id === slug);
}
