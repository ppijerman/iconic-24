import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { PATHS } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

export function IconicSchedule() {
  const schedule = [
    {
      day: "04",
      dayOfWeek: "Wednesday",
      date: "September 04, 2024",
      events: [
        {
          name: "Opening Ceremony",
          time: "9:00",
        },
        {
          name: "Ministerial Talk: Financing Low-Carbon Development in Indonesia",
          time: "10:30",
        },
        {
          name: "Decarbonizing the Industrial and Transport Sectors",
          time: "13:30",
        },
        {
          name: "Career Talk Paragon, Food Bazaar, Muslim wears Elita, PPI Jerman Merch",
          time: "15:30",
        },
      ],
    },
    {
      day: "05",
      dayOfWeek: "Thursday",
      date: "September 05, 2024",
      events: [
        {
          name: "Carbon Capture, Storage, and Removal: A Pathway to Low Carbon Development",
          time: "9:00",
        },
        {
          name: "Reducing AFOLU Emissions: Balancing Development and Conservation",
          time: "11:00",
        },
        {
          name: "Adaptation and Mitigation in the Built Environment in a Heating Climate",
          time: "14:00",
        },
      ],
      scientificConference: [
        {
          name: "Economic and Social Implication of Low Carbon Development",
          room: "ZHG 007",
        },
        {
          name: "Technological Innovation for Low Carbon Development",
          room: "ZHG 006",
        },
      ],
    },
    {
      day: "06",
      dayOfWeek: "Friday",
      date: "September 06, 2024",
      events: [
        { name: "Green Financing and Sustainable Investments for Low Carbon Development", time: "9:00" },
        { name: "Meet the Industry: Presentation of Companies", time: "11:15" },
      ],
      scientificConference: [
        {
          name: "Political Economy of Low Carbon Development within Global North and South Dynamics",
          room: "ZHG 007",
        },
        {
          name: "LCD in Built Environment",
          room: "ZHG 006",
        },
      ],
    },
  ];

  return (
    <section className="bg-white w-full text-secondary">
      <div className="container flex flex-col items-center justify-center py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Schedule</h1>
        <div className="py-4 flex text-md items-center justify-center">
          <p>
            *Please note that schedule is subject to change. Stay tuned for more information, 
            <br />and don&apos;t forget to check out the <Link href="https://drive.google.com/file/d/17ttyJ_toEDUmedjMbszCB5zhKnBU6B--/view" className="text-accent" target="_blank">event booklet</Link> for the latest updates and details!
          </p>
        </div>
        <h1 className="font-semibold text-xl md:text-2xl pt-4">
          September 4th - 6th 2024
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 py-12 md:py-16">
          {schedule.map((daySchedule, index) => (
            <Card key={index} className="w-full h-full">
              <CardHeader className="bg-secondary text-white p-4 rounded-t-md">
                <div className="text-4xl font-bold">{daySchedule.day}</div>
                <div className="text-sm">{daySchedule.dayOfWeek}</div>
              </CardHeader>
              <CardContent className="p-4 flex flex-col gap-4 w-full">
                {daySchedule.events.map((event, idx) => (
                  <div className="flex items-center justify-between" key={idx}>
                    <div className="font-medium">{event.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {event.time}
                    </div>
                  </div>
                ))}
                {daySchedule.scientificConference && (
                  <div className="flex items-center justify-between border-t-2 border-secondary py-2 mt-auto">
                    <div className="font-bold">Scientific Conference</div>
                    <div className="text-sm text-muted-foreground">
                      9:00 - 13:00
                    </div>
                  </div>
                )}
                {daySchedule.scientificConference?.map((event, idx) => (
                  <div className="flex items-center justify-between" key={idx}>
                    <div className="font-medium">{event.name}</div>
                    <div className="text-sm text-muted-foreground text-right">
                      {event.room}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Link
          href={PATHS.EVENTS}
          className="flex items-center gap-5 w-fit p-2 hover:text-accent2 transition duration-500"
        >
          <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">
            View Full Schedule
          </h1>
          <ArrowRightIcon className="w-12 h-12" />
        </Link>
      </div>
    </section>
  );
}
