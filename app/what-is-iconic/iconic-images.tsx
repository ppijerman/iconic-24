"use client";

import { motion } from "framer-motion";

export function IconicImages() {
  return (
    <>
      <div className="bg-white p-3 flex flex-col md:flex-row items-center gap-3 md:gap-5 justify-center w-full">
        {[
          { year: "2016", color: "bg-accent" },
          { year: "2018", color: "bg-accent2" },
          { year: "2020", color: "bg-accent" },
          { year: "2022", color: "bg-accent2" },
        ].map((item) => (
          <motion.div
            className={`h-[230px] w-full ${item.color} flex justify-center hover:ring-2 ring-primary2`}
            key={item.year}
            whileHover={{ scale: 1.1 }}
          >
            <h2 className="pt-10">ICONIC {item.year}</h2>
          </motion.div>
        ))}
      </div>
    </>
  );
}
