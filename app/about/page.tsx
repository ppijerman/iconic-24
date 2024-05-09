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

      <div className="min-h-screen flex items-center justify-center w-[80%] py-10">
        <div className="w-full flex flex-col items-center">
          <h1 className="pt-10 pb-20 text-5xl font-semibold">Meet The Team</h1>
          <div className="grid gap-6 md:grid-cols-2 mb-5">
            <div className="lg:max-w-[550px] lg:h-[280px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col lg:flex-row">
              <div className="p-2 flex items-center justify-center lg:w-[400px] lg:h-[230px]">
                <Image
                  src={sekar}
                  alt="Sekar"
                  className="w-full h-full lg:mb-0 object-cover rounded-md"
                />
              </div>
              <div className="gap-1">
                <h5 className="text-[28px] font-bold">Sekar Yunita</h5>
                <p className="text-neutral-500 text-xl font-bold dark:text-neutral-300">
                  Director of ICONIC 2024
                </p>
                <ul className="list-disc ml-4">
                  <li>
                    <p className="text-neutral-500 text-sm dark:text-neutral-300">
                      Vice President of PPI Jerman
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-500 text-sm dark:text-neutral-300">
                      PhD Candidate Forest Economics and Sustainable Land Use
                      Planning, Universität Göttingen
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-500 text-sm dark:text-neutral-300">
                      Doctoral Researcher Forest Economics and Sustainable Land
                      Use Planning, Universität Göttingen
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:max-w-[550px] lg:h-[280px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col lg:flex-row">
              <div className="p-2 flex items-center justify-center lg:w-[400px] lg:h-[230px]">
                <Image
                  src={agnia}
                  alt="Agnia"
                  className="w-full h-full lg:mb-0 object-cover rounded-md"
                />
              </div>
              <div className="gap-1">
                <h5 className="text-[28px] font-bold">Agnia Dewi Larasati</h5>
                <p className="text-neutral-500 text-xl font-bold dark:text-neutral-300">
                  Board of Advisory
                </p>
                <ul className="list-disc ml-4">
                  <li>
                    <p className="text-neutral-500 text-sm dark:text-neutral-300">
                      President of PPI Jerman
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-500 text-sm dark:text-neutral-300">
                      M.Sc. Candidate Electrical and Electronics Engineering,
                      Technische Universität München
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-500 text-sm dark:text-neutral-300">
                      Working Student in Measurement Engineering at IAB GmbH
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mb-5">
            <div className="lg:max-w-[500px] lg:h-[250px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col lg:flex-row">
              <div className="p-2 flex items-center justify-center lg:w-[300px] lg:h-[200px]">
                <Image
                  src={gamma}
                  alt="Gamma"
                  className="w-full h-full lg:mb-0 object-cover rounded-md"
                />
              </div>
              <div className="gap-1">
                <h5 className="md:text-base lg:text-xl font-bold">
                  Ignatius Gamma Tjandra
                </h5>
                <p className="text-neutral-500 md:text-base lg:text-[18px] font-bold dark:text-neutral-300">
                  Secretary General
                </p>
                <ul className="list-disc ml-4">
                  <li>
                    <p className="text-neutral-500 md:text-xs lg:text-[13px] dark:text-neutral-300">
                      B.Sc. Candidate Industrial Engineering and Management,
                      Technische Universität Berlin
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-500 md:text-xs lg:text-[13px] dark:text-neutral-300">
                      Working Student in Arbeitsvorbereitung, Stadler
                      Deutschland
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:max-w-[500px] lg:h-[250px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col lg:flex-row">
              <div className="p-2 flex items-center justify-center lg:w-[300px] lg:h-[200px]">
                <Image
                  src={geraldus}
                  alt="Geraldus"
                  className="w-full h-full lg:mb-0 object-cover rounded-md"
                />
              </div>
              <div className="gap-1">
                <h5 className="md:text-lg lg:text-xl font-bold">
                  Geraldus Kevin Martimbang
                </h5>
                <p className="text-neutral-500 md:text-base lg:text-[18px] font-bold dark:text-neutral-300">
                  Deputy of Director
                </p>
                <ul className="list-disc ml-4">
                  <li>
                    <p className="text-neutral-500 md:text-xs lg:text-[13px] dark:text-neutral-300">
                      M.Sc. Candidate Regional Planning, Technische Universität
                      München
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-500 md:text-xs lg:text-[13px] dark:text-neutral-300">
                      M.A. Candidate Architecture, Technische Universität
                      München
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:max-w-[500px] lg:h-[250px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col lg:flex-row">
              <div className="p-2 flex items-center justify-center lg:w-[300px] lg:h-[200px]">
                <Image
                  src={caryn}
                  alt="Caryn"
                  className="w-full h-full lg:mb-0 object-cover rounded-md"
                />
              </div>
              <div className="gap-1">
                <h5 className="md:text-lg lg:text-xl font-bold">
                  Ivana Carynthia Ligo
                </h5>
                <p className="text-neutral-500 md:text-base lg:text-[18px] font-bold dark:text-neutral-300">
                  Treasurer
                </p>
                <ul className="list-disc ml-4">
                  <li>
                    <p className="text-neutral-500 md:text-xs lg:text-[13px] dark:text-neutral-300">
                      M.Sc. Candidate Sustainable International Agriculture,
                      Georg-August-Universität Göttingen
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-500 md:text-xs lg:text-[13px] dark:text-neutral-300">
                      Working Student in Data Engineering, HOMIRO Metrology GmbH
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mb-5">
            <div className="lg:max-w-[550px] lg:h-[250px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col lg:flex-row">
              <div className="p-2 flex items-center justify-center lg:w-[400px] lg:h-[200px]">
                <Image
                  src={risma}
                  alt="Risma"
                  className="w-full h-full lg:mb-0 object-cover rounded-md"
                />
              </div>
              <div className="gap-1">
                <h5 className="text-[20px] font-bold">
                  Risma Rizkia Nurdianti
                </h5>
                <p className="text-neutral-500 text-[18px] font-bold dark:text-neutral-300">
                  Scientific Commitee
                </p>
                <ul className="list-disc ml-4">
                  <li>
                    <p className="text-neutral-500 text-[13px] dark:text-neutral-300">
                      PhD Candidate Animal Nutrition and Rangeland Management,
                      Universität Hohenheim
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-500 text-[13px] dark:text-neutral-300">
                      Researcher Animal Nutrition and Rangeland Management in
                      the Tropics and Subtropics, Universität Hohenheim
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:max-w-[550px] lg:h-[250px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col lg:flex-row">
              <div className="p-2 flex items-center justify-center lg:w-[200px] lg:h-[200px]">
                <Image
                  src={kemal}
                  alt="Kemal"
                  className="w-full h-full lg:mb-0 object-cover rounded-md"
                />
              </div>
              <div className="gap-1">
                <h5 className="text-[20px] font-bold">Kemal Firdaus</h5>
                <p className="text-neutral-500 text-[18px] font-bold dark:text-neutral-300">
                  Scientific Commitee
                </p>
                <ul className="list-disc ml-4">
                  <li>
                    <p className="text-neutral-500 text-[13px] dark:text-neutral-300">
                      PhD Candidate Mathematics, Universität Hamburg
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-500 text-[13px] dark:text-neutral-300">
                      Research Associate, Universität Hamburg
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid gap-x-[100px] gap-y-3 md:grid-cols-4 mb-5 mt-[25px]">
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={hapsari}
                  alt="Hapsari"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Hapsari Pinji</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Head of Public Relations, Design & Media
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  B.A.Sc. Angewandte Volkswirtschaftslehre
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  FU Berlin
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={fadlilah}
                  alt="Fadlilah"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Fadlilah Nur Hasanah</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Public Relations, Design & Media
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  B.Sc. Bioinformatik
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  Universität des Saarlandes
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={bea}
                  alt="Bea"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Nicole Beatrice</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Public Relations, Design & Media
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  B.Sc. Candidate Architecture
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  TU Braunschweig
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={santi}
                  alt="Santi"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Santi Ananda Sari</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Public Relations, Design & Media
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  Ausbildung Restaurantfachfrau
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  Berufsschule Hugo Junkers
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={kinasih}
                  alt="Kinasih"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Kinasih Sekarswara</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Public Relations, Design & Media
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  M.A. Candidate Development Economics and International
                  Development
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  HTW Berlin
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={aditya}
                  alt="Aditya"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Aditya Setyo Nugroho</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Public Relations, Design & Media
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  Ausbildung Koch
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  The Grand Green Familux Resorts
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={syifa}
                  alt="Syifa"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Syifa Perbowo</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Public Relations, Design & Media
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  M.Sc. Management & Technology
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  TU München
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={evelyn}
                  alt="Evelyn"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Evelyn Sutiono</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Public Relations, Design & Media
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  M.Sc. Molecular Medicine
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  Universität Göttingen
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={kafa}
                  alt="Kafa"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Kafa Billahi Kafila</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Public Relations, Design & Media
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  FSJ SHG Psychiatrie & Ergotherapie
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={azhar}
                  alt="Azhar"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Azhar Rahadian</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Head of Information & Technology
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  B.Sc. Candidate Informatics
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  TU Braunschweig
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={gerraldo}
                  alt="Gerraldo"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Gerraldo F. A. Susilo</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Information & Technology
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  B.Sc. Candidate Business Mathematics
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  HTW Berlin
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={imel}
                  alt="Imel"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Imelda Z. E. Putri</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Information & Technology
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  B.Sc. Candidate Computer Science
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  Universität Osnabrück
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={chaska}
                  alt="Chaska"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Chaska R. Oscario</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Head of Program & Event
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  B.Sc. Management and Technology
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  TU München
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={hessel}
                  alt="Hessel"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Hessel Juliust</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Program & Event
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  PhD Candidate Computer Science
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  TU München
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={christine}
                  alt="Christine"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">
                  Christine Gracia Pratama
                </h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Program & Event
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  PhD Candidate Technology Innovation Management
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  TU Hamburg
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={rohmaneo}
                  alt="Rohmaneo"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">M. Rohmaneo Daminto</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Program & Event
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  PhD Candidate Geodesy and Geoinformatics
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  TU Berlin
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={eunike}
                  alt="Eunike"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Eunika Amarya</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Program & Event
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  M.A. English Language, Literature, and Culture
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  Universität Göttingen
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[300px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={hosea}
                  alt="Hosea"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Hosea Simanjuntak</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Program & Event
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  B.Sc. Materials Engineering
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  TU Clausthal
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={marcelian}
                  alt="Marcelian"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Marcelian Grace</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Program & Event
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  M.Sc. Candidate Regional Planning
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  TU München
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={taqi}
                  alt="Taqi"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">M. Rafi Taqiyyuddiin</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Head of Fundraising & Partnership
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  B.Sc. Candidate Transport System
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  TU Berlin
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={nata}
                  alt="Nata"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Daffa Aushafi Nata</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Fundraising & Partnership
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  B.A.Sc. Candidate Industrial Engineering
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  Hochschule Darmstadt
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={maulana}
                  alt="Maulana"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Muhammad Maulana</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Fundraising & Partnership
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  M.A. Candidate National and International Administration
                  Policy
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  Universität Postdam
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={tazya}
                  alt="Tazya"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">
                  Iqlima K. Mumtazya Harmansyah
                </h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Fundraising & Partnership
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  B.Eng. Candidate Applied Chemistry
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  Hochschule Kaiserslautern
                </p>
              </div>
            </div>
            <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
              <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                <Image
                  src={tasa}
                  alt="Tasa"
                  className="w-full rounded-md lg:mb-0"
                />
              </div>
              <div className="text-center mt-4 gap-1">
                <h5 className="text-base font-bold">Tasallia Kamil</h5>
                <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                  Staff of Fundraising & Partnership
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  B.Eng. Candidate Mechatronics
                </p>
                <p className="text-neutral-500 text-sm dark:text-neutral-300">
                  Fachhochschule Aachen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
