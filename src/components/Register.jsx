import React, { useState, useEffect } from "react";
import "./RegisterNow.css";
import "./ScrollBanner.css";

export default function RegisterNow() {
  const [swap, setSwap] = useState(false);

  // Random color swap every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSwap((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Swap when mouse moves near the banners
  const handleMouseMove = (e) => {
    const bannerArea = e.currentTarget.getBoundingClientRect();
    const mouseY = e.clientY;
    // if mouse is near top half, swap = true else false
    if (mouseY < bannerArea.top + bannerArea.height / 2) {
      setSwap(true);
    } else {
      setSwap(false);
    }
  };

  return (
    <section
      className="py-20 px-6 min-h-screen flex flex-col justify-center items-center"
    >
      {/* Scrolling Banners */}
      <div
        className="relative w-full overflow-hidden bg-black py-6 mb-24 space-y-4"
        onMouseMove={handleMouseMove}
      >
        {/* Top Line */}
        <div className="marquee-row">
          <div
            className={`marquee font-tftheme text-7xl whitespace-nowrap ${
              swap ? "text-pink-500 font-bold" : "text-white"
            }`}
          >
            <span>
              SECURE YOUR SPOT NOW • REGISTER TODAY • JOIN THE FUN • WIN CASH
              PRIZE UPTO 2000 AND CERTIFICATES •
            </span>
            <span>
              SECURE YOUR SPOT NOW • REGISTER TODAY • JOIN THE FUN • WIN CASH
              PRIZE UPTO 2000 AND CERTIFICATES •
            </span>
            <span>
              SECURE YOUR SPOT NOW • REGISTER TODAY • JOIN THE FUN • WIN CASH
              PRIZE UPTO 2000 AND CERTIFICATES •
            </span>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="marquee-row">
          <div
            className={`marquee marquee-reverse font-tftheme text-7xl whitespace-nowrap ${
              swap ? "text-white" : "text-pink-500 font-bold"
            }`}
          >
            <span>REGISTRATION CLOSES SOON • JOIN NOW • CLICK THE LINK BELOW •</span>
            <span>REGISTRATION CLOSES SOON • JOIN NOW • CLICK THE LINK BELOW •</span>
            <span>REGISTRATION CLOSES SOON • JOIN NOW • CLICK THE LINK BELOW •</span>
          </div>
        </div>
      </div>

      {/* Register Card */}
      <div className="w-full max-w-3xl relative rounded-2xl overflow-hidden shadow-xl -mt-10">
        {/* Smooth Animated Gradient Background */}
        <div className="absolute inset-0 animated-gradient rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10  text-white p-10">
          <h2 className="text-3xl text-black text-center font-bold mb-6">Be Part of Arcane 2K25</h2>
          <p className="font-tftheme text-6xl mb-2">
            Win  cash prizes up to <span className="text-black"> ₹2000.</span> 
          </p>
          <p className="mb-6 ">*Certificates will be Provided</p>
          <div className="text-center">
          <a
            href="form"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20  hover:bg-white/30 px-8  py-4 rounded-lg text-lg font-semibold transition-transform hover:scale-110"
          >
            Register Now
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
