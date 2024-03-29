import { motion } from "framer-motion";

export function IconicSchedule() {
  const abstractSubmissionDeadlines = [
    { name: "Abstract Submission", date: "March 25th - April 30th 2024" },

    {
      name: "Notification of Final Abstract Acceptance",
      date: "May 9th 2024",
    },
  ];

  const plenarySessions = [
    {
      name: "Ministerial Talks and Meet the Industry",
      date: "September 6th 2024",
    },
    {
      name: "Plenary Session and Parallel Conference",
      date: "September 7th - 8th 2024",
    },
    { name: "Optional Trip", date: "September 9th 2024" },
  ];

  return (
    <section className="p-10 min-h-screen bg-secondary flex flex-col items-center justify-center text-primary w-full">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Schedule</h1>
      <div className="flex flex-col lg:flex-row gap-10 justify-center w-[90%] pt-20">
        <div className="flex flex-col w-full">
          <h1 className="text-3xl md:text-5xl font-bold">
            Abstract Submission
          </h1>
          <ul className="text-2xl md:text-3xl">
            {abstractSubmissionDeadlines.map((deadline) => (
              <li className="mt-7" key={deadline.name}>
                <div className="flex flex-col border-b-2">
                  <h3 className="text-white text-lg md:text-xl">
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
        <div className="flex flex-col w-full pt-10 lg:pt-0">
          <h1 className="text-3xl md:text-5xl font-bold">D-Day*</h1>
          <ul className="text-2xl md:text-3xl">
            {plenarySessions.map((event) => (
              <li className="mt-7" key={event.name}>
                <div className="flex flex-col border-b-2">
                  <h3 className="text-white text-lg md:text-xl">
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
      <div className="flex w-[90%] text-lg font-semibold pt-14 items-center justify-center">
        <p>
          *Please note that schedule is subject to change. Stay tuned for more
          information!
        </p>
      </div>
    </section>
  );
}
