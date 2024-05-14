"use client";

import iconicMainLogo from "@/assets/logo-text-main.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { SecondCall } from "./second-call";

export function HomePage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col justify-center w-full"
      style={{
        backgroundImage: "url('/oscilate.svg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div
        className="min-h-screen w-screen flex flex-col justify-center items-center px-5"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
      >
        <div className="flex flex-col md:w-[90%] gap-3 justify-center rounded-xl">
          <div className="">
            <Image
              src={iconicMainLogo}
              alt="Iconic Logo"
              className="w-full md:max-w-[60%] shadow-lg px-3 bg-white/90"
            />
          </div>
          <motion.div
            className="w-full md:w-1/2 py-10"
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-relaxed md:leading-tight">
              Rethinking Development:{" "}
              <span className="bg-primary2 px-2 text-white">Low Carbon</span>,
              High Impact
            </h1>
          </motion.div>
          <SecondCall />
          <div className="flex flex-col md:flex-row justify-center items-center w-full text-secondary">
            <div className="text-2xl w-full flex flex-col gap-2 font-semibold border-l-8 border-secondary pl-3">
              <h2 className="font-bold md:text-3xl">Göttingen</h2>
              <h2>September 4th - 6th 2024</h2>
            </div>
            <Link href="/submission" className="w-full">
              <div className="text-2xl flex flex-row gap-2 text-secondary items-center justify-center ring-2 ring-secondary group py-5 px-16 hover:text-primary2 hover:ring-primary2 transition duration-150 my-10 shadow-lg">
                <h1 className="font-bold ">Submit Your Abstract</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
