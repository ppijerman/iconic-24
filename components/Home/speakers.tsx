"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import imgPlaceholder from "@/assets/img-round-placeholder.png";
import Image from "next/image";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export function SpeakersSection() {
  const speakers = [
    { name: "Muhammad Yesus", title: "CEO, Google", image: "/speaker1.jpg" },
    { name: "Jane Smith", title: "CTO, Meta", image: "/speaker2.jpg" },
    {
      name: "David Johnson",
      title: "Professor, TU Berlin",
      image: "/speaker3.jpg",
    },
    { name: "Sarah Williams", title: "Kambing, Hutan", image: "/speaker4.jpg" },
    { name: "Michael Brown", title: "CMO, Company", image: "/speaker5.jpg" },
    { name: "Emily Davis", title: "CTO, Company", image: "/speaker6.jpg" },
    { name: "Daniel Wilson", title: "COO, Company", image: "/speaker7.jpg" },
  ];

  return (
    <section className="h-[850px] bg-white flex flex-col items-center justify-center p-10 text-center">
      <h1 className="text-3xl md:text-5xl font-bold">Speakers 2024</h1>
      <h1 className="text-2xl md:text-5xl mt-14 font-bold text-center">
        Expected Speakers to be Announced on April 15th 2024
      </h1>
      {/* <div className="flex items-center justify-center px-10 w-[90%]">
        <Carousel className="w-full py-10 px-5 cursor-grab">
          <CarouselContent className="">
            {speakers.map((speaker, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="group bg-inherit border-none shadow-none text-secondary hover:bg-white transition">
                  <CardHeader className="text-center text-2xl font-semibold">
                    <h2 className="group-hover:text-accent transition">
                      {speaker.name.toUpperCase()}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center flex-col">
                      <Image
                        src={imgPlaceholder}
                        alt="Speaker"
                        width={256}
                        height={256}
                      />
                      <p className="mt-10 text-2xl">{speaker.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant="outline"
            className="bg-white text-secondary hover:bg-primary"
          />
          <CarouselNext
            variant="outline"
            className="bg-white text-secondary hover:bg-primary"
          />
        </Carousel>
      </div>
      <Button variant="secondary" className="p-10 text-3xl font-bold text-white hover:bg-accent shadow-lg">
        See Full Speakers
      </Button> */}
    </section>
  );
}
