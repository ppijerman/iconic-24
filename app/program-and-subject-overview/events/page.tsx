import Image from "next/image";
import Link from "next/link";
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
    title: "Day 1 - Ministerial Talk & Optional City Trip",
    href: PATHS.DAY_ONE,
  },
  {
    title: "Day 2 - Plenary Sessions, Parallel Conference & Meet the Industry",
    href: PATHS.DAY_TWO,
  },
  {
    title: "Day 3 - Plenary Sessions, Parallel Conference & Closing Ceremony",
    href: PATHS.DAY_THREE,
  },
];

export default function Page() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="container pb-32 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">EVENTS</h1>
        <div className="my-16 flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-5">
            {events.map((event) => (
              <Link key={event.title} href={event.href} className="group">
                <Card className="min-h-[200px] group-hover:bg-gray-100 transition duration-200 flex flex-col justify-between">
                  <CardHeader>
                    <h1 className="font-bold text-3xl text-secondary">
                      {event.title}
                    </h1>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex items-center gap-4 text-secondary ml-auto opacity-0 group-hover:opacity-100 transition duration-200">
                      <h3 className="text-xl font-bold">Learn more</h3>
                      <ArrowRightIcon className="w-12 h-12" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          <p className="">
            Your event booklet will provide detailed schedules, speaker bios,
            session descriptions, profiles of companies participating in the
            &quot;Meet the Industry&quot; session, and other essential
            information to help you make the most out of your ICONIC 2024
            experience.
          </p>
          <p>Stay tuned for updates on how to access your event booklet!</p>
        </div>
      </div>
    </main>
  );
}
