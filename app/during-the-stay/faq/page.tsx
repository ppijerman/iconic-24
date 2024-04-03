import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <div className="w-[80%] pb-15 pt-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-5xl">FAQ</h1>
        <div className="py-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How can I register for the conference?
              </AccordionTrigger>
              <AccordionContent>
                Registration can be completed through our website. Please visit
                the Registration Page for details on registration fees,
                deadlines, and the registration process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How can I submit my abstract?</AccordionTrigger>
              <AccordionContent>
                Abstracts can be submitted via the Oxford Abstract System.
                Please ensure you follow the submission guidelines provided on
                our Submission Page.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                How is the review process for submissions?
              </AccordionTrigger>
              <AccordionContent>
                All submissions will be peer-reviewed in a single-blind process.
                Authors will be notified of acceptance, need for revisions, or
                rejection as promptly as possible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                How will the accepted abstracts be published?
              </AccordionTrigger>
              <AccordionContent>
                All accepted abstracts will be featured in the Book of
                Abstracts, which will be published by Cullivier Verlag with an
                ISBN.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Is there a virtual attendance option?
              </AccordionTrigger>
              <AccordionContent>
                Yes, ICONIC 2024 offers an online participation option via Zoom.
                Registered online participants will receive access details a
                week before the conference.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Will the conference assist with visa processing?
              </AccordionTrigger>
              <AccordionContent>
                While we are unable to directly assist with visa processing, we
                will provide all registered attendees with the necessary
                documents required for their visa application process. It is
                important for attendees to start their visa application process
                well in advance to ensure they have ample time for approvals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                How can I become a sponsor or partner of the conference?
              </AccordionTrigger>
              <AccordionContent>
                For sponsorship and partnership opportunities, please visit our
                Partners Page for more information on how to get involved.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>
                Who can I contact for more questions?
              </AccordionTrigger>
              <AccordionContent>
                If you have any further questions, please don&apos;t hesitate to{" "}
                <a
                  className="text-blue-500 font-semibold "
                  href="mailto:info@iconic.ppijerman.org"
                >
                  contact us!
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
