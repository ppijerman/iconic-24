import React from "react";
import { Speakers } from "@/lib/speakers";
import { SPONSORS_ICONIC } from "@/lib/companies";
import Link from "next/link";
import { EventSpeaker } from "../event-speakers";
import { EventSponsor } from "../event-sponsors";

import { Session } from "../event-session";
import { ArrowRightIcon } from "@radix-ui/react-icons";

// Main EventDetails Component
export function EventDetails() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold md:text-4xl">Rundown</h2>
      <span className="border-secondary border-b-8 w-[60px] py-4"></span>
      <div className="flex flex-col gap-4 leading-relaxed">
        <Rundown />
      </div>
    </div>
  );
}

// Rundown Component
function Rundown() {
  return (
    <div className="flex flex-col gap-12 leading-relaxed">
      <PreSession />
      <SharedDetailsParallelSession />
      <ParallelSessionsTwo />
      <MeetTheIndustry />
    </div>
  );
}

function PreSession() {
  return (
    <div className="flex flex-col gap-8 leading-relaxed">
      <h3 className="text-xl font-medium md:text-2xl pt-4 border-b-2 pb-2">
        Pre-session
      </h3>
      <Session
        timeStart="08:00"
        timeEnd="08:45"
        title="Registration & Snack"
        venue="Foyer, Zentrales Hörsaalgebäude (ZHG)"
      />
      <Session
        timeStart="08:45"
        timeEnd="09:00"
        title="Opening Remarks"
        venue="Zenraler Hörsaalgebäude (ZHG) 010"
        details={
          <div className="flex flex-col gap-2">
            <p>
              Opening remarks by Risma Rizkia Rurnianti as the Editor In Chief
              of ICONIC 2024.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker speakers={[Speakers.RISMA_RIZKIA]} />
          </div>
        }
      />
    </div>
  );
}



function ParallelSessionsTwo() {
  return (
    <div className="flex flex-col gap-8 leading-relaxed">
      <h3 className="text-xl font-medium md:text-2xl pt-4 border-b-2 pb-2">
        Parallel Conference Session 2
      </h3>

      <Session
        timeStart="09:00"
        timeEnd="13:00"
        title="Political Economy of LCD within Global North and South Dynamics"
        venue="Zentrales Hörsaalgebäude (ZHG) 006"
        details={
          <div className="flex flex-col gap-2">
            <p>
              The session &quot;Political Economy of LCD within Global North and
              South Dynamics&quot; will explore the complex and dynamic
              relationship between the Global North and South regarding
              decarbonization, influenced by historical and economic factors.
              Developed countries in the Global North have historically been
              significant contributors to greenhouse gas emissions, while the
              Global South has emitted fewer emissions per capita. However,
              recent economic growth in the Global South has led to higher
              emissions, highlighting the urgency of action. The session will
              discuss how the burden of addressing climate change
              disproportionately falls on the Global South and the need for
              assistance in accessing clean energy technologies. The session
              will also examine how power imbalances between the Global North
              and South influence decision-making processes and policy outcomes
              related to low-carbon development initiatives. The session will
              feature discussions on solutions and strategies for achieving a
              fair and effective global transition to a low-carbon future.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Conference Chair</h3>
            <EventSpeaker speakers={[Speakers.WISNU_HARTO]} />
          </div>
        }
      />

      <Session
        timeStart="09:00"
        timeEnd="13:00"
        title="Low-Carbon Development in Built Environment"
        venue="Zentrales Hörsaalgebäude (ZHG) 007"
        details={
          <div className="flex flex-col gap-2">
            <p className="">
              This session will explore the importance of integrating low carbon
              principles and practices within the built environment. Researchers
              will present diverse approaches, innovative technologies, and
              policy frameworks driving this transformative shift. Topics
              include architectural and landscape design, urban and regional
              planning, building materials, transportation infrastructure, and
              policy interventions. The session aims to unveil the potential for
              transformative change and scalable solutions, fostering resilient,
              livable cities and communities that balance human needs with
              environmental imperatives.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Conference Chair</h3>
            <EventSpeaker speakers={[Speakers.PRABAHARYAKA]} />
          </div>
        }
      />
    </div>
  );
}

function SharedDetailsParallelSession() {
  return (
    <section className="bg-background text-foreground pt-10 pb-4">
      <div className="">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Conference Session Details
            </h2>
            <p className="text-muted-foreground">
              Learn more about the format of the ICONIC parallel conference
              sessions.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium">Presenters</h3>
                <p className="text-muted-foreground">
                  Researchers can deliver their findings either onsite or
                  online.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Audience</h3>
                <p className="text-muted-foreground">
                  Attendees can participate in the sessions onsite or remotely.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium">Date & Time</h3>
                <p className="text-muted-foreground">
                  Friday, September 6th, 2024 | 09:00 - 13:00 CEST
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-muted-foreground">
                  Zentrales Hörsaalgebäude 006 & 007, University of
                  Göttingen
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium">Session Format</h3>
              <p className="text-muted-foreground">
                Conference session and presentation of submissions. Each
                presenter has 10 minutes to share their findings, followed by a
                5-minute Q&A. The chair will summarize the discussions and
                suggest future research and policy directions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Meet the Industry Component
function MeetTheIndustry() {
  return (
    <div className="flex flex-col gap-8 leading-relaxed">
      <h3 className="text-xl font-medium md:text-2xl pt-4 border-b-2 pb-2">
        Meet The Industry
      </h3>
      <Session
        timeStart="09:00"
        timeEnd="10:45"
        title="Green Financing and Sustainable Investments for Low Carbon Development"
        venue="Zentrales Hörsaalgebäude (ZHG) 010"
        details={
          <div className="flex flex-col gap-2">
            <p>
              The plenary session encompass the sharing of insights and ideas on
              the different alternatives that are open, as well as challenges,
              in investing towards Low-Carbon Development projects and
              initiatives. The speakers and discussion of this session would
              highlight the role that venture capitals, financial institutions,
              development banks, as well as commercial banks in the Global North
              such as in Germany, as well as in the Global South contribute to
              ensure that sustainability projects are financially catered for
              and sufficiently funded. Their strategy and contribution to the
              greater low-carbon development cause would also be further
              expounded in this session.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker
              speakers={[
                Speakers.TONNY,
                Speakers.ANTJE,
                Speakers.JOKO,
                Speakers.WEMPI_SAPUTRA,
              ]}
            />
          </div>
        }
      />

      <Session
        timeStart="10:40"
        timeEnd="11:00"
        title="Coffee Break"
        venue="Foyer, Zentrales Hörsaalgebäude (ZHG)"
      />

      <Session
        timeStart="11:00"
        timeEnd="17:00"
        title="Presentation of Companies"
        venue="Main Plenary-Hall (Hall 10), Zentrales Hörsaalgebäude (ZHG)"
        details={
          <div className="flex flex-col gap-2">
            <p>
              The start-ups and companies are chosen based on their influential
              impacts on low-carbon development in developing countries,
              especially Indonesia, and related policy-making processes. They
              will present their company profile and activity in attendance of
              the invited investor and Indonesian ministerial officers.
            </p>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://treeo.one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-accent transition hover:underline "
                >
                  TREEO
                </a>
              </li>
              <li>
                <a
                  href="https://www.qualitasertifikasi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-accent transition hover:underline "
                >
                  Qualitas Sertifikasi Indonesia (QSI)
                </a>
              </li>
              <li>
                <a
                  href="https://www.astra.co.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-accent transition hover:underline "
                >
                  ASTRA Internasional
                </a>
              </li>
              <li>
                <a
                  href="https://www.zinkpower.com/home.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-accent transition hover:underline "
                >
                  Zinkpower Group
                </a>
              </li>
              <li>
                <a
                  href="https://byoliving.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-accent transition hover:underline "
                >
                  BYO Living
                </a>
              </li>
              <li>
                <a
                  href="https://www.paragon-innovation.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-accent hover:underline  transition"
                >
                  Paragon Technology and Innovation
                </a>
              </li>
            </ul>
            <Link href="#">
              <p className="flex gap-2 items-center text-primary2 hover:text-accent2 transition font-bold text-lg">
                Check out their company profiles{" "}
                <ArrowRightIcon className="h-6 w-6" />
              </p>
            </Link>
          </div>
        }
      />
    </div>
  );
}
