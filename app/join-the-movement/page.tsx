import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import mangrove1 from "@/assets/fundraising/mangroove1.jpg";
import mangrove3 from "@/assets/fundraising/mangroove3.jpg";
import LindungiHutan from "@/assets/fundraising/lindungiHutan.png";
import map from "@/assets/fundraising/map.png";
import logo from "@/assets/logo-main-pr.png";
import {
  ArrowRightIcon,
  Cross1Icon,
  PersonIcon,
  Share1Icon,
  Share2Icon,
} from "@radix-ui/react-icons";
import { BiSolidDonateHeart } from "react-icons/bi";
import { CgCommunity } from "react-icons/cg";

export default function GofundmePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white">
      <main className="flex-1">
        <section className="w-full bg-[url('/gofundme/mangroove2.jpg')] bg-cover">
          <div className="w-full h-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-black/80">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
                <div className="flex flex-col gap-6">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-white drop-shadow-lg">
                    Let&apos;s Plant Mangroves along Indonesia&apos;s
                    Coastlines!
                  </h1>

                  <p className="max-w-[600px] text-primary md:text-xl ">
                    We are teaming up with{" "}
                    <a
                      className="transition duration-300 font-bold hover:text-accent"
                      href="https://lindungihutan.com/"
                    >
                      LindungiHutan
                    </a>{" "}
                    for a dual fundraising action that supports both rainforest
                    conservation and the impactful mission of ICONIC 2024. 🌿
                  </p>

                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      href="#donate-section"
                      className="flex items-center gap-5 w-fit hover:text-accent text-white transition duration-300 group"
                    >
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                        Join the Movement
                      </h1>
                      <ArrowRightIcon className="w-12 h-12" />
                    </Link>
                  </div>
                </div>
                {/* <Image
                src={mangrove2}
                alt="Fundraising"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              /> */}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <Image
                  src={map}
                  alt="Map"
                  className="mx-auto aspect-video overflow-hidden object-cover flex flex-col flex-none"
                />
                <p className="mt-2 pl-1 text-accent md:text-l font-semibold dark:text-gray-400">
                  <a href="https://www.google.com/maps/place/6%C2%B012'24.8%22S+107%C2%B046'47.9%22E/@-6.206883,107.779969,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-6.206883!4d107.779969?entry=ttu">
                    View Location on Google Maps
                  </a>
                </p>
              </div>
              <div className="flex flex-col flex-1">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
                  Ready to double the impact?
                </h2>
                <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                  ICONIC 2024, in partnership with LindungiHutan, invites you to
                  join us in our mission for environmental conservation and
                  low-carbon development in Indonesia. As we prepare for our
                  international conference, we&apos;re not just talking;
                  <span className="font-bold text-secondary">
                    {" "}
                    we&apos;re taking action
                  </span>
                  .
                </p>
                <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                  We are launching a campaign to plant trees in{" "}
                  <span className="font-bold text-accent">
                    Pasisir Pamanukan, West Java
                  </span>
                  . This area experienced severe flooding in 2012, 2014, and
                  2021 due to heavy rainfall and erosion.
                </p>
                <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                  Since 2023, LindungiHutan has been supporting mangrove
                  planting to enhance coastal resilience against erosion, as
                  part of climate change adaptation efforts.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
                  Indonesia&apos;s Coastline: A Vital Lifeline
                </h2>
                <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                  Indonesia boasts the world&apos;s longest coastline,
                  stretching{" "}
                  <span className="font-bold text-accent">
                    54,716 kilometers
                  </span>{" "}
                  (source:{" "}
                  <a href="https://www.cia.gov/the-world-factbook/countries/indonesia/">
                    CIA World Factbook
                  </a>
                  ). The country is an archipelago of over 17,000 islands, with
                  around 6,000 inhabited. Major islands include Sumatra, Java,
                  Kalimantan, Sulawesi, and Papua. Coastal communities in
                  Indonesia rely heavily on the sea for their daily livelihoods
                  through fishing, tourism, and trade.
                </p>
                <br></br>
                <h3 className="text-3xl font-bold tracking-tighter sm:text-2xl text-secondary">
                  How did the damage to the Pamanukan Coastal Area occur?
                </h3>
                <ul className="mt-4 text-gray-500 md:text-xl dark:text-gray-400 list-disc pl-7">
                  <li>
                    The construction of shrimp ponds without proper
                    environmental impact assessments.
                  </li>
                  <li>
                    Abandoned shrimp ponds that failed, leading to degraded and
                    erosion-prone landscapes.
                  </li>
                </ul>
              </div>
              <Image
                src={mangrove1}
                alt="Mangrove"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6 space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-secondary">
                How Mangrove Planting Helps
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">
                  Environmental Benefits
                </h3>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400 list-disc pl-5">
                  <li>Restoration of 7,000 hectares of damaged land.</li>
                  <li>
                    Protection of villages and homes from seawater flooding and
                    erosion.
                  </li>
                  <li>Enhanced biodiversity.</li>
                  <li>Increased carbon sequestration.</li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">
                  Economic Benefits for the Community
                </h3>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400 list-disc pl-5">
                  <li>Seedlings are purchased from local communities.</li>
                  <li>
                    Creation of job opportunities for locals during the planting
                    process.
                  </li>
                  <li>
                    Improved food sources for the community, including fish,
                    crabs, shrimp, and other crustaceans.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-secondary">
                  With your help, we are embarking on a dual mission:
                </h2>
                <ol
                  className="mt-4 text-gray-500 md:text-xl dark:text-gray-400"
                  style={{ listStyleType: "decimal", paddingLeft: "50px" }}
                >
                  <li className="font-bold text-secondary">
                    Supporting ICONIC 2024
                  </li>
                  <p style={{ paddingBottom: "5px" }}>
                    Your donations will make ICONIC 2024 an impactful
                    conference. By fostering dialogues and providing resources
                    for actionable strategies, your support will help us make a
                    real difference in the fight against climate change.
                  </p>
                  <li className="font-bold text-secondary">
                    Environmental Conservation in Indonesia
                  </li>
                  <p style={{ paddingBottom: "5px" }}>
                    Your contributions will enable us to invest in mangrove
                    reforestation efforts in Pasisir Pamanukan, West Java,
                    Indonesia. Your support will directly contribute to the
                    restoration and preservation of these invaluable coastal
                    forests, fostering a greener, more resilient future.
                  </p>
                </ol>
              </div>
              <div>
                <Image
                  src={mangrove3}
                  alt="Mangrove"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                />
                <p className="mt-2 text-secondary md:text-l font-semibold dark:text-gray-400 pl-2">
                  Mangrove Species: Rhizophora Mangroves{" "}
                  <a href="https://lindungihutan.com/blog/mengenal-bakau-hitam/">
                    <span className="text-primary2">Learn more</span>
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6 space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-secondary">
                How You Can Help
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Every contribution, big or small, brings us closer to our goals.
                Here&apos;s how you can get involved:
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-2 text-center">
                <div className="py-2">
                  <Share1Icon className="w-12 h-12 mx-auto" />
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-secondary">
                  Share
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Spread the word about our campaign! Share this page to your
                  friends and colleagues, and social networks and let&apos;s
                  amplify our impact together.
                </p>
              </div>
              <div className="space-y-2 text-center">
                <div className="py-2">
                  <BiSolidDonateHeart className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-secondary">
                  Donate
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Your financial support will directly contribute to the success
                  of ICONIC 2024 and our environmental conservation initiatives
                  in Indonesia.
                </p>
              </div>
              <div className="space-y-2 text-center">
                <div className="py-2">
                  <CgCommunity className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-secondary">
                  Engage
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Want to see for yourself what&apos;s going on? Share your
                  ideas on our page and join ICONIC in Göttingen from 4th to 6th
                  September 2024.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="donate-section"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-6 justify-center items-center text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-center max-w-[500px]">
                <Image
                  src={logo}
                  alt="Iconic Logo with Text"
                  className="mx-auto sm:w-[360px]"
                />
                <Image
                  src={LindungiHutan}
                  alt="Lindungi Hutan Logo"
                  className="mx-auto sm:w-[360px]"
                />
              </div>

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter sm:text-4xl text-secondary">
                Be a Hero for Our Coasts: Plant Mangroves Today!
              </h2>
              <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Every mangrove planted is a step toward a healthier, more
                resilient coastline. Your support helps preserve biodiversity
                and protect local communities. Click here to plant your mangrove
                and leave a green legacy.
              </p>
              <div className="grid grid-cols-2 gap-10 pt-6">
                <Button
                  asChild
                  className="bg-secondary h-10 text-white hover:bg-primary2 px-8 md:p-8 text-sm font-bold md:text-2xl shadow-lg"
                >
                  <Link href="https://gofund.me/15fc916e">Plant Now (€)</Link>
                </Button>
                <Button
                  asChild
                  className="bg-secondary h-10 text-white hover:bg-primary2 px-8 md:p-8 text-sm font-bold md:text-2xl shadow-lg"
                >
                  <Link href="https://lindungihutan.com/lets-plant-mangroves-along-indonesias-coastlines">
                    Plant Now (IDR)
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
