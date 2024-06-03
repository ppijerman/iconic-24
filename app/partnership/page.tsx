import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import dicoLogo from "@/assets/dico.png";
import { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";

import logoCBL from "@/assets/sponsors/Platinum_CBL_NoBG.png";
import logoUniGoe from "@/assets/sponsors/Platinum_University of Göttingen/GOE_Logo_Quer_IPC_Farbe_RGB.png";
import logoDW from "@/assets/sponsors/Platinum_DW.svg";
import logoKBRIBerlin from "@/assets/sponsors/Platinum_KBRI.jpeg";
import logoTreeo from "@/assets/sponsors/Platinum_Treeo.png";
import logoGIZ from "@/assets/sponsors/Platinum_GIZ/Platinum_giz.jpg";

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

export const metadata: Metadata = {
  title: APP_NAME + " | " + "Partnership",
  description: "Contact us for partnership",
};

const sponsors = [
  {
    name: "CBL",
    logo: logoCBL,
  },
  {
    name: "University of Göttingen",
    logo: logoUniGoe,
  },
  {
    name: "Deutsche Welle",
    logo: logoDW,
  },
  {
    name: "KBRI Berlin",
    logo: logoKBRIBerlin,
  },
  {
    name: "Treeo",
    logo: logoTreeo,
  },
  {
    name: "GIZ",
    logo: logoGIZ,
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
    name: "PPIDev",
    logo: logoDeventer,
  },
  {
    name: "Salinan Amerop",
    logo: logoAmerop,
  },
  {
    name: "RPD",
    logo: logoRPD,
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
    name: "Made Andi",
    logo: logoIGMadeAndi,
  },
];

export default function Component() {
  return (
    <main className="flex flex-col min-h-screen">
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
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl font-bold mb-8">Our Sponsors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {sponsors.map((partner) => (
              <div
                key={partner.name}
                className="flex justify-center items-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
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
                  width={200}
                  height={200}
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
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
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
        <div className="space-y-4 text-xl">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              className="bg-white text-black"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              className="bg-white text-black"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              className="bg-white text-black"
              placeholder="Enter your company"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              className="min-h-[120px] bg-white text-black"
              id="message"
              placeholder="Enter your message"
            />
          </div>
          <Button className="bg-white rounded-none hover:text-primary hover:bg-accent ring-secondary text-2xl font-bold px-10 py-7 ring-[1px]">
            Send message
          </Button>
        </div>
      </div>
    </main>
  );
}
