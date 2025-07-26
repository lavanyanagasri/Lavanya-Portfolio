import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

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
        className="fixed top-4 left-4 z-50 md:hidden bg-white shadow-lg rounded-lg p-2 hover:bg-gray-50 transition-colors duration-200"
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
      <div className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="p-8 border-b border-gray-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                LNS
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Lavanya Naga Sri</h2>
              <p className="text-sm text-gray-600">Computer Science Student</p>
              <p className="text-xs text-gray-500 mt-1">Software Developer & DevOps Enthusiast</p>
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
                          : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
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
          <div className="p-6 border-t border-gray-200">
            <div className="flex justify-center space-x-4 mb-4">
              <a
                href="https://github.com/lavanyanagasri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/lavanya-koppisetti-0972212aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:lavanyakoppisetti02@gmail.com"
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              <span className="text-sm">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;