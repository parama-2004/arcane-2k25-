import React from "react";
import Header from "../components/Header";

const clubs = [
  { name: "Cyber Security Club", img: "https://i.postimg.cc/13tMwfN7/Untitled-design-2-1-removebg-preview-1.png" },
  { name: "CSE Coding Club", img: "https://i.postimg.cc/VkWNQLvg/Untitled-design-1-1-removebg-preview-1.png" },
  { name: "Crescent Data Science Club", img: "https://i.postimg.cc/W4x157Mx/Untitled-design-1-1-removebg-preview.png" },
  { name: "Open Source Club", img: "https://i.postimg.cc/pVzp13cC/Untitled-design-3-1-removebg-preview.png" },
  { name: "Multimedia and Robotics Club", img: "https://i.postimg.cc/cLjC65rR/MR-logo-white-trans1.png" },
  { name: "IoT Club", img: "https://i.postimg.cc/ydJbjy49/Untitled-design-1-removebg-preview-1.png" },
  { name: "Neural Techgenix Club", img: "https://i.postimg.cc/BQCtJH01/Untitled-design-2-1-removebg-preview.png" },
  { name: "Social Awareness Club", img: "https://i.postimg.cc/wjG2VgXq/IMG-20240814-WA0028-1-removebg-preview.png" },
];

export default function ClubsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <section id="clubs" className="py-16 px-6 md:px-32">
        <h2 className="font-tftheme text-center text-8xl md:text-6xl font-bold text-white mb-24">
          Our Clubs
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="md:w-[20%] w-full h-[150px] relative group"
            >
              <aside className="relative flex w-full h-full items-center justify-start mb-2">
                <img
                  src={club.img}
                  alt={club.name}
                  className="w-full h-full mb-12 rounded-lg object-contain"
                />
                <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-t from-purple-700/70 to-transparent"></div>
              </aside>
             
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
