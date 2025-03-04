// Hero.js
import { motion } from "framer-motion";

const Hero = ({ children, id }) => {
  return (
    <motion.div
      layoutId={id}
      initial={{ opacity: 0, scale: 0.8, y: 30 }} // Adding vertical offset
      animate={{ opacity: 1, scale: 1, y: 0 }} // Element settles in place
      exit={{ opacity: 0, scale: 0.8, y: -30 }} // Moving upwards when exiting
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Hero;
