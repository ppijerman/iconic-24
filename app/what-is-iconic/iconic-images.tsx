"use client";

import { motion } from "framer-motion";
import image1 from "@/public/iconic2018.jpg";
import image2 from "@/public/past-iconic-1.jpg";
import image3 from "@/public/past-iconic-2.jpg";
import image4 from "@/public/past-iconic-3.jpg";
import Image from "next/image";

export function IconicImages() {
  return (
    <>
      <div className="bg-white p-3 flex flex-col md:flex-row items-center gap-3 md:gap-5 justify-center w-full">
        {[
          {
            year: "2016",
            color: "bg-accent",
            image: image1,
            alt: "Iconic 2016",
          },
          {
            year: "2016",
            color: "bg-accent",
            image: image2,
            alt: "Iconic 2016",
          },
          {
            year: "2016",
            color: "bg-accent",
            image: image3,
            alt: "Iconic 2016",
          },
          {
            year: "2016",
            color: "bg-accent",
            image: image4,
            alt: "Iconic 2016",
          },
        ].map((item) => (
          <motion.div
            className={`h-[300px] w-full ${item.color} flex justify-center hover:ring-2 ring-primary2`}
            key={item.year}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}
