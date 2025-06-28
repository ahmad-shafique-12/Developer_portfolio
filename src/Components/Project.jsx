import React, { useState } from 'react';
import img1 from '../images/image.png'
import img2 from '../images/grabit.PNG'
import img3 from '../images/zomo.PNG'


// Main Projects component
export default function ProjectData({isSidebarOpen}) {
  const [activeFilter, setActiveFilter] = useState('All'); // State for active filter

  const projects = [
    {
      id: 1,
      title: 'coachella',
      category: 'Web',
      description: 'Coachella Merch Store – Festival-Themed Shopping Experience.',
      technologies: ['React.js', 'Redux', 'tailwind '],
      imageUrl: img1, // Dummy image URL
      liveDemoUrl: 'https://coachella.vercel.app/', // Placeholder URL
    },
    {
      id: 2,
      title: 'Grabit-foodapp',
      category: 'Web',
      description: 'Grabit Food App – A fast, responsive food ordering platform with a clean UI and seamless user experience.',
      technologies: ['Next.js', 'ReduxToolkit', 'toast', 'Tailwind CSS'],
      imageUrl: img2, // Dummy image UR
      liveDemoUrl: 'https://grabit-foodapp.vercel.app/', // Placeholder URL
    },
    {
      id: 3,
      title: 'zomo-app',
      category: 'Web',
      description: 'Zomo Food App – A visually engaging frontend for an online food service, built with React and Tailwind CSS for a smooth, responsive experience.',
      technologies: ['React', 'Tailwind CSS', 'redux'],
      imageUrl: img3 ,
      liveDemoUrl: 'https://zomo-app.vercel.app/', // Placeholder URL
    },
    
  ];

  // Filtered projects based on activeFilter state
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') {
      return true;
    }
    return project.category === activeFilter;
  });

  return (
    <div className={` ${isSidebarOpen? 'w-[%]': 'w-full'} min-h-screen bg-[#0A0A0A] text-white p-4 sm:p-8 flex flex-col items-center font-inter`}>
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-gray-100 ">My Projects</h1>

        <p className="text-xl text-[#A1A1A1] mb-10">A collection of my recent work in web development</p>

        {/* Filter Buttons */}
          <div className="flex flex-wrap w-max gap-3 mb-8 justify-center p-2 bg-[#262626] rounded-lg shadow-inner border border-gray-700">
          {['All', 'Web', ].map(filter => (
            <button
              key={filter}
              className={`
                px-6 py-2 rounded-lg text-lg font-medium transition-all duration-200 ease-in-out
                flex items-center justify-center
                ${activeFilter === filter
                  ? 'bg-[#0A0A0A] text-white shadow-lg border-b-2 border-blue-500' // Added border-b for underline
                  : 'text-gray-400 hover:text-white' // No background for inactive buttons as per image
                }
              `}
              onClick={() => setActiveFilter(filter)}
            >
              {/* Conditional rendering for icons */}
              {filter === 'Web' && (
                <span className="inline-block mr-2 text-xl align-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </span>
              )}
              {/* {filter === 'Mobile' && (
                <span className="inline-block mr-2 text-xl align-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                </span>
              )} */}
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden group">
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/400x250/334155/E2E8F0?text=Project+Image'; // Fallback
                  }}
                />
                {/* Category tag overlay */}
                <span className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[white] text-black font-medium rounded-lg  transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-2">
                    <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
