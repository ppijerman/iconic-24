import dico from "@/assets/dico.png";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <Image src={dico} alt="Dico" width={200} height={200} className="p-10"/>
      <h1 className="text-3xl md:text-5xl font-bold">Speakers</h1>
      <h1 className="text-3xl md:text-5xl font-bold">TBA June 2024</h1>
    </main>
  );
}
