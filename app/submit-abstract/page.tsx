import dico from "@/assets/dico.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  const guidelines = [
    {
      title: "Abstract Title",
      description:
        "Your abstract should have a concise and descriptive title that reflects the content of your research. The title must not exceed 20 words.",
    },
    {
      title: "Authors and Affiliations",
      description:
        "Include the names of all authors and their affiliations (institution, department, city, country) below the abstract.",
    },
    {
      title: "Abstract",
      description:
        "Abstracts need to be informative and serve as a comprehensive scientific reference even for readers who did not attend the conference. They should succinctly outline the basic approach (including the problem and hypothesis), methodological framework, key findings, and conclude with final remarks. The abstract should not exceed approximately 250 words excluding spaces. ",
    },
  ];

  return (
    <main className="min-h-screen bg-secondary flex flex-col items-center justify-center text-primary w-full">
      <div className="w-[80%] text-2xl flex flex-col items-center justify-center">
        <div className="py-10 flex flex-col items-center justify-center w-full">
          <div className="flex flex-row gap-10 items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold">Abstract Submission</h1>
          </div>

          <h1 className="text-4xl font-semibold w-full pt-10 mb-5">
            Submission Guidelines
          </h1>
          <div className="py-10 my-10 h-[300px] md:h-[100px] flex flex-row items-center gap-5 justify-center bg-accent2 w-full text-white  rounded-md">
            <Image src={dico} alt="dico logo iconic" width={150} height={50} />
            <h1 className="text-2xl">
              Please read the{" "}
              <span className="text-3xl font-bold">submission guidelines</span>{" "}
              below for the abstract submission.
            </h1>
          </div>
          {guidelines.map((guideline) => (
            <div key={guideline.title} className="w-full">
              <h2 className="text-2xl font-semibold pt-10 pb-3">
                {guideline.title}
              </h2>
              <p className="text-xl">{guideline.description}</p>
            </div>
          ))}
          <div className="w-full">
            <p className="text-xl py-3">
              Abstracts should be written in{" "}
              <span className="font-bold">English</span>, including oral
              presentations and posters. Following the introduction (which does
              not have its own subheading), the subsequent sections—, Methods,
              Results, and Conclusions—should be presented in separate
              paragraphs.
            </p>
            <p className="py-3 text-xl">
              Abbreviations of materials or other measured quantities which are
              of major importance to the abstract’s content, or abbreviations
              which are familiar to few experts only, must be explained.
            </p>
            <p className="py-3 text-left text-xl">
              Keywords should not exceed approximately 5 words, separated by
              semicolons.
            </p>
            <p className="py-3 text-xl">
              Submitted abstracts will be assessed by the chairman based on
              expert opinion for acceptance. Authors will be notified promptly
              if revisions are necessary or if their submissions cannot be
              accepted. Accepted short contributions will be published in the
              conference proceedings.
            </p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold pt-10 pb-4">
              Focus of Study
            </h1>
            <p className="text-xl">
              Choose the relevant focus of study for your abstract from the
              following options:
            </p>
            <ul className="list-decimal list-inside py-2 text-xl">
              <li>Economic and Social Implications of LCD</li>
              <li>Technological Innovation for LCD</li>
              <li>
                Policital Economy of LCD within Global North and Global South
                Dynamics
              </li>
              <li>LCD of the Built Environment</li>
            </ul>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold pt-10 pb-4">
              Type of Presentation
            </h1>
            <p className="text-xl">
              Specify the preferred type of presentation (e.g.,{" "}
              <span className="font-semibold">
                oral presentation, poster presentation
              </span>
              ) along with your abstract submission. Authors can indicate their
              preferred section and presentation type (
              <span className="font-semibold">oral/poster</span>
              ), which will be considered when organizing the conference
              program, although there may be exceptions to these preferences.
            </p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold pt-10 pb-4">
              Permission of Publication
            </h1>
            <p className="text-xl">
              By submitting an abstract, authors grant permission for the
              abstract to be published in the conference proceedings.
            </p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold pt-10 pb-4">
              Approval of Author(s)
            </h1>
            <p className="text-xl">
              Ensure that all authors have read and approved the final version
              of the abstract before submission.
            </p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold pt-10 pb-4">
              Process of Abstract Submission
            </h1>
            <p className="text-xl">
              Abstract submission will be facilitated solely through the Oxford
              Abstract System. Authors must register as an author via{" "}
              <span className="text-accent">
                <a href="https://app.oxfordabstracts.com">Oxford Abstracts</a>
              </span>{" "}
              and carefully follow the provided instructions for inputting
              author details and abstract content. Submit your abstract via the
              conference&apos;s{" "}
              <span className="text-accent">
                <a href="https://app.oxfordabstracts.com/stages/41029/submitter">
                  online submission portal{" "}
                </a>
              </span>{" "}
              before the deadline. Ensure that all guidelines are followed to
              facilitate the review process.
            </p>
          </div>
        </div>
        <div className="h-[200px] flex flex-col w-full items-center justify-center">
          <Button
            variant="outline"
            className="ring-2 ring-primary bg-secondary hover:bg-accent2 hover:text-primary py-8 px-12 text-3xl"
          >
            Submit
          </Button>
        </div>
      </div>
    </main>
  );
}
