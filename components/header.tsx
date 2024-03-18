import iconicLogo from "@/assets/logo.png";
import Image from "next/image";

export function IconicHeader() {
  return (
    <header className="flex">
      <nav className="flex flex-row justify-between items-center w-full p-5">
        <div className="flex flex-row items-center justify-center gap-2">
          <Image src={iconicLogo} alt="Iconic Logo" width={48} height={48} />
          <h1 className="text-2xl">ICONIC 2024</h1>
        </div>
        <div>
          <ul className="flex flex-row gap-10 justify-center items-center w-full mr-20">
            <li>Home</li>
            <li>What is ICONIC?</li>
            <li>Speakers</li>
            <li>Register</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
