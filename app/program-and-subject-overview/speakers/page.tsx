import imgPlaceholder from "@/assets/img-round-placeholder.png";
import Image from "next/image";
import Link from "next/link";

import { APP_NAME } from "@/lib/constants";
import { Speakers } from "@/lib/speakers";
import { PANELISTS } from "@/lib/speakers";

export const metadata = {
  title: APP_NAME + " | " + "Speakers",
  description: "Potential Speakers for the conference",
};

export default function SpeakersSection() {
  const speakersOpening = [
    Speakers.HAVAS,
    Speakers.BERNHARDT,
    Speakers.SEKAR,
    Speakers.AGNIA,
    Speakers.DESTI,
  ];

  const speakersMinisterial = [
    Speakers.HAVAS,
    Speakers.SVENJA,
    Speakers.SITI_NURBAYA,
  ];

  const speakersDecarbonizing = [
    Speakers.RACHMAT,
    Speakers.BIMO_KUSUMO,
    Speakers.BONDAN_SUSILO,
    Speakers.HERSTATT,
    Speakers.RYANZA,
  ];

  const speakersCarbonCapture = [
    Speakers.CANDRA_SUTAMA,
    Speakers.GIOVANNI_PRADIPTA,
    Speakers.SCHWEGLER,
  ];

  const speakersReducingEmissions = [
    Speakers.KLEINSCHMIT,
    Speakers.RUKKA,
    Speakers.GEORG,
  ];

  const speakersAdaptation = [
    Speakers.ARDHASENA_SOPAHELUWAKAN,
    Speakers.MYRNA_ASNAWATI,
    Speakers.SILVIA_BENEDITO,
    Speakers.PRABAHARYAKA,
    Speakers.BANDUNG_SAHARI,
  ];

  const speakersDecarbonization = [
    Speakers.GEORG_SCHILLER,
    Speakers.LIM_MASULIN,
    Speakers.MARKUS_EURING,
  ];

  const speakersGreenFinancing = [
    Speakers.TONNY,
    Speakers.ANTJE,
    Speakers.JOKO,
    Speakers.WEMPI_SAPUTRA,
  ];

  return (
    <section className="min-h-screen flex justify-center bg-white">
      <div className="w-[80%] pb-15 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">Speakers</h1>
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
              {speakersMinisterial.map((speaker, index) => (
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
              <span className="font-bold">Plenary Session</span> - Decarbonizing
              the Industrial and Transport Sectors
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 md:gap-8 px-2 md:px-5 py-10">
              {speakersDecarbonizing.map((speaker, index) => (
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
              <span className="font-bold">Plenary Session</span> - Carbon
              Capture, Storage, and Removal: A Pathway to Low Carbon Development
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
              <span className="font-bold">Plenary Session</span> - Reducing
              AFOLU Emissions: Balancing Development and Conservation
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
              <span className="font-bold">Plenary Session</span> - Adaptation
              and Mitigation in the Built Environment in a Heating Climate
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 md:gap-8 px-2 md:px-5 py-10">
              {speakersAdaptation.map((speaker, index) => (
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
              <span className="font-bold">Plenary Session</span> -
              Decarbonization and Circularity in the Construction Industry
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

          <div className="flex flex-col py-2">
            <h1 className="text-xl md:text-3xl px-3 border-b-2 border-secondary w-fit pb-2">
              <span className="font-bold">Meet The Industry</span> - Green
              Financing and Sustainable Investments for Low Carbon Development
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-8 px-2 md:px-5 py-10">
              {speakersGreenFinancing.map((speaker, index) => (
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
              <span className="font-bold">Parallel Conferences</span> - Conference Chairs
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-8 px-2 md:px-5 py-10">
              {PANELISTS.map((speaker, index) => (
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
    </section>
  );
}
