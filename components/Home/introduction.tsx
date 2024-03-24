import { Button } from "../ui/button";
import Image from "next/image";
import pastIconic from "@/public/past-iconic-5.jpg";
import Link from "next/link";

export default function Introduction() {
  return (
    <section className="bg-white text-secondary h-fit">
      <div className="flex flex-col lg:flex-row w-full items-center justify-center">
        <div className="w-full">
          <Image
            src={pastIconic}
            alt="Past Iconic"
            width={1500}
            height={400}
            objectFit="cover"
            className="w-[1200px] h-[500px] object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full p-10 px-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            What is ICONIC?
          </h2>
          <div className="flex flex-col justify-center gap-[2vw]">
            <p className="text-xl text-justify leading-relaxed">
              <span className="font-bold text-2xl">ICONIC</span> - formed by PPI
              Jerman (Vereinigung Indonesischer Studenten in Deutschland e.V) in
              2013 - is a facility for academics, industries, professionals, and
              government to exchange ideas about Indonesian industry in global
              competition. This year is the fifth year of the Iconic event,
              which takes the topic of the Transformation for Low - Carbon
              Development (LCD).
            </p>
            <Button
              asChild
              className="p-10 w-[400px] text-2xl bg-secondary hover:bg-accent text-white font-bold"
            >
              <Link href="/what-is-iconic">Learn More About ICONIC</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
