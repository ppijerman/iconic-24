import Image from "next/image";
import type { StaticImageData } from "next/image";

interface Speaker {
  name: string;
  title: string;
  image: StaticImageData;
}

export function EventSpeaker({ speakers }: { speakers: Speaker[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 md:gap-8 px-2 md:px-5 py-10">
      {speakers.map((speaker, index) => (
        <SpeakerContainer speaker={speaker} index={index} key={index} />
      ))}
    </div>
  );
}

function SpeakerContainer({ speaker }: { speaker: Speaker; index: number }) {
  return (
    <div className="flex flex-col items-center justify-start max-w-[300px] p-4">
      <Image
        src={speaker.image}
        alt="placeholder"
        className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
      />
      <div className="flex flex-col gap-2 w-full text-center items-center my-5">
        <h1 className="text-lg md:text-xl font-bold">{speaker.name}</h1>
      </div>
    </div>
  );
}
