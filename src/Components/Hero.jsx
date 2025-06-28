import React, { useEffect, useState, } from 'react';
import Sidebar from './Sidebar';
import { VscLayoutSidebarLeftOff } from 'react-icons/vsc';
import { Outlet } from 'react-router-dom';

const Hero = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Set sidebar open state based on screen size
 useEffect(() => {
  console.log('useEffect mounted');

  const handleResize = () => {
    console.log('Window resized');
    if (window.innerWidth >= 768) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  };

  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      {/* Toggle Sidebar Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 text-white text-2xl bg-gray-700 p-2 rounded-full"
      >
        <VscLayoutSidebarLeftOff />
      </button>

      {/* Layout */}
      <div className="flex h-auto bg-white dark:bg-[#121212] text-black dark:text-white">
        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="fixed md:relative top-0 left-0 w-64 h-screen z-40 bg-gray-800 dark:bg-gray-900">
            <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          </div>
        )}

        {/* Routed Content Section */}
        <div
          className={`flex-1 h-auto overflow-y-auto transition-all duration-300 ${
            isSidebarOpen ? '' : 'ml-0'
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Hero;
