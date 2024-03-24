import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center space-y-6">
      <div className="container space-y-4 text-center py-14">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How to Submit Your Abstract
          </h1>
          <p className="mx-auto max-w-[600px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-medium">
            Thank you for your interest in submitting an abstract for the
            upcoming ICONIC 2024 Conference!
          </p>
          <h1 className="text-2xl font-bold pt-10">
            Process of Abstract Submission
          </h1>
          <p className="mx-auto max-w-[600px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-medium">
            Abstract submission will be facilitated solely through the Oxford
            Abstract System. Authors must register as an author via{" "}
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
          <p className="mx-auto max-w-[600px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-medium pt-10">
            Please follow the guidelines below to ensure your submission is
            complete and to facilitate the review progress.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Link
            className="inline-flex items-center justify-center rounded-md text-white bg-accent px-8 text-2xl font-medium shadow-sm transition-colors hover:bg-primary2 py-3"
            href="/submission/submission-guideline"
          >
            Abstract Guideline
            <ArrowTopRightIcon className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
