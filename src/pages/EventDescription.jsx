import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Dummy data for single event details
const eventDetailsData = {
  technical: {
    '1': {
      title: "Capture The Flag",
      description: "A 2-hour Jeopardy-style cybersecurity competition where participants solve a series of tasks or puzzles across different categories, such as Cryptography, Web Security, Open-Source Intelligence (OSINT), Blockchain Security, and Forensics. Each task is worth a specific number of points based on its difficulty. Participants gain points by successfully completing challenges by finding a hidden string of text called a “flag.” The competition is usually time-bound, and the individual with the highest score at the end wins.",
      rules: [
        "Participants are required to register themselves in the Arcane’s CTF platform.",
        "All challenges are accessible from the start, and participants can solve them in any order.",
        "Points are awarded for each challenge based on difficulty.",
        "Participants must not attack or disrupt the CTF infrastructure, or the network.",
        "Any form of cheating, such as flag sharing, brute forcing the flags, exploiting the scoring system, or unauthorized access to the organizers’ systems, is strictly prohibited and will lead to disqualification.",
        "Participants are expected to follow a code of conduct, maintaining professionalism and respect throughout the event.",
        "The organizers’ decisions regarding scoring, disputes, and rule interpretations are final.",
        "Top 5 participants must provide a write-up detailing their challenge solutions to verify authenticity and ensure no cheating occurred.",
        "The competition is time-bound (2 hours), and the individual with the highest score at the end wins.",
        "In case of a tie, the participant with more first bloods will rank higher; if still tied, the one who completed the last challenge quickest will be considered."
      ],
      faculty: ["Dr. S.P. Valli", "Dr. C. Hema", "Mrs. S.M. Shifana", "Mrs. C. Tamilarasi"],
      students: ["Mohammed Waseem Ahmed - 8939251456", "Mohammed Aseem - 6383787625"],
      timings: "09:15 - 10:45",
      type: "Individual",
      img: "/images/ctf.jpg"
    },
    '2': {
      title: "Hackathon",
      description: "Build innovative solutions in 24 hours. Team up, brainstorm, and code to solve real-world challenges.",
      rules: ["Teams of 2–4 members", "Project must be built within 24 hours", "Judging based on innovation, functionality, and presentation"],
      faculty: ["Dr. A. Mentor", "Prof. B. Guide"],
      students: ["John Doe - 9876543210", "Jane Smith - 9123456780"],
      timings: "Full Day Event",
      type: "Team",
      img: "/images/hackathon.jpg"
    }
  },
  "non-technical": {
    '3': {
      title: "Treasure Hunt",
      description: "Solve riddles and clues to move across checkpoints and find the treasure.",
      rules: ["Teams up to 4", "No use of outside help", "Follow safety guidelines"],
      faculty: ["Prof. A", "Prof. B"],
      students: ["Ali - 9999999999", "Sara - 8888888888"],
      timings: "2 Hours",
      type: "Team",
      img: "/images/treasure.jpg"
    },
    '4': {
      title: "Gaming",
      description: "Test your reflexes and strategies in a competitive gaming battle.",
      rules: ["Follow game-specific rules", "Respect opponents", "Tournament decisions are final"],
      faculty: ["Mr. X"],
      students: ["Coordinator - 7777777777"],
      timings: "3 Hours",
      type: "Individual/Team",
      img: "/images/gaming.jpg"
    }
  }
};

const EventDescription = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const event = eventDetailsData[type]?.[id];

  if (!event) {
    return (
      <div className="flex flex-col min-h-screen bg-black text-white justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
        <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-700 rounded-md">Go Back</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <section 
        className="w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${event.img})`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold tracking-wide text-white">
          {event.title}
        </h1>
      </section>
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <img src={event.img} alt={event.title} className="rounded-xl shadow-lg w-full object-cover" />
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold mb-1">Timings</h3>
            <p className="text-gray-300">{event.timings}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold mb-1">Participation</h3>
            <p className="text-gray-300">{event.type}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold mb-1">Faculty Coordinators</h3>
            <ul className="text-gray-300 space-y-1">
              {event.faculty.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold mb-1">Student Coordinators</h3>
            <ul className="text-gray-300 space-y-1">
              {event.students.map((s, i) => (<li key={i}>{s}</li>))}
            </ul>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            >
              ← Back
            </button>
            <a href="#register" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-700 to-pink-400 text-black font-semibold transition">
              Register
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-pink-400 mb-3">Description</h2>
            <p className="text-gray-300 leading-relaxed">{event.description}</p>
          </section>
          {event.rules && event.rules.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-3">Rules</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {event.rules.map((r, i) => (<li key={i}>{r}</li>))}
              </ul>
            </section>
          )}
          {event.criteria && (
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-3">Winning Criteria</h2>
              <p className="text-gray-300">{event.criteria}</p>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDescription;
