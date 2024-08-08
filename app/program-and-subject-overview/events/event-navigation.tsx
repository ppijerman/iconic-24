"use client";

import { useState } from "react";
import { PATHS } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

export function EventNavigation() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.header
      className="sticky top-20 bg-white shrink-0 z-10"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="z-50">
        <Separator className="mb-4" />
        <div className="flex h-5 items-center justify-center space-x-4 text-sm gap-2 z-10">
          <Link href={PATHS.DAY_ONE}>
            <div className="hover:bg-gray-100 rounded-lg transition hover:text-accent font-semibold p-2">
              Day 1
            </div>
          </Link>

          <Separator orientation="vertical" />
          <Link href={PATHS.DAY_TWO}>
            <div className="hover:bg-gray-100 rounded-lg transition hover:text-accent font-semibold p-2">
              Day 2
            </div>
          </Link>
          <Separator orientation="vertical" />
          <Link href={PATHS.DAY_THREE}>
            <div className="hover:bg-gray-100 rounded-lg transition hover:text-accent font-semibold p-2">
              Day 3
            </div>
          </Link>
        </div>
        <Separator className="mt-4" />
      </div>
    </motion.header>
  );
}
