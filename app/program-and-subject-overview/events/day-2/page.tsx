import Link from "next/link";
import { EventDetails } from "./event-details";
import { PATHS } from "@/lib/constants";

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
            <span className="border-secondary border-b-8 w-[60px] py-4"></span>
            <div className="flex flex-col gap-4 leading-relaxed">
              <p className="">
                <span className="bg-accent2 text-2xl font-bold py-1 px-3 text-white">
                  DAY 2
                </span>{" "}
                of ICONIC 2024 will focus on various aspects of low carbon
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
