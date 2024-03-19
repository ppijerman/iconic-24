import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export function IconicSchedule() {
  const abstractSubmissionDeadlines = [
    { name: "Abstract Submission", date: "March 25th - April 30th 2024" },
    { name: "Notification of Abstract Acceptance", date: "9 May 2024" },
    {
      name: "Revision of Abstract Submission",
      date: "May 9th - May 12th 2024",
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
    <section className="min-h-screen bg-secondary flex flex-col items-center justify-center text-primary py-14">
      <h1 className="text-6xl pb-10">Schedule</h1>
      <div className="flex flex-col lg:flex-row gap-10 justify-center w-[90%]">
        <div className="flex flex-col w-full">
          <h1 className="text-5xl font-bold">ABSTRACT SUBMISSION DEADLINES</h1>
          <ul className="text-3xl">
            {abstractSubmissionDeadlines.map((deadline) => (
              <li className="mt-7" key={deadline.name}>
                <div className="flex flex-col border-b-2">
                  <h3 className="text-white text-2xl">{deadline.date}</h3>
                  <h2 className="font-semibold text-4xl">{deadline.name}</h2>
                </div>
              </li>
            ))}
            <Button
              variant="outline"
              className="group bg-secondary mt-10 text-3xl pt-8 pb-7 px-10 hover:bg-accent hover:text-primary ring-2 ring-primary border-none"
            >
              Abstract Submission Guidelines
              <ArrowTopRightIcon className="w-8 h-8 group-hover:opacity-100 opacity-0 transition" />
            </Button>
          </ul>
        </div>
        <div className="flex flex-col w-full pt-10 lg:pt-0">
          <h1 className="text-5xl font-bold">
            PLENARY SESSIONS AND CONFERENCE
          </h1>
          <ul className="text-3xl">
            {plenarySessions.map((event) => (
              <li className="mt-7" key={event.name}>
                <div className="flex flex-col border-b-2">
                  <h3 className="text-white text-2xl">{event.date}</h3>
                  <h2 className="font-semibold text-4xl">{event.name}</h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex w-[90%]"></div>
    </section>
  );
}
