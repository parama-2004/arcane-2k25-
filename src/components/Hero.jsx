import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation
import bgVideo from "../assets/bg_neon.mp4";
import arcane from "../assets/TITLE.png";
import cres from "../assets/cres.png";
import csea from "../assets/csea.png";
import acm from "../assets/acm.png";
import FlyThrough from "../assets/FlyThrough";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const navigate = useNavigate(); // ✅ hook for navigation
  const videoRef = useRef(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const symposiumDate = new Date(currentYear, 8, 16); // September 16

      if (now > symposiumDate) {
        symposiumDate.setFullYear(currentYear + 1);
      }

      const difference = symposiumDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center text-center text-white">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Flex container */}
      <div className="relative z-10 flex flex-col justify-between items-center w-full h-full p-4">
        <FlyThrough>
          {/* Logos */}
          <div className="flex justify-center items-center space-x-6 mt-4">
            <img src={csea} alt="CSEA Logo" className="w-16 h-14" />
            <img src={cres} alt="Crescent Logo" className="w-36 h-12 " />
            <img src={acm} alt="ACM Logo" className="w-14 h-14 " />
          </div>

          {/* Center content */}
          <div className="flex flex-col items-center justify-center flex-grow">
            <h1 className="text-sm md:text-base text-gray-300 tracking-widest uppercase font-light mt-6">
              Department of Computer Science and Engineering Presents
            </h1>
            <img
              src={arcane}
              alt="Arcane 2K25"
              className="w-full max-w-md md:max-w-2xl mt-4"
            />
            <p className="font-tftheme text-lg md:text-xl text-gray-300 mt-2">
              National-Level Technical Symposium
            </p>
            <button
              onClick={() => navigate("/register")} // ✅ redirects to RegisterationPage
              className="mt-6 bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-white font-semibold text-lg transition-transform hover:scale-110 inline-block"
            >
              Register Now
            </button>
          </div>

          {/* Countdown Timer */}
          <div className="w-full flex-shrink-0 mt-auto pt-4">
            <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 md:p-6 w-full max-w-lg md:max-w-2xl mx-auto border border-gray-700">
              <h3 className="font-tftheme text-xl md:text-2xl font-semibold mb-4">
                SYMPOSIUM STARTS IN
              </h3>
              <div className="flex justify-center space-x-2 md:space-x-8">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="flex flex-col items-center">
                    <div className="bg-black/20 rounded-lg p-3 md:p-4 w-16 md:w-20 text-center">
                      <span className="text-2xl md:text-4xl font-bold text-purple-300">
                        {String(value).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="mt-2 text-xs md:text-sm uppercase text-gray-400">
                      {unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FlyThrough>
      </div>
    </section>
  );
}
