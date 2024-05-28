import Link from 'next/link';

async function getLikedSongs() {
  try {
    const response = await fetch(process.env.URL + '/soundcloud', {
      cache: 'no-store',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching liked songs:', error);
    return [];
  }
}

export default async function Songs() {
  const { data: likedSongs } = await getLikedSongs();
  return (
    <div className='mt-8'>
      <h2 className='mb-2 text-lg font-bold'>Liked Songs</h2>
      <ul className='animate-in'>
        {likedSongs?.map((song: any, index: number) => (
          <li key={index}>
            <Link
              className='text-xs'
              href={`https://soundcloud.com${song.link}#play`}
              target='_blank'
            >
              {song.songName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
