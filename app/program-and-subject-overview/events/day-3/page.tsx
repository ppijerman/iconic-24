import { EventDetails } from "./event-details";
import { PATHS } from "@/lib/constants";
import Link from "next/link";
import { AdditionalInformation } from "../additional-info";

export default function DayOne() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="container py-12 md:py-16 lg:py-20">
        <h1 className="font-bold text-3xl md:text-5xl">
          Day 3 - Plenary Sessions, Parallel Conference & Meet the Industry
        </h1>
        <div className="flex flex-col gap-10 py-4 md:py-6 lg:py-8">
          {/* Add the following content */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold md:text-4xl">Overview</h2>
            <span className="border-secondary border-b-8 w-[60px] py-4"></span>
            <div className="flex flex-col gap-4 leading-relaxed">
              <p className="">
                <span className="bg-accent text-2xl font-bold py-1 px-3 text-white">
                  DAY 3
                </span>{" "}
                of ICONIC 2024 will focus on carbon capture, storage, and
                removal technologies, as well as low-carbon territorial
                planning. The sessions will involve policymakers, researchers,
                industry leaders, and other stakeholders discussing innovative
                solutions and policy frameworks to achieve a sustainable
                low-carbon future.
              </p>
              <p>
                The goal is to develop actionable insights and strategies to
                advance low carbon development in Indonesia and globally.
                Participants will gain insights into the latest advancements in
                low-carbon technologies and explore practical applications to
                mitigate carbon emissions. Additionally, the day will highlight
                the importance of integrating low-carbon principles into urban
                planning and the built environment, addressing the challenges
                and opportunities for creating sustainable and resilient cities.
              </p>
            </div>
          </section>

          <EventDetails />
          <AdditionalInformation />
        </div>
      </div>
    </main>
  );
}
