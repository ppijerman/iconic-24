import imgPlaceholder from "@/assets/img-round-placeholder.png";
import Image from "next/image";
import Link from "next/link";

import { APP_NAME } from "@/lib/constants";
import { Speakers } from "@/lib/speakers";

export const metadata = {
  title: APP_NAME + " | " + "Potential Speakers",
  description: "Potential Speakers for the conference",
};

export default function SpeakersSection() {
  const speakersOpening = [Speakers.HAVAS, Speakers.METIN, Speakers.SEKAR];

  const speakersFinance = [Speakers.SRIMUL, Speakers.SVENJA];

  const speakersDecarbonizationGlobalSouth = [
    Speakers.HAVAS,
    Speakers.KRISZTINA,
    Speakers.FRANK,
  ];

  const speakersReducingEmissions = [
    Speakers.GARY,
    Speakers.RUKKA,
    Speakers.GEORG,
  ];

  const speakersDecarbonization = [
    Speakers.JOKO,
    Speakers.FRANK,
    Speakers.TONNY,
    Speakers.ANTJE,
  ];

  const speakersCarbonCapture = [
    Speakers.RACHMAT,
    Speakers.STEFAN,
    Speakers.DESTI,
  ];

  const speakersPerspectives = [Speakers.MIA, Speakers.FRANCIS, Speakers.AMY];

  return (
    <section className="min-h-screen flex justify-center bg-white">
      <div className="w-[80%] pb-15 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">Potential Speakers</h1>
        <div className="py-10 flex flex-col gap-5">
          <div className="flex flex-col py-2">
            <h1 className="text-xl md:text-3xl px-3 border-b-2 border-secondary w-fit pb-2">
              <span className="font-bold">ICONIC 2024 Opening</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 md:gap-8 px-2 md:px-5 py-10">
              {speakersOpening.map((speaker, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start max-w-[300px] px-5"
                >
                  <Image
                    src={speaker.image}
                    alt="placeholder"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
                  />
                  <div className="flex flex-col gap-2 w-full text-center items-center mt-5 md:mt-10">
                    <h1 className="text-lg md:text-xl font-bold">
                      {speaker.name}
                    </h1>
                    <p className="text-sm">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col py-2">
            <h1 className="text-xl md:text-3xl px-3 border-b-2 border-secondary w-fit pb-2">
              <span className="font-bold">Ministerial Talk</span> - Financing
              Low-Carbon Development in Indonesia
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-4 md:gap-8 px-2 md:px-5 py-10">
              {speakersFinance.map((speaker, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start max-w-[300px] px-5"
                >
                  <Image
                    src={speaker.image}
                    alt="placeholder"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
                  />
                  <div className="flex flex-col gap-2 w-full text-center items-center mt-5 md:mt-10">
                    <h1 className="text-lg md:text-xl font-bold">
                      {speaker.name}
                    </h1>
                    <p className="text-sm">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col py-2">
            <h1 className="text-xl md:text-3xl px-3 border-b-2 border-secondary w-fit pb-2">
              <span className="font-bold">Panel Discussion</span> -
              Decarbonization in Global South: Who should Bear the Costs?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 md:gap-8 px-2 md:px-5 py-10">
              {speakersDecarbonizationGlobalSouth.map((speaker, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start max-w-[300px] px-5"
                >
                  <Image
                    src={speaker.image}
                    alt="placeholder"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
                  />
                  <div className="flex flex-col gap-2 w-full text-center items-center mt-5 md:mt-10">
                    <h1 className="text-lg md:text-xl font-bold">
                      {speaker.name}
                    </h1>
                    <p className="text-sm">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col py-2">
            <h1 className="text-xl md:text-3xl px-3 border-b-2 border-secondary w-fit pb-2">
              <span className="font-bold">
                Keynote Speeches and Panel Discussion
              </span>{" "}
              - Reducing AFOLU-Emission: Balancing Development and Conservation
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 md:gap-8 px-2 md:px-5 py-10">
              {speakersReducingEmissions.map((speaker, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start max-w-[300px] px-5"
                >
                  <Image
                    src={speaker.image}
                    alt="placeholder"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
                  />
                  <div className="flex flex-col gap-2 w-full text-center items-center mt-5 md:mt-10">
                    <h1 className="text-lg md:text-xl font-bold">
                      {speaker.name}
                    </h1>
                    <p className="text-sm">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col py-2">
            <h1 className="text-xl md:text-3xl px-3 border-b-2 border-secondary w-fit pb-2">
              <span className="font-bold">
                Keynote Speeches and Panel Discussion
              </span>{" "}
              - Carbon Capture, Storage and Removal: Between Low-Tech and
              High-Tech
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-4 md:gap-8 px-2 md:px-5 py-10">
              {speakersCarbonCapture.map((speaker, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start max-w-[300px] px-5"
                >
                  <Image
                    src={speaker.image}
                    alt="placeholder"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
                  />
                  <div className="flex flex-col gap-2 w-full text-center items-center mt-5 md:mt-10">
                    <h1 className="text-lg md:text-xl font-bold">
                      {speaker.name}
                    </h1>
                    <p className="text-sm">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col py-2">
            <h1 className="text-xl md:text-3xl px-3 border-b-2 border-secondary w-fit pb-2">
              <span className="font-bold">
                Keynote Speeches and Panel Discussion
              </span>{" "}
              - Perspectives on Low-Carbon Territorial Planning
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-8 px-2 md:px-5 py-10">
              {speakersPerspectives.map((speaker, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start max-w-[300px] px-5"
                >
                  <Image
                    src={speaker.image}
                    alt="placeholder"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
                  />
                  <div className="flex flex-col gap-2 w-full text-center items-center mt-5 md:mt-10">
                    <h1 className="text-lg md:text-xl font-bold">
                      {speaker.name}
                    </h1>
                    <p className="text-sm">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col py-2">
              <h1 className="text-xl md:text-3xl px-3 border-b-2 border-secondary w-fit pb-2">
                <span className="font-bold">Decarbonization Projects</span> -
                Review and Outlook
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 md:gap-8 px-2 md:px-5 py-10">
                {speakersDecarbonization.map((speaker, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-start max-w-[300px] px-5"
                  >
                    <Image
                      src={speaker.image}
                      alt="placeholder"
                      className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top drop-shadow-lg"
                    />
                    <div className="flex flex-col gap-2 w-full text-center items-center mt-5 md:mt-10">
                      <h1 className="text-lg md:text-xl font-bold">
                        {speaker.name}
                      </h1>
                      <p className="text-sm">{speaker.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
