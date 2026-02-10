import { motion } from 'framer-motion';
import { cardHover } from '../../utils/animations';

/**
 * Card Component
 * Reusable glassmorphism card with hover effects
 */
const Card = ({ 
  children, 
  className = '', 
  hover = true,
  glass = true,
  ...props 
}) => {
  const baseClasses = `rounded-xl p-6 ${glass ? 'glass' : 'bg-dark-300'}`;
  
  if (!hover) {
    return (
      <div className={`${baseClasses} ${className}`} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
