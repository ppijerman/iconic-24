"use client";

import { useState, useEffect } from "react";

export function Countdown() {
  const eventDate = new Date("2024-09-06T00:00:00Z");
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const timeLeft = eventDate.getTime() - currentTime;

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    const intervalChange = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalChange);
  }, [eventDate]);

  return (
    <section className="flex flex-col justify-center items-center text-primary bg-secondary min-h-[30rem] py-5">
      <div className="flex flex-col items-center space-y-3 text-2xl md:text-4xl text-center p-3">
        <h2 className="text-primary">READY FOR</h2>
        <h2 className="text-2xl md:text-5xl lg:text-7xl font-semibold tracking-wide">
          Transformation For Low-Carbon Development
        </h2>
      </div>
      <div className="grid grid-cols:2 md:grid-cols-4 items-center w-full sm:w-full lg:w-1/2 mt-10">
        {Object.entries(countdown).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center space-y-1">
            <strong
              aria-label={key}
              className="text-xl md:text-3xl lg:text-5xl font-bold text-accent"
            >
              {value}
            </strong>
            <span className="text-lg md:text-2xl lg:text-3xl font-medium">
              {key.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
