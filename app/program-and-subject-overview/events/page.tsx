import dico from "@/assets/dico.png";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";

export const metadata = {
  title: APP_NAME + " | Events",
  description: "Learn more about the events of the conference",
};

export default function Page() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="w-[90%] md:w-[80%] pb-32 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">EVENTS</h1>
        <div className="my-16 flex flex-col gap-10">
          <div className="grid grid-cols-2 gap-5">
            <Card className="min-h-[200px]">
              <CardHeader>
                <h1 className="font-bold text-3xl text-secondary">
                  Biennial International Conference
                </h1>
              </CardHeader>
            </Card>
            <Card className="min-h-[200px]">
              <CardHeader>
                <h1 className="font-bold text-3xl text-secondary">
                  Ministerial Talk
                </h1>
              </CardHeader>
            </Card>
            <Card className="min-h-[200px]">
              <CardHeader>
                <h1 className="font-bold text-3xl text-secondary">
                  Plenary Sessions with Prominent Speakers
                </h1>
              </CardHeader>
            </Card>
            <Card className="min-h-[200px]">
              <CardHeader>
                <h1 className="font-bold text-3xl text-secondary">
                  Meet the Industry
                </h1>
              </CardHeader>
            </Card>
          </div>
          <p className="">
            Your event booklet will provide detailed schedules, speaker bios,
            session descriptions, profiles of companies participating in the
            &quot;Meet the Industry&quot; session, and other essential
            information to help you make the most out of your ICONIC 2024
            experience.
          </p>
          <p>Stay tuned for updates on how to access your event booklet!</p>
        </div>
      </div>
    </main>
  );
}
