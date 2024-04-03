import dico from "@/assets/dico.png";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <Image src={dico} alt="Dico" width={200} height={200} className="p-10" />
      <h1 className="text-3xl md:text-5xl font-bold">Events</h1>
      <ul className="text-center text-2xl m-3">
        <li>Biennial International Conference</li>
        <li>Ministerial Talk</li>
        <li>Plenary Sessions with Prominent Speakers</li>
        <li>Meet the Industry</li>
      </ul>
      <h3 className="text-center">
        Your event booklet will provide detailed schedules, speaker bios,
        session descriptions, profiles of companies participating in the "Meet
        the Industry" session, and other essential information to help you make
        the most out of your ICONIC 2024 experience. Stay tuned for updates on
        how to access your event booklet!
      </h3>
    </main>
  );
}
