import React from "react";
import { Speakers } from "@/lib/speakers";
import { EventSpeaker } from "../event-speakers";
import { Session } from "../event-session";

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
      <Sessions />
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
        timeEnd="09:00"
        title="Opening Remarks"
        venue="Main Plenary-Hall (Hall 10), Zentralhörsaal-Gebäude (ZHG)"
        details={
          <div className="flex flex-col gap-2">
            <p>
              ICONIC 2024 would officially be opened with some short words and
              remarks from the Indonesian Ambassador for the Federal Republic of
              Germany, Arif Havas Oegroseno, Prof. Dr. Metin Tolan as the
              President of the University of Göttingen, as well as Sekar Yunita
              as the Director of ICONIC 2024. This session would officially
              commemorate the start of ICONIC 2024.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker
              speakers={[Speakers.HAVAS, Speakers.METIN, Speakers.SEKAR]}
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
              The Ministerial Talk session would be a discussion focusing on the
              topic of financing low-carbon initiatives and developments.
              especially in the Global South, with Indonesia as a
              representative. Sri Mulyani Indrawati, Ph.D, as Indonesia&apos;s
              Finance Minister would highlight approaches taken by Indonesia in
              terms of financing sustainability. Svenja Schulze, as
              Germany&apos;s Minister for Development would bring upon insights
              on how Germany finances its sustainability and low-carbon
              initiatives.
            </p>
            <h3 className="pt-2 font-semibold text-xl">Speakers</h3>
            <EventSpeaker speakers={[Speakers.SRIMUL, Speakers.SVENJA]} />
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
      <Session
        timeStart="14:00"
        timeEnd="18:00"
        title="Low-Carbon Study Trip"
        venue="Göttingen city center, partner research centers and companies (to be announced)"
        details="An optional study trip that would allow participants and invitees to explore more about the host city of ICONIC 2024; Göttingen. The trip would focus on visiting research centers operating in Göttingen, as well as visiting facilities of specific companies in Göttingen that are active in low-carbon initiatives.
"
      />
    </div>
  );
}
