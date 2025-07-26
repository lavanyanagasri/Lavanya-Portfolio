import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "lavanyakoppisetti02@gmail.com",
      link: "mailto:lavanyakoppisetti02@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 8341226444",
      link: "tel:+918341226444",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "lavanyanagasri",
      link: "https://github.com/lavanyanagasri",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "lavanya-koppisetti",
      link: "https://www.linkedin.com/in/lavanya-koppisetti-0972212aa/",
      color: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
          Feel free to reach out!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <MessageCircle className="w-7 h-7 mr-3 text-blue-600" />
            Contact Information
          </h2>
          
          <div className="space-y-6 mb-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white mr-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Location</h3>
            </div>
            <p className="text-gray-700">
              Andhra Pradesh, India
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Available for remote work and open to relocation opportunities
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Send className="w-7 h-7 mr-3 text-blue-600" />
            Send a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                placeholder="What's this about?"
                required
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                placeholder="Tell me about your project or just say hello!"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium flex items-center justify-center space-x-2 hover:scale-105"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Build Something Amazing Together</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Whether you have a project in mind, want to collaborate, or just want to connect, 
          I'd love to hear from you. Let's create something impactful!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:lavanyakoppisetti02@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            <Mail className="w-5 h-5 mr-2" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/lavanya-koppisetti-0972212aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-200 font-medium"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;