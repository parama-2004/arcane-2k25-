import React from "react";
import sponsor1 from "../assets/Sponsors/sponsor (1).png";
import sponsor2 from "../assets/Sponsors/sponsor (2).png";
import sponsor3 from "../assets/Sponsors/sponsor (3).png";
import sponsor4 from "../assets/Sponsors/sponsor (4).png";
import abou from "../assets/bg_neon.mp4"; // about section video
import {SlideLeft} from "./Anim"

export default function Sponsors() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="relative py-20 px-6 text-white overflow-hidden">
        

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Side */}
          
          <div >
            <SlideLeft delay={1}>
            <h2 className="font-tftheme text-3xl md:text-4xl font-bold text-purple-300 mb-6">
              WE ARE ARCANE
            </h2>
            
            <p className="mb-4 leading-relaxed text-justify">
              The most prestigious symposium organized by the Department of
              Computer Science & Engineering at B. S. Abdur Rahman Crescent
              Institute of Science and Technology. Held annually in September,
              ARCANE stands as a hallmark of excellence, featuring a wide array
              of both technical and non-technical events.
            </p>
            <p className="mb-6 leading-relaxed text-justify">
              This symposium serves as a platform for students to challenge
              their skills, explore new ideas, and collaborate with peers across
              disciplines. Known for its elite status, ARCANE is not just a
              symposium—it’s a celebration of knowledge, problem-solving, and
              competition.
            </p>
            <a
              href="#register"
              className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-transform hover:scale-105 inline-block"
            >
              Register Now
            </a>
            </SlideLeft>
          </div>
          

          {/* Video Side (embedded video) */}
          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={abou} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 px-6 relative overflow-hidden">
        

        <h2 className="font-tftheme text-3xl font-bold text-purple-300 mb-10 text-center relative z-10">
          Our Sponsors
        </h2>

        <div className="flex justify-center gap-10 flex-wrap relative z-10">
          {[sponsor1, sponsor2, sponsor3, sponsor4].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Sponsor"
              className="h-20 object-contain hover:scale-110 transition-transform"
            />
          ))}
        </div>
      </section>
    </>
  );
}
