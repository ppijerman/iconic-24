import iconicMainLogo from "@/assets/logo-text-main.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-10">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="">
          <h1 className="text-7xl">ICONIC 2024</h1>
        </div>
        <div className="flex flex-col py-2">
          <h2 className="text-4xl font-semibold mt-4 mr-auto pb-5">
            Rethinking Development: Low Carbon, High Impact
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
          <Button
            variant="secondary"
            className="p-8 text-4xl font-semibold hover:bg-accent shadow-lg"
          >
            Register Now
          </Button>
          <Link href="/submit-abstract">
            <Button
              variant="secondary"
              className="p-8 text-4xl font-semibold hover:bg-accent shadow-lg"
            >
              Submit Your Abstract
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row mt-10 items-center justify-center w-full text-secondary">
        <div className="text-4xl w-full flex gap-5 items-center justify-center font-semibold">
          <h2>BRAUNSCHWEIG</h2>
          <h2>27 - 28 AUGUST 2024</h2>
        </div>
      </div>
    </main>
  );
}
