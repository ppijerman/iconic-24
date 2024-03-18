import Image from "next/image";
import dicoMascot from "@/assets/dico.png";
import { Button } from "../ui/button";

export function CallToActionRegister() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-primary text-secondary">
      <Image
        src={dicoMascot}
        alt="Dico Mascot"
        width={200}
        height={200}
        className="pb-5"
      />
      <h1 className="text-6xl font-semibold">
        SEE THE FUTURE OF SUSTAINABILITY!
      </h1>
      <p className="text-3xl">
        <span className="text-3xl font-bold text-accent">DICO</span> will be
        waiting for you!
      </p>
      <Button className="mt-10 text-2xl">Register Now</Button>
    </section>
  );
}
