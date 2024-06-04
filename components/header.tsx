"use client";

import iconicLogo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  HamburgerMenuIcon,
  Cross1Icon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";

import { PATHS } from "@/lib/constants";

type NavigationItem = {
  title: string;
  href: string;
  description: string;
};

const programAndSubjectOverview: NavigationItem[] = [
  {
    title: "Subject",
    href: PATHS.SUBJECT,
    description: "Learn more about the subjects of the conference.",
  },
  {
    title: "Events",
    href: PATHS.EVENTS,
    description: "Learn more about the events of the conference.",
  },
  {
    title: "Speakers",
    href: PATHS.SPEAKERS,
    description: "Learn more about the speakers of the conference.",
  },
];

const duringTheStay: NavigationItem[] = [
  {
    title: "Preparation",
    href: PATHS.PREPARATION,
    description: "Learn more about the preparation for the conference.",
  },
  {
    title: "Venue Göttingen",
    href: PATHS.VENUE,
    description: "Learn more about the venue in Göttingen.",
  },
  {
    title: "Online Participant",
    href: PATHS.ONLINE_PARTICIPANT,
    description: "Learn more about the online participation.",
  },
  {
    title: "City Day Trip",
    href: PATHS.CITY_DAY_TRIP,
    description: "Learn more about the city day trip.",
  },
  {
    title: "FAQ",
    href: PATHS.FAQ,
    description: "Learn more about the frequently asked questions.",
  },
];

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export function IconicHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Close the menu when the component mounts
  useEffect(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Define a function to determine if a link is active based on the pathname
  const isActive = (linkPath: string) => {
    if (linkPath === "/") return pathname === "/";
    return pathname === linkPath || pathname.includes(linkPath);
  };

  return (
    <header className="flex items-center justify-center bg-white z-50">
      <nav className="flex flex-row justify-between items-center w-[95%] p-1 bg-white">
        <div className="flex flex-row items-center justify-center">
          <Link href="/">
            <Image
              src={iconicLogo}
              alt="Iconic Logo"
              className="w-[48px] md:w-[60px] p-2 transition"
            />
          </Link>
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex absolute z-50 lg:static bg-white min-h-[60vh] lg:min-h-fit left-0 top-[6%] md:top-[8%] lg:top-0 w-full items-center  lg:py-0 lg:px-0 px-5 md:px-8 py-8 shadow-lg lg:shadow-none rounded-lg`}
        >
          <ul className="flex flex-col lg:flex-row gap-5 lg:gap-4 lg:justify-end lg:items-center w-full font-semibold h-full border-b-2 md:border-0">
            {[
              { href: PATHS.HOME, label: "Home" },
              {
                href: PATHS.ABOUT,
                label: "About",
                submenus: [
                  {
                    href: PATHS.OUR_TEAM,
                    label: "Our Team",
                  },
                  {
                    href: PATHS.REVIEWERS,
                    label: "Reviewers",
                  },
                ],
              },
              {
                href: "#",
                label: "Program and Subject Overview",
                submenus: [
                  {
                    href: PATHS.SUBJECT,
                    label: "Subject",
                  },
                  {
                    href: PATHS.EVENTS,
                    label: "Events",
                  },
                  {
                    href: PATHS.SPEAKERS,
                    label: "Speakers",
                  },
                ],
              },
              {
                href: PATHS.DURING_THE_STAY,
                label: "During the Stay",
                submenus: [
                  {
                    href: PATHS.PREPARATION,
                    label: "Preparation",
                  },
                  {
                    href: PATHS.VENUE,
                    label: "Venue Göttingen",
                  },
                  {
                    href: PATHS.ONLINE_PARTICIPANT,
                    label: "Online Participant",
                  },
                  {
                    href: PATHS.CITY_DAY_TRIP,
                    label: "City Day Trip",
                  },
                  {
                    href: PATHS.FAQ,
                    label: "FAQ",
                  },
                ],
              },
              {
                href: PATHS.EVENT_REGISTRATION,
                label: "Event Registration",
              },
              { href: PATHS.SUBMISSION, label: "Abstract Submission" },
            ].map((item) => (
              <Link href={item.href} key={item.href} className="">
                <li
                  className={`p-2 text-base ${
                    isActive(item.href) ? "text-primary2" : ""
                  }`}
                  onMouseEnter={() => setHoveredLink(item.label)} // Set the hovered link's href
                  onMouseLeave={() => setHoveredLink("")} // Clear the hovered link's href
                >
                  {(item.label && (
                    <span className="flex flex-col hover:text-accent transition lg:flex-row w-full gap-1 lg:items-center lg:justify-center h-full">
                      {item.label}
                      {item.submenus && !isOpen && (
                        <ChevronDownIcon
                          className={`w-4 h-4 inline transition ${
                            hoveredLink === item.label
                              ? "rotate-0"
                              : "rotate-180"
                          }`}
                        />
                      )}
                    </span>
                  )) ||
                    ""}

                  {item.submenus && (
                    <div className="lg:hidden flex flex-col gap-4 w-full text-sm mt-4 font-normal">
                      {item.submenus?.map((submenu) => (
                        <Link href={submenu.href} key={submenu.href}>
                          <motion.div
                            className="cursor-pointer hover:text-accent"
                            transition={{ duration: 0.3 }}
                          >
                            {submenu.label}
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* dropdown */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                  >
                    {item.submenus &&
                      hoveredLink === item.label &&
                      item.submenus.length > 0 && (
                        <div className="absolute lg:flex hidden">
                          <motion.div
                            transition={transition}
                            layoutId="active" // layoutId ensures smooth animation
                            className="bg-white backdrop-blur-sm overflow-hidden rounded-md shadow-md w-full h-full"
                          >
                            <motion.div
                              layout // layout ensures smooth animation
                              className="w-max h-full p-4 pr-10 flex flex-col gap-3"
                            >
                              {item.submenus.map((submenu) => (
                                <Link href={submenu.href} key={submenu.href}>
                                  <motion.div
                                    className="cursor-pointer text-secondary hover:text-accent transition"
                                    transition={{ duration: 0.3 }}
                                  >
                                    {submenu.label}
                                  </motion.div>
                                </Link>
                              ))}
                            </motion.div>
                          </motion.div>
                        </div>
                      )}
                  </motion.div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          {isOpen ? (
            <Cross1Icon
              className="lg:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <HamburgerMenuIcon
              className="lg:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </nav>
    </header>
  );
}
