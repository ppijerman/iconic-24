"use client";

import { useState } from "react";
import Image from "next/image";
import dicoImage from "@/assets/dico.png";
import { APP_NAME } from "@/lib/constants";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { PATHS } from "@/lib/constants";

// export const metadata = {
//   title: APP_NAME + " | " + "Event Registration",
//   description: "Registration page for the conference",
// };

type RegistrationLinks = {
  [key: string]: {
    virtual: string;
    onsite: string;
  };
};

const registrationLinks: RegistrationLinks = {
  day1: {
    virtual: "https://ICONIC2024Day1Online.eventbrite.com",
    onsite: "https://ICONIC2024Day1Offline.eventbrite.com",
  },
  day2: {
    virtual: "https://ICONIC2024Day2Online.eventbrite.com",
    onsite: "https://ICONIC2024Day2Offline.eventbrite.com",
  },
  day3: {
    virtual: "https://ICONIC2024Day3Online.eventbrite.com",
    onsite: "https://ICONIC2024Day3Offline.eventbrite.com",
  },
};

export default function Registration() {
  const [selectedTab, setSelectedTab] = useState("on-site");
  const [selectedDay, setSelectedDay] = useState("");

  const handleSelectDay = (value: string) => {
    console.log(value);
    setSelectedDay(value);
  };

  const handlePurchaseClick = () => {
    if (selectedDay) {
      const link =
        selectedTab === "onsite"
          ? registrationLinks[selectedDay]["onsite"]
          : registrationLinks[selectedDay]["virtual"];
      console.log(link);
      window.open(link, "_blank");
    }
  };

  return (
    <main className="w-full py-12 md:py-16 lg:py-20">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  ICONIC 2024 Registration
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Join us for 3 days of inspiring talks, networking, and
                  hands-on workshops.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Attend in-person or virtually from anywhere in the world.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <Button
                    size="lg"
                    variant={selectedTab === "onsite" ? "default" : "outline"}
                    onClick={() => setSelectedTab("onsite")}
                  >
                    On-Site
                  </Button>
                  <Button
                    size="lg"
                    variant={selectedTab === "virtual" ? "default" : "outline"}
                    onClick={() => setSelectedTab("virtual")}
                  >
                    Virtual
                  </Button>
                </div>
                <div className="grid gap-4 py-4">
                  <Select onValueChange={handleSelectDay}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day1">Day 1</SelectItem>
                      <SelectItem value="day2">Day 2</SelectItem>
                      <SelectItem value="day3">Day 3</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    size="lg"
                    className="w-full"
                    disabled={!selectedDay}
                    onClick={handlePurchaseClick}
                  >
                    Purchase {selectedTab === "onsite" ? "On-Site" : "Virtual"}{" "}
                    Tickets
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-secondary text-2xl">Program Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4 bg-gray-100 text-secondary rounded-lg p-4">
                  <h3 className="text-lg font-semibold">Day 1</h3>
                  <div className="flex flex-col gap-2">
                    <p className="bg-primary text-black p-4">Opening Session</p>
                    <p className="bg-secondary text-white p-4">
                      Ministerial Talk
                    </p>
                    <p className="bg-accent2 text-white p-4">Plenary Talk</p>
                  </div>
                  <Link
                    href={PATHS.DAY_ONE}
                    className="ml-auto text-secondary font-semibold hover:text-accent transition flex items-center gap-2 mt-auto"
                    prefetch={false}
                    target="_blank"
                  >
                    <p>Full Day-1 Schedule</p>
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </div>
                <div className="flex flex-col gap-4 bg-gray-100 text-secondary rounded-lg p-4">
                  <h3 className="text-lg font-semibold">Day 2</h3>
                  <div className="flex flex-col gap-2">
                    <p className="bg-accent2 text-white p-4">Plenary Talk</p>
                  </div>
                  <Link
                    href={PATHS.DAY_TWO}
                    className="ml-auto text-secondary font-semibold hover:text-accent transition flex items-center mt-auto gap-2"
                    prefetch={false}
                    target="_blank"
                  >
                    <p>Full Day-2 Schedule</p>
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </div>
                <div className="flex flex-col gap-4 bg-gray-100 text-secondary rounded-lg p-4">
                  <h3 className="text-lg font-semibold">Day 3</h3>
                  <div className="flex flex-col gap-2">
                    <p className="bg-primary2 text-white p-4">
                      International Conference
                    </p>
                    <p className="bg-accent text-white p-4">
                      Meet The Industry
                    </p>
                  </div>
                  <Link
                    href={PATHS.DAY_THREE}
                    className="ml-auto text-secondary font-semibold hover:text-accent transition flex items-center gap-2 mt-auto"
                    prefetch={false}
                    target="_blank"
                  >
                    <p>Full Day-3 Schedule</p>
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="what-is-the-conference-about">
                <AccordionTrigger className="text-lg font-semibold">
                  Do I need to buy all 3 days of tickets separately?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes, each day of the conference requires a separate ticket
                    purchase. You can choose to attend one, two, or all three.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="who-should-attend">
                <AccordionTrigger className="text-lg font-semibold">
                  Where can I find the travel guide if I&apos;m coming from
                  outside of Germany?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    The travel preparation guide can be found on our{" "}
                    <a
                      href={PATHS.DURING_THE_STAY}
                      className="underline font-semibold text-accent2"
                    >
                      During the stay
                    </a>{" "}
                    section of the website
                  </p>
                </AccordionContent>
              </AccordionItem>
              {/* <AccordionItem value="what-is-the-format">
                <AccordionTrigger className="text-lg font-semibold">
                  What is the format of the conference?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    The Acme Tech Conference offers both in-person and virtual
                    attendance options. The on-site event will take place at our
                    state-of-the-art conference center, while the virtual
                    experience will allow remote participants to join
                    live-streamed sessions and engage with the community online.
                    Both formats will provide access to the same high-quality
                    content and networking opportunities.
                  </p>
                </AccordionContent>
              </AccordionItem> */}
              {/* <AccordionItem value="what-is-the-cost">
                <AccordionTrigger className="text-lg font-semibold">
                  What is the cost of attending the conference?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Ticket prices for the Acme Tech Conference vary depending on
                    the attendance format and the type of pass you choose. Early
                    bird discounts are available, and we also offer student and
                    group rates. You can find all the pricing information and
                    purchase tickets on our website.
                  </p>
                </AccordionContent>
              </AccordionItem> */}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
}
