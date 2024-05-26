import { NextResponse } from 'next/server';
import axios from 'axios';
import cheerio from 'cheerio';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const response = await axios.get('https://soundcloud.com/adnjoo/likes');
    const html = response.data;

    const $ = cheerio.load(html);

    const text = $('body').text();

    const h2Regex = /"><a itemprop="url" href="(.*?)">(.*?)<\/a>/g;

    const data = [];

    let match;
    while ((match = h2Regex.exec(text)) !== null) {
      const link = match[1];
      const songName = match[2].replace(/&amp;/g, '&');

      data.push({ songName, link });
    }

    data.shift();

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to fetch liked songs' });
  }
}
