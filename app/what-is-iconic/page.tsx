import dico from "@/assets/dico.png";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col items-center font-utile-display">
      <div className="min-h-screen flex flex-col justify-center w-[80%]">
        <h1 className="py-10 font-bold text-7xl w-3/4">
          Empowering Global Progress: ICONIC 2024 – Bridging Indonesia and
          Germany Through Academic Excellence
        </h1>
        <p className="text-2xl">
          Join us to be at the{" "}
          <span className="font-bold">forefront of change</span>, accelerating
          our nation's path towards a{" "}
          <span className="font-bold">resilient</span> and{" "}
          <span className="font-bold">sustainable</span> green transition.
        </p>
      </div>
      <div className="flex flex-col w-full min-h-screen bg-white items-center">
        <h1 className="text-7xl pt-10">What is ICONIC?</h1>
        <h3 className="text-xl">
          International Conference for Integrated Intellectual Community
        </h3>
        <div className="flex flex-col md:flex-row justify-center w-full">
          <div className="p-10 w-full">
            <p className="text-xl text-justify">
              <span className="text-6xl">ICONIC</span> or the International
              Conference of Integrated Intellectual Community is a biennial
              international scientific conference in Germany that is initiated
              and held by PPI Jerman (Perhimpunan Pelajar Indonesia
              Jerman/Indonesische Studenten Vereinigung e.V) as a platform to
              act as an academic bridge between Indonesia and Germany,
              facilitated by Indonesia’s very own academia diaspora of
              high-spirited and motivated students currently pursuing their
              studies and research in Germany. PPI Jerman, as the initiator and
              organizer of ICONIC over the years, takes pride in being a student
              association dedicated to making positive contributions to
              Indonesian academia and the global stage. It upholds moral ideals
              that prioritize inclusivity and academic integrity, free from
              political compromises or interests that may hinder addressing real
              problems and concerns. ICONIC is launched by PPI Jerman as a
              concrete endeavor to advance Indonesia’s development on the global
              platform. It aims to facilitate knowledge exchange and serve as a
              nexus and multi-stakeholder hub connecting influential bodies
              across various fields like academia, economics, and policymaking,
              with the goal of shaping Indonesia’s development. The themes
              selected for previous and current ICONIC conferences center around
              sustainability and environmental awareness. They aim to facilitate
              discussions, share ideas, address issues, and propose solutions
              concerning global and national challenges, reflecting the
              responsibility of participating in the international community’s
              efforts to shape global progress towards a more inclusive and
              sustainable future with an enhanced quality of life for all
              citizens.
            </p>
          </div>
          <div className="p-10 w-full">
            <h1 className="text-4xl font-semibold">History of ICONIC</h1>
          </div>
        </div>
      </div>
      <div className="bg-secondary flex min-h-screen w-full text-primary flex-col items-center">
        <div className="font-bold pt-20 w-[80%]">
          <h1 className="text-4xl">INTRODUCING OUR THEME:</h1>
          <h1 className="text-7xl">Low-Carbon Development</h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 py-10">
            <div className="flex flex-col items-center justify-center w-[85%]">
              <h1 className="text-4xl py-3 min-h-[8rem] text-center">
                Addressing Climate Urgency
              </h1>
              <p>
                Low carbon development mitigates the impacts of climate change,
                crucial for Indonesia’s resilience against rising sea levels and
                natural disasters.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-[85%]">
              <h1 className="text-4xl py-3 min-h-[8rem] text-center">
                Sustainable Economic Growth
              </h1>
              <p className="">
                Transitioning to low carbon pathways ensures long-term economic
                stability by reducing dependency on fossil fuels and promoting
                renewable energy.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-[85%]">
              <h1 className="text-4xl py-3 min-h-[8rem] text-center">
                Global Responsibility
              </h1>
              <p className="">
                Embracing low carbon development aligns Indonesia with
                international commitments, contributing to global efforts in
                combating climate change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
