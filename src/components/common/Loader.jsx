import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * Loader Component
 * Full-screen loading animation with progress
 */
const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-dark-500"
      >
        <div className="text-center">
          {/* Animated logo/spinner */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 mx-auto mb-8 border-4 border-primary-500 border-t-transparent rounded-full"
          />
          
          {/* Loading text */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold gradient-text mb-4"
          >
            Loading Experience
          </motion.h2>
          
          {/* Progress bar */}
          <div className="w-64 h-2 bg-dark-300 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-primary-600 to-primary-400"
            />
          </div>
          
          {/* Progress percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-gray-400"
          >
            {progress}%
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
