// src/components/Sidebar.jsx (or Sidebar.tsx)
import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaLayerGroup,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelopeOpenText,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { VscLayoutSidebarLeftOff } from 'react-icons/vsc';

const Sidebar = ({ isOpen }) => {

  const navItems = [
    { name: 'Home', icon: <FaHome />, href: '/' },
    { name: 'About', icon: <FaInfoCircle />, href: '/about' },
    { name: 'My Stack', icon: <FaLayerGroup />, href: '/mystack' },
    { name: 'Experience', icon: <FaBriefcase />, href: '/experience' },
    { name: 'Projects', icon: <FaProjectDiagram />, href: '/projects' },
    { name: 'Contact', icon: <FaEnvelopeOpenText />, href: '/contact' },
  ];

  return (
    <>

      {/* <p className=' md:block hidden text-[20px] cursor-pointer border w-max  z-50 fixed text-[white] mt-5 left-[200px] '><VscLayoutSidebarLeftOff /></p> */}
      <aside className={`${isOpen? '': ''} fixed w-64  min-h-full bg-[#171717] text-gray-200 p-6  shadow-lg "`}>

        
        <div>
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            {/* Logo/Avatar - You can replace this with your own image */}
            <div className="w-24 h-24 rounded-full bg-gray-600 dark:bg-gray-700 flex items-center justify-center text-3xl font-bold text-white mb-4">
              DEV.A
            </div>
            <h2 className="text-xl font-semibold text-white">Ahmad Shafique</h2>
            <p className="text-sm text-gray-400">Full-Stack Engineer</p>
            <p className="text-center text-sm text-gray-400 mt-4">
              Building elegant solutions to complex problems
            </p>
            <div className="flex space-x-4 mt-6">
              {/* GitHub */}
              <div className="relative group">
                <a
                  href="https://github.com/ahmad-shafique-12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaGithub size={20} />
                </a>
                {/* Tooltip */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="relative bg-[white] text-[black] text-xs px-2 py-1 rounded shadow-lg">
                    GitHub
                    {/* Arrow */}
                    <div className="absolute top left-1/2 -translate-x-1/2 w-2 h-2 bg-[white] rotate-45"></div>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="relative group">
                <a
                  href="https://www.linkedin.com/in/ahmad-shafique-mern/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaLinkedin size={20} />
                </a>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="relative bg-[white] text-[black] text-xs px-2 py-1 rounded shadow-lg">
                    LinkedIn
                    <div className="absolute top left-1/2 -translate-x-1/2 w-2 h-2 bg-[white] rotate-45"></div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="relative group">
                <a
                  href="mailto:ahmadshafiq6992@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaEnvelope size={20} />
                </a>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="relative bg-[white] text-[black] text-xs px-2 py-1 rounded shadow-lg">
                    Email
                    <div className="absolute top left-1/2 -translate-x-1/2 w-2 h-2 bg-[white] rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Menu */}
          <nav className="space-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center px-1 py-1 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Dark Mode Toggle */}
        {/* <div className="mt-8 pt-2 border-t border-gray-700 flex justify-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div> */}
      </aside>
    </>
  );
};

export default Sidebar;