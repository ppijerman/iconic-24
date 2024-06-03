import Link from "next/link";

export function Subtopics() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">
        <Link href="/program-and-subject-overview/subject/economic-and-social-implication-of-lcd">
          <div className="group hover:bg-[#c05702] transition duration-300 flex flex-col w-full items-center justify-center h-fit md:h-[350px] bg-accent p-5 text-center">
            <h1 className="group-hover:text-white text-3xl md:text-4xl font-semibold">
              Economic and Social Implication of LCD
            </h1>
            <p className="group-hover:text-white p-5">
              Low-carbon development has impacts on the existing economic and
              social practices. Due to the transformative nature of low-carbon
              development, abrupt changes possibly threaten the sustainability
              of certain social groups.
            </p>
          </div>
        </Link>
        <Link href="/program-and-subject-overview/subject/political-economy-of-lcd-within-global-north-and-south-dynamics">
          <div className="group hover:bg-[#358257] transition duration-300 flex flex-col w-full items-center justify-center h-fit md:h-[350px] bg-primary2 p-5 text-center">
            <h1 className="group-hover:text-white text-3xl md:text-4xl font-semibold">
              Political Economy of LCD within Global North and South Dynamics
            </h1>
            <p className="group-hover:text-white p-5">
              Low-carbon transformation and its inevitable influence on
              geopolitical and geo-economic dynamics in international relations,
              and analyzing which voices are included and excluded in its
              discourse and selected approaches.
            </p>
          </div>
        </Link>
        <Link href="/program-and-subject-overview/subject/technological-innovation-for-lcd">
          <div className="group hover:bg-[#0f6ecc] transition duration-300 flex flex-col w-full items-center justify-center h-fit md:h-[350px] bg-accent2 p-5 text-center">
            <h1 className="group-hover:text-white text-3xl md:text-4xl font-semibold">
              Technological Innovation for LCD
            </h1>
            <p className="group-hover:text-white p-5">
              Technological innovation is key to advancing low-carbon
              development, with renewable energy, energy storage, and smart
              grids leading the transformation. These innovations reduce fossil
              fuel dependence, enhance energy efficiency, and support
              sustainable practices across various sectors.
            </p>
          </div>
        </Link>
        <Link href="/program-and-subject-overview/subject/lcd-in-built-environment">
          <div className="group hover:bg-[#727b2d] transition duration-300 flex flex-col w-full items-center justify-center h-fit md:h-[350px] bg-primary3 p-5 text-center">
            <h1 className="group-hover:text-white text-3xl md:text-4xl font-semibold">
              LCD in Built Environment
            </h1>
            <p className="group-hover:text-white p-5">
              The way the built environment is organized depends on logistics,
              material, planning ideas and lifestyle. Living areas, like cities,
              and construction sectors are one of the biggest carbon emitters on
              a global scale. Transformative ideas are needed to decarbonize the
              related sectors.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
