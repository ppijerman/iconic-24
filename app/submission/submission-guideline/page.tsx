"use client";

import dico from "@/assets/dico.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DownloadIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsAgreed(checked);
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
    <main className="flex flex-col bg-white text-secondary items-center">
      <div className="container text-xl flex flex-col items-center justify-center text-justify">
        <div className="py-10 flex flex-col justify-center w-full border-b-2">
          <h1 className="text-3xl mt-10 md:text-5xl font-bold">
            Abstract Submission
          </h1>
          <a
            href="https://ppijerman.org/wp-content/uploads/2024/04/Abstract-Submission-Deadlines-and-Guidelines-ICONIC-2024.docx.pdf"
            className="hover:text-accent mt-1 mb-16 w-fit"
          >
            <div className="flex flex-row gap-2 items-center">
              <p>Download PDF File</p>
              <DownloadIcon className="w-6 h-6" />
            </div>
          </a>

          <div className="py-10 my-3 h-fit px-5 md:px-0 md:h-[100px] flex flex-col md:flex-row items-center gap-3 md:gap-6 justify-center bg-accent2 w-full text-white rounded-md">
            <Image
              src={dico}
              alt="dico logo iconic"
              className="w-[100px] md:[w-200px]"
            />
            <InfoCircledIcon className="w-12 h-12" />
            <h1 className="text-lg md:text-2xl text-center font-bold">
              Please read the submission guidelines below for the abstract
              submission.
            </h1>
          </div>
          <div className="flex flex-col py-10 w-full gap-3">
            <h1 className="text-4xl font-semibold w-full pt-14 mb-5 border-b-2 pb-1">
              Registration
            </h1>
            <div className="flex flex-row gap-2 items-start justify-center pb-5">
              <InfoCircledIcon className="w-6 h-6" />
              <p className="w-full md:text-xl text-base font-semibold">
                *Before proceeding, make sure you are already registered as an
                author via the Oxford Abstract Portal. If not, please register
                as an author below.
              </p>
            </div>

            <Button
              asChild
              className="w-full text-white bg-accent hover:bg-primary2 p-3 py-6 md:py-8 md:px-12 text-xl md:text-2xl"
            >
              <Link href="https://app.oxfordabstracts.com/">
                Register as an Author
              </Link>
            </Button>
          </div>

          <div className="w-full text-start">
            <h1 className="text-4xl font-semibold w-full pt-20 mb-5 border-b-2 pb-1">
              Deadlines
            </h1>
            <div className="flex flex-col md:flex-row w-full gap-3 justify-between pb-6">
              <div className="w-full border-l-4 border-secondary pl-4">
                <h2 className="text-2xl font-semibold pb-4">
                  First Call - Abstract Submission
                </h2>
                <p className="pb-6">March 25th - April 30th 2024</p>
                <h2 className="text-2xl font-semibold pb-4">
                  Notification of Abstract Acceptance
                </h2>
                <p className="">May 9th 2024</p>
              </div>
              <div className="w-full border-l-4 border-secondary pl-4">
                <h2 className="text-2xl font-semibold pb-4 w-fit border-t-2 md:border-t-0 pt-3 md:pt-0">
                  Second Call - Abstract Submission
                </h2>
                <p className="pb-6">May 15th - June 30th 2024</p>
                <h2 className="text-2xl font-semibold pb-4">
                  Notification of Abstract Acceptance
                </h2>
                <p className="">July 9th 2024</p>
              </div>
            </div>
            <h2 className="text-2xl font-semibold pb-4">Conference Date</h2>
            <p className="pb-6">4th - 6th September 2024</p>
          </div>

          <h1 className="text-4xl font-semibold w-full pt-20 mb-5 border-b-2 pb-1">
            Submission Guidelines
          </h1>
          {guidelines.map((guideline, index) => (
            <div key={index} className="w-full">
              <h2 className="text-2xl font-semibold pt-10 pb-4">
                {`${index + 1}. ${guideline.title}`}
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
              4. Focuses of Study
            </h1>
            <p className="text-xl">
              Choose the relevant focus of study for your abstract from the
              following options:
            </p>
            <ul className="list-decimal list-inside py-2 text-xl">
              <li>Economic and Social Implications of LCD</li>
              <li>Technological Innovation for LCD</li>
              <li>
                Political Economy of LCD within Global North and Global South
                Dynamics
              </li>
              <li>LCD of the Built Environment</li>
            </ul>
            <h2 className="text-2xl font-semibold pt-10 pb-4">
              5. Field of Study
            </h2>
            <ul className="list-decimal list-inside py-2 text-xl">
              <li>Finance, Economics and Business</li>
              <li>Social Science</li>
              <li>Geoscience, Climate and Ecology</li>
              <li>International Relations</li>
              <li>Science, Technology, Engineering, and Mathematics (STEM)</li>
              <li>
                Infrastructure, Architecture, Land-use and Spatial Planning
              </li>
              <li>Agriculture, Livestock, Fishery, and Forestry (ALFF)</li>
              <li>Public Policy and STS (Science, Technology, and Society)</li>
            </ul>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold pt-10 pb-4">
              6. Type of Presentation
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
              7. Permission of Publication
            </h1>
            <p className="text-xl">
              By submitting an abstract, authors grant permission for the
              abstract to be published in the conference proceedings.
            </p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold pt-10 pb-4">
              8. Approval of Author(s)
            </h1>
            <p className="text-xl">
              Ensure that all authors have read and approved the final version
              of the abstract before submission.
            </p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-bold pt-10 pb-4">
              9. Process of Abstract Submission
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
            <p className="text-xl pt-3">
              <span className="font-bold">It is important</span> to note that in
              the online portal, author information and affiliations must be
              entered separately from the abstract text (title, body). Abstract
              text can be directly inputted into the online form or transferred
              from Word and other text programs using the &quot;Copy &
              Paste&quot; function.
            </p>
          </div>

          <div className="w-full">
            <h1 className="text-4xl font-semibold w-full pt-20 mb-5 border-b-2 pb-1">
              Further Information
            </h1>
            <p className="pb-6">
              For any inquiries or assistance regarding abstract submission,
              please contact{" "}
              <a
                href="mailto:info@iconic.ppijerman.org"
                className="text-accent"
              >
                info@iconic.ppijerman.org
              </a>
              .
            </p>
          </div>

          {/* Abstract Submission Checkbox */}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="items-top flex space-x-2 w-full py-10 justify-center">
            <Checkbox
              id="terms1"
              onCheckedChange={handleCheckboxChange}
              checked={isAgreed}
            />
            <div className="grid gap-1.5 leading-snug">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-snug cursor-pointer w-full md:w-[70%] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Agree to the Abstract Submission Guidelines of ICONIC 2024.
              </label>
              <p className="text-sm w-full md:w-[70%]">
                By checking this box, I acknowledge that I have read and agree
                to the Abstract Submission Guidelines of ICONIC 2024. I
                understand that adherence to these guidelines is mandatory for
                participation in the conference. I hereby commit to abide by
                these guidelines, acknowledging that any violation may result in
                disqualification from the event.
              </p>
            </div>
          </div>
          <div className="h-[200px] flex flex-col w-full items-center justify-center px-4">
            <Button
              variant="outline"
              disabled={!isAgreed}
              type="submit"
              className="border-none w-fit md:w-full bg-accent hover:bg-primary2
              text-white hover:text-white py-8 px-5 text-2xl md:text-3xl"
            >
              Submit Abstract
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
