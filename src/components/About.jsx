import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin } from 'lucide-react';
import ResumePDF from '../assets/Resume.pdf';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Description */}
        <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            I’m a Computer Science and Engineering graduate from{' '}
            <strong className="text-black dark:text-white">RGUKT, Nuzvid</strong>, passionate about
            crafting impactful digital experiences. I love solving real-world
            problems through code and transforming ideas into seamless,
            user-friendly products.
          </p>
          <p>
            With experience in full-stack development, I bring creativity,
            discipline, and collaboration to every project. I’m eager to join a
            forward-thinking team where I can learn, grow, and contribute from
            day one.
          </p>
          <p>
            When I’m not coding, I enjoy exploring emerging technologies,
            reading about innovation, or simply learning something new every
            day. I believe in staying curious and growing both personally and
            professionally.
          </p>
        </div>

        {/* Name and Location */}
        <div className="space-y-4 mt-6">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <User className="mr-3 text-blue-600 dark:text-blue-400" size={20} />
            <span>Triveni Lekireddy</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="mr-3 text-blue-600 dark:text-blue-400" size={20} />
            <span>Hyderabad</span>
          </div>
        </div>

        {/* Resume Button */}
        <div className="mt-8 flex justify-center">
          <a
            href={ResumePDF}
            download
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
