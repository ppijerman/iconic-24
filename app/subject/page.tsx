import { Subtopics } from "./subtopics";
import { FieldOfStudy } from "./field-of-study";
import Image from "next/image";
import lowCarbon from "@/assets/icons/low-carbon.png";

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <div className="bg-secondary flex min-h-screen w-full justify-center text-primary flex-col items-center">
        <div className="font-bold pt-20 w-[80%] flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl">
            INTRODUCING OUR SUBJECT THIS YEAR:
          </h1>
          <div className="flex py-5 px-5 flex-row w-full items-center justify-center gap-6">
            <Image
              src={lowCarbon}
              alt="Iconic Logo"
              className="md:w-[100px] w-[60px]"
            />
            <h1 className="text-2xl md:text-5xl lg:text-7xl">
              Transformation for Low-Carbon Development
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full bg-secondary text-primary">
          <h1 className="mb-15 text-3xl md:text-6xl flex md:relative md:top-8 font-bold shadow-lg p-5 bg-primary text-secondary">
            FOCUSES OF STUDY
          </h1>
          <Subtopics />
        </div>
        <FieldOfStudy />
      </div>
    </main>
  );
}
