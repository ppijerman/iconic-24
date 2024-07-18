import { Button } from "../../components/ui/button";
import Image from "next/image";
import pastIconic from "@/assets/Graphics/Classroom.png";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { PATHS } from "@/lib/constants";
import dicoImg from "@/assets/dico.png";

export default function Introduction() {
  return (
    <section className="bg-white text-secondary h-fit w-screen">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full">
        <div className="w-full">
          <Image
            src={pastIconic}
            alt="Past Iconic"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full container px-4 py-20">
          <div className="flex justify-center items-center gap-6 py-4">
            <Image
              src={dicoImg}
              alt="Dinosaurus Iconic Image"
              className="w-32 h-32"
            />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              What is ICONIC?
            </h2>
          </div>

          <div className="flex flex-col justify-center gap-10 max-w-5xl px-4">
            <h3 className="py-5 text-lg md:text-2xl lg:text-3xl">
              INTERNATIONAL CONFERENCE OF INTEGRATED INTELLECTUAL COMMUNITY
            </h3>
            <p className="text-base md:text-xl text-justify leading-relaxed">
              <span className="font-bold">
                ICONIC (International Conference of Integrated Intellectual
                Community)
              </span>
              , launched by PPI Jerman (Vereinigung Indonesischer Studenten in
              Deutschland e.V) in 2014, aims to establish a platform for
              multi-stakeholder engagement, facilitating knowledge exchange and
              strategic networking. It serves as a bridge between Indonesia and
              the global community, particularly Germany, addressing issues
              pertaining to sustainable development. In 2024, ICONIC will
              celebrate its 10th anniversary and fifth occurrence, centering on
              the subject &quot;Transformation for Low-Carbon Development&quot;.
            </p>
            <p className="text-base md:text-xl text-justify leading-relaxed">
              Aligned with Indonesia&apos;s vision to become an advanced economy
              by 2045 and achieve net-zero emissions by 2060, ICONIC will delve
              into innovative solutions and ideas to support Indonesia&apos;s
              journey towards these ambitious objectives.
            </p>
            <Link
              href={PATHS.ABOUT}
              className="flex items-center gap-5 w-fit hover:text-accent transition duration-300 group"
            >
              <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">
                Learn more about ICONIC 2024
              </h1>
              <ArrowRightIcon className="w-12 h-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
