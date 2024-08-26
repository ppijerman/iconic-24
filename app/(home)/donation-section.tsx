import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { PATHS } from "@/lib/constants";
import mangrove2 from "@/assets/fundraising/mangroove1.jpg";
import Image from "next/image";

export function DonationSection() {
  return (
    <div className="bg-white w-full">
      <div className="py-12 md:py-24 lg:py-32">
        <section className="container px-4 md:px-6">
          <main className="flex flex-col items-center justify-center">
            <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
              <div className="flex flex-col gap-6">
                <div className="mx-auto inline-block rounded-lg bg-[#e3e3e5] px-3 py-1 text-base dark:bg-gray-800 w-fit">
                  ICONIC x{" "}
                  <a
                    href="https://lindungihutan.com/"
                    className="font-bold text-lg hover:text-accent transition"
                  >
                    LindungiHutan
                  </a>{" "}
                  x PPI Jerman
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-secondary drop-shadow-sm">
                  Plant Mangroves along Indonesia&apos;s Coastlines!
                </h1>

                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href={PATHS.JOIN_THE_MOVEMENT}
                    className="flex items-center gap-5 w-fit text-secondary hover:text-accent transition duration-300 group"
                  >
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                      Join the Movement
                    </h1>
                    <ArrowRightIcon className="w-12 h-12" />
                  </Link>
                </div>
              </div>
              <Image
                src={mangrove2}
                alt="Fundraising"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}
