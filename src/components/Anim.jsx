import { motion } from "framer-motion";

// ✅ Slide in from Left
export function SlideLeft({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// ✅ Slide in from Right
export function SlideRight({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideDown({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// ✅ Fade In
export function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// ✅ Drop Down (like a dropdown reveal)
export function DropDown({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// ✅ Zoom In
export function ZoomIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// ✅ FlyThrough (like PowerPoint effect)
export function FlyThrough({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ z: -200, opacity: 0 }}
      animate={{ z: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay }}
      style={{ perspective: 1000 }} // 3D perspective
    >
      {children}
    </motion.div>
  );
}
