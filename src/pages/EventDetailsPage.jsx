import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EventDetailsPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const allEvents = {
    technical: [
      { id: "1", title: "Capture The Flag", desc: "A Capture the Flag (CTF) is a 2-hour Jeopardy-style cybersecurity competition where participants solve puzzles across Cryptography, Web Security, OSINT, Blockchain Security, and Forensics.", img: "/images/ctf.jpg" },
      { id: "2", title: "Hackathon", desc: "Build innovative solutions in 24 hours. Team up, brainstorm, and code to solve real world challenges.", img: "/images/hackathon.jpg" },
    ],
    "non-technical": [
      { id: "3", title: "Treasure Hunt", desc: "Solve riddles and clues to move across checkpoints and find the treasure.", img: "/images/treasure.jpg" },
      { id: "4", title: "Gaming", desc: "Test your reflexes and strategies in a competitive gaming battle.", img: "/images/gaming.jpg" },
    ],
  };

  useEffect(() => {
    if (type && allEvents[type]) {
      setEvents(allEvents[type]);
    } else {
      setEvents([]);
    }
  }, [type]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <section 
        className="relative w-full h-64 md:h-80 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${type === "technical" ? "/images/technical-banner.jpg" : "/images/nontech-banner.jpg"})`,
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <h1 className="relative z-10 font-tftheme text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wider uppercase">
          {type} Events
        </h1>
      </section>
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 space-y-12">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col md:flex-row items-center bg-gray-900 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="p-6 flex-1">
              <h2 className="font-tftheme text-3xl font-bold text-pink-400 mb-4 uppercase">
                {event.title}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">{event.desc}</p>
              <button
                onClick={() => navigate(`/events/${type}/${event.id}`)}
                className="px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold transition"
              >
                View More
              </button>
            </div>
            <div className="flex-1">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default EventDetailsPage;