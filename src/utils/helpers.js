/**
 * Utility helper functions
 */

// Smooth scroll to section
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// Format date
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// Validate email
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Truncate text
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

// Get random color from palette
export const getRandomColor = () => {
  const colors = [
    '#0ea5e9', // primary-500
    '#8b5cf6', // purple-500
    '#ec4899', // pink-500
    '#10b981', // green-500
    '#f59e0b', // amber-500
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Calculate reading time
export const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};

// Copy to clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
};

// Get current year
export const getCurrentYear = () => {
  return new Date().getFullYear();
};

// Clamp number between min and max
export const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};

// Linear interpolation
export const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};
