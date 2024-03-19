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
    <section className="h-[600px] bg-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Speakers 2024</h1>
      <div className="flex items-center justify-center px-10 w-[90%]">
        <Carousel className="w-full py-10 px-5 cursor-grab">
          <CarouselContent className="">
            {speakers.map((speaker, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="group bg-inherit border-none shadow-none hover:bg-white transition">
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
                        width={128}
                        height={128}
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
      <div className="flex flex-row items-center gap-5 group hover:text-accent2">
        <h2 className="text-xl">See Full List Here</h2>
        <DoubleArrowRightIcon className="w-6 h-6 group-hover:opacity-100 opacity-0 transition" />
      </div>
    </section>
  );
}
