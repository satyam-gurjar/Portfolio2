import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub } from 'react-icons/fi';
import Scene3D from '../3d/Scene3D';
import FloatingIcons from '../3d/FloatingIcons';
import Button from '../common/Button';
import ScrollDown from '../common/ScrollDown';
import TechGrid from '../effects/TechGrid';
import ParticleField from '../effects/ParticleField';
import { fadeInUp, fadeInLeft, staggerContainer, bounceIn, slideInFromRight, glowPulse } from '../../utils/animations';
import { scrollToSection } from '../../utils/helpers';

/**
 * Hero Section Component
 * Fullscreen hero with 3D animated background and CTA buttons
 */
const Hero = ({ data }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Tech Background Layers */}
      <div className="absolute inset-0 z-0">
        <TechGrid />
        <ParticleField />
        <div className="absolute inset-0">
          <Scene3D enableControls={false}>
            <FloatingIcons />
          </Scene3D>
        </div>
      </div>

      {/* Multiple gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500/50 via-transparent to-dark-500 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-purple-500/5 z-0" />
      
      {/* Animated glow orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-custom text-center px-4"
      >
        {/* Greeting */}
        <motion.p
          variants={bounceIn}
          className="text-red-500 font-semibold text-lg md:text-xl mb-4"
        >
          {data.greeting}
        </motion.p>

        {/* Name with glow effect */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative"
        >
          <span className="relative inline-block">
            {data.name}
            <motion.span
              className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-red-600/20 blur-2xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </span>
        </motion.h1>

        {/* Role with enhanced gradient and animation */}
        <motion.h2
          variants={slideInFromRight}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative"
        >
          <motion.span
            className="gradient-text"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            {data.role}
          </motion.span>
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={fadeInUp}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {data.bio}
        </motion.p>

        {/* CTA Buttons with enhanced hover effects */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.div
            variants={glowPulse}
            initial="rest"
            whileHover="hover"
          >
            <Button
              onClick={() => scrollToSection('contact')}
              variant="primary"
              icon={<FiArrowRight />}
            >
              Hire Me
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="secondary"
            >
              View Projects
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              href={data.resumeUrl}
              variant="outline"
              icon={<FiDownload />}
            >
              Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links with enhanced animations */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-6"
        >
          {data.socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors text-2xl relative group"
              whileHover={{ y: -5, scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              {link.icon}
              <motion.span
                className="absolute -inset-2 bg-primary-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 -z-10"
                initial={false}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ScrollDown targetId="about" />
      </motion.div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-500 to-transparent z-5" />
    </section>
  );
};

export default Hero;
