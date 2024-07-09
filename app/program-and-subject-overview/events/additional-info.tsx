import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { PATHS } from "@/lib/constants";

export function AdditionalInformation() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold md:text-4xl">
        Additional Information
      </h2>
      <p className="py-4 font-semibold">
        ** Speakers and session details are subject to change without prior
        notice. Please check back for the latest updates.
      </p>
      <Link className="transition group" href={PATHS.JOIN_THE_MOVEMENT}>
        <div className="flex flex-col gap-3 lg:max-w-[900px] bg-gray-100 rounded-lg p-4 group-hover:bg-gray-200 transition">
          <p className=" ">
            Join us for this exciting event, free of charge, where we unite for
            a cause that matters. In our commitment to promoting low-carbon
            development, we are launching a crowdfunding campaign.
          </p>
          <p>
            Your generous contributions will not only support the event but also
            make a tangible impact on the environment. A portion of the funds
            raised will be donated to a dedicated company specializing in
            planting mangroves, vital for combating climate change and
            protecting coastal ecosystems. Together, let&apos;s make a
            difference and contribute to a greener, more sustainable future!
          </p>
          <div className="flex gap-x-3">
            <h1 className="w-fit text-2xl ml-auto font-bold tracking-tighter group-hover:text-accent2 transition">
              Join The Movement.
            </h1>
            <ArrowRightIcon className="opacity-0 w-8 h-8 ml-auto group-hover:opacity-100 text-accent2 transition" />
          </div>
        </div>
      </Link>
      <Link href={PATHS.EVENT_REGISTRATION}>
        <p className="bg-secondary text-white py-4 px-8 w-fit rounded-lg hover:bg-primary2 transition">
          Get your tickets here!
        </p>
      </Link>
    </div>
  );
}
