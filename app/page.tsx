import { HomePage } from "@/app/(home)/home";
import { Countdown } from "@/app/(home)/countdown";
import { IconicSchedule } from "@/app/(home)/schedule";
import { SpeakersSection } from "@/app/(home)/speakers";
import { CallToActionRegister } from "@/app/(home)/call-to-action";
import { Partners } from "@/app/(home)/partners";
import Introduction from "@/app/(home)/introduction";
import { IconicOutput } from "@/app/about/output-iconic";
import { StayInformation } from "@/app/(home)/during-the-stay-home";

export default function Home() {
  return (
    <main className="w-screen">
      <HomePage />
      <Countdown />
      <Introduction />
      <IconicSchedule />
      <SpeakersSection />
      <CallToActionRegister />
      <StayInformation />
      <Partners />
    </main>
  );
}
