import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const path = request.nextUrl.pathname;
  return new Response('Hello' + path);
}
