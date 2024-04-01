"use client";

import Image from "next/image";
import iconicLogo2 from "@/assets/logo-main-pr.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { ImagesSlider } from "../images-slider";
import { motion } from "framer-motion";

export function CallToActionRegister() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-primary text-secondary w-screen">
      <motion.div
        className="flex flex-col items-center justify-center w-[80%] gap-7 py-10 z-50"
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <Image src={iconicLogo2} alt="iconic Logo 2" width={700} height={500} />
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <h1 className="w-full md:w-fit text-3xl text-center text-white md:text-6xl font-semibold p-4 bg-accent2 hover:text-accent transition cursor-default shadow-lg">
            JOIN US.
          </h1>
          <h1 className="w-full md:w-fit text-3xl text-center md:text-6xl font-semibold p-4 text-white bg-primary3 hover:text-accent transition cursor-default shadow-lg">
            RETHINK DEVELOPMENT.
          </h1>
        </div>
        <p className="text-xl md:text-2xl md:text-center ">
          Contribute to our future by{" "}
          <span className="font-bold">submitting your abstract</span> for
          Transformation for Low-Carbon Development.
        </p>
        <Button
          asChild
          className="mt-5 bg-accent text-white hover:bg-primary2 px-5 py-10 md:p-10 text-xl font-bold md:text-3xl shadow-lg"
        >
          <Link href="/submission">Submit Your Abstract</Link>
        </Button>
      </motion.div>
    </section>
  );
}
