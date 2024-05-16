import { cache } from 'react';
import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

export const getPosts = cache(async (returnArchive = false) => {
  const posts = await fs.readdir(path.join(process.cwd(), 'posts'));

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

  if (returnArchive) {
    return sortedPosts;
  } else {
    return sortedPosts.filter((post) => !post.archive);
  }
});

export const getPost = cache(
  async (slug: string, returnArchive: boolean = false) => {
    const posts = await getPosts(returnArchive);
    return posts.find((post) => post.id === slug);
  }
);
