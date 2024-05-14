import Image, { ImageProps } from "next/image";

import {
  duaTeratas,
  tigaTeratas,
  scientificCommittee,
  teams,
} from "./committe-persons";

interface informations {
  imageSrc: ImageProps["src"];
  name: string;
  position: string;
  positionPPIJ?: string;
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
    <div className="xl:max-w-[550px] xl:h-[280px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col xl:flex-row">
      <div className="p-2 flex items-center justify-center xl:w-[400px] xl:h-[230px] lg:w-full lg:h-[400px]">
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

export const Committee = () => {
  return (
    <div className="min-h-screen flex items-center justify-center container py-10">
      <div className="w-full flex flex-col items-center gap-3">
        <h1 className="container pt-10 pb-20 text-5xl font-bold">Meet The Team</h1>
        <div className="flex flex-col">
          <h1 className="py-10 font-bold text-3xl">Board of Directors</h1>
          <div className="grid gap-6 gap-x-10 md:grid-cols-2 mb-5">
            {duaTeratas.map((orang) => (
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
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-5">
          {tigaTeratas.map((orang) => (
            <div
              className="xl:max-w-[500px] xl:h-[250px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col xl:flex-row"
              key={orang.name}
            >
              <div className="p-2 flex items-center justify-center xl:w-[300px] xl:h-[200px]">
                <Image
                  src={orang.imageSrc}
                  alt={orang.name}
                  className="w-full h-full lg:mb-0 object-cover rounded-md"
                />
              </div>
              <div className="gap-1">
                <h5 className="md:text-sm lg:text-xl font-bold">
                  {orang.name}
                </h5>
                <p className="text-neutral-500 md:text-sm lg:text-lg font-bold dark:text-neutral-300">
                  {orang.position}
                </p>
                <ul className="list-disc ml-4">
                  <li>
                    <p className="text-neutral-500 md:text-xs lg:text-[13px] dark:text-neutral-300">
                      {orang.education}
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-500 md:text-xs lg:text-[13px] dark:text-neutral-300">
                      {orang.occupation}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-10">
          {scientificCommittee.map((orang) => (
            <div
              className="xl:max-w-[550px] xl:h-[250px] rounded-xl overflow-hidden p-6 gap-6 bg-[#F0F0F0] flex items-center justify-center flex-col xl:flex-row"
              key={orang.name}
            >
              <div className="p-2 flex items-center justify-center xl:w-[400px] xl:h-[200px]">
                <Image
                  src={orang.imageSrc}
                  alt="Risma"
                  className="w-full h-full lg:mb-0 object-cover rounded-md"
                />
              </div>
              <div className="gap-1">
                <h5 className="text-[20px] font-bold">{orang.name}</h5>
                <p className="text-neutral-500 text-[18px] font-bold dark:text-neutral-300">
                  {orang.position}
                </p>
                <ul className="list-disc ml-4">
                  <li>
                    <p className="text-neutral-500 text-[13px] dark:text-neutral-300">
                      {orang.education}
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-500 text-[13px] dark:text-neutral-300">
                      {orang.occupation}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {teams.map((orang) => (
          <div key={orang.team} className="flex flex-col">
            <h1 className="pb-5 text-3xl font-bold border-b-2">{orang.team}</h1>
            <div className="grid gap-x-[100px] gap-y-3 md:grid-cols-4 mb-5 mt-[25px]">
              {orang.members.map((member) => (
                <div
                  className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col"
                  key={orang.team}
                >
                  <div
                    className="lg:w-[180px] lg:h-[350px] items-center gap-2 overflow-hidden flex flex-col"
                    key={member.name}
                  >
                    <div className="overflow-hidden rounded-full lg:w-[150px] lg:h-[150px]">
                      <Image
                        src={member.imageSrc}
                        alt={member.name}
                        className="w-full rounded-md lg:mb-0"
                      />
                    </div>
                    <div className="text-center mt-4 gap-1">
                      <h5 className="text-base font-bold">{member.name}</h5>
                      <p className="text-neutral-500 text-sm font-bold dark:text-neutral-300">
                        {member.position}
                      </p>
                      <p className="text-neutral-500 text-sm dark:text-neutral-300">
                        {member.education}
                      </p>
                      <p className="text-neutral-500 text-sm dark:text-neutral-300">
                        {member.university}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
