import React from 'react';
import { Calendar, MapPin, Building, Code, Users, Award } from 'lucide-react';

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
<<<<<<< HEAD
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6"></div>
        <p className="text-lg text-gray-600">
=======
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
>>>>>>> 2decc54 (Initial commit)
          My professional journey and research experience in computer science and software development.
        </p>
      </div>

      {/* Experience Card */}
<<<<<<< HEAD
      <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
=======
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
>>>>>>> 2decc54 (Initial commit)
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="flex items-center mb-6 lg:mb-0">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl mr-6">
              <Building className="w-8 h-8 text-white" />
            </div>
            <div>
<<<<<<< HEAD
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Research Intern</h2>
              <p className="text-xl text-blue-600 font-semibold">SRM University</p>
              <p className="text-gray-600">Computer Science Department</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 px-6 py-4 rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 space-y-2 sm:space-y-0 sm:space-x-6">
=======
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Research Intern</h2>
              <p className="text-xl text-blue-600 font-semibold">SRM University</p>
              <p className="text-gray-600 dark:text-gray-300">Computer Science Department</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-6 py-4 rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300 space-y-2 sm:space-y-0 sm:space-x-6">
>>>>>>> 2decc54 (Initial commit)
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-sm font-medium">June 2024 – July 2024</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-sm font-medium">Andhra Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="mb-8">
<<<<<<< HEAD
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Code className="w-6 h-6 mr-3 text-blue-600" />
            Research Focus: Social Network Analysis
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
=======
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <Code className="w-6 h-6 mr-3 text-blue-600" />
            Research Focus: Social Network Analysis
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
>>>>>>> 2decc54 (Initial commit)
            Conducted research on graph-based algorithms for modeling social networks, with a specific focus on 
            identifying influential nodes within complex network structures. This work involved implementing 
            sophisticated algorithms using Python and applying graph theory concepts to real-world social network data.
          </p>
        </div>

        {/* Key Responsibilities */}
        <div className="mb-8">
<<<<<<< HEAD
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
=======
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
>>>>>>> 2decc54 (Initial commit)
            <Users className="w-5 h-5 mr-2 text-blue-600" />
            Key Responsibilities & Achievements
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
<<<<<<< HEAD
                <span className="text-gray-700">Developed graph-based algorithms for social network modeling</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Implemented influential node identification algorithms using Python</span>
=======
                <span className="text-gray-700 dark:text-gray-300">Developed graph-based algorithms for social network modeling</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 dark:text-gray-300">Implemented influential node identification algorithms using Python</span>
>>>>>>> 2decc54 (Initial commit)
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
<<<<<<< HEAD
                <span className="text-gray-700">Applied graph theory concepts to analyze network structures</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Collaborated with research team on algorithm optimization</span>
=======
                <span className="text-gray-700 dark:text-gray-300">Applied graph theory concepts to analyze network structures</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 dark:text-gray-300">Collaborated with research team on algorithm optimization</span>
>>>>>>> 2decc54 (Initial commit)
              </div>
            </div>
          </div>
        </div>

        {/* Skills Gained */}
        <div className="mb-8">
<<<<<<< HEAD
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
=======
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
>>>>>>> 2decc54 (Initial commit)
            <Award className="w-5 h-5 mr-2 text-blue-600" />
            Skills & Technologies Used
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              'Python',
              'Graph Algorithms',
              'Social Network Analysis',
              'Data Structures',
              'Algorithm Design',
              'Research Methodology',
              'NetworkX',
              'Data Visualization'
            ].map((skill) => (
              <span
                key={skill}
<<<<<<< HEAD
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full text-sm font-medium"
=======
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
>>>>>>> 2decc54 (Initial commit)
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Impact */}
<<<<<<< HEAD
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Research Impact</h4>
          <p className="text-gray-700 leading-relaxed">
=======
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Research Impact</h4>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
>>>>>>> 2decc54 (Initial commit)
            This research experience provided valuable insights into the application of computer science concepts 
            to real-world problems. The work on social network analysis enhanced my understanding of complex 
            algorithms and their practical implementations, while also developing my research and analytical skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;