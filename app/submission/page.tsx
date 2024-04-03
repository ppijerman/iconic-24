import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <main className="min-h-screen flex justify-center space-y-6 bg-white">
      <div className="w-[80%] pb-32 pt-10 md:pt-20">
        <div className="space-y-2 border-b-2 py-3 mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How to Submit Your Abstract
          </h1>
          <p className="max-w-[600px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-medium">
            Thank you for your interest in submitting an abstract for the
            upcoming ICONIC 2024 Conference!
          </p>
          <h1 className="text-2xl font-bold pt-10">
            Process of Abstract Submission
          </h1>
          <p className="md:text-lg/relaxed lg:text-xl/relaxed xl:text-xl/relaxed font-normal">
            Abstract submission will be facilitated solely through the Oxford
            Abstract System. To begin, authors must register as an author via{" "}
            <span className="text-accent">
              <a href="https://app.oxfordabstracts.com">Oxford Abstracts</a>
            </span>{" "}
            and carefully follow the provided instructions for inputting author
            details and abstract content. Submit your abstract via the
            conference&apos;s{" "}
            <span className="text-accent">
              <a href="https://app.oxfordabstracts.com/stages/41029/submitter">
                online submission portal{" "}
              </a>
            </span>{" "}
            before the deadline.
          </p>
          <p className="text-base md:text-lg/relaxed lg:text-xl/relaxed xl:text-xl/relaxed font-normal">
            All accepted abstracts will be featured in the Book of Abstracts,
            which will be published by Cullivier Verlag with an ISBN.
          </p>

          <h1 className="text-2xl font-bold pt-10">Peer-Review Process</h1>
          <p className="md:text-lg/relaxed lg:text-xl/relaxed xl:text-xl/relaxed font-normal">
            All submitted abstracts will undergo a peer review process to ensure
            the quality and relevance of contributions to the conference themes.
            This process is designed to uphold the integrity and high standards
            of ICONIC 2024.
          </p>
          <p className="md:text-lg/relaxed lg:text-xl/relaxed xl:text-xl/relaxed font-normal">
            Please follow the guidelines below to ensure your submission is
            complete and to facilitate the review progress.
          </p>

          <Link href="/reviewers">
            <div className="text-2xl flex flex-row gap-2 text-secondary items-center justify-center ring-2 ring-secondary group w-fit py-5 px-10 hover:text-primary2 hover:ring-primary2 transition duration-150 my-10">
              <h1 className="font-bold ">Reviewer Team of ICONIC 2024</h1>
              <ArrowTopRightIcon className="w-6 h-6 opacity-0 group-hover:opacity-100 transition duration-75" />
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Link
            className="inline-flex items-center justify-center rounded-md text-white bg-accent px-8 text-2xl font-medium shadow-sm transition-colors hover:bg-primary2 py-3"
            href="/submission/submission-guideline"
          >
            Submit Your Abstract
            <ArrowTopRightIcon className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}
