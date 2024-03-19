import iconicLogo from "@/assets/logo-text-main.png";
import dicoLogo from "@/assets/dico.png";
import Image from "next/image";
import Link from "next/link";

export function IconicHeader() {
  return (
    <header className="flex bg-white">
      <nav className="flex flex-row justify-between items-center w-full p-5">
        <div className="flex flex-row items-center justify-center gap-2">
          <Image src={iconicLogo} alt="Iconic Logo" width={400} height={100} />
        </div>
        <div>
          <ul className="flex flex-row gap-10 justify-center items-center w-full mr-20">
            <Link href="/">
              <li>Home</li>
            </Link>

            <Link href="/about">
              <li>What is ICONIC?</li>
            </Link>
            <Link href="/speakers">
              <li>Speakers</li>
            </Link>
            <li>Submission</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
