import React from 'react';
import { Code, Database, Server, Wrench, Cloud, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "C++", level: 75 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 85 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "REST APIs", level: 85 }
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: 80 }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Development Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 90 },
        { name: "Postman", level: 80 },
        { name: "VS Code", level: 95 }
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "JWT Auth", level: 80 },
        { name: "AWS Basics", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Webhooks", level: 75 }
      ],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const coreCompetencies = [
    'Full-Stack Development',
    'Problem Solving',
    'Algorithm Design',
    'Database Design',
    'API Development',
    'Responsive Design',
    'Version Control',
    'Agile Methodology',
    'Code Review',
    'Testing & Debugging',
    'System Architecture',
    'Performance Optimization'
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl">
          A comprehensive overview of my technical expertise across different domains of software development, 
          from frontend technologies to DevOps practices.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
              {category.icon}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Core Competencies */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Competencies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {coreCompetencies.map((competency, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow duration-200 border border-blue-100"
            >
              <span className="text-gray-700 font-medium text-sm">{competency}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Journey */}
      <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Continuous Learning</h2>
        <p className="text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
          I'm passionate about staying current with emerging technologies and best practices in software development. 
          Currently exploring advanced DevOps practices, cloud architecture patterns, and modern JavaScript frameworks 
          to enhance my full-stack development capabilities.
        </p>
      </div>
    </div>
  );
};

export default Skills;