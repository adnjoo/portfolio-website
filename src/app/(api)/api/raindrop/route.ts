import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://api.raindrop.io/rest/v1/collections', {
    headers: {
      Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
    },
  });

  const { items } = await res.json();
  const collections = items.map((d: any) => ({
    id: d._id,
    title: d.title,
  }));

  // Fetch raindrops for each collection
  const raindropPromises = collections.map(async (collection: any) => {
    const raindropsRes = await fetch(
      `https://api.raindrop.io/rest/v1/raindrops/${collection.id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
        },
      }
    );
    const raindropsData = await raindropsRes.json();
    return {
      id: collection.id,
      title: collection.title,
      raindrops: raindropsData.items,
    };
  });

  // Wait for all raindrop requests to complete
  const collectionsWithRaindrops = await Promise.all(raindropPromises);

  // Respond with the collections and their raindrops
  return NextResponse.json(collectionsWithRaindrops);
}
