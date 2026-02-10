import { motion } from 'framer-motion';
import { FiHeart, FiArrowUp } from 'react-icons/fi';
import { getCurrentYear } from '../../utils/helpers';
import { fadeInUp } from '../../utils/animations';

/**
 * Footer Component
 * Simple and premium footer with social links
 */
const Footer = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-400 border-t border-white/10 relative overflow-hidden">
      <div className="container-custom py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Brand */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold gradient-text mb-3">
              {data.name}
            </h3>
            <p className="text-gray-400">
              Building exceptional digital experiences
            </p>
          </motion.div>

          {/* Center: Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="md:text-center"
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['About', 'Projects', 'Contact'].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="md:text-right"
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 md:justify-end">
              {data.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-white/10 transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom: Copyright */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm"
        >
          <p className="flex items-center gap-2">
            Made with <FiHeart className="text-red-500" /> by {data.name}
          </p>
          <p>&copy; {getCurrentYear()} All rights reserved.</p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/30"
      >
        <FiArrowUp className="text-xl" />
      </motion.button>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-red-500/5 rounded-full blur-3xl -z-10" />
    </footer>
  );
};

export default Footer;
