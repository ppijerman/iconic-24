import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TopicOne() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="w-[80%] pb-15 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">
          Economic and Social Implication of Low-Carbon Development
        </h1>
        <div className="my-10">
          <p className="mb-3">
            Shifting from a high-carbon to a low-carbon development implies
            growing the economy in an environmentally sustainable way and a
            radical change to the old fashions of our lifestyle. While
            low-carbon development brings about positive changes, it also brings
            some{" "}
            <span className="font-bold">
              unexpected economic and social challenges
            </span>{" "}
            right to our doorstep. How is this possible?
          </p>
          <p className="mb-3">
            Because the implementation of Low-Carbon Development remains{" "}
            <span className="font-bold">expensive</span>.
          </p>
          <p className="mb-3">
            Transitioning towards a Low-Carbon Development holds immense
            potential for{" "}
            <span className="font-bold">
              reshaping Indonesia&apos;s economic landscape
            </span>
            . As a leading exporter of palm oil and coal, both closely
            associated with deforestation, Indonesia faces{" "}
            <span className="font-bold">a critical challenge</span>. The nation
            has committed to halting deforestation and attaining{" "}
            <span className="font-bold">carbon neutrality</span> in the
            land-based sector by 2030. However, this transition would come with{" "}
            <span className="font-bold">complexities</span>, as{" "}
            <span className="font-bold">palm oil production</span> currently
            contributes{" "}
            <span className="font-bold">4.5% to Indonesia&apos;s GDP</span> and
            provides employment for{" "}
            <span className="font-bold">3 million individuals</span>. Similarly,
            coal extraction plays a significant role, accounting for{" "}
            <span className="font-bold">3.6% of Indonesia&apos;s GDP</span>.
          </p>
          <p className="mb-3">
            Furthermore, low-carbon development cannot be discussed without
            addressing <span className="font-bold">renewable energy</span>.
            Currently, approximately <span className="font-bold">93%</span> of
            Indonesia&apos;s energy supply is derived from{" "}
            <span className="font-bold">fossil fuels</span>, primarily coal
            (43%), oil (31%), and gas (19%). To meet the Renewable Energy Target
            (RET) of 23% by 2025, a significant investment of around{" "}
            <span className="font-bold">IDR 1.6 trillion</span>, equivalent to
            approximately $120 billion (
            <span className="font-bold">
              which represents 76% of the Indonesian government spending in 2016
            </span>
            ), will be <span className="font-bold">required</span>.
          </p>
          <p className="mb-3">
            Many developing countries, including Indonesia, face{" "}
            <span className="font-bold">significant financial challenges</span>{" "}
            when it comes to implementation of low-carbon development. To bridge
            the <span className="font-bold">climate financing gap</span>, one
            proposed solution is to{" "}
            <span className="font-bold">increase the tax base</span> to raise
            funds from public sources. However, this strategy may also trigger
            shifts in <span className="font-bold">land and housing prices</span>
            , alter returns on labor, capital, and resources, and cause{" "}
            <span className="font-bold">
              fluctuations in supermarket prices for everyday goods
            </span>
            .
          </p>
          <p className="mb-3">
            With this background in mind, do you have any{" "}
            <span className="font-bold">deeper insights</span> or{" "}
            <span className="font-bold">potential solutions to offer</span> for
            addressing this issue?
          </p>
          <p>Share your thoughts with us at ICONIC 2024!</p>
        </div>
        <Button
          asChild
          className="bg-accent text-white hover:bg-primary2 px-5 py-10 md:p-10 text-xl font-bold md:text-3xl shadow-lg"
        >
          <Link href="/submission">Submit Your Abstract</Link>
        </Button>
        <p className="mt-10 mb-1">Sources:</p>
        <ul className="list-disc">
          <li>
            <a
              href="https://www.adb.org/publications/transition-from-coals-to-renewable-energy-evidence-from-indonesia"
              target="_blank"
            >
              Asian Development Bank Institute (2023), Transitions From Coals to
              Renewable Energy: Evidence From Indonesia.
            </a>
          </li>
          <li>
            <a
              href="https://www.mckinsey.com/capabilities/sustainability/our-insights/solving-the-climate-finance-equation-for-developing-countries"
              target="_blank"
            >
              McKinsey (2023), Solving the climate finance equation for
              developing countries.
            </a>
          </li>
          <li>
            <a
              href="https://www.worldbank.org/en/country/indonesia/publication/indonesia-country-climate-and-development-report"
              target="_blank"
            >
              World Bank (2023), Indonesia Country Climate and Development
              Report.
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
