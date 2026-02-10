/**
 * Animation variants for Framer Motion
 * Reusable animation configurations for consistent animations across components
 */

// Fade in from bottom
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Fade in from top
export const fadeInDown = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Fade in from left
export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Fade in from right
export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Simple fade in
export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Scale up animation
export const scaleUp = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Stagger container for child elements
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Container with faster stagger
export const staggerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Hover scale effect
export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Card hover lift effect
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 10px 30px -15px rgba(14, 165, 233, 0.3)",
  },
  hover: {
    scale: 1.02,
    y: -8,
    boxShadow: "0 20px 40px -15px rgba(14, 165, 233, 0.5)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Slide in from bottom with bounce
export const slideInUp = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Page transition
export const pageTransition = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

// Navbar animation
export const navbarAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

// Text reveal animation (letter by letter)
export const textReveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// Pulse animation
export const pulse = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Advanced animations for enhanced UI
export const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

export const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

export const bounceIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
      duration: 0.6
    }
  }
};

export const rotateIn = {
  hidden: { rotate: -180, scale: 0, opacity: 0 },
  visible: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 12,
      duration: 0.8
    }
  }
};

export const glowPulse = {
  rest: {
    boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)",
    scale: 1
  },
  hover: {
    boxShadow: [
      "0 0 20px rgba(14, 165, 233, 0.3)",
      "0 0 40px rgba(14, 165, 233, 0.6)",
      "0 0 20px rgba(14, 165, 233, 0.3)"
    ],
    scale: 1.05,
    transition: {
      boxShadow: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      },
      scale: {
        duration: 0.3
      }
    }
  }
};

export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const typewriter = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
};
