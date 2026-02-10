import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiShield, FiLayers } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';

/**
 * About Section Component
 * Professional summary with animated stat cards
 */
const About = ({ data }) => {
  const stats = [
    {
      icon: <FiCode className="text-3xl" />,
      title: 'Frontend',
      description: 'Modern UI with React',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FiDatabase className="text-3xl" />,
      title: 'Backend',
      description: 'Scalable APIs',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FiLayers className="text-3xl" />,
      title: 'System Design',
      description: 'Architecture patterns',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: 'Security',
      description: 'Best practices',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="about" className="section-padding bg-dark-500 relative overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about my journey and expertise"
          gradient={true}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.p
              variants={fadeInUp}
              className="text-gray-300 text-lg leading-relaxed"
            >
              {data.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 text-gray-400"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
              <span className="text-primary-400 font-semibold">
                {data.yearsOfExperience}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-gray-300 text-lg leading-relaxed"
            >
              {data.additionalInfo}
            </motion.p>
          </motion.div>

          {/* Right: Stat Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} 
                    flex items-center justify-center text-white`}
                  >
                    {stat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default About;
