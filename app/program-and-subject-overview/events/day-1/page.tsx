import { EventDetails } from "./event-details";

export default function DayOne() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="container py-12 md:py-16 lg:py-20">
        <h1 className="font-bold text-3xl md:text-5xl">
          Day 1 - Ministerial Talk & Optional City Trip
        </h1>
        <div className="flex flex-col gap-10 py-4 md:py-6 lg:py-8">
          {/* Add the following content */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold md:text-4xl">Overview</h2>
            <div className="flex flex-col gap-4 leading-relaxed">
              <p className="">
                ICONIC 2024&apos;s range of events would start with an official
                opening session by the Indonesian Ambassador for Germany, the
                president of our host university, the University of Göttingen,
                and the director of ICONIC 2024. It would then be followed by a
                Ministerial Talk speech and discussion session on the topic of
                low-carbon development financing, with ministerial guest
                speakers from Indonesia and Germany.
              </p>
              <p>
                Afterwards, a lunch break which will be attended by all of
                ICONIC 2024&apos;s guest speakers, scientific chairs, as well as
                industry presenters and partners as a networking opportunity.
                The range of events for the day would then conclude with a city
                trip delving into and peeking a glimpse into Göttingen&apos;s
                world of research and academic pedigree by visiting a few
                research centers and historical sites.
              </p>
            </div>
          </section>
          <EventDetails />
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Additional Information
            </h2>
            <p>Observer/Attendee Ticket links:</p>
            <ul>
              <li>
                Offline:{" "}
                <a
                  href="https://ppij.org/ICONIC24Day2Offline"
                  className="text-blue-500 hover:underline"
                >
                  https://ppij.org/ICONIC24Day2Offline
                </a>
              </li>
              <li>
                Online:{" "}
                <a
                  href="https://ppij.org/ICONIC24Day2Online"
                  className="text-blue-500 hover:underline"
                >
                  https://ppij.org/ICONIC24Day2Online
                </a>
              </li>
            </ul>
            <p>Gofundme</p>
          </div>
        </div>
      </div>
    </main>
  );
}