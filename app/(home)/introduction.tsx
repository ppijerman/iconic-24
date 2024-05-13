import { Button } from "../../components/ui/button";
import Image from "next/image";
import pastIconic from "@/public/habibie.jpeg";
import Link from "next/link";

export default function Introduction() {
  return (
    <section className="bg-white text-secondary h-fit w-screen">
      <div className="flex flex-col lg:flex-row w-full items-center justify-center">
        <div className="w-full">
          <Image
            src={pastIconic}
            alt="Past Iconic"
            className="w-full h-fit object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full p-10 px-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            What is ICONIC?
          </h2>
          <div className="flex flex-col justify-center gap-[2vw]">
            <p className="text-base md:text-xl text-justify leading-relaxed p-5">
              <span className="font-bold text-3xl">ICONIC</span>, launched by
              PPI Jerman (Vereinigung Indonesischer Studenten in Deutschland
              e.V) in 2014, aims to establish a platform for multi-stakeholder
              engagement, facilitating knowledge exchange and strategic
              networking. It serves as a bridge between Indonesia and the global
              community, particularly Germany, addressing issues pertaining to
              sustainable development. In 2024, ICONIC will celebrate its 10th
              anniversary and fifth occurrence, centering on the subject
              &quot;Transformation for Low-Carbon Development&quot;.
            </p>
            <p className="text-base md:text-xl text-justify leading-relaxed p-5">
              Aligned with Indonesia&apos;s vision to become an advanced economy
              by 2045 and achieve net-zero emissions by 2060, ICONIC will delve
              into innovative solutions and ideas to support Indonesia&apos;s
              journey towards these ambitious objectives.
            </p>
            <div className="px-5">
              <Button
                asChild
                className="p-6 md:p-10 w-fit text-lg md:text-2xl bg-secondary hover:bg-accent text-white font-bold"
              >
                <Link href="/about">Learn More About ICONIC</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
