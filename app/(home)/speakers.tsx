"use client";

import imgPlaceholder from "@/assets/img-round-placeholder.png";
import Image from "next/image";
import Link from "next/link";

// speakers
//00
import sriMulyani from "@/assets/speakers/Minister_SriMulyani.jpg";
import svenja from "@/assets/speakers/BMZ Schulze.jpeg";
import metin from "@/assets/speakers/President Uni Göttingen.jpeg";
import antjeBiber from "@/assets/speakers/Biber.jpeg";

//01
import havas from "@/assets/speakers/Dubes_Havas.jpg";
import kristina from "@/assets/speakers/Kristina.jpeg";
import frank from "@/assets/speakers/Frank Bohnet.jpeg";

//02
import rukka from "@/assets/speakers/Rukka Sombolinggi.jpg";
import gary from "@/assets/speakers/Gary Dunning.jpeg";
import buchholz from "@/assets/speakers/Georg Buchholz.jpeg";

//03
import joko from "@/assets/speakers/Joko Tri Haryanto.jpeg";

//04
import rachmat from "@/assets/speakers/Rachmat Kaimuddin.png";
import stefan from "@/assets/speakers/Stefan Schlosser.jpeg";
import desti from "@/assets/speakers/Desti.webp";

//05
import mia from "@/assets/speakers/Mia Amalia.jpeg";
import francis from "@/assets/speakers/Francis Kere.webp";
import amy from "@/assets/speakers/Amy Oen.webp";

//06
import tonny from "@/assets/speakers/Tonny Wagey.jpeg";

import styles from "./speakersScrollBar.module.css";
import { Button } from "../../components/ui/button";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export function SpeakersSection() {
  const speakers = [
    {
      name: "Sri Mulyani Indrawati, PhD.",
      title: "Finance Minister of the Republic of Indonesia",
      image: sriMulyani,
    },
    {
      name: "Svenja Schulze",
      title: "Development Minister of the Federal Republic of Germany",
      image: svenja,
    },
    {
      name: "Arief Havas Oegroeseno",
      title: "Indonesian Ambassador for the Federal Republic of Germany",
      image: havas,
    },
    {
      name: "Prof. Dr. Metin Tolan",
      title: "President of the University of Göttingen",
      image: metin,
    },
    {
      name: "Antje Biber",
      title: "Head of SDG Office, Feri Group",
      image: antjeBiber,
    },
    {
      name: "Prof. Dr. Kriztina Kis-Katos",
      title:
        "Professor for International Economic Policy, University of Göttingen",
      image: kristina,
    },
    {
      name: "Frank Bohnet",
      title:
        "Director of Development Finance East Asia and South-East Asia, KfW Development Bank",
      image: frank,
    },
    {
      name: "Gary Dunning",
      title: "Executive Director, The Forests Dialogue",
      image: gary,
    },
    {
      name: "Georg Buchholz",
      title: "Program Director, Forests and Climate Change Programme, GIZ",
      image: buchholz,
    },
    {
      name: "Rukka Sombolinggi",
      title:
        "Secretary General of Indonesian Archipelago Indigenous People Alliance (AMAN)",
      image: rukka,
    },
    {
      name: "Dr. Joko Tri Haryanto",
      title:
        "Senior Researcher of Fiscal Policy Agency for Climate Change Financing and Multilateral Policy",
      image: joko,
    },
    {
      name: "Stefan Schlosser",
      title:
        "Managing Director of Deutscher Verband für Negative Emission (DVNE)",
      image: stefan,
    },
    {
      name: "Desti Alkano, Ph.D.",
      title: "CEO of Energy Academy Indonesia (ECADIN)",
      image: desti,
    },
    {
      name: "Rachmat Kaimuddin",
      title:
        "Deputy Coordinating Minister of Maritime Affairs and Investments in Infrastructure and Transportation",
      image: rachmat,
    },
    {
      name: "Mia Amalia, Ph.D.",
      title:
        "Deputy of Planning and Land Management of Nusantara Authority (IKN, the New Capital City of Indonesia)",
      image: mia,
    },
    {
      name: "Prof. Francis Kéré",
      title:
        "Pritzker Price Awarded Architect and Professor of Architectural Design and Participation, Technical University of Munich",
      image: francis,
    },
    {
      name: "Dr. Amy Oen",
      title:
        "PHUSICOS Project Coordinator and Senior Researcher at the Norwegian Geotechnical Institute",
      image: amy,
    },
    {
      name: "Tonny Wagey",
      title:
        "Executive Director of Indonesia Climate Change Trust Fund (ICCTF), Ministry of National Development Planning (BAPPENAS)",
      image: tonny,
    },
  ];

  return (
    <section className="bg-[#e3e3e5] flex flex-col items-center justify-center gap-10 py-10">
      <h1 className="text-3xl md:text-5xl font-bold pt-10">
        Potential Speakers
      </h1>

      <div
        className={`${styles.scrollbarContainer} flex flex-row gap-4 md:gap-8 px-2 md:px-5 py-10 overflow-x-scroll scroll-smooth scrollbar-hide`}
        style={{ width: "100%" }}
      >
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start w-full min-w-[300px] px-5"
          >
            <Image
              src={speaker.image}
              alt="placeholder"
              className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
            />
            <div className="flex flex-col gap-2 w-full text-center items-center mt-10">
              <h1 className="text-md md:text-lg font-bold">{speaker.name}</h1>
              <p className="text-sm">{speaker.title}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/program-and-subject-overview/speakers">
        <div className="text-xl md:text-2xl flex flex-row gap-2 text-secondary items-center justify-center ring-2 ring-secondary group w-fit py-5 px-5 md:px-10 hover:text-primary2 hover:ring-primary2 transition duration-150 my-10">
          <h1 className="font-bold">See Speaker Details</h1>
          <ArrowTopRightIcon className="w-6 h-6 opacity-0 group-hover:opacity-100 transition duration-75" />
        </div>
      </Link>
    </section>
  );
}
