// FlyThrough.js
import { motion } from "framer-motion";

export default function FlyThrough({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, y: 200 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 2,
        delay,
        ease: [0.22, 1, 0.36, 1], // smooth "overshoot" like PowerPoint
      }}
    >
      {children}
    </motion.div>
  );
}
