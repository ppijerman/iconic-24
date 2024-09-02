import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <main className="min-h-screen flex justify-center space-y-6 bg-white">
      <div className="container py-12 md:py-16">
        <div className="space-y-2 border-b-2 py-3 mb-10">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl py-12 md:py-16">
            Thank you.
          </h1>
          <p className="md:text-lg/relaxed lg:text-xl/relaxed xl:text-xl/relaxed font-normal py-4">
            The ICONIC 2024 team would like to thank you for submitting your
            abstract for the ICONIC 2024 Conference! We appreciate your
            contribution to the event and your commitment to advancing knowledge
            in the field.
          </p>

          <p className="md:text-lg/relaxed lg:text-xl/relaxed xl:text-xl/relaxed font-normal py-4">
            We are also pleased to inform you that all accepted abstracts will
            be included in the Book of Abstracts, published by Cullivier Verlag
            with an ISBN. Thank you once again for your participation!
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <a
            className="inline-flex items-center justify-center rounded-md text-white bg-secondary px-8 text-3xl font-medium shadow-sm transition-colors hover:bg-primary2 py-5"
            href="https://drive.google.com/file/d/1m3LNTr-MF8uEeISZw9zx3id9iqhynj1U/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access the preview of the Book of Abstracts here
            <ArrowTopRightIcon className="w-6 h-6 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
