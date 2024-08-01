/**
 * v0 by Vercel.
 * @see https://v0.dev/t/m5bNsrk1NbL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";

import iconicLogo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect, use } from "react";
import { PATHS } from "@/lib/constants";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

type NavItem = {
  href: string;
  label: string;
  description?: string;
  submenus?: NavItem[];
};

const navItems: NavItem[] = [
  { href: PATHS.HOME, label: "Home" },
  {
    href: PATHS.ABOUT,
    label: "About",
    submenus: [
      {
        href: PATHS.OUR_TEAM,
        label: "Our Team",
        description: "Meet our dedicated team",
      },
      {
        href: PATHS.REVIEWERS,
        label: "Reviewers",
        description: "Our panel of reviewers",
      },
      {
        href: PATHS.JOIN_THE_MOVEMENT,
        label: "Join the Movement",
        description: "Join the movement to plant mangrooves with ICONIC 2024",
      },
    ],
  },
  {
    href: PATHS.EVENTS,
    label: "Program Overview",
    submenus: [
      {
        href: PATHS.EVENTS,
        label: "Events and Schedule",
        description: "Explore our 3-day event and schedule",
      },
      {
        href: PATHS.SPEAKERS,
        label: "Speakers",
        description: "Meet our list of potential speakers",
      },
      {
        href: PATHS.SUBJECT,
        label: "Subject",
        description: "Learn about the subjects of ICONIC 2024",
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
        description: "Get ready for the conference",
      },
      {
        href: PATHS.VENUE,
        label: "Venue Göttingen",
        description: "Explore the ICONIC 2024's Venue",
      },
      {
        href: PATHS.ONLINE_PARTICIPANT,
        label: "Online Participant",
        description: "Guidelines for online participation",
      },
      {
        href: PATHS.CITY_DAY_TRIP,
        label: "City Day Trip",
        description: "Explore the city of Göttingen",
      },
      { href: PATHS.FAQ, label: "FAQ" },
    ],
  },
  { href: PATHS.PARTNERSHIP, label: "Sponsors" },
  { href: PATHS.EVENT_REGISTRATION, label: "Registration" },
  { href: PATHS.SUBMISSION, label: "Abstract Submission" },
];

export function IconicHeader() {
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // show/hide header on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Define a function to determine if a link is active based on the pathname
  const isActive = (linkPath: string) => {
    if (linkPath === "/") return pathname === "/";
    return pathname === linkPath || pathname.includes(linkPath);
  };

  return (
    <motion.header
      className="sticky top-0 flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-white z-50"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Link href={PATHS.HOME}>
        <Image src={iconicLogo} alt="Iconic Logo" className="w-12" />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden ml-auto">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Image
              src={iconicLogo}
              alt="Iconic Logo"
              className="w-[48px] md:w-[60px] p-2 transition"
            />
            <span className="text-lg font-bold">ICONIC 2024</span>
          </Link>
          <div className="grid gap-4 py-6">
            {navItems.map((item, index) =>
              item.submenus ? (
                <Collapsible className="grid gap-4" key={index}>
                  <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90 py-2">
                    {item.label}{" "}
                    <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="-mx-6 grid gap-6 bg-muted p-6">
                      {item.submenus.map((submenu, subIndex) => (
                        <Link
                          href={submenu.href}
                          className="group grid h-auto w-full justify-start gap-1"
                          key={subIndex}
                          prefetch={false}
                        >
                          <div className="text-sm font-medium leading-none group-hover:underline">
                            {submenu.label}
                          </div>
                          {submenu.description && (
                            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {submenu.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link
                  href={item.href}
                  className="flex flex-col w-full items-start py-2 text-lg font-semibold"
                  key={index}
                  prefetch={false}
                >
                  <div>{item.label}</div>
                  {item.description && (
                    <div className="text-sm leading-snug text-muted-foreground">
                      {item.description}
                    </div>
                  )}
                </Link>
              )
            )}
          </div>
        </SheetContent>
      </Sheet>

      {/* mobile */}
      <div className="ml-auto hidden lg:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item, index) =>
              item.submenus ? (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger
                    className={`hover:text-accent bg-white hover:bg-white focus:bg-gray-100 ${
                      isActive(item.href) ? "text-primary2" : ""
                    }`}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] p-2">
                      {item.submenus.map((submenu, subIndex) => (
                        <NavigationMenuLink asChild key={subIndex}>
                          <Link
                            href={submenu.href}
                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-accent focus:bg-gray-100 focus:outline-none"
                            prefetch={false}
                          >
                            <div className="text-sm font-medium leading-none">
                              {submenu.label}
                            </div>
                            {submenu.description && (
                              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {submenu.description}
                              </div>
                            )}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuLink asChild key={index}>
                  <Link
                    href={item.href}
                    className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:text-accent focus:bg-gray-100 focus:outline-none ${
                      isActive(item.href) ? "text-primary2" : ""
                    }`}
                    prefetch={false}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </motion.header>
  );
}

function ChevronRightIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MenuIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
