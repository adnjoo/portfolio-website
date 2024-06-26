async function getBookmarks() {
  try {
    const response = await fetch(process.env.URL + '/api/raindrop', {
      cache: 'no-store',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching liked songs:', error);
    return [];
  }
}

export default async function Saves() {
  const data = await getBookmarks();
  return (
    <div className='container mx-auto mt-8 px-4'>
      <h1 className='mb-4 text-2xl font-bold'>Saves</h1>
      <div className='mb-4'>
      Keeping tabs on cool stuff.
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {data.map((bookmark: any) => (
          <div key={bookmark.id} className='rounded bg-white p-4 shadow-md dark:bg-transparent dark:border'>
            <h2 className='mb-2 text-sm font-semibold'>{bookmark.title}</h2>
            {bookmark.raindrops.map((raindrop: any) => (
              <div key={raindrop._id}>
                <a
                  href={raindrop.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-xs text-blue-500 hover:underline'
                >
                  {raindrop.title}
                </a>
                {raindrop.cover && (
                  <img
                    src={raindrop.cover}
                    alt={raindrop.title}
                    className='mt-1 w-16 rounded'
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
