"use client";
import { useEffect, useState } from "react";

const Countdowncard = ({ title, date, image }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [formattedDate, setFormattedDate] = useState("");

  const calculateTimeLeft = () => {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    setFormattedDate(new Date(date).toLocaleDateString());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);

    return () => clearInterval(timer);
  }, [date]);

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-md group transition duration-300 hover:scale-[1.02] hover:shadow-xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "260px",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition duration-300" />
      <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          {formattedDate && (
            <p className="underline text-sm mt-1">{formattedDate}</p>
          )}
        </div>
        <div className="flex gap-4 mt-6">
          <TimeBox label="DAYS" value={timeLeft.days} />
          <TimeBox label="HOURS" value={timeLeft.hours} />
          <TimeBox label="MINUTES" value={timeLeft.minutes} />
        </div>
      </div>
    </div>
  );
};

const TimeBox = ({ label, value }) => (
  <div className="text-center bg-black bg-opacity-40 px-4 py-2 rounded-md">
    <div className="text-3xl font-semibold">{value ?? "00"}</div>
    <div className="text-xs">{label}</div>
  </div>
);

export default function Home() {
  const games = [
    {
      title: "Mafia: The Old Country",
      date: "2025-08-08",
      image: "https://via.placeholder.com/400x250?text=Mafia",
    },
    {
      title: "Metal Gear Solid Delta: Snake...",
      date: "2025-08-28",
      image: "https://via.placeholder.com/400x250?text=Metal+Gear",
    },
    {
      title: "Hell is Us",
      date: "2025-09-04",
      image: "https://via.placeholder.com/400x250?text=Hell+is+Us",
    },
    {
      title: "Ghost of Yotei",
      date: "2025-10-02",
      image: "https://via.placeholder.com/400x250?text=Ghost+of+Yotei",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-[940px] mx-auto px-[20px]">
        <h1 className="text-3xl font-semibold mb-8 text-gray-800">
          Most Anticipated
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game, idx) => (
            <Countdowncard
              key={idx}
              title={game.title}
              date={game.date}
              image={game.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
