import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const metadata = {
  title: APP_NAME + " | Events",
  description: "Learn more about the events of the conference",
};

const events = [
  {
    title: "Day 1 - Opening Ceremony, Ministerial Talk, and Plenary Session",
    href: PATHS.DAY_ONE,
  },
  {
    title: "Day 2 - Plenary Sessions",
    href: PATHS.DAY_TWO,
  },
  {
    title:
      "Day 3 - Plenary Sessions, Meet the Industry, and Parallel Conference",
    href: PATHS.DAY_THREE,
  },
];

export default function Page() {
  return (
    <main className="min-h-screen flex justify-center w-full">
      <div className="container pb-32 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">EVENTS</h1>
        <div className="mt-16 mb-7 flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-5">
            {events.map((event) => (
              <Link key={event.title} href={event.href} className="group">
                <Card className="min-h-[200px] group-hover:bg-gray-100 transition duration-200 flex flex-col justify-between ">
                  <CardHeader>
                    <h1 className="font-bold text-3xl text-secondary group-hover:text-accent2">
                      {event.title}
                    </h1>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex items-center gap-4 text-secondary ml-auto opacity-0 group-hover:opacity-100 transition duration-200 group-hover:text-accent2">
                      <h3 className="text-xl font-bold">Learn more</h3>
                      <ArrowRightIcon className="w-12 h-12" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          <p className="">
            Enhance your ICONIC 2024 experience by exploring our comprehensive event booklet. 
            Discover detailed schedules, speaker bios, in-depth session descriptions, 
            and exclusive profiles of &quot;Meet the Industry&quot; companies. 
            All designed to help you get the most out of the event.
          </p>
        </div>
        <Button
                  className="bg-secondary w-80 h-10 text-white hover:bg-primary2 px-8 md:p-8 text-xl font-bold md:text-2xl shadow-lg"
                >
                  <Link href="https://drive.google.com/file/d/17ttyJ_toEDUmedjMbszCB5zhKnBU6B--/view" target="_blank">
                    Explore the Booklet
                  </Link>
        </Button>
      </div>
    </main>
  );
}
