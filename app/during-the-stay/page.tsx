import Image from "next/image";

import go from "@/assets/göttingen/go1.jpg";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { APP_NAME } from "@/lib/constants";

const topics = [
  {
    title: "Preparation",
    content:
      "Kickstart your journey with crucial pre-travel tips and reminders. From registration confirmation to packing lists, we ensure you're fully prepared before you even set foot in Göttingen.",
    href: "/during-the-stay/preparation",
  },
  {
    title: "Venue — Göttingen",
    content:
      "Step into the venues that will host our inspiring sessions and discussions. Get to know the Alte Mensa, Adam-von-Trott-Saal, and ZHG, and plan your conference days with ease.",
    href: "/during-the-stay/venue",
  },
  {
    title: "Online Participation",
    content:
      "Can't join us in person? You won't miss out! Register to participate virtually and connect with the ICONIC 2024 community from wherever you are in the world.",
    href: "/during-the-stay/online-participant",
  },
  {
    title: "City Day Trip",
    content:
      "Extend your conference experience beyond the academic sessions with a cultural journey through Göttingen. Learn more about the city's rich scientific heritage and socialize with fellow attendees in a relaxed setting.",
    href: "/during-the-stay/city-day-trip",
  },
  {
    title: "FAQ",
    content:
      "Have questions? We have answers. From registration to abstract submission, find all the information you need to navigate your ICONIC 2024 experience.",
    href: "/during-the-stay/faq",
  },
];

export const metadata = {
  title: APP_NAME + " | " + "During the Stay",
  description: "Information about your stay during the conference",
};

export default function DuringTheStay() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="w-[90%] md:w-[80%] pb-32 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">DURING THE STAY</h1>
        <div className="my-16 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
            <div className="w-full md:w-1/2">
              <Image
                src={go}
                alt="Göttingen"
                className="w-full h-fit rounded-md shadow-lg border-[1.5px] border-black"
              />
            </div>
            <div className="flex flex-col gap-5 leading-[2rem] w-full text-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-10">
                Welcome to the heart of your ICONIC 2024 journey!
              </h2>
              <p>
                As you settle into the vibrant city of Göttingen, we are
                thrilled to guide you through an unforgettable conference
                experience. This section of our site is designed to ensure you
                have all the information you need at your fingertips, making
                your stay as enriching and seamless as possible.
              </p>
              <p>
                From the essentials of preparing for your trip to immersing
                yourself in the scientific and cultural offerings of Göttingen,
                we&apos;ve got you covered. Dive deeper into each aspect of your
                stay by exploring the topics below.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-x-5 gap-y-8">
            {topics.map((topic, index) => (
              <Link href={topic.href} key={index}>
                <Card className="text-secondary group h-fit md:h-[250px] flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between">
                      <h1
                        className="text-xl font-semibold group-hover:text-accent
                    transition duration-150"
                      >
                        {topic.title}
                      </h1>
                      <ArrowTopRightIcon className="w-6 h-6 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out text-accent" />
                    </div>
                  </CardHeader>
                  <CardContent>{topic.content}</CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
