import { HomePage } from "@/app/(home)/home";
import { IconicSchedule } from "@/app/(home)/schedule";
import { SpeakersSection } from "@/app/(home)/speakers";
import { CallToActionRegister } from "@/app/(home)/call-to-action";
import { Partners } from "@/app/(home)/partners";
import Introduction from "@/app/(home)/introduction";
import { StayInformation } from "@/app/(home)/during-the-stay-home";
import { ThemeOverview } from "./(home)/theme-overview";
import { DonationSection } from "./(home)/donation-section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

function IconicInNumbers() {
  const stats = [
    { label: "Mangrove Trees Planted", value: "1000" },
    { label: "Abstracts Submitted", value: "73" },
    { label: "IDR Raised", value: "25 Million" },
    { label: "Partners", value: "7" },
  ];
  return (
    <section className="flex flex-col justify-center items-center bg-secondary w-full py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center space-y-1 text-2xl md:text-4xl text-center p-3">
        <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-bold">
          ICONIC 2024
        </h2>
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          IN NUMBERS
        </h2>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:gap-12 xl:grid-cols-4 px-4">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950 md:min-h-[150px] lg:min-h-[200px] flex justify-center"
          >
            <div className="flex flex-col justify-center items-center w-full h-full">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-accent">
                {stat.value}
              </span>
              <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                {stat.label}
              </h3>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="w-screen">
      <HomePage />
      <IconicInNumbers />
      <Introduction />
      <ThemeOverview />
      <IconicSchedule />
      <SpeakersSection />
      <DonationSection />
      <CallToActionRegister />
      <StayInformation />
      <Partners />
    </main>
  );
}
