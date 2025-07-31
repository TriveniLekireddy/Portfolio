import React from 'react';
import { Icon } from '@iconify/react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'devicon-java-plain colored',
      skills: [
        { name: 'Java', icon: 'devicon-java-plain colored' },
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'C', icon: 'devicon-c-plain colored' },
        { name: 'SQL', icon: 'devicon-mysql-plain colored' }
      ]
    },
    {
      title: 'Frontend',
      icon: 'devicon-react-original colored',
      skills: [
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS', icon: 'devicon-css3-plain colored' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'React', icon: 'devicon-react-original colored' }
      ]
    },
    {
      title: 'Backend',
      icon: 'devicon-spring-plain colored',
      skills: [
        { name: 'Spring Boot', icon: 'devicon-spring-plain colored' }
      ]
    },
    {
      title: 'Databases',
      icon: 'devicon-mysql-plain colored',
      skills: [
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' }
      ]
    },
    {
      title: 'Tools & Packages',
      icon: 'devicon-npm-original-wordmark colored',
      skills: [
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'GitHub', icon: 'devicon-github-original colored' },
        { name: 'Postman', icon: 'simple-icons:postman' }, 
        { name: 'Maven', icon: 'devicon-apache-plain colored' },
        { name: 'Apache Tomcat', icon: 'devicon-apache-plain colored' },
        { name: 'Linux', icon: 'devicon-linux-plain colored' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: 'mdi:account-group',
      skills: [
        { name: 'Problem Solving', icon: 'mdi:lightbulb-on-outline' },
        { name: 'Communication', icon: 'mdi:message-text-outline' },
        { name: 'Time Management', icon: 'mdi:clock-outline' },
        { name: 'Team Management', icon: 'mdi:account-multiple-outline' }
      ]
    }
  ];

  const isIconifyIcon = (icon) => icon.includes(':');

  return (
    <section id="skills" className="skills-section py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies & tools I’ve worked with
          </p>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="skill-category rounded-xl p-6 bg-gray-50 dark:bg-gray-800 shadow-md transition-transform duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2 justify-center">
                {isIconifyIcon(category.icon) ? (
                  <Icon icon={category.icon} width="28" height="28" />
                ) : (
                  <i className={`${category.icon} text-3xl`}></i>
                )}
                {category.title}
              </h3>

              <div className="skill-items grid grid-cols-2 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-item p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm transition-transform duration-300 transform hover:scale-105 hover:-translate-y-1 flex flex-col items-center justify-center"
                  >
                    {isIconifyIcon(skill.icon) ? (
                      <Icon icon={skill.icon} width="24" height="24" className="mb-2" />
                    ) : (
                      <i className={`${skill.icon} text-3xl mb-2`}></i>
                    )}
                    <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
