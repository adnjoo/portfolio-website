import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import { cache } from 'react';

// Helper function to recursively read all files in a directory
async function readDirRecursive(dir: string): Promise<string[]> {
  let results: string[] = [];
  const list = await fs.readdir(dir, { withFileTypes: true });
  for (const file of list) {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      // Recursively read subdirectories
      results = results.concat(await readDirRecursive(filePath));
    } else if (file.isFile() && file.name.endsWith('.mdx')) {
      // Only include .mdx files
      results.push(filePath);
    }
  }
  return results;
}

// Function to estimate reading time based on word count
function estimateReadingTime(content: string): string {
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes}'`;
}

export const getPosts = cache(async (returnArchive = false) => {
  const postDir = path.join(process.cwd(), 'posts');
  const postFiles = await readDirRecursive(postDir);

  const postPromises = postFiles.map(async (filePath) => {
    const postContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(postContent);
    const id = path.basename(filePath, '.mdx'); // Use only the file name as the slug

    // Estimate reading time
    const readingTime = estimateReadingTime(content);

    return {
      ...data,
      id,
      body: content,
      readingTime,
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
    const post = posts.find((post) => post.id === slug);

    if (!post) {
      console.log(`Post not found for slug: ${slug}`); // Debug log
    }

    return post;
  }
);
