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

import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function SpeakersSection() {
  const speakersFinance = [
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
  ];

  const speakersDecarbonization = [
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
      name: "Matthias Boerner",
      title: "Sector Economict for Green Climate Fund KFW",
      image: imgPlaceholder,
    },
  ];

  const speakersReducingEmissions = [
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
      name: "Georg Buchholz",
      title: "Program Director, FOrests and Climate Change Programme, GIZ",
      image: imgPlaceholder,
    },
  ];

  const speakersCarbonCapture = [
    {
      name: "Dr. Rukka Sombolinggi",
      title:
        "Secretary General of Indonesian Archipelago Indigenous People Alliance (AMAN)",
      image: rukka,
    },
    {
      name: "Stefan Schlosser",
      title: "Direct of Deutscher Verband für Negative Emission (DVNE)",
      image: stefan,
    },
  ];

  const speakersPerspectives = [
    {
      name: "Prof. Dr. Delik Hudalah",
      title:
        "Professor of Territorial and Rural Planning (Bandung Institute of Technology, ITB)",
      image: delik,
    },
    {
      name: "Prof. Dr. Alain Thierstein",
      title:
        "Professor of Spatial Development (Technical University of Munich)",
      image: alain,
    },
  ];

  return (
    <section className="min-h-screen flex justify-center bg-white">
      <div className="w-[80%] pb-15 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">Speakers</h1>
        <div className="py-10 flex flex-col gap-5">
          <div className="flex flex-col py-2">
            <h1 className="text-xl md:text-3xl px-3 border-b-4 border-secondary w-fit pb-2">
              <span className="font-bold">Ministerial Talk</span> - Financing
              Low-Carbon Development in Indonesia
            </h1>
            <div className="flex flex-row gap-4 md:gap-8 px-2 md:px-5 py-10">
              {speakersFinance.map((speaker, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start max-w-[300px] px-5"
                >
                  <Image
                    src={speaker.image}
                    alt="placeholder"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
                  />
                  <div className="flex flex-col gap-2 w-full text-center items-center mt-10">
                    <h1 className="text-lg md:text-xl font-bold">
                      {speaker.name}
                    </h1>
                    <p className="text-sm">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col py-2">
            <h1 className="text-xl md:text-3xl px-3 border-b-4 border-secondary w-fit pb-2">
              <span className="font-bold">Panel Discussion</span> -
              Decarbonization in Global South: Who Should Bear the Cost?
            </h1>
            <div className="flex flex-row gap-4 md:gap-8 px-2 md:px-5 py-10">
              {speakersDecarbonization.map((speaker, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start max-w-[300px] px-5"
                >
                  <Image
                    src={speaker.image}
                    alt="placeholder"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
                  />
                  <div className="flex flex-col gap-2 w-full text-center items-center mt-10">
                    <h1 className="text-lg md:text-xl font-bold">
                      {speaker.name}
                    </h1>
                    <p className="text-sm">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col py-2">
            <h1 className="text-xl md:text-3xl px-3 border-b-4 border-secondary w-fit pb-2">
              Financing Low-Carbon Development in Indonesia
            </h1>
            <div className="flex flex-row gap-4 md:gap-8 px-2 md:px-5 py-10">
              {speakersReducingEmissions.map((speaker, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start max-w-[300px] px-5"
                >
                  <Image
                    src={speaker.image}
                    alt="placeholder"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
                  />
                  <div className="flex flex-col gap-2 w-full text-center items-center mt-10">
                    <h1 className="text-lg md:text-xl font-bold">
                      {speaker.name}
                    </h1>
                    <p className="text-sm">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col py-2">
            <h1 className="text-xl md:text-3xl px-3 border-b-4 border-secondary w-fit pb-2">
              Financing Low-Carbon Development in Indonesia
            </h1>
            <div className="flex flex-row gap-4 md:gap-8 px-2 md:px-5 py-10">
              {speakersCarbonCapture.map((speaker, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start max-w-[300px] px-5"
                >
                  <Image
                    src={speaker.image}
                    alt="placeholder"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
                  />
                  <div className="flex flex-col gap-2 w-full text-center items-center mt-10">
                    <h1 className="text-lg md:text-xl font-bold">
                      {speaker.name}
                    </h1>
                    <p className="text-sm">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col py-2">
            <h1 className="text-xl md:text-3xl px-3 border-b-4 border-secondary w-fit pb-2">
              Financing Low-Carbon Development in Indonesia
            </h1>
            <div className="flex flex-row gap-4 md:gap-8 px-2 md:px-5 py-10">
              {speakersPerspectives.map((speaker, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start max-w-[300px] px-5"
                >
                  <Image
                    src={speaker.image}
                    alt="placeholder"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
                  />
                  <div className="flex flex-col gap-2 w-full text-center items-center mt-10">
                    <h1 className="text-lg md:text-xl font-bold">
                      {speaker.name}
                    </h1>
                    <p className="text-sm">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
