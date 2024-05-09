import agnia from "@/assets/commitee/Agnia.jpeg";
import sekar from "@/assets/commitee/sekar.jpeg";
import gamma from "@/assets/commitee/gamma.jpeg";
import geraldus from "@/assets/commitee/geraldus.jpeg";
import caryn from "@/assets/commitee/caryn.jpg";
import azhar from "@/assets/commitee/azhar.jpeg";
import gerraldo from "@/assets/commitee/Gerraldo.jpeg";
import imel from "@/assets/commitee/imel.png";
import chaska from "@/assets/commitee/Chaska.jpg";
import hessel from "@/assets/commitee/Hessel.jpg";
import rohmaneo from "@/assets/commitee/Rohmaneo.jpg";
import eunike from "@/assets/commitee/eunike.png";
import hosea from "@/assets/commitee/Hosea.jpg";
import marcelian from "@/assets/commitee/Marcelian.jpg";
import hapsari from "@/assets/commitee/hapsari.jpg";
import fadlilah from "@/assets/commitee/FadlilahDila.jpg";
import bea from "@/assets/commitee/bea.jpg";
import santi from "@/assets/commitee/santi.jpg";
import kinasih from "@/assets/commitee/kinasih.jpg";
import evelyn from "@/assets/commitee/evelyn.jpg";
import syifa from "@/assets/commitee/syifa.jpg";
import taqi from "@/assets/commitee/taqi.jpg";
import nata from "@/assets/commitee/nata.jpg";
import maulana from "@/assets/commitee/maulana.jpg";
import tasa from "@/assets/commitee/tasallia.jpg";
import aditya from "@/assets/commitee/aditya.jpg";
import kafa from "@/assets/commitee/kafa.jpg";
import tazya from "@/assets/commitee/tazya.jpg";
import christine from "@/assets/commitee/christine.jpg";
import risma from "@/assets/commitee/risma.jpeg";
import kemal from "@/assets/commitee/kemal.jpg";

import Image, { ImageProps } from "next/image";

interface informations {
  imageSrc: ImageProps["src"];
  name: string;
  position: string;
  positionPPIJ: string;
  education: string;
  occupation: string;
}

const DuaTeratas: React.FC<informations> = ({
  imageSrc,
  name,
  position,
  positionPPIJ,
  education,
  occupation,
}) => {
  return (
    <div className="lg:max-w-[550px] lg:h-[280px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col lg:flex-row">
      <div className="p-2 flex items-center justify-center lg:w-[400px] lg:h-[230px]">
        <Image
          src={imageSrc}
          alt="Sekar"
          className="w-full h-full lg:mb-0 object-cover rounded-md"
        />
      </div>
      <div className="gap-1">
        <h5 className="text-[28px] font-bold">{name}</h5>
        <p className="text-neutral-500 text-xl font-bold dark:text-neutral-300">
          {position}
        </p>
        <ul className="list-disc ml-4">
          <li>
            <p className="text-neutral-500 text-sm dark:text-neutral-300">
              {positionPPIJ}
            </p>
          </li>
          <li>
            <p className="text-neutral-500 text-sm dark:text-neutral-300">
              {education}
            </p>
          </li>
          <li>
            <p className="text-neutral-500 text-sm dark:text-neutral-300">
              {occupation}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const orangDuaTeratas = [
  {
    imageSrc: sekar,
    name: "Sekar Ayu Lestari",
    position: "President",
    positionPPIJ: "President of PPI Jerman",
    education:
      "M.Sc. Candidate Electrical and Electronics Engineering, Technische Universität München",
    occupation: "Working Student in Measurement Engineering at IAB GmbH",
  },
  {
    imageSrc: agnia,
    name: "Agnia Dewi Larasati",
    position: "Board of Advisory",
    positionPPIJ: "President of PPI Jerman",
    education:
      "M.Sc. Candidate Electrical and Electronics Engineering, Technische Universität München",
    occupation: "Working Student in Measurement Engineering at IAB GmbH",
  },
];

export const Committee = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-[80%] py-10">
      <div className="w-full flex flex-col items-center">
        <h1 className="pt-10 pb-20 text-5xl font-semibold">Meet The Team</h1>
        <div className="grid gap-6 md:grid-cols-2 mb-5">
          {orangDuaTeratas.map((orang) => (
            <DuaTeratas
              key={orang.name}
              imageSrc={orang.imageSrc}
              name={orang.name}
              position={orang.position}
              positionPPIJ={orang.positionPPIJ}
              education={orang.education}
              occupation={orang.occupation}
            />
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-3 mb-5">
          <div className="lg:max-w-[500px] lg:h-[250px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col lg:flex-row">
            <div className="p-2 flex items-center justify-center lg:w-[300px] lg:h-[200px]">
              <Image
                src={gamma}
                alt="Gamma"
                className="w-full h-full lg:mb-0 object-cover rounded-md"
              />
            </div>
            <div className="gap-1">
              <h5 className="md:text-base lg:text-xl font-bold">
                Ignatius Gamma Tjandra
              </h5>
              <p className="text-neutral-500 md:text-base lg:text-[18px] font-bold dark:text-neutral-300">
                Secretary General
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <p className="text-neutral-500 md:text-xs lg:text-[13px] dark:text-neutral-300">
                    B.Sc. Candidate Industrial Engineering and Management,
                    Technische Universität Berlin
                  </p>
                </li>
                <li>
                  <p className="text-neutral-500 md:text-xs lg:text-[13px] dark:text-neutral-300">
                    Working Student in Arbeitsvorbereitung, Stadler Deutschland
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:max-w-[500px] lg:h-[250px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col lg:flex-row">
            <div className="p-2 flex items-center justify-center lg:w-[300px] lg:h-[200px]">
              <Image
                src={geraldus}
                alt="Geraldus"
                className="w-full h-full lg:mb-0 object-cover rounded-md"
              />
            </div>
            <div className="gap-1">
              <h5 className="md:text-lg lg:text-xl font-bold">
                Geraldus Kevin Martimbang
              </h5>
              <p className="text-neutral-500 md:text-base lg:text-[18px] font-bold dark:text-neutral-300">
                Deputy of Director
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <p className="text-neutral-500 md:text-xs lg:text-[13px] dark:text-neutral-300">
                    M.Sc. Candidate Regional Planning, Technische Universität
                    München
                  </p>
                </li>
                <li>
                  <p className="text-neutral-500 md:text-xs lg:text-[13px] dark:text-neutral-300">
                    M.A. Candidate Architecture, Technische Universität München
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:max-w-[500px] lg:h-[250px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col lg:flex-row">
            <div className="p-2 flex items-center justify-center lg:w-[300px] lg:h-[200px]">
              <Image
                src={caryn}
                alt="Caryn"
                className="w-full h-full lg:mb-0 object-cover rounded-md"
              />
            </div>
            <div className="gap-1">
              <h5 className="md:text-lg lg:text-xl font-bold">
                Ivana Carynthia Ligo
              </h5>
              <p className="text-neutral-500 md:text-base lg:text-[18px] font-bold dark:text-neutral-300">
                Treasurer
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <p className="text-neutral-500 md:text-xs lg:text-[13px] dark:text-neutral-300">
                    M.Sc. Candidate Sustainable International Agriculture,
                    Georg-August-Universität Göttingen
                  </p>
                </li>
                <li>
                  <p className="text-neutral-500 md:text-xs lg:text-[13px] dark:text-neutral-300">
                    Working Student in Data Engineering, HOMIRO Metrology GmbH
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 mb-5">
          <div className="lg:max-w-[550px] lg:h-[250px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col lg:flex-row">
            <div className="p-2 flex items-center justify-center lg:w-[400px] lg:h-[200px]">
              <Image
                src={risma}
                alt="Risma"
                className="w-full h-full lg:mb-0 object-cover rounded-md"
              />
            </div>
            <div className="gap-1">
              <h5 className="text-[20px] font-bold">Risma Rizkia Nurdianti</h5>
              <p className="text-neutral-500 text-[18px] font-bold dark:text-neutral-300">
                Scientific Commitee
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <p className="text-neutral-500 text-[13px] dark:text-neutral-300">
                    PhD Candidate Animal Nutrition and Rangeland Management,
                    Universität Hohenheim
                  </p>
                </li>
                <li>
                  <p className="text-neutral-500 text-[13px] dark:text-neutral-300">
                    Researcher Animal Nutrition and Rangeland Management in the
                    Tropics and Subtropics, Universität Hohenheim
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:max-w-[550px] lg:h-[250px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col lg:flex-row">
            <div className="p-2 flex items-center justify-center lg:w-[200px] lg:h-[200px]">
              <Image
                src={kemal}
                alt="Kemal"
                className="w-full h-full lg:mb-0 object-cover rounded-md"
              />
            </div>
            <div className="gap-1">
              <h5 className="text-[20px] font-bold">Kemal Firdaus</h5>
              <p className="text-neutral-500 text-[18px] font-bold dark:text-neutral-300">
                Scientific Commitee
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <p className="text-neutral-500 text-[13px] dark:text-neutral-300">
                    PhD Candidate Mathematics, Universität Hamburg
                  </p>
                </li>
                <li>
                  <p className="text-neutral-500 text-[13px] dark:text-neutral-300">
                    Research Associate, Universität Hamburg
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid gap-x-[100px] gap-y-3 md:grid-cols-4 mb-5 mt-[25px]">
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={hapsari}
                alt="Hapsari"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Hapsari Pinji</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Head of Public Relations, Design & Media
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                B.A.Sc. Angewandte Volkswirtschaftslehre
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                FU Berlin
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={fadlilah}
                alt="Fadlilah"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Fadlilah Nur Hasanah</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Public Relations, Design & Media
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                B.Sc. Bioinformatik
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Universität des Saarlandes
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={bea}
                alt="Bea"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Nicole Beatrice</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Public Relations, Design & Media
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                B.Sc. Candidate Architecture
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                TU Braunschweig
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={santi}
                alt="Santi"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Santi Ananda Sari</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Public Relations, Design & Media
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Ausbildung Restaurantfachfrau
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Berufsschule Hugo Junkers
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={kinasih}
                alt="Kinasih"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Kinasih Sekarswara</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Public Relations, Design & Media
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                M.A. Candidate Development Economics and International
                Development
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                HTW Berlin
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={aditya}
                alt="Aditya"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Aditya Setyo Nugroho</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Public Relations, Design & Media
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Ausbildung Koch
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                The Grand Green Familux Resorts
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={syifa}
                alt="Syifa"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Syifa Perbowo</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Public Relations, Design & Media
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                M.Sc. Management & Technology
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                TU München
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={evelyn}
                alt="Evelyn"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Evelyn Sutiono</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Public Relations, Design & Media
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                M.Sc. Molecular Medicine
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Universität Göttingen
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={kafa}
                alt="Kafa"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Kafa Billahi Kafila</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Public Relations, Design & Media
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                FSJ SHG Psychiatrie & Ergotherapie
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={azhar}
                alt="Azhar"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Azhar Rahadian</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Head of Information & Technology
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                B.Sc. Candidate Informatics
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                TU Braunschweig
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={gerraldo}
                alt="Gerraldo"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Gerraldo F. A. Susilo</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Information & Technology
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                B.Sc. Candidate Business Mathematics
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                HTW Berlin
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={imel}
                alt="Imel"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Imelda Z. E. Putri</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Information & Technology
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                B.Sc. Candidate Computer Science
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Universität Osnabrück
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={chaska}
                alt="Chaska"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Chaska R. Oscario</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Head of Program & Event
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                B.Sc. Management and Technology
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                TU München
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={hessel}
                alt="Hessel"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Hessel Juliust</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Program & Event
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                PhD Candidate Computer Science
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                TU München
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={christine}
                alt="Christine"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Christine Gracia Pratama</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Program & Event
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                PhD Candidate Technology Innovation Management
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                TU Hamburg
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={rohmaneo}
                alt="Rohmaneo"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">M. Rohmaneo Daminto</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Program & Event
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                PhD Candidate Geodesy and Geoinformatics
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                TU Berlin
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={eunike}
                alt="Eunike"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Eunika Amarya</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Program & Event
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                M.A. English Language, Literature, and Culture
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Universität Göttingen
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[300px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={hosea}
                alt="Hosea"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Hosea Simanjuntak</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Program & Event
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                B.Sc. Materials Engineering
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                TU Clausthal
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={marcelian}
                alt="Marcelian"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Marcelian Grace</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Program & Event
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                M.Sc. Candidate Regional Planning
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                TU München
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={taqi}
                alt="Taqi"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">M. Rafi Taqiyyuddiin</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Head of Fundraising & Partnership
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                B.Sc. Candidate Transport System
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                TU Berlin
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={nata}
                alt="Nata"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Daffa Aushafi Nata</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Fundraising & Partnership
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                B.A.Sc. Candidate Industrial Engineering
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Hochschule Darmstadt
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={maulana}
                alt="Maulana"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Muhammad Maulana</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Fundraising & Partnership
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                M.A. Candidate National and International Administration Policy
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Universität Postdam
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={tazya}
                alt="Tazya"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">
                Iqlima K. Mumtazya Harmansyah
              </h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Fundraising & Partnership
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                B.Eng. Candidate Applied Chemistry
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Hochschule Kaiserslautern
              </p>
            </div>
          </div>
          <div className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
              <Image
                src={tasa}
                alt="Tasa"
                className="w-full rounded-md lg:mb-0"
              />
            </div>
            <div className="text-center mt-4 gap-1">
              <h5 className="text-base font-bold">Tasallia Kamil</h5>
              <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                Staff of Fundraising & Partnership
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                B.Eng. Candidate Mechatronics
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Fachhochschule Aachen
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
