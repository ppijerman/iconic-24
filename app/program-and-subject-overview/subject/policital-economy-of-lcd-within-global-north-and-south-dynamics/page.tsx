import { Button } from "/components/ui/button";
import Link from "next/link";

export default function TopicTwo() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="w-[80%] pb-15 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">
          Policital Economy of Low-Carbon Development within Global North and
          South Dynamics
        </h1>
        <div className="my-10">
          <p className="mb-3">
            During the Earth Summit in Rio de Janeiro, 1992, the principle of
            “Common But Differentiated Responsibilities” was formalized. The
            principle emphasizes the{" "}
            <span className="font-bold">commonly shared obligation</span> in
            addressing climate change but{" "}
            <span className="font-bold">denying equal responsibilities</span> of
            all states in environmental protection.
          </p>
          <p className="mb-3">
            This is rooted from the fact that developed countries have the
            biggest historic greenhouse gasses emissions.{" "}
            <span className="font-bold">The US</span> contributes to{" "}
            <span className="font-bold">25%</span> of global cumulative
            emissions, while <span className="font-bold">EU-28</span>{" "}
            contributes to{" "}
            <span className="font-bold">22% global cumulative emissions</span>.
          </p>
          <p className="mb-3">
            The <span className="font-bold">distinction</span> between countries
            of the global north and south became{" "}
            <span className="font-bold">increasingly prominent</span> in the{" "}
            <span className="font-bold">Kyoto Protocol</span> (1997). <span className="font-bold">
            Industrialized nations were assigned emission reduction targets
            </span>
            , while <span className="font-bold">developing countries</span>{" "}
            participated in programs which{" "}
            <span className="font-bold">
              rely on financial and technological assistance
            </span>{" "}
            from these industrialized counterparts.
          </p>
          <p className="mb-3">
            However, the{" "}
            <span className="font-bold">
              "Common But Differentiated Responsibilities"
            </span>{" "}
            principle has faced criticism for its simplistic division between
            developed and developing nations. Developing countries, for
            instance, contribute approximately{" "}
            <span className="font-bold">44% to biodiversity loss</span>.
            Moreover, concerns have been raised about the{" "}
            <span className="font-bold">unfair economic advantage</span>{" "}
            afforded to developing countries, which are not subject to the same
            restrictions as the developed nations.
          </p>
          <p className="mb-3">
            In 2016, <span className="font-bold">the Paris Agreement</span>{" "}
            notably departed from the "Common But Differentiated
            Responsibilities" approach, allowing each nation to establish its{" "}
            <span className="font-bold">own national climate targets</span>{" "}
            based on the countries&apos; own circumstances. This shift prompted{" "}
            <span className="font-bold">Indonesia</span> to commit to{" "}
            <span className="font-bold">reduce emissions up to 29-41%</span>{" "}
            against the business-as-usual scenario by{" "}
            <span className="font-bold">2030</span>.
          </p>
          <p className="mb-3">
            Despite ongoing disputes, the "Common But Differentiated
            Responsibility" principle{" "}
            <span className="font-bold">remains relevant</span> in global
            climate governance today, particularly in light of the{" "}
            <span className="font-bold">economic impacts of COVID-19</span> and
            the <span className="font-bold">Russian-Ukrainian war</span> on
            developing countries.
          </p>
          <p className="mb-3">
            With the global economy in distress, developing nations are{" "}
            <span className="font-bold">under heightened pressure</span> to
            sustain economic growth, ensure food and energy security, and
            address humanitarian crises.
          </p>
          <p className="mb-3">
            Amidst these challenges,{" "}
            <span className="font-bold">structural economic inequalities</span>{" "}
            are widening, making it increasingly{" "}
            <span className="font-bold">difficult</span> to expect developing
            countries to{" "}
            <span className="font-bold">
              allocate additional financial resources
            </span>{" "}
            towards climate change adaptation and mitigation efforts.
          </p>
          <p className="mb-3">
            What's your take on this ongoing debate? Should developed
            nations financially support climate initiatives in developing
            countries? Or should developing nations independently tackle this
            issue?
          </p>
          <p>
            Share your thoughts, insights, and ideas with us at ICONIC
            2024!
          </p>
        </div>
        <Button
          asChild
          className="bg-accent text-white hover:bg-primary2 px-5 py-10 md:p-10 text-xl font-bold md:text-3xl shadow-lg"
        >
          <Link href="/submission">Submit Your Abstract</Link>
        </Button>
        <p className="mt-10 mb-1">Sources:</p>
        <ul class="list-disc">
          <li>
            <a href="https://doi.org/10.1111/1467-9388.00243" target="_blank">
              Rajamani, Lavanya. (2002). "The Principle of Common but
              Differentiated Responsibility and the Balance of Commitments under
              the Climate Regime". Review of European Community & International
              Environmental Law. 9, 2: 128–129.
            </a>
          </li>
          <li>
            <a
              href="https://ourworldindata.org/contributed-most-global-co2"
              target="_blank"
            >
              Ritchie, Hannah. (2019). Who has contributed most to global CO2
              emissions?.
            </a>
          </li>
          <li>
            <a
              href="https://doi.org/10.1016/j.ecolind.2022.109628"
              target="_blank"
            >
              Tomoi, Hiroaki., Ohsawa, T., Quevedo, J., Kohsaka, R. (2022). Is
              “Common But Differentiated Responsibilities” principle applicable
              in biodiversity? – Towards approaches for shared responsibilities
              based on updated capabilities and data. Ecological Indicators.
              145.
            </a>
          </li>
          <li>
            <a
              href="https://unfccc.int/resource/docs/convkp/conveng.pdf"
              target="_blank"
            >
              UNFCCC (retrieved 25 March 2024). United Nations Framework on
              Climate Change.
            </a>
          </li>
          <li>
            <a
              href="https://www.bsg.ox.ac.uk/blog/thirty-years-common-differentiated-responsibility-why-do-we-need-it-ever-more-today"
              target="_blank"
            >
              Zhang, Y., Zhang, C. (2022). Thirty years with common but
              differentiated responsibility, why do we need it ever more today?.
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
