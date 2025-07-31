import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import tilyImage from '../assets/tily.jpg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative 
                 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6"
    >
      <div className="container mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Triveni Lekireddy</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Java Enthusiast',
                2000,
                'Tech Explorer & Builder',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl">
            I create beautiful and functional web experiences, turning ideas into reality through code.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start space-x-6 mb-10">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin size={24} />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail size={24} />
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Static Profile Image with Gradient Ring */}
        <div className="relative flex justify-center lg:justify-end flex-1">
          {/* Gradient ring */}
          <div className="absolute w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] 
                          rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 z-0">
          </div>

          {/* Inner masking circle */}
          <div className="absolute w-[250px] h-[250px] sm:w-[270px] sm:h-[270px] md:w-[310px] md:h-[310px] 
                          bg-white dark:bg-gray-900 rounded-full z-10">
          </div>

          {/* Profile Image */}
          <img
            src={tilyImage}
            alt="Profile"
            className="w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-4 border-transparent z-20 object-cover shadow-2xl"
          />
        </div>
      </div>

      {/* Down arrow scroll */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
