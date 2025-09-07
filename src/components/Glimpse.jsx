import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function Glimpse() {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const images = Array(6).fill("Coming Soon");

  // Detect when section is visible
  const isInView = useInView(scrollRef, { once: false, margin: "-100px" });

  return (
    <section
      id="glimpses"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-black/60 to-purple-900/20 relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse -top-48 -left-48" />
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse -bottom-48 -right-48"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Header */}
      <div
        className={`transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="font-tftheme text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-950 to-pink-300 mb-8 md:mb-10 text-center">
          Arcane Glimpses
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-10 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Floating carousel */}
        <motion.div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 sm:gap-6 px-12 sm:px-16 py-4 scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitScrollbar: { display: "none" },
          }}
          animate={{ x: ["0%", "-2%", "2%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 
                         rounded-xl overflow-hidden group cursor-pointer shadow-lg"
              animate={{
                scale: isInView
                  ? [1, 1.1, 0.95, 1.05, 1] // breathing pulse
                  : [1],
              }}
              transition={{
                duration: 3 + i * 0.3, // stagger
                repeat: Infinity,
                ease: [0.6, -0.05, 0.01, 0.99], // uneven curve
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-xl p-[2px] animate-gradient">
                <div className="w-full h-full bg-gray-900 rounded-xl" />
              </div>

              {/* Content */}
              <div className="absolute inset-[2px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center overflow-hidden">
                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-purple-600/20 transition-opacity duration-300 ${
                    hoveredIndex === i ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Text */}
                <div className="relative z-10 text-center p-4">
                  <div className="text-gray-400 font-semibold text-sm sm:text-base group-hover:text-purple-300 transition-colors duration-300">
                    {img}
                  </div>
                  <div className="mt-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                    Image {i + 1}
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-purple-500/30 to-transparent rounded-bl-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
