import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

import floorplan from "@/assets/Graphics/floorplan_venue.png";
import floorplan2 from "@/assets/venue/floorplan.png";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function VenueImageCarousel() {
  const venueImages = [
    {
      src: floorplan,
      alt: "Floorplan Venue 2D",
    },
    {
      src: floorplan2,
      alt: "Floorplan Venue 3D",
    },
  ];
  return (
    <Carousel className="w-full max-w-full md:max-w-4xl lg:max-w-6xl py-5 md:py-12 mx-auto">
      <CarouselContent>
        {venueImages.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="p-4">
              <CardHeader className="">
                <h2 className="text-sm md:text-md font-semibold">{image.alt}</h2>
              </CardHeader>
              <CardContent>
                <Image src={image.src} alt={image.alt} className="w-full" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex"/>
      <CarouselNext className="hidden md:flex"/>
    </Carousel>
  );
}
