const links = [
  {
    id: 1,
    title: "hard hat icons",
    href: "https://www.flaticon.com/free-icons/hard-hat",
    description: "Hard hat icons created by Freepik - flaticon.com",
  },
  {
    id: 2,
    title: "Warum ich Ingenieurin wurde?",
    href: "https://www.flickr.com/photos/itupictures/25821939393",
    description: "Bild «Warum ich Ingenieurin wurde?» - ITU/R. Farrell",
  },
  {
    id: 3,
    title: "Welches Studium passt zu mir?",
    href: "https://www.fhnw.ch/plattformen/was-studieren",
    description: "Bild «Welches Studium passt zu mir?» - fhnw.ch",
  },
  {
    id: 4,
    title: "Studien-Interessen-Check",
    href: "https://flickr.com/photos/itupictures/26666380386",
    description: "Bild «Studien-Interessen-Check» - ITU/R. Farrell",
  },
  {
    id: 5,
    title: "IngCH Jubiläumsfilm, Episode 1",
    href: "https://www.youtube.com/watch?v=d7NTusHYzyo",
    description: "Bild «IngCH Jubiläumsfilm, Episode 1» - youtube.com",
  },
  {
    id: 6,
    title: "IngCH Jubiläumsfilm, Episode 2",
    href: "https://www.youtube.com/watch?v=nVawcEAlu4Y",
    description: "Bild «IngCH Jubiläumsfilm, Episode 2» - youtube.com",
  },
  {
    id: 7,
    title: "IngCH Jubiläumsfilm, Episode 3",
    href: "https://www.youtube.com/watch?v=7fp3v0NM2lE",
    description: "Bild «IngCH Jubiläumsfilm, Episode 3» - youtube.com",
  },
  {
    id: 8,
    title: "Portraits von 8 Ingenieurinnen und Ingenieuren",
    href: "https://www.youtube.com/watch?v=-wf76gy5AZU",
    description:
      "Bild «Portraits von 8 Ingenieurinnen und Ingenieuren» - youtube.com",
  },
  {
    id: 9,
    title: "Ich bin Ingenieurin",
    href: "https://www.svin.ch/projekt/ausstellung-ich-bin-ingenieurin",
    description: "Bild «Ich bin Ingenieurin» - svin.ch",
  },

  {
    id: 10,
    title: "Wir sind Ingenieurinnen",
    href: "https://www.svin.ch",
    description: "Bild «Wir sind Ingenieurinnen» - svin.ch",
  },
];
export function References() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
      <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
        <div>
          <h3 className="text-sm font-semibold leading-6 text-gray-900">
            Quellenangaben
          </h3>
          {links.map((link) =>
            link.href ? (
              <p key={link.id} className="mt-2 text-sm leading-6 text-gray-600">
                <a href={link.href} title={link.title}>
                  {link.description}
                </a>
              </p>
            ) : (
              <p key={link.id} className="mt-2 text-sm leading-6 text-gray-600">
                {link.description}
              </p>
            ),
          )}
        </div>
      </div>
      <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
        <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
          TecDay 2024, Gymansium THUN - Warum ich Ingenieurin wurde
        </p>
      </div>
    </div>
  );
}
