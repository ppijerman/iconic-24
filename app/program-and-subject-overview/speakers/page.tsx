import imgPlaceholder from "@/assets/img-round-placeholder.png";
import Image from "next/image";
import Link from "next/link";
// speakers
//00
import sriMulyani from "@/assets/speakers/Minister_SriMulyani.jpg";
import svenja from "@/assets/speakers/BMZ Schulze.jpeg";
import metin from "@/assets/speakers/President Uni Göttingen.jpeg";
import sekar from "@/assets/team/sekar.jpeg";
import antjeBiber from "@/assets/speakers/Biber.jpeg";

//01
import havas from "@/assets/speakers/Dubes_Havas.jpg";
import kristina from "@/assets/speakers/Kristina.jpeg";
import frank from "@/assets/speakers/Frank Bohnet.jpeg";

//02
import rukka from "@/assets/speakers/Rukka Sombolinggi.jpg";
import gary from "@/assets/speakers/Gary Dunning.jpeg";
import buchholz from "@/assets/speakers/Georg Buchholz.jpeg";

//03
import joko from "@/assets/speakers/Joko Tri Haryanto.jpeg";

//04
import rachmat from "@/assets/speakers/Rachmat Kaimuddin.png";
import stefan from "@/assets/speakers/Stefan Schlosser.jpeg";
import desti from "@/assets/speakers/Desti.webp";

//05
import mia from "@/assets/speakers/Mia Amalia.jpeg";
import francis from "@/assets/speakers/Francis Kere.webp";
import amy from "@/assets/speakers/Amy Oen.webp";

//06
import tonny from "@/assets/speakers/Tonny Wagey.jpeg";

import { APP_NAME } from "@/lib/constants";

export const metadata = {
  title: APP_NAME + " | " + "Potential Speakers",
  description: "Potential Speakers for the conference",
};

export default function SpeakersSection() {
  const speakersOpening = [
    {
      name: "Arif Havas Oegroseno",
      title: "Indonesian Ambassador for the Federal Republic of Germany",
      image: havas,
    },
    {
      name: "Prof. Dr. Metin Tolan",
      title: "President of the University of Göttingen",
      image: metin,
    },
    {
      name: "Sekar Yunita",
      title:
        "Director of ICONIC 2024, Doctoral Researcher Forest Economics and Sustainable Land Use Planning, Universität Göttingen",
      image: sekar,
    },
  ];

  const speakersFinance = [
    {
      name: "Sri Mulyani Indrawati, PhD.",
      title: "Finance Minister of the Republic of Indonesia",
      image: sriMulyani,
    },
    {
      name: "Svenja Schulze",
      title: "Development Minister of the Federal Republic of Germany",
      image: svenja,
    },
  ];

  const speakersDecarbonizationGlobalSouth = [
    {
      name: "Arif Havas Oegroseno",
      title: "Indonesian Ambassador for the Federal Republic of Germany",
      image: havas,
    },
    {
      name: "Prof. Dr. Kriztina Kis-Katos",
      title:
        "Professor for International Economic Policy, University of Göttingen",
      image: kristina,
    },
    {
      name: "Frank Bohnet",
      title:
        "Director of Development Finance East Asia and South-East Asia, KfW Development Bank",
      image: frank,
    },
  ];

  const speakersReducingEmissions = [
    {
      name: "Gary Dunning",
      title: "Executive Director, The Forests Dialogue",
      image: gary,
    },
    {
      name: "Rukka Sombolinggi",
      title:
        "Secretary General of Indonesian Archipelago Indigenous People Alliance (AMAN)",
      image: rukka,
    },
    {
      name: "Georg Buchholz",
      title: "Program Director, Forests and Climate Change Programme, GIZ",
      image: buchholz,
    },
  ];

  const speakersDecarbonization = [
    {
      name: "Dr. Joko Tri Haryanto",
      title:
        "Senior Researcher of Fiscal Policy Agency for Climate Change Financing and Multilateral Policy",
      image: joko,
    },
    {
      name: "Frank Bohnet",
      title:
        "Director of Development Finance East Asia and South-East Asia, KfW Development Bank",
      image: frank,
    },
    {
      name: "Tonny Wagey",
      title:
        "Executive Director of Indonesia Climate Change Trust Fund (ICCTF), Ministry of National Development Planning (BAPPENAS)",
      image: tonny,
    },
    {
      name: "Antje Biber",
      title: "Head of SDG Office, Feri Group",
      image: antjeBiber,
    },
  ];

  const speakersCarbonCapture = [
    {
      name: "Rachmat Kaimuddin",
      title:
        "Deputy Coordinating Minister of Maritime Affairs and Investments in Infrastructure and Transportation",
      image: rachmat,
    },
    {
      name: "Stefan Schlosser",
      title:
        "Managing Director of Deutscher Verband für Negative Emission (DVNE)",
      image: stefan,
    },
    {
      name: "Desti Alkano, Ph.D.",
      title: "CEO of Energy Academy Indonesia (ECADIN)",
      image: desti,
    },
  ];

  const speakersPerspectives = [
    {
      name: "Mia Amalia, Ph.D.",
      title:
        "Deputy of Planning and Land Management of Nusantara Authority (IKN, the New Capital City of Indonesia)",
      image: mia,
    },
    {
      name: "Prof. Francis Kéré",
      title:
        "Pritzker Price Awarded Architect and Professor of Architectural Design and Participation, Technical University of Munich",
      image: francis,
    },
    {
      name: "Dr. Amy Oen",
      title:
        "PHUSICOS Project Coordinator and Senior Researcher at the Norwegian Geotechnical Institute",
      image: amy,
    },
  ];

  return (
    <section className="min-h-screen flex justify-center bg-white">
      <div className="w-[80%] pb-15 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">Potential Speakers</h1>
        <div className="py-10 flex flex-col gap-5">
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
