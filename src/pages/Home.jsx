import React, { useEffect, useRef } from "react";
import { motion} from "framer-motion";
import "../index.css";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Events from "../components/Events";
import Glimpse from "../components/Glimpse";
import Sponsors from "../components/Sponsors";
import Register from "../components/Register";
import Footer from "../components/Footer";
import {SlideDown} from "../components/Anim"

export default function Home() {
  const popIn = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
     
      <div className="relative ">
      <SlideDown> <Header /> </SlideDown>
      </div>
      <main>
        <Hero />

        {/* Animate on scroll */}
        <motion.section
          variants={popIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Events />
        </motion.section>

        <motion.section
          variants={popIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Glimpse />
        </motion.section>

        <motion.section
          variants={popIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Sponsors />
        </motion.section>

        <motion.section
          variants={popIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Register />
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
