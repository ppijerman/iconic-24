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
      <Sessions />
      <PlenarySession />
    </div>
  );
}

function Sessions() {
  return (
    <div className="flex flex-col gap-8 leading-relaxed">
      <Session
        timeStart="08:00"
        timeEnd="09:00"
        title="Registration & Snack"
        venue="Foyer, Zentralhörsaal-Gebäude (ZHG)"
      />
      <Session
        timeStart="09:00"
        timeEnd="10:00"
        title="Opening Remarks"
        venue="Foyer, Zentrales Hörsaalgebäude (ZHG)"
        details={
          <div className="flex flex-col gap-2">
            <p>
              ICONIC 2024 would officially be opened with some short words and
              remarks from the Indonesian Ambassador for the Federal Republic of
              Germany, Arif Havas Oegroseno, Prof. Bernhard Brümmer as the
              Vice-President for Research and Sustainability of the Göttingen
              University, as well as Sekar Yunita as the Director of ICONIC
              2024. This session would officially commemorate the start of
              ICONIC 2024.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker
              speakers={[Speakers.HAVAS, Speakers.BERNHARDT, Speakers.SEKAR]}
            />
          </div>
        }
      />
      <Session
        timeStart="10.00"
        timeEnd="12.00"
        title="Ministerial Talk: Financing Low-Carbon Development in Indonesia"
        venue="Main Plenary-Hall (Hall 10), Zentralhörsaal-Gebäude (ZHG)"
        details={
          <div className="flex flex-col gap-2">
            <p>
              This session would focus on discussions with regards to the topic
              of financing low-carbon initiatives and developments. especially
              in the Global South, with Indonesia as a representative. Laksmi
              Dhewanthi, as the Director-General of Climate Change Control of
              Indonesia along with the Indonesian Ambassador for Germany, Arif
              Havas Oegroseno, would highlight approaches taken by Indonesia in
              terms of financing sustainability. Dirk Meyer, as the
              Director-General of Department of Multilateral Development Policy,
              Transformation, and Climate of Germany, would bring upon insights
              on how Germany finances its sustainability and low-carbon
              initiatives.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker
              speakers={[
                Speakers.HAVAS,
                Speakers.SVENJA,
                Speakers.SITI_NURBAYA,
              ]}
            />
          </div>
        }
      />
      <Session
        timeStart="12:00"
        timeEnd="14:00"
        title="Lunch Break"
        venue="Foyer, Zentralhörsaal-Gebäude (ZHG)"
        details="Lunch session of all invited guests, partners, and participants of ICONIC 2024 that would also serve as one of the numerous networking opportunities between the diverse participants and stakeholders of ICONIC 2024."
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
        timeStart="14:00"
        timeEnd="15:45"
        title="Green Financing and Sustainable Investments for Low Carbon Development"
        venue="Main Plenary-Hall (Hall 10), Zentrales Hörsaalgebäude (ZHG)"
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
                Speakers.JOKO,
                Speakers.CHRISTIANE,
                Speakers.WEMPI_SAPUTRA,
                Speakers.ROYKE_TUMILAAR,
                Speakers.DARMAWAN_JUNAIDI,
                Speakers.SUNARSO,
                Speakers.CHRISTIAN_SEWING,
                Speakers.ANTJE,
              ]}
            />
          </div>
        }
      />

      <Session
        timeStart="15:45"
        timeEnd="16:00"
        title="Coffee Break"
        venue="ZHG - Welcoming Hall"
      />

      <Session
        timeStart="16:00"
        timeEnd="17:45"
        title="Decarbonizing the Industrial and Transport Sectors"
        venue="Main Plenary-Hall (Hall 10), Zentrales Hörsaalgebäude (ZHG)"
        details={
          <div className="flex flex-col gap-2">
            <p>
              The plenary session would cover the discussion on one of the
              essential sectors that low-carbon development aims to
              revolutionize, which would be general industries as well as
              transportation. Experts as well as representatives from big
              industry players in mobility, logistics, and energy would share
              their insights on how their respective institutions face the
              challenges of promoting sustainability and environmental
              consciousness in their daily industrial activities, and how
              further potential for more progress in low-carbon development in
              these sectors could be made through collaboration of these various
              industry players in both the Global North and the Global South.
              These projects, both at present, past, or planned ones can become
              inspiration for future ideas in low-carbon development.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker
              speakers={[
                Speakers.VIERHOUT,
                Speakers.TONNY,
                Speakers.BIMO_KUSUMO,
                Speakers.DJONY,
                Speakers.KEVIN_KUFS,
                Speakers.JOCHEN_THEWES,
                Speakers.DONNY_ARSAL,
                Speakers.RAHMAD,
                Speakers.MOHAMAD_FERIADI,
                Speakers.ARIF_SUHARTONO,
                Speakers.MMA_INDAH,
                Speakers.DARMAWAN_PRASODJO,
                Speakers.NICKE_WIDYAWATI,
              ]}
            />
          </div>
        }
      />
    </div>
  );
}
