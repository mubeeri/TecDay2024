import { MediacoverageLinks } from "/src/components/MediacoverageLinks";

const videos = [
  {
    id: 1,
    title: "IngCH Jubiläumsfilm, Episode 1 (2012)",
    href: "https://www.youtube.com/watch?v=d7NTusHYzyo",
    imageUrl: new URL("/src/img/yt1.png?as=webp&height=460", import.meta.url),
  },
  {
    id: 2,
    title: "IngCH Jubiläumsfilm, Episode 2 (2012)",
    href: "https://www.youtube.com/watch?v=nVawcEAlu4Y",
    imageUrl: new URL("/src/img/yt2.png?as=webp&height=460", import.meta.url),
  },
  {
    id: 3,
    title: "IngCH Jubiläumsfilm, Episode 3 (2012)",
    href: "https://www.youtube.com/watch?v=7fp3v0NM2lE",
    imageUrl: new URL("/src/img/yt3.png?as=webp&height=460", import.meta.url),
  },
  {
    id: 4,
    title: "Portraits von 8 Ingenieurinnen und Ingenieuren (2021)",
    href: "https://www.youtube.com/watch?v=-wf76gy5AZU",
    imageUrl: new URL("/src/img/yt4.jpg?as=webp&height=460", import.meta.url),
  },
  {
    id: 5,
    title: "SVIN-Ausstellung «Ich bin Ingenieurin» (2018)",
    href: "https://www.svin.ch/projekt/ausstellung-ich-bin-ingenieurin",
    imageUrl: new URL("/src/img/pdf2.jpg?as=webp&height=460", import.meta.url),
  },
  {
    id: 6,
    title: 'SVIN-Newsletter "Wir sind Ingenieurinnen" (2018)',
    href: "https://test.svin.ch/wp-content/uploads/SVIN-News_48_def-2.pdf",
    imageUrl: new URL("/src/img/pdf1.png?as=webp&height=460", import.meta.url),
  },
];

export function Mediacoverage() {
  return (
    <div id={"videos-medienberichte"} className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Videos und Medienberichte
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Hier findet Ihr Videos zum Nachsehen, weitere relevanten Unterlagen
            sowie Medienberichte über Thuner Gymnasiasten bei Schweizer Jugend
            forscht.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 border-t border-gray-200 pt-16 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {videos.map((video) => (
            <article
              key={video.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={video.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-yellow-200">
                <div className="flex items-center gap-x-4">
                  <span>{video.href}</span>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a target="_blank" href={video.href}>
                  <span className="absolute inset-0" />
                  {video.title}
                </a>
              </h3>
            </article>
          ))}
          <MediacoverageLinks />
        </div>
      </div>
    </div>
  );
}
