import dico from "@/assets/dico.png";
import iconicLogo from "@/assets/logo.png";
import Image from "next/image";
import lowCarbon from "@/assets/icons/low-carbon.png";
import { motion } from "framer-motion";
import { Subtopics } from "./subtopics";

import { IconicImages } from "./iconic-images";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div className="min-h-screen flex flex-col justify-center w-[80%] py-10">
        <h1 className="font-bold text-4xl md:text-6xl w-full md:leading-tight">
          Empowering Global Progress:{" "}
          <span className="bg-accent px-3 text-white">ICONIC 2024</span> –
          Bridging Indonesia and Germany Through Academic Excellence
        </h1>
        <p className="text-2xl pt-16 leading-relaxed">
          <span className="bg-accent2 p-1 text-white shadow-lg">Join us</span>{" "}
          to be at the <span className="font-bold">forefront of change</span>,
          accelerating our nation&apos;s path towards a{" "}
          <span className="font-bold">resilient</span> and{" "}
          <span className="font-bold">sustainable</span> green transition.
        </p>
      </div>
      <div className="flex flex-col w-full min-h-screen bg-white items-center">
        <h1 className="text-7xl pt-10 font-bold">What is ICONIC?</h1>
        <div className="flex flex-col justify-center items-center w-full lg:w-[70%]">
          <div className="p-10 flex flex-col gap-6">
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
              ICONIC is launched by PPI Jerman as a concrete endeavor to advance
              Indonesia&apos;s development on the global platform. It aims to
              facilitate knowledge exchange and serve as a nexus and
              multi-stakeholder hub connecting influential bodies across various
              fields like academia, economics, and policymaking, with the goal
              of shaping Indonesia&apos;s development. The themes selected for
              previous and current ICONIC conferences center around
              sustainability and environmental awareness. They aim to facilitate
              discussions, share ideas, address issues, and propose solutions
              concerning global and national challenges, reflecting the
              responsibility of participating in the international community’s
              efforts to shape global progress towards a more inclusive and
              sustainable future with an enhanced quality of life for all
              citizens.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="pt-10 pb-20 text-4xl font-semibold">Past ICONIC</h1>

          <IconicImages />
        </div>
      </div>

      <div className="bg-secondary flex min-h-screen w-full text-primary flex-col items-center">
        <div className="font-bold pt-20 w-[80%]">
          <h1 className="text-4xl">INTRODUCING OUR THEME THIS YEAR:</h1>
          <div className="flex py-5 flex-row w-full items-center gap-6">
            <Image
              src={lowCarbon}
              alt="Iconic Logo"
              className="md:w-[100px] w-[60px]"
            />
            <h1 className="text-5xl md:text-7xl">Low-Carbon Development</h1>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 py-10 w-full">
            <div className="flex flex-col items-center justify-center w-full text-center p-3 shadow-lg">
              <h1 className="text-4xl py-3 min-h-[8rem] text-center">
                Addressing Climate Urgency
              </h1>
              <p>
                Low carbon development mitigates the impacts of climate change,
                crucial for Indonesia’s resilience against rising sea levels and
                natural disasters.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center p-3 shadow-lg">
              <h1 className="text-4xl py-3 min-h-[8rem]">
                Sustainable Economic Growth
              </h1>
              <p className="">
                Transitioning to low carbon pathways ensures long-term economic
                stability by reducing dependency on fossil fuels and promoting
                renewable energy.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center p-3 shadow-lg">
              <h1 className="text-4xl py-3 min-h-[8rem] text-center">
                Global Responsibility
              </h1>
              <p className="">
                Embracing low carbon development aligns Indonesia with
                international commitments, contributing to global efforts in
                combating climate change.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full bg-secondary text-primary">
          <h1 className="mb-15 text-6xl relative top-8 font-bold shadow-lg p-5 bg-primary text-secondary">
            SUBTOPICS
          </h1>
          <Subtopics />
        </div>
      </div>
      <div className="bg-white w-full h-[200px]"></div>
      <div>hello</div>
    </main>
  );
}
