// src/components/Events.jsx
import React from "react";

const technicalEvents = [
  { id: 1, name: "Hackathon" },
  { id: 2, name: "Code Golf" },
  { id: 3, name: "Game Jam" },
  { id: 4, name: "Debugging Wars" },
];

const nonTechnicalEvents = [
  { id: 1, name: "Treasure Hunt" },
  { id: 2, name: "Gaming Arena" },
  { id: 3, name: "Photography Contest" },
  { id: 4, name: "Short Film" },
];

export default function Events() {
  return (
    <section className="w-full bg-black text-white py-16 overflow-hidden">
      {/* Technical Events */}
      <h2 className="font-tftheme text-3xl font-bold text-center mb-6">Technical Events</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 animate-marquee-left">
          {[...technicalEvents, ...technicalEvents].map((event, idx) => (
            <div
              key={idx}
              className="min-w-[200px] bg-gray-900 p-6 rounded-2xl shadow-lg text-center"
            >
              {event.name}
            </div>
          ))}
        </div>
      </div>

      {/* Non-Technical Events */}
      <h2 className="font-tftheme text-3xl font-bold text-center my-10">Non-Technical Events</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 animate-marquee-right">
          {[...nonTechnicalEvents, ...nonTechnicalEvents].map((event, idx) => (
            <div
              key={idx}
              className="min-w-[200px] bg-gray-800 p-6 rounded-2xl shadow-lg text-center"
            >
              {event.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
