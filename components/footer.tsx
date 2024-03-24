import Image from "next/image";
import PPIJLogo from "@/assets/PPIJ_Logo_Color.png";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export function IconicFooter() {
  return (
    <footer className="bg-gray-600 text-white min-h-[200px] flex flex-col items-center justify-center">
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
                  className="text-accent"
                >
                  info@iconic.ppijerman.org
                </a>
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 w-full border-b-2 md:border-none pb-3">
          <ul className="flex flex-col gap-3 text-base md:text-xl">
            <li>What is ICONIC?</li>
            <li>Our Team</li>
            <li>Be a partner</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 w-full items border-b-2 md:border-none pb-3">
          <ul className="flex flex-col gap-3 text-base md:text-xl">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="flex w-[70%] flex-col items-center pb-5">
        <div className="flex flex-row gap-2">
          <InstagramLogoIcon className="w-10 h-10 text-white" />
          <LinkedInLogoIcon className="w-10 h-10 text-white" />
          <TwitterLogoIcon className="w-10 h-10 text-white" />
        </div>
      </div>
    </footer>
  );
}
