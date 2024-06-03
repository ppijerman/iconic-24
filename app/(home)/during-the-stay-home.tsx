import Image from "next/image";
import collage from "@/public/collage_gott.png";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export function StayInformation() {
  return (
    <section className="bg-white flex justify-center">
      <div className="w-full flex flex-col gap-10 items-center">
        <div className="w-full h-fit pt-16 flex flex-col items-center justify-center font-utile-display">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold">Göttingen</h1>
            <p className="text-xl">Stadt, die Wissen Schaft</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 w-[90%] md:w-1/2 mt-6">
            <p className="border-l-4 pl-3 border-secondary py-2 w-full">
              We are excited to welcome you to Göttingen, a city that has been
              known for its rich history and academic excellence. Check out our
              guide to make the most of your stay in Göttingen.
            </p>
            <Link href="/during-the-stay" className="w-full">
              <div className="text-2xl flex flex-row gap-2 text-secondary items-center justify-center ring-2 ring-secondary group w-fit py-5 px-10 hover:text-primary2 hover:ring-primary2 transition duration-150">
                <h1 className="font-bold ">During The Stay Guide</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-fit">
          <Image
            src={collage}
            alt="goettingen collage"
            className="w-full h-[600px] object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
