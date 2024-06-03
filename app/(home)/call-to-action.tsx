"use client";

import Image from "next/image";
import iconicLogo2 from "@/assets/logo-main-white.png";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { ImagesSlider } from "../../components/images-slider";
import { motion } from "framer-motion";

export function CallToActionRegister() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen text-secondary w-screen font-utile-display"
      style={{
        backgroundImage: "url('/Bamboo_with_Gradient.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-screen h-screen flex flex-col items-center justify-center z-50"
      >
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
          <Image
            src={iconicLogo2}
            alt="iconic Logo 2"
            width={700}
            height={500}
            className="drop-shadow-lg"
          />
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <h1 className="w-full md:w-fit text-4xl text-center text-white md:text-6xl font-semibold p-4 hover:text-accent transition cursor-default">
              JOIN US.
            </h1>
            <h1 className="w-full md:w-fit text-4xl text-center md:text-6xl font-semibold p-4 text-white hover:text-accent transition cursor-default shadow-lg">
              RETHINK DEVELOPMENT.
            </h1>
          </div>
          <p className="text-lg text-white md:text-2xl md:text-center rounded-md px-2">
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
      </div>
    </section>
  );
}
