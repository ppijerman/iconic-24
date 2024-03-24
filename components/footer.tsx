import Image from "next/image";
import PPIJLogo from "@/assets/PPIJ_Logo_Color.png";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export function IconicFooter() {
  return (
    <footer className="bg-accent2 text-white min-h-[200px] flex flex-col items-center justify-center w-full">
      <div className="flex flex-col md:flex-row gap-[4vw] justify-center items-center w-[80%] p-5">
        <div className="flex flex-col justify-center items-center w-full">
          <Image src={PPIJLogo} alt="PPIJ Logo" width={500} height={200} />
        </div>

        <div className="flex flex-col w-full gap-4 border-b-2 md:border-none pb-3">
          <ul>
            <li>
              <h2 className="text-xl">Contact Us</h2>
            </li>
            <li>
              <p className="">
                <a
                  href="mailto:info@iconic.ppijerman.org"
                  className="text-white font-semibold hover:text-accent transition"
                >
                  info@iconic.ppijerman.org
                </a>
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 w-full border-b-2 md:border-none pb-3">
          <ul className="flex flex-col gap-3 text-base md:text-lg ">
            <Link
              href="/what-is-iconic"
              className="hover:text-accent transition"
            >
              <li>What is ICONIC?</li>
            </Link>
            <Link href="/our-team" className="hover:text-accent transition">
              <li>Our Team</li>
            </Link>
            <Link href="/partnership" className="hover:text-accent transition">
              <li>Be a partner</li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col gap-3 w-full items border-b-2 md:border-none pb-3">
          <ul className="flex flex-col gap-3 text-base md:text-lg hover:text-accent transition">
            <Link
              href="/terms-and-conditions"
              className="hover:text-accent transition"
            >
              <li>Terms and Conditions</li>
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-accent transition"
            >
              <li>Privacy Policy</li>
            </Link>
            <Link href="/submission" className="hover:text-accent transition">
              <li>Submission</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex w-[70%] flex-col items-center pb-5">
        <div className="flex flex-row gap-2">
          <Link href="https://instagram.com/ppijerman">
            <InstagramLogoIcon className="w-10 h-10 text-white hover:text-accent transition" />
          </Link>
          <Link href="https://www.linkedin.com/company/ppijerman/">
            <LinkedInLogoIcon className="w-10 h-10 text-white hover:text-accent transition" />
          </Link>
          <TwitterLogoIcon className="w-10 h-10 text-white hover:text-accent transition" />
        </div>
      </div>
    </footer>
  );
}
