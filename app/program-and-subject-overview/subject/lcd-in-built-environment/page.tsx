import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TopicFour() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="w-[80%] pb-15 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">
          Low-Carbon Development in Built Environment
        </h1>
        <div className="my-10">
          <p className="mb-3">
            The built environment is the physical world that humans have created
            for themselves to live, work, and socialize in. It includes
            everything from the buildings we inhabit to the roads we travel on,
            the bridges we cross, the parks we relax in, and the public spaces
            where we gather. This environment is the result of human activity
            and encompasses elements of land management, territorial planning,
            design, and development that determine{" "}
            <span className="font-bold">
              the organization and function of rural areas, cities, and
              communities
            </span>
            .
          </p>
          <p className="mb-3">
            Do you know that making cement emits a lot of carbon dioxide? Yes,
            it is true. <span className="font-bold">Buildings</span>, which are
            a part of this environment,{" "}
            <span className="font-bold">contribute to carbon emissions</span>{" "}
            throughout their life cycle,{" "}
            <span className="font-bold">
              from construction, use, demolition, and disposal
            </span>
            . In Germany, 50% of its nation-wide waste material consists of
            demolished construction material.
          </p>
          <p className="mb-3">
            There are <span className="font-bold">four strategies</span> to
            eliminate embodied carbon or the carbon footprint of a building or
            infrastructure project over its entire life cycle, including both
            direct and indirect emissions:<br></br>• Build nothing <br></br>•
            Build less <br></br>• Build clever <br></br>• Build efficiently
          </p>
          <p className="mb-3">
            As a developing country, Indonesia grapples with the dual challenge
            of{" "}
            <span className="font-bold">
              sustaining economic growth while prioritizing the construction of
              public infrastructure
            </span>
            . However, incorporating low-carbon practices into the built
            environment poses a significant hurdle in this endeavor.
          </p>
          <p className="mb-3">
            Seems like we have got quite a journey ahead of us to achieve our
            dream of becoming a zero net country by 2060, doesn&apos;t it?
          </p>
          <p>
            Share your thoughts, insights, and ideas with us at ICONIC 2024!
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
          <li>Abrissmemoratorium Deutsche Architekturverband</li>
          <li>
            <a href="https://www.treehugger.com/" target="_blank">
              https://www.treehugger.com/
            </a>
          </li>
          <li>
            <a
              href="https://tgtxbackoffice.blob.core.windows.net/files/Decarbonising%20the%20built%20environment.pdf"
              target="_blank"
            >
              IET. (May 2023). Decarbonising the Built Environment: Guide for
              decision makers [PDF].
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
