"use client";

import imgPlaceholder from "@/assets/img-round-placeholder.png";
import Image from "next/image";
import Link from "next/link";
// speakers

//00
import sriMulyani from "@/assets/speakers/00-SriMulyani.jpg";
import antjeBiber from "@/assets/speakers/Biber.jpeg";
import ottmar from "@/assets/speakers/Ottmar Edenhofer.jpg";

//01
import havas from "@/assets/speakers/01-dubes-ri.jpg";
import kristina from "@/assets/speakers/01-Kristina.jpeg";

//02
import yurdi from "@/assets/speakers/02-Yurdi.jpeg";
import carola from "@/assets/speakers/02-Carola.jpeg";
// import buchhholz from "@/assets/speakers/";

//03
import rukka from "@/assets/speakers/03-Rukka.jpg";
import stefan from "@/assets/speakers/03-stefan.jpeg";

//04
import delik from "@/assets/speakers/04-Delik.jpg";
import alain from "@/assets/speakers/04-Alain.jpeg";

import styles from "./speakersScrollBar.module.css";
import { Button } from "../ui/button";

export function SpeakersSection() {
  const speakers = [
    {
      name: "Sri Mulyani Indrawati, PhD.",
      title: "Finance Minister of the Republic of Indonesia",
      image: sriMulyani,
    },
    {
      name: "Antje Biber",
      title: "Head of SDG Office, Feri Group",
      image: antjeBiber,
    },
    // {
    //   name: "Prof Dr. Ottmar Edenhofer",
    //   title: "Director of Potsdam Institut for Climate Impact Research",
    //   image: ottmar,
    // },
    {
      name: "Arief Havas Oegroeseno",
      title: "Indonesian Ambassador for the Federal Republic of Germany",
      image: havas,
    },
    {
      name: "Prof. Dr. Kriztina Kis-Katos",
      title:
        "Professor for International Economic Policy, University of Göttingen",
      image: kristina,
    },
    {
      name: "Dr. Yurdi Yasmi",
      title: "Deputy Director / Special Coordinator of FAO",
      image: yurdi,
    },
    {
      name: "Prof. Dr. Carola Paul",
      title:
        "Professor of Forest Economics and Sustainable Land-Use Planning Development, University of Göttingen",
      image: carola,
    },
    {
      name: "Dr. Rukka Sombolinggi",
      title: "Secretary General of Indonesian Archipelago Indigenous People Alliance (AMAN)",
      image: rukka,
    },
    {
      name: "Stefan Schlosser",
      title: "Direct of Deutscher Verband für Negative Emission (DVNE)",
      image: stefan,
    },
    {
      name: "Prof. Dr. Delik Hudalah",
      title: "Professor of Territorial and Rural Planning (Bandung Institute of Technology, ITB)",
      image: delik,
    },
    {
      name: "Prof. Dr. Alain Thierstein",
      title: "Professor of Spatial Development (Technical University of Munich)",
      image: alain,
    },
  ];

  return (
    <section className="bg-white flex flex-col items-center justify-center gap-10 py-10">
      <h1 className="text-3xl md:text-5xl font-bold pt-10">
        Expected Speakers
      </h1>

      <div
        className={`${styles.scrollbarContainer} flex flex-row gap-8 px-5 py-10 overflow-x-scroll scroll-smooth scrollbar-hide`}
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
              className="w-48 h-48 rounded-full object-cover object-top"
            />
            <div className="flex flex-col gap-2 w-full text-center items-center mt-10">
              <h1 className="text-lg font-bold">{speaker.name}</h1>
              <p className="text-sm">{speaker.title}</p>
            </div>
          </div>
        ))}
      </div>
      <Button className="bg-white rounded-none px-10 py-7 ring-secondary ring-2 font-bold text-lg">
        See Speaker Details
      </Button>
    </section>
  );
}
