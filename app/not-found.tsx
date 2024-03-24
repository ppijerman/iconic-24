"use client";

import { useEffect } from "react";
import dicoImage from "@/assets/dico.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-10 min-h-screen items-center justify-center">
      <Image src={dicoImage} alt="Dico" width={100} height={100} />
      <h1 className="text-4xl font-bold">404 Not Found</h1>
    </div>
  );
}
