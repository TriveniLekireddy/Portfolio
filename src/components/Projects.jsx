import React from 'react';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';
import FrontImage from '../assets/front.png';

const Projects = () => {
  const projects = [
    {
      title: 'CertiFier',
      description:
        'A decentralized NFT Marketplace called CertiFier built with Solidity and React. Features include smart contracts for minting NFTs with 100% security. Deployed the application using Hardhat.',
      image:
        'https://cbx-prod.b-cdn.net/COLOURBOX28957927.jpg?width=480&height=480&quality=70',
      tech: ['Solidity', 'React', 'Ethers.js', 'Hardhat', 'Metamask'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/TriveniLekireddy/Project-CertFier-Blockchain',
      category: 'dApp',
      icon: <Globe size={18} />,
    },
    {
      title: 'Weather Forecasting System With Alerts',
      description:
        'A real-time Weather Alert application built with React and OpenWeatherMap API. Features include location-based weather tracking, alert notifications for extreme conditions, and responsive UI.',
      image:
        'https://img.freepik.com/free-photo/3d-weather-forecast-icons-set-white-background_107791-17771.jpg',
      tech: ['React', 'Express.js'],
      liveUrl: 'https://weather-frontend-c7u5.onrender.com',
      githubUrl: 'https://github.com/TriveniLekireddy/Weather-Forecast-with-Alerts',
      category: 'Web Application',
      icon: <Globe size={18} />,
    },
    {
      title: 'Student Stress Prediction and Health Risk Detection',
      description:
        'A machine learning app that analyzes grades, peer relations, and activities to predict student stress and health risks. This app helps educational institutions intervene earlier to reduce mental health issues.',
      image:
        'https://incontact.com.sg/wp-content/uploads/2021/05/Student-Stress.jpg',
      tech: ['Python', 'Scikit-learn', 'React', 'Tailwind CSS'],
      liveUrl: 'https://stress-prediction-f1zf.onrender.com',
      githubUrl:
        'https://github.com/TriveniLekireddy/Student-Stress-Prediction-and-Health-Risk-Detection-Triveni',
      category: 'Machine Learning Application',
      icon: <Smartphone size={18} />,
    },
    {
      title: 'Portfolio',
      description:
        'An interactive and responsive portfolio designed to highlight my skills, projects, and professional journey. Developed with React, Tailwind CSS, and Framer Motion for a sleek user experience.',
      image: FrontImage,
      tech: ['React', 'Tailwind CSS'],
      liveUrl: 'https://portfolio-triveni-x5oj.onrender.com',
      githubUrl: 'https://github.com/TriveniLekireddy/Portfolio',
      category: 'Web Application',
      icon: <Smartphone size={18} />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                 <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full flex items-center">
  {project.icon}
  <span className="ml-2">{project.category}</span>
</span>

                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed overflow-y-hidden group-hover:overflow-y-auto max-h-24 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100 dark:scrollbar-thumb-blue-400 dark:scrollbar-track-gray-700">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm font-medium text-gray-800 dark:text-gray-100 rounded-full border border-gray-300 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex-1 justify-center"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors duration-300 flex-1 justify-center"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
