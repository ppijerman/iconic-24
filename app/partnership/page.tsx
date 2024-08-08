import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import dicoLogo from "@/assets/dico.png";
import { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";

import logoPPIJ from "@/assets/PPIJ_Logo_Color.png";
import logoEcadin from "@/assets/sponsors/Knowledge_ECADIN.png";

import logoCBL from "@/assets/sponsors/Platinum_CBL_NoBG.png";
import logoUniGoe from "@/assets/sponsors/Platinum_University of Göttingen/GOE_Logo_Quer_IPC_Farbe_RGB.png";
import logoKBRIBerlin from "@/assets/sponsors/Platinum_KBRI.jpeg";
import logoTreeo from "@/assets/sponsors/Platinum_Treeo.png";
import logoAstra from "@/assets/sponsors/Platinum_Astra.png";
import logoQSI from "@/assets/sponsors/Platinum_QSI.png";
import logoKJRIFrankfurt from "@/assets/sponsors/Silver_KJRI.png";
import logoZinkPower from "@/assets/sponsors/Silver_Zinkpower.png";

import logoPPID from "@/assets/mediaPartner/PPID.png";
import logoIFSA from "@/assets/mediaPartner/IFSA.svg";
import logoGenauID from "@/assets/mediaPartner/Genau_Indonesia.png";
import logoLindungiHutan from "@/assets/mediaPartner/LindungiHutan.jpeg";
import logoDeventer from "@/assets/mediaPartner/PPIDev.png";
import logoAmerop from "@/assets/mediaPartner/Salinan Amerop.png";
import logoRPD from "@/assets/mediaPartner/logorpd.png";
import logoEnterNusantara from "@/assets/mediaPartner/EnterNusantara.png";
import logoDoctrineUK from "@/assets/mediaPartner/DoctrineUK.png";
import logoIGMadeAndi from "@/assets/mediaPartner/madeandi.png";
import logoDW from "@/assets/mediaPartner/logoDW.png";
import logoCase from "@/assets/mediaPartner/Case-Logo.png";
import logoBbbc from "@/assets/mediaPartner/Salinan logo-bbbbc.png";
import logoFapet from "@/assets/mediaPartner/Salinan Logo_FAPET_UNPAD.jpeg";

export const metadata: Metadata = {
  title: APP_NAME + " | " + "Partnership",
  description: "Contact us for partnership",
};

const sponsorsPlatinum = [
  {
    name: "KBRI Berlin",
    logo: logoKBRIBerlin,
  },
  {
    name: "Treeo",
    logo: logoTreeo,
  },
  {
    name: "Astra",
    logo: logoAstra,
  },
  {
    name: "University of Göttingen",
    logo: logoUniGoe,
  },
  {
    name: "CBL",
    logo: logoCBL,
  },
  {
    name: "QSI",
    logo: logoQSI,
  },
];

const sponsorsSilver = [
  {
    name: "KJRI Frankfurt",
    logo: logoKJRIFrankfurt,
  },
  {
    name: "Zink Power",
    logo: logoZinkPower,
  },
];

const mediaPartners = [
  {
    name: "PPID",
    logo: logoPPID,
  },
  {
    name: "IFSA",
    logo: logoIFSA,
  },
  {
    name: "Genau Indonesia",
    logo: logoGenauID,
  },
  {
    name: "Lindungi Hutan",
    logo: logoLindungiHutan,
  },
  {
    name: "BBBC",
    logo: logoBbbc,
  },
  {
    name: "FAPET UNPAD",
    logo: logoFapet,
  },
  {
    name: "Case",
    logo: logoCase,
  },
  {
    name: "PPIDev",
    logo: logoDeventer,
  },
  {
    name: "Deutsche Welle",
    logo: logoDW,
  },
  {
    name: "Salinan Amerop",
    logo: logoAmerop,
  },
  {
    name: "Enter Nusantara",
    logo: logoEnterNusantara,
  },
  {
    name: "Doctrine UK",
    logo: logoDoctrineUK,
  },
  {
    name: "RPD",
    logo: logoRPD,
  },
  {
    name: "Made Andi",
    logo: logoIGMadeAndi,
  },
];

export default function Component() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <header className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20 w-full">
        <div className="">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Valued Partners
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
              We are proud to collaborate with these organizations, academic
              institutions, and media outlets to bring you the best scientific
              conference.
            </p>
          </div>
        </div>
      </header>

      <div className="container flex flex-col gap-5 justify-center items-center text-justify max-w-6xl">
        <h2 className="text-4xl font-bold mt-8 r">Our Sponsors</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Becoming a sponsor for ICONIC 2024, a biennial international
          scientific conference in Germany by PPI Jerman, offers your company a
          prime opportunity to enhance its visibility on the international
          academic stage. ICONIC bridges Indonesia and Germany through
          discussions on sustainability and environmental awareness, engaging
          key decision-makers and industry leaders from academia, economics, and
          policymaking.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          By supporting ICONIC 2024, you can effectively reach your target
          audience, build meaningful connections, and demonstrate your
          commitment to sustainable solutions. Seize this chance to connect,
          influence, and lead towards a more inclusive and sustainable future.
        </p>
      </div>

      <section className="container mt-5 pt-10 md:py-10 divide-y-2 divide-grey-200">
        <div className="w-full pb-10 flex flex-col items-center gap-5">
          <div className="flex items-center justify-center gap-5">
            <Image
              width="50"
              height="50"
              src="https://img.icons8.com/ios/68/6b7280/hand-planting.png"
              alt="hand-planting"
              className="size-fit"
            />
            <h2 className="w-min sm:w-fit font-bold text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400">
              PLATINUM SPONSOR
            </h2>
          </div>
          <div className="w-full flex justify-center flex-wrap gap-7">
            {sponsorsPlatinum.map((partner) => (
              <div
                key={partner.name}
                className="flex justify-center items-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full pb-10 flex flex-col items-center gap-5">
          <div className="flex items-center justify-center gap-5 mt-5">
            <Image
              width="50"
              height="50"
              src="https://img.icons8.com/ios/68/F9C620/hand-planting.png"
              alt="hand-planting"
              className="size-fit"
            />
            <h2 className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400">
              GOLD SPONSOR
            </h2>
          </div>
          <div className="w-full flex justify-center flex-wrap gap-5 ">
            <p className="text-2xl">TO BE ANNOUNCED</p>
          </div>
        </div>
        <div className="w-full pb-10 flex flex-col items-center gap-5">
          <div className="flex items-center justify-center gap-5 mt-5">
            <Image
              width="50"
              height="50"
              src="https://img.icons8.com/ios/68/A1A1AA/hand-planting.png"
              alt="hand-planting"
              className="size-fit"
            />
            <h2 className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-200">
              SILVER SPONSOR
            </h2>
          </div>
          <div className="w-full flex justify-center flex-wrap gap-10">
            {sponsorsSilver.map((partner) => (
              <div
                key={partner.name}
                className="flex justify-center items-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={150}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container flex flex-col text-center justify-center items-center pb-12 md:pb-16 lg:pb-20">
        <div className="flex md:flex-row flex-col gap-5">
          <div className="sm:w-fit flex p-4 pe-0.5 justify-between items-center bg-primary2 rounded shadow-lg">
            <div className="text-sm md:text-base text-white text-left font-bold">
              <p>
                Hosted <br></br> by
              </p>
            </div>
            <Image
              src={logoPPIJ}
              alt="Logo PPIJ"
              className="max-w-20 md:max-w-40 lg:max-w-60"
            />
          </div>
          <div className="w-fit md:w-full flex gap-5 p-4 justify-between items-center bg-secondary rounded shadow-lg">
            <div className="text-sm md:text-base text-white text-left font-bold w-full">
              <p>
                Knowledge <br></br> Partner
              </p>
            </div>
            <Image
              src={logoEcadin}
              alt="Logo Ecadin"
              className="max-w-20 md:max-w-40 lg:max-w-60"
            />
          </div>
        </div>
      </section>
      <section className="px-10">
        <div className="container p-10 text-center rounded-xl">
          <h2 className="text-4xl font-bold mb-8">Our Media Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {mediaPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex justify-center items-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={150}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex flex-col container py-12 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row gap-5 py-5 justify-center md:justify-between items-center w-full">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">Contact us for partnership</h1>
            <p className="">
              Send an email to{" "}
              <a
                className="font-bold hover:text-accent"
                href="mailto:partnership@iconic.ppijerman.org"
              >
                partnership@iconic.ppijerman.org
              </a>{" "}
            </p>
          </div>
          <Image
            className="hidden md:block"
            src={dicoLogo}
            alt="Dico Logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    </main>
  );
}
