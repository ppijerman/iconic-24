import Image from "next/image";
import { HomePage } from "@/components/Home/home";
import { Countdown } from "@/components/Home/countdown";
import { AboutPage } from "@/components/About/about";
import { IconicSchedule } from "@/components/Home/schedule";
import { SpeakersSection } from "@/components/Home/speakers";

export default function Home() {
  return (
    <main className="font-utile-display">
      <HomePage />
      <Countdown />
      <IconicSchedule />
      <SpeakersSection />
    </main>
  );
}
