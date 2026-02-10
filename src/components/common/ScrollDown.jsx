import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

/**
 * ScrollDown Component
 * Animated scroll down indicator for hero section
 */
const ScrollDown = ({ targetId = 'about' }) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <span className="text-sm font-medium">Scroll Down</span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiArrowDown className="text-2xl" />
      </motion.div>
    </motion.button>
  );
};

export default ScrollDown;
