import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';

/**
 * Contact Section Component
 * Contact form and social links
 */
const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // This is a placeholder - integrate with your backend or email service
    console.log('Form submitted:', formData);
    setStatus('Message sent successfully!');
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Clear status after 3 seconds
    setTimeout(() => setStatus(''), 3000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: data.email,
      link: `mailto:${data.email}`,
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: data.phone,
      link: `tel:${data.phone}`,
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: data.location,
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-dark-500 relative overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's work together on your next project"
          gradient={true}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's talk about everything!
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Don't like forms? Send me an email or connect on social media. 👋
              </p>
            </motion.div>

            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card hover={false} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white font-semibold hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{info.value}</p>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="pt-6">
              <p className="text-gray-400 mb-4">Connect with me:</p>
              <div className="flex gap-4">
                {data.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-white/10 transition-all"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card hover={false}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-400 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-400 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-400 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-dark-400 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  icon={<FiSend />}
                  className="w-full"
                >
                  Send Message
                </Button>

                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center font-medium"
                  >
                    {status}
                  </motion.p>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Contact;
