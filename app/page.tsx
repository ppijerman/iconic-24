import Image from "next/image";
// import { HomePage } from "@/components/Home/home";
// import { Countdown } from "@/components/Home/countdown";
// import { AboutPage } from "@/components/About/about";
// import { IconicSchedule } from "@/components/Home/schedule";
// import { SpeakersSection } from "@/components/Home/speakers";
// import { CallToActionRegister } from "@/components/Home/call-to-action";
import { LandingPage } from "@/components/landing-page";

export default function Home() {
  return (
    <main className="font-utile-display">
      {/* <HomePage />
      <Countdown />
      <IconicSchedule />
      <SpeakersSection /> */}
      <LandingPage />
    </main>
  );
}
