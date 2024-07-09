import React from "react";
import { Speakers } from "@/lib/speakers";
import { SPONSORS_ICONIC } from "@/lib/companies";

import { EventSpeaker } from "../event-speakers";
import { EventSponsor } from "../event-sponsors";

import { Session } from "../event-session";

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
      <ParallelSessions />
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
        venue="Main Plenary-Hall (Hall 10), Zentrales Hörsaalgebäude (ZHG)"
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

// Parallel Sessions Component
function ParallelSessions() {
  return (
    <div className="flex flex-col gap-8 leading-relaxed">
      <h3 className="text-xl font-medium md:text-2xl pt-4 border-b-2 pb-2">
        Parallel Conference Sessions
      </h3>
      <Session
        timeStart="09:00"
        timeEnd="10:30"
        title="Technological Innovation for Low-Carbon Development"
        venue="ZHG - Conference Venue 1"
        details={
          <div className="flex flex-col gap-2">
            <p>
              This session will explore innovative technical solutions
              characterized by low emission intensity compared to
              state-of-the-art alternatives. This session will highlight the
              importance of such technologies in mitigating climate change and
              advancing low-carbon development. Discussions will focus on
              increasing the utilization of renewable resources, optimizing
              energy efficiency, and developing competitive alternatives to
              fossil fuels. Through this scholarly exchange, participants will
              gain a comprehensive understanding of the latest advancements and
              strategies in low-carbon technology.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Conference Chair</h3>
            <EventSpeaker speakers={[Speakers.DESTI]} />
          </div>
        }
      />
      <Session
        timeStart="10:30"
        timeEnd="12:00"
        title="Low-Carbon Development in Built Environment"
        venue="ZHG - Conference Venue 2"
        details={
          <div className="flex flex-col gap-2">
            <p>
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

      <Session
        timeStart="14:00"
        timeEnd="15:30"
        title="Economic and Social Implication of LCD"
        venue="Conference Hall 1, Zentrales Hörsaalgebäude (ZHG)"
        details={
          <div className="flex flex-col gap-2">
            <p>
              The session &quot;Economic and Social Implication of Low Carbon
              Development&quot; will explore the intersection of environmental
              sustainability and economic and social progress. Low carbon
              development strategies aim to mitigate climate change impacts
              through energy efficiency, renewable energy sources, and improved
              urban planning. The economic implications include job creation in
              new industries and transformation of existing sectors, while
              social implications encompass lifestyle changes, reductions in
              energy poverty, and improved public health. The session will
              discuss the challenges and opportunities these strategies present,
              requiring multidisciplinary insights and collaboration among
              policymakers, businesses, and communities. The session will
              feature diverse research topics presented by scholars and experts,
              fostering comprehensive understanding and dialogue on the economic
              and social implications of low carbon development.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Conference Chair</h3>
            <EventSpeaker speakers={[Speakers.YOSIAS_GANDHI]} />
          </div>
        }
      />

      <Session
        timeStart="15:30"
        timeEnd="17:00"
        title="Political Economy of LCD within Global North and South Dynamics"
        venue="ZHG - Conference Venue 2"
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
    </div>
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
        timeEnd="10:30"
        title="Opening Talk"
        venue="Main Plenary-Hall (Hall 10), Zentrales Hörsaalgebäude (ZHG)"
        details={
          <div className="flex flex-col gap-2">
            <p>
              In order to meet the goal of low carbon development,
              collaborations are needed among different stakeholders, including
              government policymakers, financial institutions, industries, and
              the academic community. Industries serve as the frontline actors
              in the collective effort to mitigate climate change. With
              Indonesia&apos;s Nationally Determined Contribution (NDC) aiming
              to reduce its GHG emissions by 32% unconditionally and 43%
              conditionally, support from innovative enterprises is crucial.
              This collaboration will help shape
              investment-and-business-friendly policies that are socially just
              and inclusive. ICONIC&apos;s main goal is to provide the platform
              for the companies which sponsor our event to pitch their business
              ideas and enable further discussion in attendance of the invited
              ministerial officers or government, investors, and academics as to
              how to advance low-carbon development projects in developing
              countries, especially but not limited to Indonesia.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker
              speakers={[Speakers.JOKO, Speakers.TONNY, Speakers.ANTJE]}
            />
          </div>
        }
      />
      <Session
        timeStart="10:30"
        timeEnd="12:00"
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
              <li>TREEO</li>
              <li>Qualitas Sertifikasi Indonesia (QSI)</li>
              <li>
                International Sustainability and Carbon Certification (ISCC)
              </li>
              <li>WPD GmbH</li>
              <li>Astra Internasional</li>
            </ul>
          </div>
        }
      />

      <Session
        timeStart="14:00"
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
              <li>ECADIN</li>
              <li>Byo Living*</li>
              <li>PT. Kayu Lapis Indonesia*</li>
              <li>IKN Authority*</li>
            </ul>
          </div>
        }
      />
    </div>
  );
}
