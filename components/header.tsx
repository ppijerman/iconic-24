"use client";

import iconicLogo from "@/assets/logo-text-main.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export function IconicHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Define a function to determine if a link is active based on the pathname
  const isActive = (linkPath: string) => pathname === linkPath;

  return (
    <header className="flex items-center justify-center bg-white">
      <nav className="flex flex-row justify-between items-center w-[95%] py-2 bg-white">
        <div className="flex flex-row items-center justify-center gap-2">
          <Image src={iconicLogo} alt="Iconic Logo" width={400} height={100} />
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex absolute md:static bg-white min-h-[60vh] md:min-h-fit left-0 top-[8%] w-full items-center px-5`}
        >
          <ul className="flex flex-col md:flex-row gap-14 md:gap-[4vw] md:justify-end md:items-center w-full font-semibold h-full">
            {[
              { href: "/", label: "Home" },
              { href: "/what-is-iconic", label: "What is ICONIC?" },
              { href: "/speakers", label: "Speakers" },
              { href: "/submission", label: "Submit now" },
            ].map((item) => (
              <Link href={item.href} key={item.href}>
                <li
                  className={`hover:text-accent transition p-2 ${
                    isActive(item.href) ? "bg-secondary p-2 rounded-md text-white" : ""
                  }`}
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          {isOpen ? (
            <Cross1Icon
              className="md:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <HamburgerMenuIcon
              className="md:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </nav>
    </header>
  );
}
