import React from 'react'
import AnimatedPhrase from './AnimatedPhrase'
import Explorer from './Expolorer'
import Sidebar from './Sidebar'

const FileExporlor = ({ isSidebarOpen }) => {
  // const words = ['Crafting', 'Scalable', 'Code,', 'Building', 'Seamless', 'Experiences.']
  return (
    <>

      <div className={`${isSidebarOpen? 'w-[%]': 'w-full'} h-auto  bg-[#0A0A0A] text-gray-200 p-6  shadow-lg`}>

        <div className=''>
          <AnimatedPhrase  phrase="Crafting Scalable Code, Building Seamless Experiences." />

          <p className='text-[18px] font-[500] text-[#999375] leading-7 mt-6'>Turning ideas into interactive, efficient, and future-ready digital solutions <br/>with clean code and innovative design.</p>

        </div>

        <div className="sm:flex w-max items-center sm:order-none   text-center mt-5 text-white space-x-4 rounded-lg shadow-2xs">
      {/* View My Work Button */}
      <button className="flex items-center space-x-2 px-6 py-2 cursor-pointer bg-white text-gray-900 rounded-xl shadow-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
        <span>View My Work</span>
        {/* Right Arrow SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

      {/* Resume Button */}
      <button className="flex items-center space-x-2 px-6  py-2 cursor-pointer bg-gray-800 text-white rounded-xl shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
        {/* Download Icon (simple SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span>Resume</span>
      </button>

      {/* GitHub Icon */}
      <div className='flex'>

        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 text-white hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-github h-6 w-6"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.25 0 6.5-1.5 6.5-7.5A5.4 5.4 0 0 0 20 4.5V4a5.4 5.4 0 0 0-2.6-1.8C15 2 13 2 12 2c-1 0-3 0-5.4 0.7A5.4 5.4 0 0 0 4 4v0.5A5.4 5.4 0 0 0 2 11c0 6 3.25 7.5 6.5 7.5A4.8 4.8 0 0 0 9 18v4" />
          <path d="M9 18c-3.11 0-4.3-3.3-4.3-4.3S7 9 7 9c0-1.8-1.5-2-2-3" />
        </svg>
      </a>

      {/* LinkedIn Icon */}
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 text-white hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-linkedin h-6 w-6"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
      </div>
      
    </div>
        


        <Explorer/>
      
      </div>

    </>
  )
}

export default FileExporlor