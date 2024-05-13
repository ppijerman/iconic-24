export function TeamCTA() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* CTA team */}
      <div className="py-20 w-full bg-secondary text-primary flex flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center w-full min-h-[350px] gap-3">
          <h2 className="text-4xl font-bold text-center py-4">
            Meet the team of ICONIC 2024.
          </h2>
          <p className="text-center text-lg px-10">
            Introducing the ICONIC 2024 Committee, the architects of our
            transformative conference on low carbon development, held in
            Germany. This group of experts and thought leaders is dedicated to
            advancing sustainable practices and fostering international dialogue
            on environmental innovation. Learn about the committee members&apos;
            backgrounds in sustainability and their commitment to shaping a
            greener future.
          </p>
          <a href="/about/our-team">
            <div className="text-2xl flex flex-row gap-2 text-primary items-center justify-center ring-2 ring-primary group w-fit py-5 px-10 hover:text-accent hover:ring-accent transition duration-150 my-10">
              <h1 className="font-bold ">Team of ICONIC 2024</h1>
            </div>
          </a>
        </div>
      </div>

      {/* CTA reviewers */}
      <div className="py-20 w-full bg-accent2 text-white flex flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center w-full min-h-[350px] gap-3">
          <h2 className="text-4xl font-bold text-center py-4">
            Meet the reviewer team of ICONIC 2024.
          </h2>
          <p className="text-center text-lg px-10">
            Curious about the experts evaluating the submissions for our
            conference? Click here to learn more about our Reviewer Team.
            Discover the diverse group of professionals from Indonesia who bring
            their expertise to ensure the highest quality and relevance of our
            conference content.
          </p>
          <a href="/reviewers">
            <div className="text-2xl flex flex-row gap-2 text-white items-center justify-center ring-2 ring-white group w-fit py-5 px-10 hover:text-primary2 hover:ring-primary2 transition duration-150 my-10">
              <h1 className="font-bold ">Reviewer Team of ICONIC 2024</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
