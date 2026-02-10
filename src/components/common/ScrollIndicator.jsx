import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * ScrollIndicator Component
 * Vertical scroll progress indicator
 */
const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative h-64 w-1 bg-white/10 rounded-full">
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-500 to-purple-500 rounded-full"
          style={{ height: `${scrollProgress}%` }}
        />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-500 rounded-full"
          style={{ top: `${scrollProgress}%` }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
