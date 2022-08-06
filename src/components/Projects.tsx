/* This example requires Tailwind CSS v2.0+ */
export default function Projects() {
  return (
    <div className="bg-gray-50 pt-12 sm:pt-16" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Projects
        </h2>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative bg-gray-50 pb-12">
          <div className="absolute inset-0 h-1/2" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg lg:grid lg:grid-cols-3">
                <a href="https://andrew-movie-app.netlify.app/" target="_blank">
                  <div className="flex flex-col justify-center border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <img
                      src="project_movie.png"
                      className="order-2 object-cover mx-auto"
                      style={{ height: "200px", width: "300px" }}
                    />
                    <dt className="order-3 my-2 text-md leading-6 font-medium text-gray-500">
                      PERN stack web app that helps you save cool movies (TMDB
                      API)
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      MovieApp
                    </dd>
                  </div>
                </a>
                <a href="https://sonic-azure.vercel.app/" target="_blank">
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <img
                      src="project_spotify.png"
                      className="order-2 object-cover mx-auto"
                      style={{ height: "200px", width: "300px" }}
                    />
                    <dt className="order-3 my-2 text-md leading-6 font-medium text-gray-500">
                      Spotify clone using Next.js | Spotify API (Spotify Premium
                      required)
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      Sonic
                    </dd>
                  </div>
                </a>
                <a
                  href="https://adnjoo.github.io/React-Weather/"
                  target="_blank"
                >
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <img
                      src="project_weather.png"
                      className="order-2 object-cover mx-auto"
                      style={{ height: "200px", width: "300px" }}
                    />
                    <dt className="order-3 my-2 text-md leading-6 font-medium text-gray-500">
                      Made with React | React-Helmet | Abstract-API | Weather
                      API
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      React Weather
                    </dd>
                  </div>
                </a>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
