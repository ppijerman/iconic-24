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
        timeEnd="10:30"
        title="Opening Ceremony"
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
              speakers={[
                Speakers.HAVAS,
                Speakers.BERNHARDT,
                Speakers.SEKAR,
                Speakers.AGNIA,
                Speakers.DESTI,
              ]}
            />
          </div>
        }
      />
      <Session
        timeStart="10.45"
        timeEnd="13.00"
        title="Ministerial Talk: Financing Low-Carbon Development in Indonesia"
        venue="Zentrales Hörsaalgebäude (ZHG) 010"
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
                Speakers.DEWANTHI,
                Speakers.DAVID_TANTOW,
              ]}
            />
          </div>
        }
      />
      <Session
        timeStart="13:00"
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
        timeStart="13:30"
        timeEnd="15:15"
        title="Decarbonizing the Industrial and Transport Sectors"
        venue="Zentrales Hörsaalgebäude (ZHG) 010"
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
                Speakers.RACHMAT,
                Speakers.BIMO_KUSUMO,
                Speakers.BONDAN_SUSILO,
                Speakers.HERSTATT,
                Speakers.RYANZA,
              ]}
            />
          </div>
        }
      />

      <Session
        timeStart="15:30"
        timeEnd="17:00"
        title="Career Talk Paragon, Food Bazaar, Muslim wears Elita, PPI Jerman Merch"
        venue="Foyer (Welcoming Hall), Zentrales Hörsaalgebäude (ZHG)"
      />

      <Session
        timeStart="16:15"
        timeEnd="17:15"
        title="Career Talk Indonesian Professionals Association"
        venue="Zentrales Hörsaalgebäude (ZHG) 007"
      />
    </div>
  );
}
