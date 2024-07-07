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
        venue="Main Plenary-Hall (Hall 10), Zentrales Hörsaalgebäude (ZHG)"
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
        title="Carbon Capture, Storage, and Removal: Approaches to Low-Carbon Development"
        venue="Main Plenary-Hall (Hall 10), Zentrales Hörsaalgebäude (ZHG)"
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
                Speakers.STEFAN,
                Speakers.DESTI,
                Speakers.RYANZA,
                Speakers.HERSTATT,
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
        venue="Main Plenary-Hall (Hall 10), Zentrales Hörsaalgebäude (ZHG)"
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
              speakers={[
                Speakers.KLEINSCHMIT,
                Speakers.RUKKA,
                Speakers.GEORG,
                Speakers.SCHWEGLER,
              ]}
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
        timeStart="14:30"
        timeEnd="16:15"
        title="Decarbonization and Circularity in the Construction Industry"
        venue="Main Plenary-Hall (Hall 10), Zentrales Hörsaalgebäude (ZHG)"
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
            <EventSpeaker speakers={[Speakers.GEORG_SCHILLER]} />
          </div>
        }
      />

      <Session
        timeStart="16:15"
        timeEnd="16:30"
        title="Coffee Break"
        venue="ZHG - Welcoming Hall"
      />

      <Session
        timeStart="16:30"
        timeEnd="18:15"
        title="Adaptation and Mitigation in the Built Environment in a Heating Climate"
        venue="Main Plenary-Hall (Hall 10), Zentrales Hörsaalgebäude (ZHG)"
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
            <EventSpeaker speakers={[Speakers.MIA, Speakers.PRABAHARYAKA]} />
          </div>
        }
      />
    </div>
  );
}

// Parallel Sessions Component
// function ParallelSessions() {
//   return (
//     <div className="flex flex-col gap-8 leading-relaxed">
//       <h3 className="text-xl font-medium md:text-2xl pt-4 border-b-2 pb-2">
//         Plenary Session
//       </h3>
//     </div>
//   );
// }
