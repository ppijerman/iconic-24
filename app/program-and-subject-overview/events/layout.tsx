import { EventNavigation } from "./event-navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <EventNavigation />
      {children}
    </div>
  );
}
