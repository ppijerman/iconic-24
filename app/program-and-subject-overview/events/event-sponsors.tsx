import Image from "next/image";
import type { StaticImageData } from "next/image";


interface Sponsor {
  name: string;
  logo: StaticImageData;
}

export function EventSponsor({ sponsors: sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 md:gap-8 px-2 md:px-5 py-10">
      {sponsors.map((sponsor, index) => (
        <SponsorContainer sponsor={sponsor} index={index} key={index} />
      ))}
    </div>
  );
}

function SponsorContainer({ sponsor }: { sponsor: Sponsor; index: number }) {
  return (
    <div className="flex flex-col items-center justify-start max-w-[300px] p-4">
      <Image
        src={sponsor.logo}
        alt="placeholder"
        className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
      />
      <div className="flex flex-col gap-2 w-full text-center items-center my-5">
        <h1 className="text-lg md:text-xl font-bold">{sponsor.name}</h1>
      </div>
    </div>
  );
}
