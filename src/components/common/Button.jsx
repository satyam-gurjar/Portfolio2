import { motion } from 'framer-motion';

/**
 * Button Component
 * Reusable animated button with multiple variants
 */
const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  icon, 
  href,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/50 text-white',
    secondary: 'glass hover:bg-white/10 text-white',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <span>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
