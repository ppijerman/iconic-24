import { HomePage } from "@/app/(home)/home";
import { Countdown } from "@/app/(home)/countdown";
import { IconicSchedule } from "@/app/(home)/schedule";
import { SpeakersSection } from "@/app/(home)/speakers";
import { CallToActionRegister } from "@/app/(home)/call-to-action";
import { Partners } from "@/app/(home)/partners";
import Introduction from "@/app/(home)/introduction";
import { StayInformation } from "@/app/(home)/during-the-stay-home";
import { ThemeOverview } from "./(home)/theme-overview";

export default function Home() {
  return (
    <main className="w-screen">
      <HomePage />
      <Countdown />
      <Introduction />
      <ThemeOverview />
      <IconicSchedule />
      <SpeakersSection />
      <CallToActionRegister />
      <StayInformation />
      <Partners />
    </main>
  );
}
