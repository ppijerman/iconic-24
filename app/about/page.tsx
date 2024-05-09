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

/* Commitee */
import agnia from "@/assets/commitee/Agnia.jpeg";
import sekar from "@/assets/commitee/sekar.jpeg";
import gamma from "@/assets/commitee/gamma.jpeg";
import geraldus from "@/assets/commitee/geraldus.jpeg";
import caryn from "@/assets/commitee/caryn.jpg";
import azhar from "@/assets/commitee/azhar.jpeg";
import gerraldo from "@/assets/commitee/Gerraldo.jpeg";
import imel from "@/assets/commitee/imel.png";
import chaska from "@/assets/commitee/Chaska.jpg";
import hessel from "@/assets/commitee/Hessel.jpg";
import rohmaneo from "@/assets/commitee/Rohmaneo.jpg";
import eunike from "@/assets/commitee/eunike.png";
import hosea from "@/assets/commitee/Hosea.jpg";
import marcelian from "@/assets/commitee/Marcelian.jpg";
import hapsari from "@/assets/commitee/hapsari.jpg";
import fadlilah from "@/assets/commitee/FadlilahDila.jpg";
import bea from "@/assets/commitee/Bea.jpg";
import santi from "@/assets/commitee/Santi.jpg";
import kinasih from "@/assets/commitee/Kinasih.jpg";
import evelyn from "@/assets/commitee/evelyn.jpg";
import syifa from "@/assets/commitee/Syifa.jpg";
import taqi from "@/assets/commitee/Taqi.jpg";
import nata from "@/assets/commitee/NataDaffa.jpg";
import maulana from "@/assets/commitee/Maulana.jpg";
import tasa from "@/assets/commitee/Tasallia.jpg";
import aditya from "@/assets/commitee/aditya.jpg";
import kafa from "@/assets/commitee/Kafa.jpg";
import tazya from "@/assets/commitee/tazya.jpg";
import christine from "@/assets/commitee/Christine.jpg";
import risma from "@/assets/commitee/Risma.jpeg";
import kemal from "@/assets/commitee/Kemal.jpg";

import nopic from "@/assets/img-round-placeholder.png";
import { Committee } from "./committe";

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
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="pt-10 pb-20 text-4xl font-semibold">Past ICONIC</h1>
          <IconicImages />
        </div>
      </div>

      <Committee />
      <a href="/reviewers">
        <div className="mt-[0.5px] mb-[100px] text-2xl flex flex-row gap-2 text-secondary items-center justify-center ring-2 ring-secondary group w-fit py-5 px-10 hover:text-primary2 hover:ring-primary2 transition duration-150 my-10">
          <h1 className="font-bold ">Reviewer Team of ICONIC 2024</h1>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 opacity-0 group-hover:opacity-100 transition duration-75"
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </a>
    </main>
  );
}
