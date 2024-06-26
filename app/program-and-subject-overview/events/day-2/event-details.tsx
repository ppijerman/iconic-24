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
        title="Decarbonization in Global South: Who Should Bear the Cost?"
        venue="ZHG - Main Lecture Hall"
        details={
          <div className="flex flex-col gap-2">
            <p>
              Overview: The plenary session aims to facilitate multi-stakeholder
              dialogue on Low Carbon Development (LCD). ICONIC 2024 aspires to
              serve as a central hub for innovation, ideas, and knowledge,
              translating discussions into concrete policy recommendations and
              action plans for advancing LCD in Indonesia. The session will
              address the historical and economic dynamics between the Global
              North and South, highlighting the need for collaboration,
              financial aid, and technology transfer to achieve Net Zero goals.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker
              speakers={[
                Speakers.SVENJA,
                Speakers.SRIMUL,
                Speakers.HAVAS,
                Speakers.METIN,
              ]}
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
        title="Reducing AFOLU Emissions: Balancing Development and Conservation"
        venue="ZHG - Main Lecture Hall"
        details={
          <div className="flex flex-col gap-2">
            <p>
              Overview: This session will address the major contributions of
              land-use change and forestry to greenhouse gas emissions in
              Indonesia. The session will explore current policies and
              regulatory frameworks aimed at emissions reduction in agriculture,
              forestry, and other land uses (AFOLU). With insights into
              deforestation trends, the impact of palm oil production, and
              international attention on Indonesia&apos;s deforestation, this
              session will feature discussions on harmonizing economic
              activities with conservation efforts.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker
              speakers={[Speakers.GARY, Speakers.RUKKA, Speakers.GEORG]}
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
        title="Economic and Social Implication of Low Carbon Development"
        venue="ZHG - Conference Venue 1"
        details={
          <div className="flex flex-col gap-2">
            <p>
              Overview: This session will explore the intersection of
              environmental sustainability and economic and social progress. Low
              carbon development strategies aim to mitigate climate change
              impacts through energy efficiency, renewable energy sources, and
              smarter urban planning. The economic implications include job
              creation in new industries and transformation of existing sectors,
              while social implications encompass lifestyle changes, reductions
              in energy poverty, and improved public health.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker
              speakers={[Speakers.GARY, Speakers.RUKKA, Speakers.GEORG]}
            />
          </div>
        }
      />
      <Session
        timeStart="14:30"
        timeEnd="18:00"
        title="Political Economy of LCD within Global North and South Dynamics"
        venue="ZHG - Conference Venue 2"
        details={
          <div className="flex flex-col gap-2">
            <p>
              Overview: This session will explore the complex and dynamic
              relationship between the Global North and South regarding
              decarbonization, influenced by historical and economic factors.
              Developed countries in the Global North have historically been
              significant contributors to greenhouse gas emissions, while the
              Global South has emitted fewer emissions per capita. However,
              recent economic growth in the Global South has increased their
              emissions, highlighting the urgency of action.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Chair</h3>
            <h3 className="pt-2 font-semibold text-xl">Co-Chair</h3>
            <EventSpeaker speakers={[Speakers.KRISZTINA]} />
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
        timeEnd="18:00"
        title="Keynote speeches, Panel Discussions, and Company Presentations"
        venue="ZHG - Main Lecture Hall"
        details={
          <div className="flex flex-col gap-2">
            <p>
              Overview: In order to meet the goal of low carbon development,
              collaborations are needed among different stakeholders, including
              government policymakers, financial institutions, industries, and
              the academic community. Industries serve as the frontline actors
              in the collective effort to combat climate change. With
              Indonesia’s Nationally Determined Contribution (NDC) aiming to
              reduce its GHG emissions by 32% unconditionally and 43%
              conditionally, support from innovative enterprises is crucial.
            </p>
            <p>
              This collaboration will help shape
              investment-and-business-friendly policies that are socially just
              and inclusive. ICONIC has the goal to provide the platform for the
              companies which sponsor our event to pitch their business ideas
              and enable further discussion in attendance of the invited
              ministerial officers or government, investors, and academics as to
              how to advance low-carbon development projects in developing
              countries, especially Indonesia.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker speakers={[Speakers.JOKO, Speakers.FRANK]} />
          </div>
        }
      />
    </div>
  );
}
