import React from "react";
import { Speakers } from "@/lib/speakers";
import { EventSpeaker } from "../event-speakers";
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
      <PlenarySession />
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
        venue="ZHG - Welcoming Hall"
      />
      <Session
        timeStart="08:45"
        timeEnd="09:00"
        title="Opening Remarks"
        venue="ZHG - Main Lecture Hall"
        details="Opening by Sekar Yunita, Director of ICONIC 2024"
      />
    </div>
  );
}

function PlenarySession() {
  return (
    <div className="flex flex-col gap-8 leading-relaxed">
      <h3 className="text-xl font-medium md:text-2xl pt-4 border-b-2 pb-2">
        Plenary Session
      </h3>
      <Session
        timeStart="09:00"
        timeEnd="10:45"
        title="Carbon Capture, Storage and Removal: Between Low-Tech and High-Tech"
        venue="ZHG - Main Lecture Hall"
        details={
          <div className="flex flex-col gap-2">
            <p>
              This session will explore various technologies for carbon capture
              and storage, addressing effectiveness, scalability, and economic
              viability. Distinguished speakers from policymaking, research, and
              industry will share insights on current developments and
              innovations in low-carbon technologies. The session aims to foster
              meaningful dialogue on the practical applications of these
              technologies and their role in advancing low carbon development.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker
              speakers={[Speakers.RACHMAT, Speakers.STEFAN, Speakers.DESTI]}
            />
          </div>
        }
      />
      <Session
        timeStart="10:45"
        timeEnd="11:00"
        title="Coffee Break"
        venue="ZHG - Welcoming Hall"
      />
      <Session
        timeStart="11:00"
        timeEnd="12:45"
        title="Perspectives on Low-Carbon Territorial Planning"
        venue="ZHG - Main Lecture Hall"
        details={
          <div className="flex flex-col gap-2">
            <p>
              This session will explore strategies and policies for integrating
              low-carbon principles into territorial planning, including land
              use, urban development, and regional planning. This session will
              address climate change-related challenges in planning and how to
              adapt to changing environmental circumstances within the framework
              of low-carbon development. Experts in this field, from both
              Indonesian and European contexts, will contribute their insights
              and expertise, focusing on topics such as circular economy and
              nature-based solutions like blue-green infrastructure.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker
              speakers={[Speakers.MIA, Speakers.BRITTA, Speakers.AMY]}
            />
          </div>
        }
      />
      <Session
        timeStart="12:45"
        timeEnd="14:30"
        title="Lunch Break"
        venue="Göttingen"
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
        timeStart="14:30"
        timeEnd="18:00"
        title="Technological Innovation for LCD"
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
            <h3 className="pt-2 font-semibold text-xl">Co-Chairs</h3>
            <EventSpeaker
              speakers={[Speakers.RACHMAT, Speakers.STEFAN, Speakers.DESTI]}
            />
          </div>
        }
      />
      <Session
        timeStart="14:30"
        timeEnd="18:00"
        title="LCD of the Built Environment"
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
            <h3 className="pt-2 font-semibold text-xl">Chair</h3>
            <p>
              Indrawan Prabaharyaka, Ph.D., Doctor of Philosophy in Urban
              Anthropology, Humboldt-University Berlin
            </p>
            <h3 className="pt-2 font-semibold text-xl">Co-Chair</h3>
            <EventSpeaker
              speakers={[Speakers.MIA, Speakers.BRITTA, Speakers.AMY]}
            />
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
        timeStart="14:30"
        timeEnd="15:30"
        title="Opening Talk"
        venue="ZHG - Main Lecture Hall"
        details={
          <div className="flex flex-col gap-2">
            <p>
              In order to meet the goal of low carbon development,
              collaborations are needed among different stakeholders, including
              government policymakers, financial institutions, industries, and
              the academic community. Industries serve as the frontline actors
              in the collective effort to combat climate change. With
              Indonesia’s Nationally Determined Contribution (NDC) aiming to
              reduce its GHG emissions by 32% unconditionally and 43%
              conditionally, support from innovative enterprises is crucial.
              However, the expertise and research from academics are equally
              important, providing essential insights into sustainable
              technology and policy effectiveness that guide low-carbon
              development.
            </p>
            <p>
              As governments and policymakers increasingly devise strategies,
              legislation, and policies to achieve these climate targets, it is
              crucial for all stakeholders, including academics, to provide
              constructive input. This collaboration will help shape
              investment-and-business-friendly policies that are socially just
              and inclusive. ICONIC has the goal to provide the platform for the
              companies which sponsor our event to pitch their business ideas
              and enable further discussion in attendance of the invited
              ministerial officers or government, investors, and academics as to
              how to advance low-carbon development projects in developing
              countries, especially Indonesia.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Chair</h3>
            <p>To be announced (TBA)</p>
            <h3 className="pt-2 font-semibold text-xl">Co-Chair</h3>
            <EventSpeaker speakers={[Speakers.TONNY, Speakers.ANTJE]} />
          </div>
        }
      />
      <Session
        timeStart="15:30"
        timeEnd="18:00"
        title="Presentation of 5 Companies"
        venue="ZHG - Main Lecture Hall"
        details={
          <div className="flex flex-col gap-2">
            <p>
              The start-ups and companies are chosen based on their influential
              impacts on low-carbon development in developing countries,
              especially Indonesia, and related policy-making processes. They
              will present their company profile and activity in attendance of
              the invited investor and Indonesian ministerial officers.
            </p>
          </div>
        }
      />
    </div>
  );
}
