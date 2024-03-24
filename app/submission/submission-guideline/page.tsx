"use client";

import dico from "@/assets/dico.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (isAgreed) {
      // Navigating to the link when the form is submitted and the checkbox is checked
      window.open("https://ppij.org/ICONIC2024SubmissionPortal", "_blank");
    }
  };
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
    <main className="flex flex-col bg-secondary text-primary items-center">
      <div className="w-[80%] text-2xl flex flex-col items-center justify-center">
        <div className="py-10 flex flex-col items-center justify-center w-full border-b-2">
          <div className="flex flex-row gap-10 items-center justify-center">
            <h1 className="text-3xl md:text-6xl font-bold">
              Abstract Submission
            </h1>
          </div>

          <div className="py-10 my-10 h-[300px] md:h-[100px] flex flex-row items-center gap-5 justify-center bg-accent w-full text-white  rounded-md">
            <Image src={dico} alt="dico logo iconic" width={150} height={50} />
            <h1 className="text-2xl">
              Please read the{" "}
              <span className="text-3xl font-bold">submission guidelines</span>{" "}
              below for the abstract submission.
            </h1>
          </div>
          <div className="flex flex-col py-10 w-full border-b-2 gap-10">
            <h1 className="text-4xl font-semibold w-full pt-14 mb-5 text-center">
              Registration Guidelines
            </h1>
            <p className="w-full">
              Before proceeding, make sure you are already registered as an
              author via the Oxford Portals. If not, please register as an
              author below.
            </p>
            <Button className="w-full text-primary bg-accent hover:bg-primary hover:text-secondary py-8 px-12 text-3xl">
              Register as an Author
            </Button>
          </div>
          <h1 className="text-4xl font-semibold w-full pt-14 mb-5 text-center">
            Submission Guidelines
          </h1>
          {guidelines.map((guideline, index) => (
            <div key={index} className="w-full">
              <h2 className="text-2xl font-semibold pt-10 pb-3">
                {`${index + 1}. ${guideline.title}`}
              </h2>
              <p className="text-lg">{guideline.description}</p>
            </div>
          ))}
          <div className="w-full">
            <p className="text-lg py-3">
              Abstracts should be written in{" "}
              <span className="font-bold">English</span>, including oral
              presentations and posters. Following the introduction (which does
              not have its own subheading), the subsequent sections—, Methods,
              Results, and Conclusions—should be presented in separate
              paragraphs.
            </p>
            <p className="py-3 text-lg">
              Abbreviations of materials or other measured quantities which are
              of major importance to the abstract’s content, or abbreviations
              which are familiar to few experts only, must be explained.
            </p>
            <p className="py-3 text-left text-lg">
              Keywords should not exceed approximately 5 words, separated by
              semicolons.
            </p>
            <p className="py-3 text-lg">
              Submitted abstracts will be assessed by the chairman based on
              expert opinion for acceptance. Authors will be notified promptly
              if revisions are necessary or if their submissions cannot be
              accepted. Accepted short contributions will be published in the
              conference proceedings.
            </p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold pt-10 pb-4">
              4. Focus of Study
            </h1>
            <p className="text-lg">
              Choose the relevant focus of study for your abstract from the
              following options:
            </p>
            <ul className="list-decimal list-inside py-2 text-lg">
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
              5. Type of Presentation
            </h1>
            <p className="text-lg">
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
              6. Permission of Publication
            </h1>
            <p className="text-lg">
              By submitting an abstract, authors grant permission for the
              abstract to be published in the conference proceedings.
            </p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold pt-10 pb-4">
              7. Approval of Author(s)
            </h1>
            <p className="text-lg">
              Ensure that all authors have read and approved the final version
              of the abstract before submission.
            </p>
          </div>
          <div className="w-full"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="items-top flex space-x-2 w-full py-10 justify-center">
            <Checkbox
              id="terms1"
              checked={isAgreed}
              onChange={handleCheckboxChange}
            />
            <div className="grid gap-1.5 leading-snug">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                onClick={handleCheckboxChange}
              >
                Agree to the Abstract Submission Guidelines of ICONIC 2024.
              </label>
              <p className="text-sm w-[70%]">
                By checking this box, I acknowledge that I have read and agree
                to the Abstract Submission Guidelines of ICONIC 2024. I
                understand that adherence to these guidelines is mandatory for
                participation in the conference. I hereby commit to abide by
                these guidelines, acknowledging that any violation may result in
                disqualification from the event.
              </p>
            </div>
          </div>
          <div className="h-[200px] flex flex-col w-full items-center justify-center">
            <Button
              variant="outline"
              disabled={!isAgreed}
              type="submit"
              className="border-none w-full bg-accent hover:bg-primary hover:text-secondary py-8 px-12 text-3xl"
            >
              <Link href="https://ppij.org/ICONIC2024SubmissionPortal">
                Submit Abstract
              </Link>
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
