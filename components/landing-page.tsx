import Image from "next/image";
import dicoMascot from "@/assets/dico.png";

export function LandingPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-secondary text-primary">
      <Image
        src={dicoMascot}
        alt="Dico Mascot"
        width={200}
        height={200}
        className="pb-5"
      />
      <h1 className="text-6xl">ICONIC 2024 Coming Soon!</h1>
      <p className="text-2xl">
        <span className="text-3xl font-bold">DICO</span> will be
        waiting for you!
      </p>
    </section>
  );
}
