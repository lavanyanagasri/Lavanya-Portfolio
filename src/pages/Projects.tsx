import React from 'react';
import { ExternalLink, Github, Star, Calendar, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart SaaS Dashboard",
      description: "Built a comprehensive SaaS Dashboard with role-based access control, billing integration via Stripe, audit logs, and webhook support. Designed for enterprise use with end-to-end DevOps practices including CI/CD pipelines and AWS deployment.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe", "AWS", "CI/CD"],
      link: null,
      linkText: "Coming Soon",
      github: null,
      featured: true,
      status: "In Development"
    },
    {
      title: "Doctor Appointment Booking App",
      description: "A responsive frontend application for booking doctor appointments using React and Tailwind CSS. Features real-time appointment listings, user authentication, and seamless booking experience integrated with REST APIs.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
      link: "https://doctors-appointment-app-rust.vercel.app/",
      linkText: "Live Demo",
      github: null,
      featured: false,
      status: "Completed"
    },
    {
      title: "Expense Tracker",
      description: "Personal finance management application with offline support, editable transactions, and localStorage persistence. Features intuitive UI for tracking income and expenses with data visualization.",
      tech: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
      link: "https://expense-tracker-fawn-tau.vercel.app/",
      linkText: "Live Demo",
      github: null,
      featured: false,
      status: "Completed"
    },
    {
      title: "MERN Blog App with JWT Auth",
      description: "Full-stack blog application built with MERN stack featuring user authentication using JWT tokens, CRUD operations for blog posts, and responsive design. Includes user registration, login, and secure content management.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind CSS"],
      link: null,
      linkText: null,
      github: "https://github.com/lavanyanagasri/blog-mern",
      featured: false,
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Development':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12">
<<<<<<< HEAD
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl">
=======
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
>>>>>>> 2decc54 (Initial commit)
          Here's a showcase of my recent projects that demonstrate my skills in full-stack development, 
          modern web technologies, and DevOps practices.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
<<<<<<< HEAD
            className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
=======
            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
>>>>>>> 2decc54 (Initial commit)
              project.featured ? 'lg:col-span-2' : ''
            }`}
          >
            {/* Featured Badge */}
            {project.featured && (
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-medium flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Featured Project
              </div>
            )}
            
            <div className="p-8">
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
<<<<<<< HEAD
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
=======
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2">
>>>>>>> 2decc54 (Initial commit)
                    {project.title}
                  </h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex space-x-2 ml-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
<<<<<<< HEAD
                      className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
=======
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
>>>>>>> 2decc54 (Initial commit)
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
<<<<<<< HEAD
                      className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
=======
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
>>>>>>> 2decc54 (Initial commit)
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
<<<<<<< HEAD
              <p className="text-gray-700 mb-6 leading-relaxed">
=======
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
>>>>>>> 2decc54 (Initial commit)
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
<<<<<<< HEAD
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
=======
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
>>>>>>> 2decc54 (Initial commit)
                  <Code className="w-4 h-4 mr-2" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
<<<<<<< HEAD
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full text-sm font-medium"
=======
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
>>>>>>> 2decc54 (Initial commit)
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    {project.linkText}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                )}
                {!project.link && !project.github && (
                  <span className="inline-flex items-center px-6 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    <Calendar size={16} className="mr-2" />
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;