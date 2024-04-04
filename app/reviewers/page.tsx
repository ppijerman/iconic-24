import Image from "next/image";
import placeholder from "@/assets/img-round-placeholder.png";
import { persons } from "./persons";

export default function Reviewers() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="w-[80%] pb-15 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">REVIEWERS</h1>
        <div className="my-20 w-full flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-8 gap-x-4 w-full items-center justify-center">
            {persons.map((person, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-full max-w-[150px] py-10"
              >
                <Image
                  src={placeholder}
                  alt="placeholder"
                  className="w-32 h-fit rounded-full"
                />
                <div className="flex flex-col gap-2  w-full mt-3 text-center h-[180px]">
                  <h1 className="text-xl font-extrabold">
                    {person.name.toUpperCase()}
                  </h1>
                  <p className="font-semibold">{person.institution}</p>
                  <p className="text-sm">{person.field}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
