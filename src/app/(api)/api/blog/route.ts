import { NextResponse } from 'next/server';
import { getPosts } from '@/app/blog/functions';

export async function GET() {
  const posts = await getPosts();
  const count = posts.length;

  return NextResponse.json({
    meta: {
      count,
    },
    posts,
  });
}
