import Image from "next/image";
import fieldOfStudy1 from "@/assets/fieldOfStudies/1.svg";
import fieldOfStudy2 from "@/assets/fieldOfStudies/2.svg";
import fieldOfStudy3 from "@/assets/fieldOfStudies/3.svg";
import fieldOfStudy4 from "@/assets/fieldOfStudies/4.svg";
import fieldOfStudy5 from "@/assets/fieldOfStudies/5.svg";
import fieldOfStudy6 from "@/assets/fieldOfStudies/6.svg";
import fieldOfStudy7 from "@/assets/fieldOfStudies/7.svg";
import fieldOfStudy8 from "@/assets/fieldOfStudies/8.svg";

export function FieldOfStudy() {
  const fieldsOfStudy = [
    { name: "Finance, Economics and Business", image: fieldOfStudy1 },
    { name: "Social Science", image: fieldOfStudy2 },
    { name: "Geoscience, Climate and Ecology", image: fieldOfStudy3 },
    { name: "International Relations", image: fieldOfStudy4 },
  ];
  const fieldsOfStudy2 = [
    {
      name: "Science, Technology, Engineering, and Mathematics (STEM)",
      image: fieldOfStudy5,
    },
    {
      name: "Infrastructure, Architecture, Land-use and Spatial Planning",
      image: fieldOfStudy6,
    },
    {
      name: "Agriculture, Livestock, Fishery, and Forestry (ALFF)",
      image: fieldOfStudy7,
    },
    {
      name: "Public Policy and STS (Science, Technology, and Society)",
      image: fieldOfStudy8,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white w-full min-h-screen p-10">
      <h1 className="bg-accent2 mb-15 text-4xl md:text-6xl flex font-bold p-5 text-white">
        FIELDS OF STUDY
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full p-2 gap-5 text-center text-secondary text-lg md:text-xl lg:text-2xl font-semibold py-10">
        {fieldsOfStudy.map((field, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center justify-center bg-white p-5 min-h-[230px] md:min-h-[300px] ring-2 ring-secondary"
          >
            <Image
              src={field.image}
              alt={field.name}
              className="w-32 py-5 text-secondary"
            />
            <h2>{field.name}</h2>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full p-2 gap-5 text-center text-secondary text-lg md:text-xl lg:text-2xl font-semibold py-10">
        {fieldsOfStudy2.map((field, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center justify-center bg-white p-5 min-h-[230px] md:min-h-[300px] ring-2 ring-secondary"
          >
            <Image
              src={field.image}
              alt={field.name}
              className="w-32 py-5 text-secondary"
            />
            <h2>{field.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
