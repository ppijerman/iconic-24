import React from "react";

// Main EventDetails Component
export function EventDetails() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold md:text-4xl">Rundown</h2>
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

interface SessionProps {
  timeStart: string;
  timeEnd?: string;
  title: string;
  venue?: string;
  details?: React.ReactNode;
}
// Session Component
function Session({ timeStart, timeEnd, title, venue, details }: SessionProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 items-start">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
        <div className="text-4xl font-bold">{timeStart}</div>
        {timeEnd && (
          <div className="text-gray-500 dark:text-gray-400">- {timeEnd}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <h3 className="text-xl font-bold">{title}</h3>
        {venue && <p className="text-gray-500 dark:text-gray-400">{venue}</p>}
        {details && <div>{details}</div>}
      </div>
    </div>
  );
}

function PreSession() {
  return (
    <div className="flex flex-col gap-8 leading-relaxed">
      <h3 className="text-xl font-medium md:text-2xl pt-4">Pre-session</h3>
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
      <h3 className="text-xl font-medium md:text-2xl pt-4">Plenary Session</h3>
      <Session
        timeStart="09:00"
        timeEnd="10:45"
        title="Decarbonization in Global South: Who Should Bear the Cost?"
        venue="ZHG - Main Lecture Hall"
        details={
          <>
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
            <p>Speakers:</p>
            <ul>
              <li>Arif Havas Oegroseno, Indonesian Ambassador to Germany</li>
              <li>
                Prof. Dr. Krisztina Kis-Katos, Professor for International
                Economic Policy (Uni-Göttingen)
              </li>
              <li>
                Frank Bohnet, Director of Development Finance East Asia and
                South-East Asia, KfW Development Bank
              </li>
            </ul>
          </>
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
          <>
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
            <p>Speakers:</p>
            <ul>
              <li>Gary Dunning, Executive Director, The Forests Dialogue</li>
              <li>
                Rukka Sombolinggi, Secretary General of Indonesian Archipelago
                Indigenous People Alliance (AMAN)
              </li>
              <li>
                Georg Buchholz, Program Director, Forests and Climate Change
                Programme, GIZ
              </li>
            </ul>
          </>
        }
      />
      <Session timeStart="12:45" timeEnd="14:30" title="Lunch Break" />
    </div>
  );
}

// Parallel Sessions Component
function ParallelSessions() {
  return (
    <div className="flex flex-col gap-8 leading-relaxed">
      <h3 className="text-xl font-medium md:text-2xl pt-4">
        Parallel Conference Sessions
      </h3>
      <Session
        timeStart="14:30"
        timeEnd="18:00"
        title="Economic and Social Implication of Low Carbon Development"
        venue="ZHG - Conference Venue 1"
        details={
          <>
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
            <p>Speakers:</p>
            <ul>
              <li>Gary Dunning, Executive Director, The Forests Dialogue</li>
              <li>
                Rukka Sombolinggi, Secretary General of Indonesian Archipelago
                Indigenous People Alliance (AMAN)
              </li>
              <li>
                Georg Buchholz, Program Director, Forests and Climate Change
                Programme, GIZ
              </li>
            </ul>
          </>
        }
      />
      <Session
        timeStart="14:30"
        timeEnd="18:00"
        title="Political Economy of LCD within Global North and South Dynamics"
        venue="ZHG - Conference Venue 2"
        details={
          <>
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
            <p>Speakers:</p>
            <ul>
              <li>
                Wisnu Harto Adiwijoyo PhD., Research Analyst at the World Bank
                Group
              </li>
              <li>
                Prof. Dr. Krisztina Kis-Katos, Professor for International
                Economic Policy, University of Göttingen
              </li>
            </ul>
          </>
        }
      />
    </div>
  );
}

// Meet the Industry Component
function MeetTheIndustry() {
  return (
    <div className="flex flex-col gap-8 leading-relaxed">
      <h3 className="text-xl font-medium md:text-2xl pt-4">
        Meet The Industry
      </h3>
      <Session
        timeStart="14:30"
        timeEnd="18:00"
        title="Opening Talk"
        venue="ZHG - Main Lecture Hall"
        details={
          <>
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
            <p>Speakers:</p>
            <ul>
              <li>
                Dr. Joko Tri Haryanto, Senior Researcher and Fiscal Policy
                Agency for Climate Change Financing and Multilateral Policy at
                the Indonesian Ministry of Finance
              </li>
              <li>
                Frank Bohnet, Director of Development Finance East Asia and
                South-East Asia, KfW Development Bank
              </li>
            </ul>
          </>
        }
      />
    </div>
  );
}
