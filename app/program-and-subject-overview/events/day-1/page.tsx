import { EventDetails } from "./event-details";
import { PATHS } from "@/lib/constants";
import Link from "next/link";


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
            <span className="border-secondary border-b-8 w-[60px] py-4"></span>
            <div className="flex flex-col gap-4 leading-relaxed">
              <p className="">
                <span className="bg-primary2 text-2xl font-bold py-1 px-3 text-white">
                  DAY 1
                </span>{" "}
                of ICONIC 2024&apos;s range of events would start with an
                official opening session by the Indonesian Ambassador for
                Germany, the president of our host university, the University of
                Göttingen, and the director of ICONIC 2024. It would then be
                followed by a Ministerial Talk speech and discussion session on
                the topic of low-carbon development financing, with ministerial
                guest speakers from Indonesia and Germany.
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
            <p>
              Join us for this exciting event, free of charge, where we unite
              for a cause that matters. In our commitment to promoting
              low-carbon development, we are launching a crowdfunding campaign.
              Your generous contributions will not only support the event but
              also make a tangible impact on the environment. A portion of the
              funds raised will be donated to a dedicated company specializing
              in planting mangroves, vital for combating climate change and
              protecting coastal ecosystems. Together, let&apos;s make a
              difference and contribute to a greener, more sustainable future!
            </p>
            <Link
              className="text-lg font-semibold hover:text-accent2 transition"
              href={PATHS.JOIN_THE_MOVEMENT}
            >
              <h1 className="py-4 w-fit">Join The Movement.</h1>
            </Link>
            <Link href={PATHS.EVENT_REGISTRATION}>
              <p className="bg-secondary text-white py-4 px-8 w-fit rounded-lg hover:bg-primary2 transition">
                Get your tickets here!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
