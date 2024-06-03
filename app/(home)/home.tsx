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
        backgroundImage: "url('/Landing Page_neu_SVG.svg')",
        backgroundSize: "cover",
        backgroundPosition: "top left",
      }}
    >
      <div className="min-h-screen w-screen flex flex-col justify-center items-center px-5">
        <div className="flex flex-col md:w-[90%] gap-3 justify-center rounded-xl">
          <div className="flex items-center gap-5 justify-center">
            <h1 className="font-semibold text-[3em] md:text-[5em] lg:text-[7em] xl:text-[10em] leading-tight tracking-tight">
              ICONIC 2024{" "}
            </h1>
            <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 91.3 91.04"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
            >
              <g id="Layer_9" data-name="Layer 9">
                <g>
                  <path
                    id="cls-1"
                    className="stroke-none fill-[#f27021] hover:fill-[#d95f1f] transition"
                    d="M29.22,91.04l-4.95-4.15s3.42-7.87,4.54-14.49c1.02-6-.58-9-4.53-16.24l4.47-5.48s5.61,6.24,6.93,20.81l.13,1.93,4.17-3.17,6.21,3.79s-10.92,7.34-16.97,17Z"
                  />
                  <path
                    id="cls-2"
                    className="stroke-none fill-[#a7a9ac] hover:fill-[#7d7e80] transition"
                    d="M2.64,67.7l-2-8s8.42-3.28,14-7c3-2,6-6,8-14l7-1s2,8-9,20l-1,1,5,1,2,7s-13-2-24,1Z"
                  />
                  <path
                    id="cls-3"
                    className="stroke-none fill-[#633917] hover:fill-[#4a2710] transition"
                    d="M0,30.16l4.14-4.96s7.88,3.4,14.5,4.5c6,1,9-.61,16.23-4.58l5.49,4.45s-6.22,5.63-20.79,6.99l-1.93.13,3.19,4.16-3.77,6.23S9.68,36.19,0,30.16Z"
                  />
                  <path
                    id="cls-4"
                    className="stroke-none fill-[#104c33] hover:fill-[#0d3a2b] transition"
                    d="M24.03,4.11l8-2s3.28,8.42,7,14c2,3,6,6,14,8l1,7s-8,2-20-9l-1-1-1,5-7,2s2-13-1-24Z"
                  />
                  <path
                    id="cls-5"
                    className="stroke-none fill-[#869138] hover:fill-[#6c6c2b] transition"
                    d="M59.52,0l5.21,3.82s-2.9,8.08-3.59,14.75c-.62,6.05,1.17,8.95,5.58,15.91l-4.1,5.76s-6-5.86-8.27-20.31l-.25-1.92-3.95,3.44-6.45-3.38S54.1,10.03,59.52,0Z"
                  />
                  <path
                    id="cls-6"
                    className="stroke-none fill-[#f6f4b3] hover:fill-[#e6e4a2] transition"
                    d="M88.99,24.44l2,8s-8.42,3.28-14,7c-3,2-6,6-8,14l-7,1s-2-8,9-20l1-1-5-1-3.16-6.69s14.16,1.69,25.16-1.31Z"
                  />
                  <path
                    id="cls-7"
                    className="stroke-none fill-[#50b67c] hover:fill-[#3f8e5e] transition"
                    d="M91.3,61.77l-4.06,5.02s-7.93-3.28-14.56-4.29c-6.01-.91-8.99.74-16.16,4.81l-5.55-4.38s6.14-5.72,20.68-7.29l1.93-.16-3.25-4.11,3.69-6.28s7.53,10.79,17.29,16.68Z"
                  />
                  <path
                    id="cls-8"
                    className="stroke-none fill-[#4c89c8] hover:fill-[#3a6f9f] transition"
                    d="M67.35,88.94l-8,2s-3.28-8.42-7-14c-2-3-6-6-14-8l-1-7s8-2,20,9l1,1,1-5,7-2s-2,13,1,24Z"
                  />
                </g>
              </g>
            </svg>
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
              <h2 className="font-bold md:text-3xl drop-shadow-lg shadow-white">
                Göttingen
              </h2>
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
