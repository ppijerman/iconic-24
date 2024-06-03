import Image from "next/image";
import pastIconic01 from "@/assets/past-events/Iconic_2014.png";
import pastIconic02 from "@/assets/past-events/Iconic_2016.jpeg";
import pastIconic03 from "@/assets/past-events/03.jpg";
import pastIconic04 from "@/assets/past-events/Iconic_2022.png";

export function PastIconic() {
  const items = [
    {
      title: "ICONIC 2022",
      place: "Technische Universität Nürnberg",
      description:
        "Enhancement of Triple Helix Collaboration to Accelerate Urban and Rural Sustainable Development.",
      image: pastIconic04,
    },
    {
      title: "ICONIC 2018",
      place: "Universität Hamburg",
      description: "Science and Technology for Sustainable Development.",
      image: pastIconic03,
    },
    {
      title: "ICONIC 2016",
      place: "Leibniz Universität Hannover",
      description:
        "Industrial Revival: Optimizing Strategy on Business, Government, and Education.",
      image: pastIconic02,
    },
    {
      title: "ICONIC 2014",
      place: "RWTH Aachen",
      description:
        "Global Competitiveness and Developing Nations: A Strategic Approach towards Holistic Development",
      image: pastIconic01,
    },
  ];

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {items.map((item, index) => (
          <div
            className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            key={index}
          >
            <Image
              src={item.image}
              alt="Event Image"
              width={600}
              height={800}
              className="w-full rounded-t-2xl h-[250px] lg:h-[500px] object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl lg:text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {item.place}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
