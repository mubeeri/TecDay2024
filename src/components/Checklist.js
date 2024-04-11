import { CheckIcon } from "@heroicons/react/20/solid";

const checklist = [
  {
    name: "Freude am Lösen komplexer Probleme",
  },
  {
    name: "Freude an Interdisziplinarität / vernetztes Denken",
  },
  {
    name: "Freude an Teamarbeit",
  },
  {
    name: "Interesse an Naturwissenschaften / Technik",
  },
  {
    name: "Interesse an Informatik",
  },
  {
    name: "Gute konstruktive und planerische Fähigkeiten",
  },
  {
    name: "Gesunder Menschenverstand",
  },
  {
    name: "Weit-/Voraussicht, Visionen",
  },
  {
    name: "Kreativität / Erfindergeist / Neugier",
  },
  {
    name: "Kommunikative Fähigkeiten",
  },
  {
    name: "Ausdauer / Beharrlichkeit",
  },
  {
    name: "Überzeugungs-/Durchsetzungskraft",
  },
];

export function Checklist() {
  return (
    <div id={"checkliste"} className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Checkliste
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Ein paar Ideen, was aus unserer Sicht für ein Studium der
            Ingenieurwissenschaften am Wichtigsten ist.
          </p>
        </div>

        <dl className="mt-16 border-t border-gray-200 pt-16 sm:mt-16 lg:mx-0 lg:max-w-none col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
          {checklist.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="text-lg font-semibold text-gray-900">
                <CheckIcon
                  className="absolute left-0 top-1 h-5 w-5 text-yellow-500"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
