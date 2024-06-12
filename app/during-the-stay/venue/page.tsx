import Image from "next/image";
import zhg1 from "@/assets/venue/Classroom.png";
import zhg2 from "@/assets/venue/Foyer.png";
import zhg3 from "@/assets/venue/Classroom_2.png";

import { APP_NAME } from "@/lib/constants";
import { ZoomableImage } from "./zoomable-image";
import lageplan from "@/assets/venue/lageplan_stadt.png";
import React from "react";

interface BusIconProps extends React.SVGProps<SVGSVGElement> {}
interface CarIconProps extends React.SVGProps<SVGSVGElement> {}
interface PlaneIconProps extends React.SVGProps<SVGSVGElement> {}

export const metadata = {
  title: APP_NAME + " | Venue",
  description: "Learn more about the venue of the conference",
};

export default function Venue() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="container py-12 md:py-16 lg:py-20">
        <h1 className="font-bold text-3xl md:text-5xl">VENUE</h1>
        <div className="w-full flex flex-col gap-4 min-h-screen">
          <Venue2 />
        </div>
        <div className="flex flex-col gap-2 py-12 md:py-16 lg:py-20">
          <h1 className="text-3xl md:text-4xl font-bold">Venue Floorplan</h1>
        </div>
        <div className="flex flex-col gap-2 py-12 md:py-16 lg:py-20">
          <h1 className="text-3xl md:text-4xl font-bold">GETTING THERE</h1>
          <p className="">
            ICONIC 2024 will take place at the Central Lecture Building (ZHG) of
            the University of Göttingen.
          </p>
          <span className="border-t-8 border-secondary w-[60px] mt-2"></span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8">
            <div className="w-full flex flex-col gap-4">
              <h3 className="font-bold text-2xl sm:text-3xl">Address</h3>
              <p className="">
                Zentrales Hörsaalgebäude (ZHG)
                <br />
                Platz der Göttinger Sieben 5
                <br />
                37073 Göttingen
              </p>
              <h3 className="font-bold text-2xl sm:text-3xl">Transportation</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <PlaneIcon className="w-5 h-5 inline-block mr-2" />
                  <strong>From Frankfurt Airport</strong>
                  <p className="py-2">
                    Take the ICE train directly to Göttingen Station (~3h 30m).
                  </p>
                </li>
                <li>
                  <PlaneIcon className="w-5 h-5 inline-block mr-2" />
                  <strong>From Hannover Airport</strong>
                  <p className="py-2">
                    S-Bahn to Hannover Central Station (17 minutes). Then, ICE
                    train to Göttingen Station (30 minutes).
                  </p>
                </li>
                <li>
                  <BusIcon className="w-5 h-5 inline-block mr-2" />
                  <strong>From Göttingen Train Station</strong>
                  <ul className="ml-6 list-disc flex flex-col gap-1 py-2">
                    <li>
                      Bus #21 towards Nikolausberg über Bahnhof or bus #23
                      towards Uni-Nord. Disembark at Göttingen Blauer Turm and
                      walk 3 minutes (230 meters) to ZHG.
                    </li>
                    <li>
                      Bus #170 towards Duderstadt or bus #160 towards Duderstadt
                      ZOB. Disembark at Göttingen Auditorium and walk 6 minutes
                      (450 meters) to ZHG.
                    </li>
                    <li>Walk 15 minutes (1.1 km) to ZHG.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <ZoomableImage
              src={lageplan}
              alt="Lageplan Getting there"
              width={600}
              height={400}
            />
          </div>
          <h3 className="font-bold text-2xl sm:text-3xl pt-4 pb-8">
            Accommodation
          </h3>
          <ul className="flex flex-col gap-4">
            <li>
              <strong>B&B HOTEL Göttingen-City:</strong> 11-minute walk (800
              meters) to ZHG.
            </li>
            <li>
              <p>
                <strong>Hotel FREIgeist Göttingen Innenstadt:</strong> 4 minutes
                (280 meters) from Göttingen station.
              </p>
              <p className="py-2">Options from the station:</p>
              <ul className="ml-6 list-disc flex flex-col gap-1">
                <li>
                  Bus #21 towards Nikolausberg über Bahnhof or bus #23 towards
                  Uni-Nord. Disembark at Göttingen Blauer Turm and walk 3
                  minutes (230 meters) to ZHG.
                </li>
                <li>
                  Bus #170 towards Duderstadt or bus #160 towards Duderstadt
                  ZOB. Disembark at Göttingen Auditorium and walk 6 minutes (450
                  meters) to ZHG.
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>BoxHotel Göttingen:</strong> 8-minute walk (600 meters)
                to ZHG.
              </p>
              <p className="py-2">Alternative options:</p>
              <ul className="ml-6 list-disc flex flex-col gap-1">
                <li>
                  3-minute walk (150 meters) to Göttingen Auditorium. Bus #91
                  Roringen towards Zentrum, alight at Göttingen Campus (1 stop),
                  and walk 2 minutes (180 meters) to ZHG.
                </li>
                <li>
                  1-minute walk (50 meters) to Göttingen Platz der Göttinger
                  Sieben. Bus #21/#22/#23 Nikolausberg towards Zentrum, alight
                  at Göttingen Blauer Turm (1 stop), and walk 3 minutes (250
                  meters) to ZHG.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

const Venue2 = () => {
  return (
    <div>
      <div className="py-10 flex flex-col gap-2">
        <h1 className="text-xl md:text-3xl font-semibold">
          Zentrales Hörsaalgebäude (ZHG)
        </h1>
        <p>Platz der Göttinger Sieben, 37073 Göttingen</p>
        <span className="border-t-8 border-secondary w-[60px] mt-2"></span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <Image
            src={zhg1}
            alt="Venue 2 ZHG"
            className="w-full max-h-[500px] object-cover object-center inset-0 rounded-md shadow-lg border-[1.5px] border-black"
          />
          <Image
            src={zhg2}
            alt="Venue 2 ZHG"
            className="w-full max-h-[500px] object-cover object-center inset-0 rounded-md shadow-lg border-[1.5px] border-black"
          />
        </div>
        <div className="flex">
          <Image
            src={zhg3}
            alt="Venue 2 ZHG"
            className="w-full max-h-[500px] object-cover object-center rounded-md shadow-lg border-[1.5px] border-black"
          />
        </div>
      </div>
    </div>
  );
};

const BusIcon: React.FC<BusIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  );
};

const CarIcon: React.FC<CarIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
};

const PlaneIcon: React.FC<PlaneIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
};
