import Image from "next/image";

export function AboutPage() {
  return (
    <section className="min-h-screen bg-white text-secondary flex flex-col items-center">
      <div className="flex flex-row gap-10">
        <div></div>
        <div>
          <h1 className="text-6xl">About</h1>
          <p>
            ICONIC 2024 is a conference that brings together the best and
            brightest minds in the world of technology. This year, we are
            focusing on the future of technology and how it will impact our
            lives. We will have speakers from all over the world who will share
            their insights and ideas on the future of technology.
          </p>
        </div>
      </div>
    </section>
  );
}
