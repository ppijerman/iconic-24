import iconicMainLogo from "@/assets/logo-text-main.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-10">
      <div className="w-3/4">
        <Image src={iconicMainLogo} alt="Iconic Logo" />
      </div>
      <div className="flex flex-row justify-between items-center w-[90%]">
        <div className="flex flex-col py-2">
          <h1 className="text-6xl font-bold">CONFERENCE 2024</h1>
          <h2 className="text-3xl font-semibold mt-4">
            Transformation for low-carbon development
          </h2>
        </div>
        <div className="flex flex-row gap-10">
          <Button
            variant="secondary"
            className="p-8 text-4xl font-semibold hover:bg-accent shadow-lg"
          >
            Register Now
          </Button>
          <Button
            variant="secondary"
            className="p-8 text-4xl font-semibold hover:bg-accent shadow-lg"
          >
            Submit Your Abstract
          </Button>
        </div>
      </div>
      <div className="flex flex-row mt-10 items-center justify-center gap-20 w-fit py-5 rounded-md text-secondary">
        <div className="flex flex-col gap-2 text-2xl">
          <h3>9.00 AM - 5.00 PM</h3>
          <h3>August 27th - August 28th 2024</h3>
        </div>
        <div>
          <h2 className="text-3xl font-semibold hover:bg-secondary hover:text-primary transition p-2 cursor-pointer">
            Braunschweig, Germany
          </h2>
        </div>
      </div>
    </main>
  );
}
