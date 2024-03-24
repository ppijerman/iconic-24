import Image from "next/image";
import PPIJLogo from "@/assets/PPIJ_Logo_Color.png";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export function IconicFooter() {
  return (
    <footer className="bg-primary3 min-h-[200px] flex items-center justify-center">
      <div className="flex flex-row gap-[4vw]">
        <div className="flex flex-col justify-center items-center">
          <Image src={PPIJLogo} alt="PPIJ Logo" width={300} height={200} />
          <div className="flex flex-row gap-2">
            <InstagramLogoIcon className="w-10 h-10 text-white" />
            <LinkedInLogoIcon className="w-10 h-10 text-white" />
            <TwitterLogoIcon className="w-10 h-10 text-white" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <ul>
            <li>
              <h2 className="text-white text-2xl">Contact Us</h2>
            </li>
            <li>
              <p className="text-white">
                Email:{" "}
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
      </div>
    </footer>
  );
}
