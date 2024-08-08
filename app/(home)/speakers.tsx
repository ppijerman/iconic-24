"use client";

import imgPlaceholder from "@/assets/img-round-placeholder.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { PATHS } from "@/lib/constants";

import styles from "./speakersScrollBar.module.css";

import { Speakers } from "@/lib/speakers";

export function SpeakersSection() {
  const speakers = [
    Speakers.HAVAS,
    Speakers.DESTI,
    Speakers.TONNY,
    Speakers.ANTJE,
    Speakers.RUKKA,
    Speakers.GEORG,
    Speakers.JOKO,
    Speakers.RACHMAT,
    Speakers.HERSTATT,
    Speakers.KLEINSCHMIT,
    Speakers.SCHWEGLER,
    Speakers.RYANZA,
  ];

  return (
    <section
      className="bg-[#e3e3e5] flex flex-col items-center justify-center gap-10 py-10"
      style={{
        backgroundImage: "url('/blurry_iconic_2.svg')",
        backgroundSize: "cover",
        backgroundPosition: "right bottom",
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold pt-10">Speakers</h1>

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
      <Link
        href={PATHS.SPEAKERS}
        className="flex items-center gap-5 w-fit p-2 hover:text-accent2 transition duration-500"
      >
        <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">
          View Speaker Details
        </h1>
        <ArrowRightIcon className="w-12 h-12" />
      </Link>
    </section>
  );
}
