const contacts = [
  {
    id: 1,
    name: "Christine Früh",
    email: "christine.frueh@bern.ch",
  },
  {
    id: 2,
    name: "Monika Boss",
    email: "monika.boss@swisstopo.ch",
  },
  {
    id: 3,
    name: "Adeline Feriaux",
    email: "adeline.feriaux@bkw.ch",
  },
  {
    id: 4,
    name: "Tabea Arnold",
    email: "tabea.arnold@bluewin.ch",
  },
  {
    id: 5,
    name: "Barbara Tschopp",
    email: "b.z.tschopp@gmail.com",
  },
];

export function Contacts() {
  return (
    <div id={"kontakte"}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kontakte
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Dabei geht es auch darum, den Kontakt in Gang zu halten. Wir bieten
            Hilfe und Unterstützung an. Wenn Ihr Hilfe benötigt, zögert bitte
            nicht, uns zu kontaktieren.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 border-t border-gray-200 pt-16 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <div className="flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Email
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {contacts.map((contact) => (
                        <tr key={contact.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {contact.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <a href={`mailto:${contact.email}`}>
                              {contact.email}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
