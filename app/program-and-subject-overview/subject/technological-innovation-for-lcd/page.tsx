import { Button } from "/components/ui/button";
import Link from "next/link";

export default function TopicThree() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="w-[80%] pb-15 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">
          Technological Innovation for Low-Carbon Development
        </h1>
        <div className="my-10">
          <p className="mb-5">
            &quot;<span className="italic">To build collective prosperity, we need to prioritize
            innovation and cut carbon emission</span>&quot; &minus;{" "}
            <span className="font-bold">
              Jean-Pascal Tricoire, CEO, Schneider Electric
            </span>
            .
          </p>
          <p className="mb-3">
            As we move towards cleaner energy and sustainability,{" "}
            <span className="font-bold">
              new technologies are extremely important
            </span>
            . They help us to use{" "}
            <span className="font-bold">less fossil fuels</span>,{" "}
            <span className="font-bold">save energy</span> and{" "}
            <span className="font-bold">support sustainable practices</span> in
            various sectors such as industry and transport. 
          </p>
          <p className="mb-3">
            These technologies need to be something that can be used everywhere,{" "}
            <span className="font-bold">
              from high-income countries to developing countries
            </span>
            . In this way, we can accelerate our efforts to limit global warming
            and stay within the 1.5 to 2.0 degrees Celsius target set by the
            Paris Agreement.
          </p>
          <p className="mb-3">
            In Indonesia, technology poses{" "}
            <span className="font-bold">a major challenge</span> in achieving
            low-carbon development (Sambodo et al., 2022). Despite being one of
            <span className="font-bold">
              the biggest importers of low-carbon technology
            </span>{" "}
            in the global south (Pigato et al., 2020),{" "}
            <span className="font-bold">
              integrating technology isn't straightforward
            </span>
            . It demands various capabilities across{" "}
            <span className="font-bold">
              human resources, organizations, institutions, infrastructure, and
              finances
            </span>
            . Despite the difficulties, Indonesia must address these obstacles
            to build the capacity needed to innovate new technologies.
          </p>
          <p className="mb-3">
            Effective technology transfer goes{" "}
            <span className="font-bold">
              beyond simply providing physical equipment
            </span>{" "}
            such as solar panels and wind turbines. It also involves sharing the
            technical knowledge and skills required to understand, operate, and
            upkeep these new technologies. Additionally, it
            <span className="font-bold">
              requires creating institutional and policy structures
            </span>{" "}
            that facilitate their adoption and encourage local innovation. 
          </p>
          <p className="mb-3">
            Consequently, the <span className="font-bold">transfer of Low-Carbon Technologies</span> (LCT) is an
            ongoing process that involves <span className="font-bold">learning and collaborative efforts</span>.
            The sustainability of this process relies on the ability to deploy,
            operate, maintain, adapt, improve, and replicate the transferred
            technology, ultimately fostering the capacity to innovate new
            technologies (Pigato et al., 2020).
          </p>
          <p className="mb-3">
            So, in regards to technology innovation, do you have suggestions to help Indonesia in achieving net zero emissions by 2060?
          </p>
          <p>
            Share your ideas with us at ICONIC 2024!
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
            <a href="https://unfccc.int/process-and-meetings/the-paris-agreement" target="_blank">
              United Nations Framework Convention on Climate Change. (Retrieved 25/03/2024). The Paris Agreement. 
            </a>
          </li>
          <li>
            <a
              href="https://www.worldbank.org/en/topic/macroeconomics/publication/technology-transfer-and-innovation-for-low-carbon-development"
              target="_blank"
            >
              Pigato, M., Black, S., Dussaux, D., Mao, Z., McKenna, M., Rafaty, R., Touboul, S., 2020. Technology Transfer and Innovation for Low-Carbon Development. The World Bank. 
            </a>
          </li>
          <li>
            <a
              href="https://www.cell.com/heliyon/fulltext/S2405-8440(22)00592-8?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2405844022005928%3Fshowall%3Dtrue"
              target="_blank"
            >
              Sambodo, M.T., Yuliana, C.I., Hidayat, S., Novandra, R., Handoyo, F.W., Farandy, A.R., Inayah, I., Yuniarti, P.I., 2022. Breaking barriers to low-carbon development in Indonesia: deployment of renewable energy. Heliyon 8, e09304. 
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
