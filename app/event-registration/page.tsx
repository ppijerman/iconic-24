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

export const metadata = {
  title: APP_NAME + " | " + "Event Registration",
  description: "Registration page for the conference",
};

export default function Registration() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Acme Tech Conference 2023
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Join us for 3 days of inspiring talks, networking, and hands-on
              workshops.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm font-medium">
                On-Site
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm font-medium">
                Virtual
              </div>
            </div>
            <div className="grid gap-2">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day1">Day 1</SelectItem>
                  <SelectItem value="day2">Day 2</SelectItem>
                  <SelectItem value="day3">Day 3</SelectItem>
                </SelectContent>
              </Select>
              <Button size="lg" className="w-full">
                Purchase Tickets
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4 space-y-2">
              <h3 className="text-lg font-semibold">Day 1</h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                  prefetch={false}
                >
                  Keynote: The Future of Tech
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                  prefetch={false}
                >
                  Workshop: Intro to React
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                  prefetch={false}
                >
                  Panel: Women in Tech
                </Link>
              </div>
              <Link
                href="#"
                className="text-sm text-primary hover:underline"
                prefetch={false}
              >
                View Full Schedule
              </Link>
            </div>
            <div className="bg-muted rounded-lg p-4 space-y-2">
              <h3 className="text-lg font-semibold">Day 2</h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                  prefetch={false}
                >
                  Fireside Chat: Scaling Your Startup
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                  prefetch={false}
                >
                  Workshop: Mastering GraphQL
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                  prefetch={false}
                >
                  Panel: Diversity in Tech
                </Link>
              </div>
              <Link
                href="#"
                className="text-sm text-primary hover:underline"
                prefetch={false}
              >
                View Full Schedule
              </Link>
            </div>
            <div className="bg-muted rounded-lg p-4 space-y-2">
              <h3 className="text-lg font-semibold">Day 3</h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                  prefetch={false}
                >
                  Keynote: The Future of AI
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                  prefetch={false}
                >
                  Workshop: Intro to Serverless
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                  prefetch={false}
                >
                  Panel: Sustainability in Tech
                </Link>
              </div>
              <Link
                href="#"
                className="text-sm text-primary hover:underline"
                prefetch={false}
              >
                View Full Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="what-is-the-conference-about">
              <AccordionTrigger className="text-lg font-semibold">
                What is the Acme Tech Conference about?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  The Acme Tech Conference is a 3-day event focused on the
                  latest trends and innovations in the technology industry. It
                  features inspiring keynotes, hands-on workshops, and panel
                  discussions covering a wide range of topics, from the future
                  of AI to sustainability in tech.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="who-should-attend">
              <AccordionTrigger className="text-lg font-semibold">
                Who should attend the conference?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  The Acme Tech Conference is designed for a diverse audience,
                  including software engineers, product managers, designers,
                  entrepreneurs, and anyone interested in the latest
                  advancements in technology. Whether you're a seasoned
                  professional or just starting your tech journey, this
                  conference has something for everyone.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="what-is-the-format">
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
            </AccordionItem>
            <AccordionItem value="what-is-the-cost">
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
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
