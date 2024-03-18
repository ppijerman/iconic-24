export function IconicSchedule() {
  const abstractSubmissionDeadlines = [
    { name: "Abstract Submission", date: "March 18th - April 18th 2024" },
    { name: "Peer-Review of Abstract", date: "April 18th - April 28th 2024" },
    { name: "Notification of Abstract Acceptance", date: "April 29th 2024" },
    {
      name: "Revision of Abstract Submission",
      date: "April 30th - May 12th 2024",
    },
    {
      name: "Notification of Final Abstract Acceptance",
      date: "May 13th 2024",
    },
  ];

  const plenarySessions = [
    { name: "Opening Ceremony", date: "1st September 2024" },
    { name: "Keynote Address", date: "2nd September 2024" },
    { name: "Closing Ceremony", date: "3rd September 2024" },
  ];

  return (
    <section className="min-h-screen bg-accent2 flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl mb-10">Schedule</h1>
      <div className="flex flex-row gap-10 justify-center w-full">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold">ABSTRACT SUBMISSION DEADLINES</h1>
          <ul className="text-3xl">
            {abstractSubmissionDeadlines.map((deadline) => (
              <li className="mt-7" key={deadline.name}>
                <div className="flex flex-col">
                  <h3>{deadline.date}</h3>
                  <h2 className="font-semibold mt-1">{deadline.name}</h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold">
            PLENARY SESSIONS AND CONFERENCE
          </h1>
          <ul className="text-3xl">
            {plenarySessions.map((event) => (
              <li className="mt-7" key={event.name}>
                <div className="flex flex-col">
                  <h3>{event.date}</h3>
                  <h2 className="font-semibold mt-1">{event.name}</h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
