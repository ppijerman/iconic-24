import { APP_NAME } from "@/lib/constants";
import { Committee } from "./committe";

export const metadata = {
  title: APP_NAME + " | " + "Our Team",
  description: "Meet the team behind the conference",
};

export default function TeamPage() {
  return <Committee />;
}
