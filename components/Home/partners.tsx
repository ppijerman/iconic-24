import dicoLogo from "@/assets/dico.png";
import Image from "next/image";
import { Button } from "../ui/button";

export function Partners() {
  const partners = [
    { name: "DICO", logo: "/dico.png" },
    { name: "LCO", logo: "/lco.png" },
    { name: "MCO", logo: "/mco.png" },
    { name: "NCO", logo: "/nco.png" },
    { name: "PCO", logo: "/pco.png" },
  ];
  return (
    <section className="bg-secondary2 text-white min-h-[600px] flex items-center justify-center">
      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="text-7xl font-bold">PARTNERS OF ICONIC 2024</h1>
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
        <div className="flex flex-col gap-2 items-center pt-14">
          <h2 className="text-4xl">DICO needs help.</h2>
          <Button
            variant="default"
            className="text-4xl bg-white px-10 py-7 hover:bg-accent ring-2 ring-white border-white shadow-none text-secondary"
          >
            Help Dico.
          </Button>
        </div>
      </div>
    </section>
  );
}
