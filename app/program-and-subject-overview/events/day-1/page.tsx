import { EventDetails } from "./event-details";
import { PATHS } from "@/lib/constants";

import Link from "next/link";
import { AdditionalInformation } from "../additional-info";

export default function DayOne() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="container py-12 md:py-16 lg:py-20">
        <h1 className="font-bold text-3xl md:text-5xl">
          Day 1 - Opening Ceremony, Ministerial Talk, and Plenary Session
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
                Germany, the vice president of our host university, the
                University of Göttingen and the director of ICONIC 2024. It
                would then be followed by a keynote speech and discussion
                session on the topic of low-carbon development financing, with
                government officials from Indonesia and Germany.
              </p>
              <p>
                Afterwards, proceeding after the lunch break, the first plenary
                session would proceed, which will cover topics of
                decarbonization efforts in the industrial and transport sectors.
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
