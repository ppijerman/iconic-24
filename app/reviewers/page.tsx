import Image from "next/image";
import { persons } from "./persons";
import type { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";

type Person = {
  name: string;
  institution: string;
  field: string;
  image: string;
};

export const metadata: Metadata = {
  title: APP_NAME + " | " + "Reviewers",
  description: "List of reviewers for the conference",
};

export default function Reviewers() {
  const sortedPersons: Person[] = persons.sort((a: Person, b: Person) =>
    a.name.localeCompare(b.name)
  );

  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="w-[80%] pb-15 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">REVIEWERS</h1>
        <div className="my-20 w-full flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-8 gap-x-4 w-full items-center justify-center">
            {sortedPersons.map((person: Person, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-full max-w-[150px] md:max-w-[200px] py-10 gap-5 mx-auto"
              >
                <Image
                  src={person.image}
                  alt="placeholder"
                  width={300}
                  height={300}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top"
                />
                <div className="flex flex-col gap-2 w-full mt-3 text-center h-[180px]">
                  <h1 className="text-lg md:text-xl font-extrabold">
                    {person.name.toUpperCase()}
                  </h1>
                  <p className="text-sm md:text-base font-semibold">
                    {person.institution}
                  </p>
                  <p className="text-xs md:text-sm">{person.field}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
