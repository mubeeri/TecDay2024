const links = [
  {
    id: 1,
    title: "Schweizerische Vereinigung der Ingenieurinnen SVIN",
    href: "https://www.svin.ch",
    description:
      "Gesamt­schweizerischer Verein zur Förderung der Frauen in MINT-Berufen (Mathematik, Informatik, Naturwissenschaften und Technik)",
  },
  {
    id: 2,
    title: "IngCH MINT for our future",
    href: "https://www.ingch.ch",
    description:
      "Wir betreiben seit über 30 Jahren Nachwuchsförderung im MINT-Bereich (MINT: Mathematik, Naturwissenschaften, Informatik, Technik). Unsere Projekte informieren, begeistern und wirken dem Fachkräftemangel entgegen.",
  },
  {
    id: 3,
    title: "Swiss Engineering STV",
    href: "https://www.swissengineering.ch/de",
    description:
      "Swiss Engineering ist die führende interdisziplinäre Plattform der Ingenieur:innen in der Schweiz. ",
  },
  {
    id: 4,
    title: "Dashboard - IngCH",
    href: "https://ingch.ch/en/dashboard",
    description:
      "Generelle Entwicklung an universitären Hochschulen und Fachhochschulen",
  },
];

export function Relatedlinks() {
  return (
    <div id={"weiterfuehrende-links"} className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Weiterführende Links
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Hier findet Ihr weitergehende Informationen rund um das Thema
            Karriere­förderung, Mathematik, Naturwissenschaften, Informatik,
            Technik und Engineers' Day.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {links.map((link) => (
            <article
              key={link.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a target="_blank" href={link.href}>
                    <span className="absolute inset-0" />
                    {link.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {link.description}
                </p>
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  target="_blank"
                  href={link.href}
                  className="relative z-10 rounded-full bg-yellow-100 px-3 py-1.5 mt-8 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {link.href}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
