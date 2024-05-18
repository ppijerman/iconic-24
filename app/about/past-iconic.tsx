export function PastIconic() {
  const items = [
    {
      title: "ICONIC 2022",
      description:
        "Scientists at a leading research institution unveil a groundbreaking breakthrough in quantum computing.",
    },
    {
      title: "ICONIC 2018",
      description:
        "The first quantum computer is built by a team of researchers in a laboratory in the United States.",
    },
    {
      title: "ICONIC 2016",
      description:
        "A group of scientists in Europe publish a paper on quantum computing research.",
    },
    {
      title: "ICONIC 2014",
      description:
        "A team of researchers in Asia makes a significant breakthrough in quantum computing.",
    },
  ];

  return (
    <div className="p-6 sm:p-10">
      <div className="after:absolute after:inset-y-0 after:w-px after:bg-accent relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
        {items.map((item, index) => (
          <div key={index} className="grid gap-1 text-sm relative">
            <div className="aspect-square w-3 bg-accent rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
            <div className="text-2xl font-bold">{item.title}</div>
            <div className="text-gray-500 dark:text-gray-400">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
