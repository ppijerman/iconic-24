import Link from "next/link";
import { PATHS } from "@/lib/constants";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function ThemeOverview() {
  const subtopics = [
    {
      name: "Economic and Social Implication of LCD",
    },
    {
      name: "Political Economy of LCD within Global North and South Dynamics",
    },
    {
      name: "Technological Innovation for LCD",
    },
    {
      name: "LCD in Built Environment",
    },
  ];

  return (
    <div className="bg-[#e3e3e5] w-full py-12 md:py-16 lg:py-20">
      <section className="container px-4 md:px-6">
        <main className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-2 text-center">
            <div className="mx-auto inline-block rounded-lg bg-gray-100 px-3 py-1 text-base dark:bg-gray-800 w-fit">
              ICONIC 2024 Main Subject
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-7xl drop-shadow-xl">
              Transformation for Low-Carbon Development
            </h1>
            <p className="">
              Explore the four{" "}
              <span className="text-accent">focuses of studies</span> of ICONIC
              2024 theme
            </p>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:gap-12 xl:grid-cols-4 px-4">
            {subtopics.map((subtopic, index) => (
              <div
                className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950 md:min-h-[150px] lg:min-h-[200px] flex justify-center"
                key={index}
              >
                <div className="flex justify-center items-center">
                  <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    {subtopic.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <Link
            href={PATHS.SUBJECT}
            className="flex items-center gap-5 w-fit p-2 hover:text-accent2 transition duration-500"
          >
            <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">
              Learn more about the subject
            </h1>
            <ArrowRightIcon className="w-12 h-12" />
          </Link>
        </main>
      </section>
    </div>
  );
}
