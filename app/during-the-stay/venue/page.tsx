import Image from "next/image";
import zhg1 from "@/assets/venue2/zhg_1.jpg";
import zhg2 from "@/assets/venue2/zhg_2.jpg";
import zhg3 from "@/assets/venue2/zhg_1.png";


import { APP_NAME } from "@/lib/constants";

export const metadata = {
  title: APP_NAME + " | Venue",
  description: "Learn more about the venue of the conference",
};

export default function Preparation() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="w-[80%] pb-15 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">VENUE</h1>

        <div className="w-full flex flex-col my-20 min-h-screen">
          <Venue2 />
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
