import React from 'react';
import { Calendar, MapPin, Building, Code, Users, Award } from 'lucide-react';

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6"></div>
        <p className="text-lg text-gray-600">
          My professional journey and research experience in computer science and software development.
        </p>
      </div>

      {/* Experience Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="flex items-center mb-6 lg:mb-0">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl mr-6">
              <Building className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Research Intern</h2>
              <p className="text-xl text-blue-600 font-semibold">SRM University</p>
              <p className="text-gray-600">Computer Science Department</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 px-6 py-4 rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 space-y-2 sm:space-y-0 sm:space-x-6">
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
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Code className="w-6 h-6 mr-3 text-blue-600" />
            Research Focus: Social Network Analysis
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Conducted research on graph-based algorithms for modeling social networks, with a specific focus on 
            identifying influential nodes within complex network structures. This work involved implementing 
            sophisticated algorithms using Python and applying graph theory concepts to real-world social network data.
          </p>
        </div>

        {/* Key Responsibilities */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-600" />
            Key Responsibilities & Achievements
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Developed graph-based algorithms for social network modeling</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Implemented influential node identification algorithms using Python</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Applied graph theory concepts to analyze network structures</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Collaborated with research team on algorithm optimization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Gained */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
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
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Research Impact</h4>
          <p className="text-gray-700 leading-relaxed">
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