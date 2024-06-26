import Image from "next/image";
import dicoImage from "@/assets/dico.png";
import { APP_NAME } from "@/lib/constants";

export const metadata = {
  title: APP_NAME + " | " + "Event Registration",
  description: "Registration page for the conference",
};

export default function Registration() {
  return (
    <div className="flex flex-col gap-10 min-h-screen items-center justify-center bg-white">
      <Image src={dicoImage} alt="Dico" width={100} height={100} />
      <h1 className="text-4xl font-bold">TO BE ANNOUNCED</h1>
    </div>
  );
}
