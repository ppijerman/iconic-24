import { Button } from "@/components/ui/button";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export const metadata = {
  title: APP_NAME + " | Online Participant",
  description: "Frequently asked questions about the conference",
};

export default function OnlineParticipant() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="w-[80%] pb-15 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">ONLINE PARTICIPANT</h1>
        <div className="my-10">
          <p className="py-3">
            We warmly invite global attendees to participate in the ICONIC 2024
            International Conference virtually via Zoom. To ensure a seamless
            online experience, please complete your registration through the
            following link:
          </p>
          <Button
            asChild
            className="w-full bg-secondary text-white text-xl text-md md:w-auto mb-5 md:py-5 md:px-20 hover:bg-accent"
          >
            <Link href="/event-registration" >
              Register here!
            </Link>
          </Button>
          <p className="py-5">
            By registering, you&apos;ll receive access credentials sent directly
            to your email, enabling you to join our interactive sessions and
            connect with other virtual attendees. The link to access the Zoom
            conference will be emailed to you one week before the event begins.
            This will ensure you have ample time to prepare and test your setup,
            guaranteeing a smooth and engaging conference experience. Don&apos;t
            miss out on the opportunity to be part of ICONIC 2024 — register now
            and connect with thought leaders from around the world right from
            the comfort of your home or office!
          </p>
        </div>
      </div>
    </main>
  );
}
