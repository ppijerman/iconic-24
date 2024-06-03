"use client";

import dicoLogo from "@/assets/dico.png";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

import logoCBL from "@/assets/sponsors/Platinum_CBL_NoBG.png";
import logoUniGoe from "@/assets/sponsors/Platinum_University of Göttingen/GOE_Logo_Quer_IPC_Farbe_RGB.png";
import logoDW from "@/assets/sponsors/Platinum_DW.svg";
import logoKBRIBerlin from "@/assets/sponsors/Platinum_KBRI.jpeg";
import logoTreeo from "@/assets/sponsors/Platinum_Treeo.png";
import logoGIZ from "@/assets/sponsors/Platinum_GIZ/Platinum_giz.jpg";

const scrollVariants = {
  animate: {
    x: ["0%", "-100%"], // Adjust -1000 to the appropriate value based on your container width
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30, // Adjust duration as needed
        ease: "linear",
      },
    },
  },
};

export function Partners() {
  const sponsors = [
    {
      name: "CBL",
      logo: logoCBL,
    },
    {
      name: "University of Göttingen",
      logo: logoUniGoe,
    },
    {
      name: "Deutsche Welle",
      logo: logoDW,
    },
    {
      name: "KBRI Berlin",
      logo: logoKBRIBerlin,
    },
    {
      name: "Treeo",
      logo: logoTreeo,
    },
    {
      name: "GIZ",
      logo: logoGIZ,
    },
  ];

  const doubledSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="bg-white text-secondary min-h-[600px] w-full flex flex-col items-center justify-center py-12 md:py-16 lg:py-20">
      <div className="container py-4">
        <h1 className="text-4xl lg:text-6xl font-bold w-full px-4 text-center leading-relaxed">
          PARTNERS OF ICONIC 2024
        </h1>
      </div>
      <div className="w-full overflow-hidden py-10">
        <motion.div
          className="flex flex-nowrap"
          variants={scrollVariants}
          animate="animate"
        >
          {doubledSponsors.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-none w-48 h-48 mx-10 flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="container flex flex-col md:flex-row gap-2 md:gap-6 justify-center pt-4">
        <div className="flex flex-col w-full p-1 py-5 md:p-5">
          <p className="text-xl text-gray-500">
            Our esteemed sponsors and media partners have been pivotal in
            shaping the Low Carbon Development Conference, driving forward
            sustainable solutions and innovations for a greener future.
          </p>
        </div>
        <Link href="/partnership" className="w-full">
          <div className="text-2xl flex flex-row gap-2 text-secondary items-center justify-center ring-2 ring-secondary group w-full h-full py-5 px-10 hover:text-primary2 hover:ring-primary2 transition duration-150">
            <h1 className="font-bold ">Partnership of ICONIC 2024</h1>
          </div>
        </Link>
      </div>
    </section>
  );
}
