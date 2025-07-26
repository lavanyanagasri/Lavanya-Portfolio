import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, Code, Database, Server } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Proficient in React.js, Node.js, and modern web technologies"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Management",
      description: "Experience with MongoDB and database design principles"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "DevOps Practices",
      description: "Learning CI/CD, AWS deployment, and modern DevOps workflows"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6"></div>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg flex-shrink-0">
            LNS
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Lavanya Naga Sri</h2>
            <p className="text-xl text-blue-600 font-semibold mb-4">Computer Science Student</p>
            <p className="text-gray-700 leading-relaxed mb-6">
              I am a self-driven and passionate Computer Science student with strong skills in 
              <span className="font-semibold text-blue-600"> JavaScript, Python, React.js, Node.js, and MongoDB</span>. 
              My journey in software development has been marked by hands-on experience with real-world projects 
              that solve practical problems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Currently diving deep into <span className="font-semibold text-purple-600">DevOps practices</span>, 
              I'm fascinated by the intersection of development and operations. I believe in writing clean, 
              maintainable code and building applications that scale efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <GraduationCap className="w-7 h-7 mr-3 text-blue-600" />
          Education
        </h3>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h4 className="text-xl font-bold text-gray-900">Bachelor of Technology</h4>
              <p className="text-lg text-blue-600 font-semibold">Computer Science Engineering</p>
              <p className="text-gray-600">SRM University, Andhra Pradesh</p>
            </div>
            <div className="mt-4 md:mt-0 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="flex items-center">
                <Award className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-xl font-bold text-gray-900">8.59</span>
                <span className="text-gray-600 ml-1">/10 GPA</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-blue-600" />
              <span>2022 – 2026</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-blue-600" />
              <span>Andhra Pradesh, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="text-blue-600 mb-4">{item.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;