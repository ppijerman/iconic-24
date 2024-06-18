import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import mangrove from "@/assets/fundraising/mangrove.jpg"
import mangrove2 from "@/assets/fundraising/mangrove222.png"
import map from "@/assets/fundraising/map.png"
import logo from "@/assets/logo-main-pr.png"

export default function GoFundMe() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none" style={{ color: '#0F4C32' }}>
                    Let&apos;s Plant Mangroves along Indonesia&apos;s Coastlines!
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                We are teaming up with <a className="transition duration-300 text-[#146643] font-bold hover:text-[#F36F02]" href="https://lindungihutan.com/">
                LindungiHutan</a> for a dual fundraising action that supports both rainforest conservation and the impactful mission of ICONIC 2024. 🌿 
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="https://gofund.me/15fc916e"
                    className="inline-flex h-10 items-center justify-center rounded-md border 
                            border-gray-200 border-gray-200 bg-[#0F4C32] px-8 text-sm font-medium shadow-sm 
                            transition-colors hover:bg-[#218a5d] hover:text-gray-900 focus-visible:outline-none 
                            focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none 
                            disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 
                            dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                    style={{ color: 'white' }}
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
              <Image
                src={mangrove}
                alt="Fundraising"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
                src={map}
                alt="Map"
                className="mx-auto aspect-video overflow-hidden object-cover flex flex-col flex-none"
            />
            <div className="flex flex-col flex-1">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" style={{ color: '#0F4C32' }}>Ready to double the impact?</h2>
                <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                    ICONIC 2024, in partnership with LindungiHutan, invites you to join us in our mission 
                    for environmental conservation and low-carbon development in Indonesia. 
                    As we prepare for our international conference, we&apos;re not just talking; 
                    <span className="font-bold text-[#146643]"> we&apos;re taking action</span>.
                </p>
                <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                    We are launching a campaign to plant trees in <span className="font-bold text-[#F36F02]">Pasisir Pamanukan, West Java</span>. 
                    This area experienced severe flooding in 2012, 2014, and 2021 due to heavy rainfall and erosion. 
                </p>
                <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                Since 2023, LindungiHutan has been supporting mangrove planting to enhance coastal resilience 
                against erosion, as part of climate change adaptation efforts.
                </p>
            </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" style={{ color: '#0F4C32' }}>With your help, we are embarking on a dual mission:</h2>
                <ol className="mt-4 text-gray-500 md:text-xl dark:text-gray-400" style={{ listStyleType: 'decimal', paddingLeft: '50px'}}>
                    <li className="font-bold" style={{ color: '#0F4C32' }}>Supporting ICONIC 2024</li>
                    <p style={{paddingBottom: '5px'}}>
                        Your donations will make ICONIC 2024 an impactful conference. 
                        By fostering dialogues and providing resources for actionable strategies, 
                        your support will help us make a real difference in the fight against climate change.
                    </p>
                    <li className="font-bold" style={{ color: '#0F4C32' }}>Environmental Conservation in Indonesia</li>
                    <p style={{paddingBottom: '5px'}}>
                        Your contributions will enable us to invest in mangrove reforestation efforts in 
                        Pasisir Pamanukan, West Java, Indonesia. Your support will directly contribute to the 
                        restoration and preservation of these invaluable coastal forests, fostering a greener, 
                        more resilient future.
                    </p>
                </ol>
              </div>
              <Image
                src={mangrove2}
                alt="Mangrove"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6 space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" style={{ color: '#0F4C32' }}>How You Can Help</h2>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Every contribution, big or small, brings us closer to our goals. Here&apos;s how you can get involved:
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold" style={{ color: '#0F4C32' }}>Share</h3>
                <p className="text-gray-500 dark:text-gray-400">
                Spread the word about our campaign! Share this page to your friends and colleagues, 
                and social networks and let&apos;s amplify our impact together.
                </p>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold" style={{ color: '#0F4C32' }}>Donate</h3>
                <p className="text-gray-500 dark:text-gray-400">
                Your financial support will directly contribute to the success of ICONIC 2024 and 
                our environmental conservation initiatives in Indonesia.
                </p>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold" style={{ color: '#0F4C32' }}>Engage</h3>
                <p className="text-gray-500 dark:text-gray-400">
                Want to see for yourself what&apos;s going on? 
                Share your ideas on our page and join ICONIC in Göttingen from 4th to 6th September 2024.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
            <Image
                src={logo}
                alt="Dico"
                className="mx-auto sm:w-[360px] mb-5"
              />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" style={{ color: '#0F4C32' }}>Donate Now to Support Our Cause</h2>
              <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Join us in saving the planet, one tree at a time!
              </p>
              <div className="mx-auto max-w-md space-y-2 ">
                
              <Link
                    href="https://gofund.me/15fc916e"
                    className="inline-flex h-10 items-center justify-center rounded-md border 
                            border-gray-200 border-gray-200 bg-[#0F4C32] px-8 text-sm font-medium shadow-sm 
                            transition-colors hover:bg-[#218a5d] hover:text-gray-900 focus-visible:outline-none 
                            focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none 
                            disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 
                            dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                    style={{ color: 'white' }}
                  >
                    Donate Now
                  </Link>
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}