import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Computer Science and Engineering',
      school: 'Rajiv Gandhi University Of Knowledge Technologies',
      location: 'Nuzvid, Andhra Pradesh',
      period: '2021 - 2025',
      gpa: '8.57/10.0',
      courses: [
        'CS Core Fundamentals',
        'Data Structures & Algorithms',
        'Web Development',
        'Database Systems',
      ],
    },
    {
      degree: 'Pre University Course',
      school: 'Rajiv Gandhi University Of Knowledge Technologies',
      location: 'Nuzvid, Andhra Pradesh',
      period: '2019 - 2021',
      gpa: '9.57/10.0',
      courses: ['Mathematics', 'Physics', 'Chemistry'],
    },
    {
      degree: 'Secondary School Certificate',
      school: 'Z.P High School',
      location: 'Sanagala Guduru, Andhra Pradesh',
      period: '2018 - 2019',
      gpa: '10.0/10.0',
      courses: ['Telugu', 'Hindi', 'English', 'Mathematics', 'Science', 'Social'],
    },
  ];

  const certifications = [
    {
      title: 'Fullstack with Java',
      issuer: 'Edubot Software and Services',
      date: '2024',
    },
    {
      title: 'Java',
      issuer: 'DataFlair',
      date: '2024',
    },
    {
      title: 'Web Development',
      issuer: 'Internshala Trainings',
      date: '2023',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
              <GraduationCap className="mr-3 text-blue-600 dark:text-blue-400" size={28} />
              Academic Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <h5 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {edu.school}
                      </h5>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-600 dark:text-gray-300 mb-4">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <MapPin size={16} className="mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center mb-2 sm:mb-0">
                          <Calendar size={16} className="mr-2" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center">
                          <Award size={16} className="mr-2" />
                          <span>CGPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-800 dark:text-white mb-2">Key Courses:</h6>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
              <Award className="mr-3 text-blue-600 dark:text-blue-400" size={28} />
              Professional Certifications
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-6"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4">
                    <Award size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <strong>Issued:</strong> {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
