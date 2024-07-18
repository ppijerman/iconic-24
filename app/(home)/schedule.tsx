import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { PATHS } from "@/lib/constants";

export function IconicSchedule() {
  const abstractSubmissionDeadlines = [
    { name: "First Call of Abstract", date: "March 25th - April 30th 2024" },

    {
      name: "First Issuance - Letter of Acceptance",
      date: "May 9th 2024",
    },
    {
      name: "Second Call of Abstract",
      date: "May 15th - June 30th 2024",
    },
    {
      name: "Second Issuance - Letter of Acceptance",
      date: "July 9th 2024",
    },
    {
      name: "Third Call of Abstract",
      date: "July 15th - August 4th 2024",
    },
    {
      name: "Third Issuance - Letter of Acceptance",
      date: "August 15th 2024",
    },
  ];

  const plenarySessions = [
    {
      name: "Opening Ceremony, Ministerial Talk & Plenary Sessions",
      date: "September 4th 2024",
    },
    {
      name: "Plenary Session, Parallel Conference & Meet the Industry",
      date: "September 5th 2024",
    },
    {
      name: "Plenary Session, Parallel Conference & Closing Ceremony",
      date: "September 6th 2024",
    },
  ];

  return (
    <section
      className="bg-white w-full text-secondary"
    >
      <div className="container flex flex-col items-center justify-center py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Schedule</h1>
        <div className="flex text-md items-center justify-center">
          <p>
            *Please note that schedule is subject to change. Stay tuned for more
            information!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
          <div className="flex flex-col w-full py-12 md:py-16 lg:py-20">
            <h1 className="text-3xl md:text-5xl font-bold">
              Abstract Submission
            </h1>
            <ul className="text-2xl md:text-3xl">
              {abstractSubmissionDeadlines.map((deadline) => (
                <li className="mt-7" key={deadline.name}>
                  <div className="flex flex-col border-b-2">
                    <h3 className="text-gray-500 text-lg md:text-xl">
                      {deadline.date}
                    </h3>
                    <h2 className="font-semibold text-2xl md:text-3xl">
                      {deadline.name}
                    </h2>
                    {deadline.name === "Abstract Submission" && (
                      <div className="text-base font-medium flex flex-row gap-3">
                        <p>Notification of Abstract Acceptance</p>
                        <p>Peer-review</p>
                        <p>Revision</p>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-full py-12 md:py-16 lg:py-20">
            <h1 className="text-3xl md:text-5xl font-bold">D-Day*</h1>
            <ul className="text-2xl md:text-3xl">
              {plenarySessions.map((event) => (
                <li className="mt-7" key={event.name}>
                  <div className="flex flex-col border-b-2">
                    <h3 className="text-gray-500 text-lg md:text-xl">
                      {event.date}
                    </h3>
                    <h2 className="font-semibold text-2xl md:text-3xl">
                      {event.name}
                    </h2>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href={PATHS.EVENTS}
          className="flex items-center gap-5 w-fit p-2 hover:text-accent2 transition duration-500"
        >
          <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">
            View Full Schedule
          </h1>
          <ArrowRightIcon className="w-12 h-12" />
        </Link>
      </div>
    </section>
  );
}
