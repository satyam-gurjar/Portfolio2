import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiMail,
  FiCode,
  FiDatabase,
  FiServer,
  FiTool,
  FiPackage
} from 'react-icons/fi';

/**
 * Portfolio Data Configuration
 * 
 * CUSTOMIZATION GUIDE:
 * =====================
 * Edit this file to customize your portfolio content.
 * All sections are clearly labeled and easy to modify.
 * 
 * Tips:
 * - Keep descriptions concise but impactful
 * - Use actual project screenshots in public/projects/
 * - Update social links with your profiles
 * - Adjust skill levels honestly
 * - Add your resume PDF to public folder
 */

export const portfolioData = {
  // ===================================
  // PERSONAL INFORMATION
  // ===================================
  personal: {
    name: 'Satyam Gurjar',
    logo: 'SG',
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/satyam-gurjar',
        icon: <FiGithub />,
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/satyam-gurjar-381b53205/',
        icon: <FiLinkedin />,
      },
      {
        name: 'Twitter',
        url: 'https://x.com/SATYAMGURJAR02',
        icon: <FiTwitter />,
      },
      {
        name: 'Email',
        url: 'mailto:satyamgurjar108@gmail.com',
        icon: <FiMail />,
      },
    ],
  },

  // ===================================
  // HERO SECTION
  // ===================================
  hero: {
    greeting: 'Hi, I\'m',
    name: 'Satyam Gurjar',
    role: 'Full Stack Engineer & AI Enthusiast',
    bio: 'Building next-gen web applications with MERN stack and exploring the frontiers of Generative AI. Transforming ideas into intelligent, scalable solutions.',
    resumeUrl: '/resume.pdf',
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/satyamgurjar',
        icon: <FiGithub />,
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/satyamgurjar',
        icon: <FiLinkedin />,
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/satyamgurjar',
        icon: <FiTwitter />,
      },
    ],
  },

  // ===================================
  // ABOUT SECTION
  // ===================================
  about: {
    description:
      'I\'m an ambitious Full Stack Engineer specializing in the MERN stack with a deep fascination for Generative AI. I combine traditional web development expertise with cutting-edge AI technologies to build intelligent, future-ready applications.',
    yearsOfExperience: 'Engineering Innovation Daily',
    additionalInfo:
      'My passion lies at the intersection of web development and artificial intelligence. From crafting seamless user experiences to exploring LLMs, diffusion models, and AI-powered features, I\'m constantly pushing the boundaries of what\'s possible in modern software engineering.',
  },

  // ===================================
  // SKILLS SECTION
  // ===================================
  skills: {
    categories: [
      {
        name: 'Frontend',
        icon: <FiCode />,
        color: 'from-blue-500 to-cyan-500',
        skills: [
          { name: 'React.js', level: 90 },
          { name: 'JavaScript ES6+', level: 85 },
          { name: 'HTML5 & CSS3', level: 90 },
          { name: 'Tailwind CSS', level: 85 },
          { name: 'Redux', level: 75 },
        ],
      },
      {
        name: 'Backend',
        icon: <FiServer />,
        color: 'from-green-500 to-emerald-500',
        skills: [
          { name: 'Node.js', level: 85 },
          { name: 'Express.js', level: 80 },
          { name: 'REST APIs', level: 85 },
          { name: 'GraphQL', level: 70 },
          { name: 'Authentication', level: 80 },
        ],
      },
      {
        name: 'Database',
        icon: <FiDatabase />,
        color: 'from-purple-500 to-pink-500',
        skills: [
          { name: 'MongoDB', level: 85 },
          { name: 'PostgreSQL', level: 75 },
          { name: 'MySQL', level: 70 },
          { name: 'Redis', level: 65 },
          { name: 'Mongoose', level: 80 },
        ],
      },
      {
        name: 'DevOps',
        icon: <FiTool />,
        color: 'from-orange-500 to-red-500',
        skills: [
          { name: 'Git & GitHub', level: 85 },
          { name: 'Docker', level: 70 },
          { name: 'AWS', level: 65 },
          { name: 'CI/CD', level: 70 },
          { name: 'Linux', level: 75 },
        ],
      },
      {
        name: 'Tools',
        icon: <FiPackage />,
        color: 'from-yellow-500 to-amber-500',
        skills: [
          { name: 'VS Code', level: 90 },
          { name: 'Postman', level: 85 },
          { name: 'Figma', level: 70 },
          { name: 'npm/yarn', level: 85 },
          { name: 'Webpack/Vite', level: 75 },
        ],
      },
      {
        name: 'AI & ML',
        icon: <FiCode />,
        color: 'from-pink-500 to-rose-500',
        skills: [
          { name: 'Generative AI', level: 85 },
          { name: 'LLMs (GPT, Claude)', level: 80 },
          { name: 'Prompt Engineering', level: 90 },
          { name: 'Stable Diffusion', level: 75 },
          { name: 'AI Integration', level: 85 },
        ],
      },
    ],
    additionalSkills: [
      'TypeScript',
      'Next.js',
      'Socket.io',
      'JWT',
      'OAuth',
      'OpenAI API',
      'Hugging Face',
      'LangChain',
      'Vector Databases',
      'Stripe',
      'Material-UI',
      'Bootstrap',
      'SASS/SCSS',
      'Firebase',
      'Heroku',
      'Netlify',
      'Jest',
      'Cypress',
    ],
  },

  // ===================================
  // PROJECTS SECTION
  // ===================================
  projects: [
    {
      title: 'AI Personal Assistant',
      description:
        'Intelligent personal assistant with Python backend server, desktop and Android applications. Powered by locally hosted Llama model with custom fine-tuning for personalized responses.',
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=AI+Assistant',
      tech: ['Python', 'Llama', 'TensorFlow', 'Android', 'PyQt', 'FastAPI'],
      github: 'https://github.com/satyam-gurjar/ai-assistant',
      demo: 'https://shyver.vercel.app',
    },
    {
      title: 'AI Powered Path Generator',
      description:
        'MERN stack web application that generates optimized learning paths and career roadmaps using AI. Features intelligent content recommendations and progress tracking.',
      image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Path+Generator',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'OpenAI API', 'Redux'],
      github: 'https://github.com/satyam-gurjar/path-generator',
      demo: 'https://path-generator-demo.vercel.app',
    },
    {
      title: 'House Renting Website',
      description:
        'Full-featured property rental platform with advanced search filters, booking system, payment integration, and real-time availability updates. Complete admin dashboard for property management.',
      image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=House+Rental',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
      github: 'https://github.com/satyam-gurjar/house-rental',
      demo: 'https://house-rental-demo.netlify.app',
    },
    {
      title: 'Code Generator & Reviewer AI',
      description:
        'AI-powered development tool that generates clean, production-ready code and performs intelligent code reviews. Detects bugs, suggests optimizations, and enforces best practices.',
      image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=Code+AI',
      tech: ['Python', 'GPT-4', 'LangChain', 'React', 'FastAPI', 'Docker'],
      github: 'https://github.com/satyam-gurjar/code-reviewer-ai',
      demo: 'https://code-ai-demo.vercel.app',
    },
  ],

  // ===================================
  // EXPERIENCE & EDUCATION
  // ===================================
  experience: {
    work: [
      {
        position: 'Full Stack Developer',
        company: 'Tech Company Name',
        date: 'Jan 2023 - Present',
        description:
          'Developing and maintaining web applications using MERN stack. Collaborating with cross-functional teams to deliver high-quality solutions.',
      },
      {
        position: 'Frontend Developer',
        company: 'Startup Name',
        date: 'Jun 2022 - Dec 2022',
        description:
          'Built responsive user interfaces with React.js and integrated RESTful APIs. Improved website performance by 40% through optimization.',
      },
      {
        position: 'Junior Developer',
        company: 'Agency Name',
        date: 'Jan 2022 - May 2022',
        description:
          'Assisted in developing client websites and learned industry best practices. Worked with modern technologies and agile methodologies.',
      },
    ],
    education: [
      {
        degree: 'Bachelor of Computer Science',
        institution: 'University Name',
        date: '2018 - 2022',
        description:
          'Graduated with honors. Focused on software engineering, algorithms, and database systems.',
      },
      {
        degree: 'Full Stack Web Development',
        institution: 'Online Bootcamp',
        date: '2021',
        description:
          'Intensive 6-month program covering MERN stack, best practices, and real-world projects.',
      },
    ],
  },

  // ===================================
  // CONTACT SECTION
  // ===================================
  contact: {
    email: 'satyamgurjar108@gmail.com',
    phone: '+91 62659-95899',
    location: 'Bhopal, India',
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/satyam-gurjar',
        icon: <FiGithub />,
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/satyam-gurjar-381b53205/',
        icon: <FiLinkedin />,
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/satyamgurjar02',
        icon: <FiTwitter />,
      },
      {
        name: 'Email',
        url: 'mailto:satyamgurjar108@gmail.com',
        icon: <FiMail />,
      },
    ],
  },
};
