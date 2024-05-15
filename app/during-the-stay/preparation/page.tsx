// Description: This is the preparation page for the conference.
import { APP_NAME } from "@/lib/constants";

export const metadata = {
  title: APP_NAME + " | Preparation",
  description: "Learn more about the preparation for the conference",
};

export default function Preparation() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="w-[80%] pb-15 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">PREPARATION</h1>
        <div className="py-20">
          <h2 className="text-2xl md:text-3xl font-semibold border-b-2 py-2 border-secondary/50">
            Before You Travel
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-3">
            <h3 className="pt-5 font-semibold text-lg">
              Registration & Conference Materials
            </h3>
            <li>Confirm that your registration is complete.</li>
            <li className="">
              Download or print the conference program, including the session
              schedules, speaker information, and venue maps.
            </li>
            <li className="">
              Review any pre-conference materials like presentations or reading
              lists.
            </li>
          </ul>
          <ul className="list-disc list-inside flex flex-col gap-3">
            <h3 className="pt-5 font-semibold text-lg">
              Travel & Accomodation
            </h3>
            <li className="font-medium">
              Flights & Transportation
              <ul className="ml-7 pt-3 list-inside list-square flex flex-col gap-3 font-normal">
                <li>
                  Book your flights well in advance, since Göttingen is a
                  popular tourist destination. Research public transportation
                  options from the airport to your hotel and the conference
                  venue. Consider purchasing a travel card for discounted fares.
                </li>
                <li>
                  Download the{" "}
                  <a
                    className="text-blue-500 font-semibold"
                    href="https://www.bahn.de/"
                  >
                    DB-Navigator
                  </a>{" "}
                  application in your phone or refer to the website to easily
                  find connections and timetables. Tickets are also purchasable
                  within the app.
                </li>
              </ul>
            </li>

            <li className="font-medium">
              Accomodation
              <ul className="ml-7 pt-3 list-inside list-square flex flex-col gap-3 font-normal">
                <li>
                  Reserve your hotel room close to the conference venue for easy
                  access.{" "}
                  <a href="https://www.booking.com/searchresults.en-gb.html?ss=University+of+G%C3%B6ttingen%2C+G%C3%B6ttingen%2C+Lower-Saxony%2C+Germany&map=1&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaDuIAQGYAQm4ARfIAQzYAQHoAQH4AQuIAgGoAgO4Asz6n7AGwAIB0gIkY2U4NzgxZWQtODU4NC00NzgyLTllODQtMDk3N2RkOTNjOTVj2AIG4AIB&sid=4f4554042ef1e070f231820c26d82be5&aid=304142&lang=en-gb&sb=1&src_elem=sb&src=index&dest_id=8743&dest_type=landmark&ac_position=2&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=17d653a6130c0248&ac_meta=GhAxN2Q2NTNhNjEzMGMwMjQ4IAIoATICZW46CUdvdHRpbmdlbkAASgBQAA%3D%3D&checkin=2024-09-03&checkout=2024-09-06&group_adults=2&no_rooms=1&group_children=0#map_opened">
                    Accommodation
                  </a>
                </li>
              </ul>
            </li>

            <li className="font-medium">
              Visa
              <ul className="ml-7 pt-3 list-inside list-square flex flex-col gap-3 font-normal">
                <li>
                  Apply for a Visa appointment in advance, especially if coming
                  from outside of the Schengen Area. Normally 8 weeks before
                  travel.
                </li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold border-b-2 py-2 my-5 border-secondary/50">
            Packing Esentials
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-3">
            <li>
              Pack appropriate clothing for presentations, networking events,
              and the overall conference atmosphere. Consider layers for
              potential temperature variations.
            </li>
            <li className="">
              Power adapters: Ensure you have the correct adapter{" "}
              <span className="font-semibold text-blue-500">
                <a
                  href="https://www.worldstandards.eu/electricity/plugs-and-sockets/f/"
                  target="_b"
                >
                  (Type F Power Outlets)
                </a>
              </span>{" "}
              for German power outlets.
            </li>
            <li className="">
              Important Documents: Pack your passport, visa, conference
              registration confirmation, and travel insurance documents.
            </li>
            <li className="">
              Travel insurance is a mandatory requirement for all conference
              participants, as it is also a requirement for applying for a visa.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
