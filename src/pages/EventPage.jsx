import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EventPage = () => {
  const navigate = useNavigate();
  const eventCategories = [
    {
      name: "TECHNICAL",
      img: "/images/technical.jpg",
      type: "technical",
    },
    {
      name: "NON TECHNICAL",
      img: "/images/non-technical.jpg",
      type: "non-technical",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 flex flex-col items-center pt-20">
        <h1 className="font-tftheme text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-950 to-pink-300 mb-12 tracking-wider text-center">
          EVENTS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl px-6">
          {eventCategories.map((event, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/events/${event.type}`)}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div
                style={{
                  padding: "4px",
                  borderRadius: "1rem",
                  background: "linear-gradient(to right, #4c1d95, #f9a8d4)",
                  display: "inline-block",
                }}
              >
                <img
                  src={event.img}
                  alt={event.name}
                  width={370}
                  height={370}
                  style={{
                    aspectRatio: "1 / 1",
                    width: "370px",
                    height: "370px",
                    objectFit: "cover",
                    borderRadius: "0.75rem",
                  }}
                  className="rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300" />
              <h2 className="font-tftheme text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-950 to-pink-300 text-center absolute bottom-5 left-1/2 -translate-x-1/2">
                {event.name}
              </h2>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventPage;