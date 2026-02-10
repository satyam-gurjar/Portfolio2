import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';

/**
 * Skills Section Component
 * Categorized skills with animated progress bars/icons
 */
const Skills = ({ data }) => {
  return (
    <section id="skills" className="section-padding bg-dark-400 relative overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="My technical toolbox and expertise"
          gradient={true}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.categories.map((category, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} 
                    flex items-center justify-center text-white text-xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary-400 font-semibold text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-dark-500 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Technologies */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Also Experienced With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {data.additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 glass rounded-lg text-gray-300 font-medium cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background mesh gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-50 -z-10" />
    </section>
  );
};

export default Skills;
