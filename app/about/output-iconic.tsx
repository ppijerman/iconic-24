"use client";
import { motion } from "framer-motion";
import {
  ArrowDownIcon,
  BookmarkFilledIcon,
  FileIcon,
  IdCardIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function IconicOutput() {
  return (
    <section className="bg-white min-h-screen w-full flex flex-col md:justify-center items-center p-3 text-secondary">
      <div className="flex flex-col items-center w-[80%] justify-center">
        <h1 className="pb-10 md:text-5xl text-3xl font-bold py-5 pt-16">
          ICONIC as Multi-Stakeholders Platform
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-5 justify-center w-full">
          <div className="w-full flex flex-col items-center py-10">
            <Card className="w-[200px] md:w-[350px] p-5 drop-shadow-lg">
              <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 91.3 91.04"
              >
                <g id="Layer_9" data-name="Layer 9">
                  <g>
                    <path
                      id="cls-1"
                      className="stroke-none fill-[#f27021] hover:fill-[#d95f1f] transition"
                      d="M29.22,91.04l-4.95-4.15s3.42-7.87,4.54-14.49c1.02-6-.58-9-4.53-16.24l4.47-5.48s5.61,6.24,6.93,20.81l.13,1.93,4.17-3.17,6.21,3.79s-10.92,7.34-16.97,17Z"
                    />
                    <path
                      id="cls-2"
                      className="stroke-none fill-[#a7a9ac] hover:fill-[#7d7e80] transition"
                      d="M2.64,67.7l-2-8s8.42-3.28,14-7c3-2,6-6,8-14l7-1s2,8-9,20l-1,1,5,1,2,7s-13-2-24,1Z"
                    />
                    <path
                      id="cls-3"
                      className="stroke-none fill-[#633917] hover:fill-[#4a2710] transition"
                      d="M0,30.16l4.14-4.96s7.88,3.4,14.5,4.5c6,1,9-.61,16.23-4.58l5.49,4.45s-6.22,5.63-20.79,6.99l-1.93.13,3.19,4.16-3.77,6.23S9.68,36.19,0,30.16Z"
                    />
                    <path
                      id="cls-4"
                      className="stroke-none fill-[#104c33] hover:fill-[#0d3a2b] transition"
                      d="M24.03,4.11l8-2s3.28,8.42,7,14c2,3,6,6,14,8l1,7s-8,2-20-9l-1-1-1,5-7,2s2-13-1-24Z"
                    />
                    <path
                      id="cls-5"
                      className="stroke-none fill-[#869138] hover:fill-[#6c6c2b] transition"
                      d="M59.52,0l5.21,3.82s-2.9,8.08-3.59,14.75c-.62,6.05,1.17,8.95,5.58,15.91l-4.1,5.76s-6-5.86-8.27-20.31l-.25-1.92-3.95,3.44-6.45-3.38S54.1,10.03,59.52,0Z"
                    />
                    <path
                      id="cls-6"
                      className="stroke-none fill-[#f6f4b3] hover:fill-[#e6e4a2] transition"
                      d="M88.99,24.44l2,8s-8.42,3.28-14,7c-3,2-6,6-8,14l-7,1s-2-8,9-20l1-1-5-1-3.16-6.69s14.16,1.69,25.16-1.31Z"
                    />
                    <path
                      id="cls-7"
                      className="stroke-none fill-[#50b67c] hover:fill-[#3f8e5e] transition"
                      d="M91.3,61.77l-4.06,5.02s-7.93-3.28-14.56-4.29c-6.01-.91-8.99.74-16.16,4.81l-5.55-4.38s6.14-5.72,20.68-7.29l1.93-.16-3.25-4.11,3.69-6.28s7.53,10.79,17.29,16.68Z"
                    />
                    <path
                      id="cls-8"
                      className="stroke-none fill-[#4c89c8] hover:fill-[#3a6f9f] transition"
                      d="M67.35,88.94l-8,2s-3.28-8.42-7-14c-2-3-6-6-14-8l-1-7s8-2,20,9l1,1,1-5,7-2s-2,13,1,24Z"
                    />
                  </g>
                </g>
              </svg>
            </Card>
          </div>
          <div className="w-full flex flex-col gap-3 md:gap-16 p-2 md:p-5">
            <div className="border-l-4 border-secondary pl-3">
              <h1 className="font-semibold text-md md:text-xl">
                Academic Community
              </h1>
            </div>
            <div className="border-l-4 border-secondary2 pl-3">
              <h1 className="font-semibold text-md md:text-xl">
                Finance Institution
              </h1>
            </div>
            <div className="border-l-4 border-[#a7a9ac] pl-3">
              <h1 className="font-semibold text-md md:text-xl">
                Industry and Entrepeneur
              </h1>
            </div>
            <div className="border-l-4 border-accent pl-3">
              <h1 className="font-semibold text-md md:text-xl">Think Tanks</h1>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 md:gap-16 p-2 md:p-5">
            <div className="border-l-4 border-primary3 pl-3 w-full">
              <h1 className="font-semibold text-md md:text-xl">
                Government and Policy Makers
              </h1>
            </div>
            <div className="border-l-4 border-primary pl-3">
              <h1 className="font-semibold text-md md:text-xl">
                Community Leaders
              </h1>
            </div>
            <div className="border-l-4 border-primary2 pl-3">
              <h1 className="font-semibold text-md md:text-xl">
                International Organization
              </h1>
            </div>
            <div className="border-l-4 border-accent2 pl-3">
              <h1 className="font-semibold text-md md:text-xl">Students</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-10">
          <ArrowDownIcon className="w-36 h-36" />
        </div>

        <section className="w-full grid grid-cols-1 md:grid-cols-2 justify-center gap-5 pb-16">
          <Card className="flex flex-row gap-1 md:gap-5 items-center text-secondary">
            <div className="w-fit pl-3 md:pl-5">
              <ReaderIcon className="w-8 h-8 md:w-32 md:h-32 text-accent" />
            </div>
            <div className="flex flex-col w-full">
              <CardHeader>
                <h3 className="font-bold text-lg">
                  ICONIC 2024 Book of Abstracts
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Scientific publication (with ISBN and indexing) of all
                  accepted and presented abstracts.
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="flex flex-row gap-1 md:gap-5 items-center text-secondary">
            <div className="w-fit pl-3 md:pl-5">
              <BookmarkFilledIcon className="w-8 h-8 md:w-32 md:h-32 text-primary2" />
            </div>
            <div className="flex flex-col w-full">
              <CardHeader>
                <h3 className="font-bold text-lg">Meet the Industry Booklet</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Display of companies which contribute to LCD and have
                  presented their activities and proposal at ICONIC 2024 in
                  front of the governmental stakeholders of Indonesia.
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="flex flex-row gap-1 md:gap-5 items-center text-secondary">
            <div className="w-fit pl-3 md:pl-5">
              <FileIcon className="w-8 h-8 md:w-32 md:h-32 text-accent2" />
            </div>
            <div className="flex flex-col w-full">
              <CardHeader>
                <h3 className="font-bold text-lg">Report and Policy Briefs</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  PPIJ Briefs, reports and policy recommendations written by
                  academics associated with PPI Jerman for multi - stakeholders
                  actors, displaying findings presented at ICONIC 2024, trends
                  of LCD at the global level as well as national level
                  (Indonesian and German context).
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="flex flex-row gap-1 md:gap-5 items-center text-secondary">
            <div className="w-fit pl-3 md:pl-5">
              <IdCardIcon className="w-8 h-8 md:w-32 md:h-32 text-secondary" />
            </div>
            <div className="flex flex-col w-full">
              <CardHeader>
                <h3 className="font-bold text-lg">Media Coverage</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Dissemination of policy briefs, informations from keynote
                  speeches, panel discussions, and presented findings by various
                  media partner of PPI Jerman, mainly Indonesia related media
                  outlets.
                </p>
              </CardContent>
            </div>
          </Card>
        </section>
      </div>
    </section>
  );
}
