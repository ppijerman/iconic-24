import { PATHS } from "@/lib/constants";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="bg-gray-200">
        <div className="container grid grid-cols-3 py-6 items-center justify-center gap-2">
          <Link href={PATHS.DAY_ONE} className="place-self-center group">
            <div className="shadow-md rounded-lg p-5 flex items-center justify-center w-fit  bg-white group-hover:bg-accent2 transition duration-200 group-hover:text-white">
              <h2 className="font-bold text-3xl">DAY 1</h2>
            </div>
          </Link>
          <Link href={PATHS.DAY_TWO} className="place-self-center group">
            <div className="shadow-md rounded-lg p-5 flex items-center justify-center w-fit place-self-center bg-white group-hover:bg-accent2 transition duration-200 group-hover:text-white">
              <h2 className="font-bold text-3xl">DAY 2</h2>
            </div>
          </Link>
          <Link href={PATHS.DAY_THREE} className="place-self-center group">
            <div className="shadow-md rounded-lg p-5 flex items-center justify-center w-fit place-self-center bg-white group-hover:bg-accent2 transition duration-200 group-hover:text-white">
              <h2 className="font-bold text-3xl">DAY 3</h2>
            </div>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
