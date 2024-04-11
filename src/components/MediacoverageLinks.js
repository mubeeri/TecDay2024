const links = [
  {
    id: 1,
    title: "Auf dem Weg zum Traumberuf",
    href: "https://www.generationentandem.ch/online/gesellschaft/auf-dem-weg-zum-traumberuf",
  },
  {
    id: 2,
    title: "Ein Nobelpreisträger und viele Jungforscher trafen sich in Davos",
    href: "https://www.generationentandem.ch/online/gesellschaft/ein-nobelpreistraeger-und-viele-jungforscher-trafen-sich-davos",
  },
];

export function MediacoverageLinks() {
  return (
    <article className="relative isolate flex flex-col justify-center overflow-hidden">
      {links.map((link) => (
        <figure key={link.id} className="mt-10 border-l border-yellow-600 pl-9">
          <figcaption className="mt-8 flex gap-x-4">
            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-yellow-200">
              <div className="flex items-center gap-x-4">
                <span className="text-yellow-500">{link.href}</span>
              </div>
            </div>
          </figcaption>
          <blockquote className="font-semibold text-gray-900">
            <a
              href={link.href}
              className="text-base font-semibold leading-7 text-yellow-500 hover:text-yellow-800"
            >
              {link.title} <span aria-hidden="true">→</span>
            </a>
          </blockquote>
        </figure>
      ))}
    </article>
  );
}
