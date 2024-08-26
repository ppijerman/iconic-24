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
      <ParallelSessionsOne />
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
        venue="Zentrales Hörsaalgebäude (ZHG) 010"
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
        title="Carbon Capture, Storage, and Removal: A Pathway to Low Carbon Development"
        venue="Zentrales Hörsaalgebäude (ZHG) 010"
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
                Speakers.CANDRA_SUTAMA,
                Speakers.GIOVANNI_PRADIPTA,
                Speakers.SCHWEGLER,
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
        venue="Zentrales Hörsaalgebäude (ZHG) 010"
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
              speakers={[Speakers.KLEINSCHMIT, Speakers.RUKKA, Speakers.GEORG]}
            />
          </div>
        }
      />
      <Session
        timeStart="12:45"
        timeEnd="14:30"
        title="Lunch Break"
        venue="Mensa, Zentrales Hörsaalgebäude (ZHG)"
      />
      <Session
        timeStart="14:00"
        timeEnd="16:00"
        title="Adaptation and Mitigation in the Built Environment in a Heating Climate"
        venue="Zentrales Hörsaalgebäude (ZHG) 010"
        details={
          <div className="flex flex-col gap-2">
            <p>
              The session &quot;Adaptation and Mitigation in the Built
              Environment in a Heating Climate&quot; will explore strategies and
              policies for integrating low-carbon principles into territorial
              planning at the face of an increasingly heating climate, and would
              encompass, urban development, urban climatology, and regional
              planning. This session will address climate change-related
              challenges in planning and how to adapt to changing environmental
              circumstances within the framework of low-carbon development.
              Experts in this field, from both Indonesian and European contexts,
              will contribute their insights and expertise, focusing on topics
              such as circular economy and nature-based solutions like
              blue-green infrastructure.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker
              speakers={[
                Speakers.ARDHASENA_SOPAHELUWAKAN,
                Speakers.MYRNA_ASNAWATI,
                Speakers.SILVIA_BENEDITO,
                Speakers.PRABAHARYAKA,
                Speakers.BANDUNG_SAHARI,
              ]}
            />
          </div>
        }
      />

      <Session
        timeStart="16:00"
        timeEnd="16:15"
        title="Coffee Break"
        venue="Foyer (Welcoming Hall), Zentrales Hörsaalgebäude (ZHG)"
      />

      <Session
        timeStart="16:15"
        timeEnd="18:00"
        title="Decarbonization and Circularity in the Construction Industry"
        venue="Zentrales Hörsaalgebäude (ZHG) 010"
        details={
          <div className="flex flex-col gap-2">
            <p>
              This plenary session aims to address and discuss present and past
              efforts in decarbonizing the traditionally high carbon-emitting
              construction industry. The discussion would focus on how
              construction processes, materials, and the design of our living
              spaces as well as economic spaces can be geared to prioritize the
              minimization of carbon emissions, and maximize efficiency of
              energy and materials. The speakers would focus their topics on
              exploration of sustainable materials and building practices,
              innovative construction techniques, among others, as an essential
              part in shaping the larger adage of Low-Carbon Development. Proven
              projects and cases will be expounded, and future prospects on how
              sustainability in this sector could look like, would also be
              imagined in this discussion.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker
              speakers={[
                Speakers.GEORG_SCHILLER,
                Speakers.LIM_MASULIN,
                Speakers.MARKUS_EURING,
              ]}
            />
          </div>
        }
      />
    </div>
  );
}

// Parallel Sessions Component
function ParallelSessionsOne() {
  return (
    <div className="flex flex-col gap-8 leading-relaxed">
      <h3 className="text-xl font-medium md:text-2xl pt-4 border-b-2 pb-2">
        Parallel Conference Session 1
      </h3>
      <Session
        timeStart="09:00"
        timeEnd="13:00"
        title="Economic and Social Implication of LCD"
        venue="Zentrales Hörsaalgebäude (ZHG) 006"
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
        timeStart="09:00"
        timeEnd="13:00"
        title="Technological Innovation for Low-Carbon Development"
        venue="Zentrales Hörsaalgebäude (ZHG) 007"
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
                  Thursday, September 5th, 2024 | 09:00 - 13:00 CEST
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-muted-foreground">
                  Zentrales Hörsaalgebäude 006 & 007, University of Göttingen
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
