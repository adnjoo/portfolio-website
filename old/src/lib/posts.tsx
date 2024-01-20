import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkExternalLinks from 'remark-external-links';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(): any {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  const sortedPostsData = allPostsData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  const countSortedPosts = sortedPostsData.length;
  for (let i = 0; i < countSortedPosts; i++) {
    const currentPost: any = sortedPostsData[i];
    const nextPost = sortedPostsData[i - 1];
    const previousPost = sortedPostsData[i + 1];

    currentPost.nextPostId = nextPost
      ? nextPost.id
      : sortedPostsData[countSortedPosts - 1].id;
    currentPost.previousPostId = previousPost
      ? previousPost.id
      : sortedPostsData[0].id;
  }

  return sortedPostsData;
}

export function getAllPostIds(): any {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: any): Promise<any> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .use(remarkExternalLinks, {
      target: '_blank',
      rel: ['noopener', 'noreferrer'],
    })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getNextPostId(id: any): any {
  const allPostsData = getSortedPostsData();
  const nextPostId = allPostsData.find(
    (post: any) => post.id === id
  ).nextPostId;
  return nextPostId;
}

export function getPreviousPostId(id: any): any {
  const allPostsData = getSortedPostsData();
  const previousPostId = allPostsData.find(
    (post: any) => post.id === id
  ).previousPostId;
  return previousPostId;
}
