const posts = [
  {
    id: 1,
    title: "Welches Studium passt zu mir?",
    href: "https://www.fhnw.ch/plattformen/was-studieren",
    imageUrl: new URL("/src/img/fnhw.png?as=webp&width=640", import.meta.url),
  },
  {
    id: 2,
    title: "Studien-Interessen-Check",
    href: "https://www.berufsberatung.ch/dyn/show/4069",
    imageUrl: new URL(
      "/src/img/berufsberatung.jpg?as=webp&width=640",
      import.meta.url,
    ),
  },
];

export function Studydirections() {
  return (
    <div id={"online-tests"} className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Online-Tests
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Die Online-Tests helfen Euch, herauszufinden, welche
            Studienrichtungen und Studienberufe am besten zu Euren Interessen
            passen. Die Datenbank umfasst etwa 540 Studienberufe und fast 120
            Studienrichtungen in der Schweiz.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 border-t border-gray-200 pt-16 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-yellow-200">
                <div className="flex items-center gap-x-4">
                  <span>{post.href}</span>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a target="_blank" href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
