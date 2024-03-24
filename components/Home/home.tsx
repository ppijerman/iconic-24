"use client";

import iconicMainLogo from "@/assets/logo-text-main.png";
import Image from "next/image";
import { motion } from "framer-motion";

export function HomePage() {
  return (
    <main
      className="min-h-screen flex flex-col justify-center w-full"
      style={{
        backgroundImage: "url('/past-iconic-6.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="min-h-screen w-screen flex flex-col justify-center items-center px-5"
        style={{ backgroundColor: "rgba(247, 247, 177, 0.7)" }}
      >
        <div className="flex flex-col w-[90%] gap-5 justify-center rounded-xl">
          <div className="">
            <Image
              src={iconicMainLogo}
              alt="Iconic Logo"
              className="w-full md:max-w-[60%]"
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
              <span className="bg-primary2 p-1">Low Carbon</span>, High Impact
            </h1>
          </motion.div>

          <div className="flex flex-row mt-5 justify-center items-center w-full text-secondary">
            <div className="text-2xl w-full flex flex-col md:flex-row gap-2 md:gap-5 font-semibold">
              <h2 className="font-bold">TBD</h2>
              <h2>September 6th - 8th 2024</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
