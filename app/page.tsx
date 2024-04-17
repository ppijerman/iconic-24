import { HomePage } from "@/components/Home/home";
import { Countdown } from "@/components/Home/countdown";
import { IconicSchedule } from "@/components/Home/schedule";
import { SpeakersSection } from "@/components/Home/speakers";
import { CallToActionRegister } from "@/components/Home/call-to-action";
import { Partners } from "@/components/Home/partners";
import Introduction from "@/components/Home/introduction";
import { IconicOutput } from "@/components/Home/output-iconic";

export default function Home() {
  return (
    <main className="w-screen">
      <HomePage />
      <Countdown />
      <Introduction />
      <IconicOutput />
      <IconicSchedule />
      <SpeakersSection />
      <CallToActionRegister />
      <Partners />
    </main>
  );
}
