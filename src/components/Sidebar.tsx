import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
<<<<<<< HEAD
=======
import { useTheme } from '../hooks/useTheme';
>>>>>>> 2decc54 (Initial commit)
import { 
  User, 
  FolderOpen, 
  Briefcase, 
  Code, 
  Mail, 
  Menu, 
  X,
  Github,
  Linkedin,
  Sun,
  Moon
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
=======
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleSidebar = () => setIsOpen(!isOpen);
>>>>>>> 2decc54 (Initial commit)

  const navItems = [
    { path: '/about', icon: <User size={20} />, label: 'About' },
    { path: '/projects', icon: <FolderOpen size={20} />, label: 'Projects' },
    { path: '/experience', icon: <Briefcase size={20} />, label: 'Experience' },
    { path: '/skills', icon: <Code size={20} />, label: 'Skills' },
    { path: '/contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
<<<<<<< HEAD
        className="fixed top-4 left-4 z-50 md:hidden bg-white shadow-lg rounded-lg p-2 hover:bg-gray-50 transition-colors duration-200"
=======
        className="fixed top-4 left-4 z-50 md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-900 dark:text-white"
>>>>>>> 2decc54 (Initial commit)
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
<<<<<<< HEAD
      <div className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="p-8 border-b border-gray-200">
=======
      <div className={`fixed left-0 top-0 h-full w-80 z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 p-4`}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg h-full p-4">
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="p-8 border-b border-gray-200 dark:border-gray-700">
>>>>>>> 2decc54 (Initial commit)
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                LNS
              </div>
<<<<<<< HEAD
              <h2 className="text-xl font-bold text-gray-900 mb-1">Lavanya Naga Sri</h2>
              <p className="text-sm text-gray-600">Computer Science Student</p>
              <p className="text-xs text-gray-500 mt-1">Software Developer & DevOps Enthusiast</p>
=======
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Lavanya Naga Sri</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Computer Science Student</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Software Developer & DevOps Enthusiast</p>
>>>>>>> 2decc54 (Initial commit)
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
<<<<<<< HEAD
                          : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
=======
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
>>>>>>> 2decc54 (Initial commit)
                      }`
                    }
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
<<<<<<< HEAD
          <div className="p-6 border-t border-gray-200">
=======
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
>>>>>>> 2decc54 (Initial commit)
            <div className="flex justify-center space-x-4 mb-4">
              <a
                href="https://github.com/lavanyanagasri"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
=======
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
>>>>>>> 2decc54 (Initial commit)
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/lavanya-koppisetti-0972212aa/"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
=======
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
>>>>>>> 2decc54 (Initial commit)
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:lavanyakoppisetti02@gmail.com"
<<<<<<< HEAD
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
=======
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
>>>>>>> 2decc54 (Initial commit)
              >
                <Mail size={20} />
              </a>
            </div>
            
            {/* Dark Mode Toggle */}
            <button
<<<<<<< HEAD
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
=======
              onClick={toggleTheme}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
>>>>>>> 2decc54 (Initial commit)
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              <span className="text-sm">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
<<<<<<< HEAD
=======
        </div>
>>>>>>> 2decc54 (Initial commit)
      </div>
    </>
  );
};

export default Sidebar;