import { motion } from 'framer-motion';
import { FiBriefcase, FiAward } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import { fadeInUp, fadeInLeft, staggerContainer } from '../../utils/animations';

/**
 * Experience Section Component
 * Timeline UI for work experience and education
 */
const Experience = ({ data }) => {
  return (
    <section id="experience" className="section-padding bg-dark-400 relative overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          title="Experience & Education"
          subtitle="My professional journey and academic background"
          gradient={true}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <FiBriefcase className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {data.work.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.position}
                  subtitle={item.company}
                  date={item.date}
                  description={item.description}
                  type="work"
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <FiAward className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {data.education.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.degree}
                  subtitle={item.institution}
                  date={item.date}
                  description={item.description}
                  type="education"
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background mesh */}
      <div className="absolute inset-0 mesh-gradient opacity-30 -z-10" />
    </section>
  );
};

// Timeline Item Component
const TimelineItem = ({ title, subtitle, date, description, type, index }) => {
  const colorClass = type === 'work' 
    ? 'from-primary-500 to-primary-600' 
    : 'from-purple-500 to-pink-500';

  return (
    <motion.div
      variants={fadeInLeft}
      className="relative pl-8 border-l-2 border-white/10 pb-6 last:pb-0"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`absolute -left-[9px] top-0 w-4 h-4 bg-gradient-to-br ${colorClass} rounded-full border-4 border-dark-400`}
      />

      {/* Content */}
      <div className="glass p-4 rounded-lg hover:bg-white/10 transition-colors">
        <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
        <p className="text-primary-400 font-semibold mb-2">{subtitle}</p>
        <p className="text-gray-500 text-sm mb-3">{date}</p>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default Experience;
