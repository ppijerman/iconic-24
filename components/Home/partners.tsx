import dicoLogo from "@/assets/dico.png";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function Partners() {
  const partners = [
    { name: "Google", logo: "/dico.png" },
    { name: "McKinsey", logo: "/lco.png" },
    { name: "MCO", logo: "/mco.png" },
    { name: "NCO", logo: "/nco.png" },
    { name: "PCO", logo: "/pco.png" },
  ];
  return (
    <section className="bg-secondary text-primary min-h-[600px] flex flex-col items-center justify-center p-10">
      <div className="flex flex-col items-center justify-center w-[80%]">
        <h1 className="text-5xl lg:text-7xl font-bold w-full p-4 text-center">
          PARTNERS OF ICONIC 2024
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-5">
        <div className="flex flex-row py-10 gap-20 w-full items-center justify-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-5 w-full"
            >
              <Image src={dicoLogo} alt={partner.name} className="w-12" />
              <h2 className="text-4xl font-semibold">{partner.name}</h2>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-center pt-14 w-[80%]">
          <div className="flex flex-col w-full p-5">
            <p className="text-xl">
              Our esteemed partners have been pivotal in shaping the Low Carbon
              Development Conference, driving forward sustainable solutions and
              innovations for a greener future.
            </p>
          </div>
          <div className="flex flex-col w-full justify-center gap-5 p-5">
            <h1 className="text-3xl">Interested in becoming a partner?</h1>
            <p className="text-xl">
              We are looking for partners to collaborate with us to change the
              future of development.
            </p>
            <Link href="/partnership">
              <Button
                variant="default"
                className="text-3xl text-primary bg-accent px-10 py-7 hover:bg-primary2 transition shadow-lg w-[300px]"
              >
                Help Dico.
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
