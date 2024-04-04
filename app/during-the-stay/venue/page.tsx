"use client";

import Image from "next/image";
import zhg1 from "@/assets/venue2/zhg_1.jpg";
import zhg2 from "@/assets/venue2/zhg_2.jpg";
import zhg3 from "@/assets/venue2/zhg_1.png";

import alt1 from "@/assets/venue1/alte_mensa_.jpg";
import alt2 from "@/assets/venue1/alte_mensa_2.jpg";
import alt3 from "@/assets/venue1/alte_mensa_3.jpg";
import alt4 from "@/assets/venue1/alte_mensa_4.jpg";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Preparation() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="w-[80%] pb-15 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">VENUE</h1>

        {/* Tabs */}
        <div className="w-full flex flex-col my-20 min-h-screen">
          <Tabs defaultValue="venue1">
            <TabsList className="w-full grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 grid-cols-1 h-fit gap-3">
              <TabsTrigger value="venue1" className="text-3xl">
                Venue 1
              </TabsTrigger>
              <TabsTrigger value="venue2" className="text-3xl">
                Venue 2
              </TabsTrigger>
            </TabsList>
            <TabsContent value="venue1">
              <Venue1 />
            </TabsContent>
            <TabsContent value="venue2">
              <Venue2 />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}

const Venue1 = () => {
  return (
    <div>
      <div className="py-10 flex flex-col gap-2">
        <h1 className="text-xl md:text-3xl font-semibold inset-0 ">
          Alte Mensa, Adam-von-Trott Saal
        </h1>
        <p>Wilhelmsplatz 3, 37073 Göttingen</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Image
          src={alt4}
          alt="Venue 1 Alte Mensa"
          className="w-full max-h-[500px] object-cover object-center inset-0 rounded-md shadow-lg border-[1.5px] border-black"
        />
        <Image
          src={alt1}
          alt="Venue 1 Alte Mensa"
          className="w-full max-h-[500px] object-cover object-center inset-0
          rounded-md shadow-lg border-[1.5px] border-black"
        />

        <Image
          src={alt2}
          alt="Venue 1 Alte Mensa"
          className="w-full max-h-[500px] h-full object-cover object-center inset-0 rounded-md shadow-lg border-[1.5px] border-black"
        />
        <Image
          src={alt3}
          alt="Venue 1 Alte Mensa"
          className="w-full max-h-[500px] h-full object-cover object-center inset-0 rounded-md shadow-lg border-[1.5px] border-black"
        />
      </div>
    </div>
  );
};

const Venue2 = () => {
  return (
    <div>
      <div className="py-10 flex flex-col gap-2">
        <h1 className="text-xl md:text-3xl font-semibold">
          Zentrales Hörsaalgebäude (ZHG)
        </h1>
        <p>Platz der Göttinger Sieben, 37073 Göttingen</p>
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
