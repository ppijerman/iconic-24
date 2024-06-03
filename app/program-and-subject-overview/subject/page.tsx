import { Subtopics } from "./subtopics";
import { FieldOfStudy } from "./field-of-study";
import Image from "next/image";
import lowCarbon from "@/assets/icons/low-carbon.png";
import { APP_NAME } from "@/lib/constants";

export const metadata = {
  title: APP_NAME + " | Subject",
  description: "Learn more about the subject of the conference",
};

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <div className="bg-secondary flex min-h-screen w-full justify-center text-primary flex-col items-center">
        <div className="pt-20 flex flex-col items-center justify-center container">
          <h1 className="text-3xl md:text-4xl px-5 font-bold ">
            ICONIC 2024 SUBJECT
          </h1>
          <div className="flex py-5 px-5 flex-row w-full items-center justify-center gap-6">
            <Image
              src={lowCarbon}
              alt="Iconic Logo"
              className="md:w-[100px] w-[60px]"
            />
            <h1 className="font-bold text-2xl md:text-5xl lg:text-7xl">
              Transformation for Low-Carbon Development
            </h1>
          </div>
          <p className="font-">
            Join us at ICONIC 2024 to champion Indonesia&apos;s transformation
            toward low carbon development! Collaborate with global experts to
            explore innovative solutions for transitioning from fossil fuels,
            integrating renewable energy, and fostering climate resilience.
            Together, let&apos;s drive the critical changes needed for a
            sustainable, low-carbon future.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full bg-secondary text-primary">
          <h1 className="mt-20 mb-15 text-3xl md:text-6xl flex font-bold shadow-lg p-5 bg-primary text-secondary">
            FOCUSES OF STUDY
          </h1>
          <Subtopics />
        </div>
        <FieldOfStudy />
      </div>
    </main>
  );
}
