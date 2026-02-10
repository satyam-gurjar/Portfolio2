import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

/**
 * SectionTitle Component
 * Reusable animated section title with subtitle
 */
const SectionTitle = ({ title, subtitle, gradient = false, center = true }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-12 ${center ? 'text-center' : 'text-left'}`}
    >
      <motion.h2
        variants={fadeInUp}
        className={`text-4xl md:text-5xl font-bold mb-4 ${
          gradient ? 'gradient-text' : 'text-white'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
