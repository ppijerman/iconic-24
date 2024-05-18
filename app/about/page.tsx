import dico from "@/assets/dico.png";
import iconicLogo from "@/assets/logo.png";
import Image from "next/image";
import lowCarbon from "@/assets/icons/low-carbon.png";
import { motion } from "framer-motion";

import { IconicImages } from "./iconic-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconicOutput } from "./output-iconic";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import nopic from "@/assets/img-round-placeholder.png";
import { TeamCTA } from "./team-cta";
import { APP_NAME } from "@/lib/constants";
import { PastIconic } from "./past-iconic";

export const metadata = {
  title: APP_NAME + " | " + "About",
  description: "Learn more about the conference",
};

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-white">
      <div className="min-h-screen flex flex-col justify-center w-[90%] md:w-[80%] py-10">
        <h1 className="font-bold text-4xl md:text-6xl w-full leading-normal md:leading-snug">
          Empowering Global Progress:{" "}
          <span className="bg-accent px-3 text-white">ICONIC 2024</span> –
          Bridging Indonesia and Germany Through Academic Excellence
        </h1>
        <p className="text-2xl pt-16 pb-10 leading-relaxed">
          Be at the <span className="font-bold">forefront of change</span>,
          accelerating our nation&apos;s path towards a{" "}
          <span className="font-bold">resilient</span> and{" "}
          <span className="font-bold">sustainable</span> green transition.
        </p>
        <Button
          asChild
          className="bg-accent2 shadow-lg hover:bg-accent text-white text-2xl md:text-4xl px-5 py-12 md:p-10 w-full max-w-[500px] mx-auto md:mx-0"
        >
          <Link href="/event-registration">JOIN US.</Link>
        </Button>
      </div>
      <div className="flex flex-col w-full min-h-screen bg-white text-secondary items-center justify-center">
        <h1 className="text-center text-4xl md:text-5xl lg:text-7xl pt-16 px-5 font-bold">
          What is ICONIC?
        </h1>
        <div className="flex flex-col justify-center items-center w-full lg:w-[80%]">
          <div className="px-5 md:px-0 py-10 flex flex-col gap-6">
            <p className="text-xl text-justify leading-relaxed">
              <span className="font-bold text-2xl">ICONIC</span> or the{" "}
              <span className="font-bold text-2xl line">
                International Conference of Integrated Intellectual Community
              </span>{" "}
              is a biennial international scientific conference in Germany that
              is initiated and held by PPI Jerman (Perhimpunan Pelajar Indonesia
              Jerman/Indonesische Studenten Vereinigung e.V) as a platform to
              act as an academic bridge between Indonesia and Germany,
              facilitated by Indonesia’s very own academia diaspora of
              high-spirited and motivated students currently pursuing their
              studies and research in Germany.
            </p>

            <p className="text-xl text-justify leading-relaxed">
              PPI Jerman, as the initiator and organizer of ICONIC over the
              years, takes pride in being a student association dedicated to
              making positive contributions to Indonesian academia and the
              global stage. It upholds moral ideals that prioritize inclusivity
              and academic integrity, free from political compromises or
              interests that may hinder addressing real problems and concerns.
            </p>
            <p className="text-xl text-justify leading-relaxed">
              ICONIC is launched by PPI Jerman as a concrete endeavor to advance
              Indonesia&apos;s development on the global platform. It aims to
              facilitate knowledge exchange and serve as a nexus and
              multi-stakeholder hub connecting influential bodies across various
              fields like academia, economics, and policymaking, with the goal
              of shaping Indonesia&apos;s development.
            </p>
            <p className="text-xl text-justify leading-relaxed">
              The themes selected for previous and current ICONIC conferences
              center around sustainability and environmental awareness. They aim
              to facilitate discussions, share ideas, address issues, and
              propose solutions concerning global and national challenges,
              reflecting the responsibility of participating in the
              international community’s efforts to shape global progress towards
              a more inclusive and sustainable future with an enhanced quality
              of life for all citizens.
            </p>
          </div>
        </div>

        <IconicOutput />
        <TeamCTA />

        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="pt-10 pb-20 text-4xl font-semibold">Past ICONIC</h1>
          <IconicImages />
          <PastIconic />
        </div>
      </div>
    </main>
  );
}
