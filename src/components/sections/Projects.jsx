import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';

/**
 * Projects Section Component
 * Portfolio project showcase with hover effects
 */
const Projects = ({ data }) => {
  return (
    <section id="projects" className="section-padding bg-dark-500 relative overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of my best work and side projects"
          splitAt="Projects"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.map((project, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full flex flex-col group">

                {/* Project Video */}
                <div
                  className="relative overflow-hidden rounded-lg mb-4 aspect-video group"
                  onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector("video");
                    video.play();
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget.querySelector("video");
                    video.pause();
                    video.currentTime = 0; // reset to first frame (optional)
                  }}
                >
                  <video
                    src={project.video}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />

                  {/* Soft gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Icons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center 
        hover:bg-white/30 transition-colors"
                      >
                        <FiGithub className="text-white text-xl" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center 
        hover:bg-white/30 transition-colors"
                      >
                        <FiExternalLink className="text-white text-xl" />
                      </a>
                    )}
                  </div>
                </div>



                {/* Project Info */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <Button
                      href={project.github}
                      variant="secondary"
                      className="flex-1 text-sm py-2"
                      icon={<FiGithub />}
                    >
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      href={project.demo}
                      variant="primary"
                      className="flex-1 text-sm py-2"
                      icon={<FiExternalLink />}
                    >
                      Demo
                    </Button>
                  )}
                </div>

              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Projects;
