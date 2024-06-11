import { EventDetails } from "./event-details";

export default function DayOne() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="container py-12 md:py-16 lg:py-20">
        <h1 className="font-bold text-3xl md:text-5xl">
          Day 2 - Plenary Sessions, Parallel Conference & Meet the Industry
        </h1>
        <div className="flex flex-col gap-10 py-4 md:py-6 lg:py-8">
          {/* Add the following content */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold md:text-4xl">Overview</h2>
            <div className="flex flex-col gap-4 leading-relaxed">
              <p className="">
                Day 2 of ICONIC 2024 will focus on various aspects of low carbon
                development, emphasizing the intersection of environmental
                sustainability, economic progress, and social equity. The
                day&apos;s sessions will facilitate multi-stakeholder dialogues
                involving policymakers, financial institutions, industries, and
                the academic community.
              </p>
              <p>
                Through plenary sessions, conference presentations, and
                interactive industry meet-ups, participants will explore
                historical and economic dynamics, policy frameworks, and
                innovative solutions aimed at achieving a fair and effective
                global transition to a low-carbon future. The goal is to
                translate discussions into concrete policy recommendations and
                action plans, fostering collaboration among diverse stakeholders
                to advance low carbon development in Indonesia and beyond.
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
            <p>
              Gofundme
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
