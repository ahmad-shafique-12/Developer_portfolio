import React, { useEffect, useState } from 'react'

const Skills = () => {

    const skillCategories = {
    Frontend: [
      'React.js', 'Next.js', 'TypeScript', 'Tailwind',
      'ReduxToolKit', 'HTML', 'CSS', 'Vanilla JS', 'Responsive UI'
    ],
    Backend: [
      'Node.js', 'Express.js',  'REST APIs',
    ],
    Deployment: [
      'Netlify', 'Vercel', 'Hostinger'
    ],
    'Mobile App': [
      'React Native', 
    ],
    Databases: [
      'MongoDB',  
    ]
  };

  // State to manage the currently active category, default to 'Frontend'
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [animateSkills, setAnimateSkills] = useState(false);

  // useEffect to trigger the animation when activeCategory changes
  useEffect(() => {
    // Reset animation state to prepare for new animation
    setAnimateSkills(false);
   
    const timer = setTimeout(() => {
      setAnimateSkills(true); // Trigger animation to final state (opacity-100, translate-y-0)
    }, 50); // A small delay (e.g., 50ms) is often needed for transitions to trigger reliably
    return () => clearTimeout(timer); // Cleanup the timeout on component unmount or state change
  }, [activeCategory]); // Dependency array: run effect whenever activeCategory changes


  return (
    <>
    <div className="min-h-screen w-full bg-[#0A0A0A] text-white p-4 sm:p-8  flex items-start justify-center font-inter"> {/* Added Inter font */}
      <div className="w-full max-w-4xl">
        {/* Section Title */}
        <h1 className="text-4xl font-bold mb-8 text-gray-100">Technical Skills</h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`
                px-5 py-2 rounded-lg text-lg font-medium transition-all duration-200 ease-in-out
                flex items-center
                ${activeCategory === category
                  ? 'bg-[#121212] text-white shadow-lg' // Active state styling
                  : 'bg-[#121212] text-gray-400 hover:bg-gray-700 hover:text-white' // Inactive state styling
                }
              `}
              onClick={() => setActiveCategory(category)}
            >
              {/* Conditional rendering for icons based on category */}
              {category === 'Frontend' && (
                <span className="inline-block mr-2 text-xl align-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                </span>
              )}
              {category === 'Backend' && (
                <span className="inline-block mr-2 text-xl align-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
                </span>
              )}
              {category === 'Deployment' && (
                <span className="inline-block mr-2 text-xl align-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-upload"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
                </span>
              )}
              {category === 'Mobile App' && (
                <span className="inline-block mr-2 text-xl align-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                </span>
              )}
              {category === 'Databases' && (
                <span className="inline-block mr-2 text-xl align-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
                </span>
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Skills Display Area */}
        {/* Added key to force re-render and trigger transition */}
        <div
          key={activeCategory} // Key changes when category changes, forcing remount and re-triggering useEffect
          className={`
            bg-[#121212] p-6 rounded-xl shadow-inner border border-gray-700
            transition-all duration-500 ease-out
            ${animateSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            {/* Conditional rendering for icon of the active category */}
            {activeCategory === 'Frontend' && (
              <span className="inline-block mr-3 text-2xl text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              </span>
            )}
            {activeCategory === 'Backend' && (
              <span className="inline-block mr-3 text-2xl text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
              </span>
            )}
            {activeCategory === 'Deployment' && (
              <span className="inline-block mr-3 text-2xl text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-upload"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
              </span>
            )}
            {activeCategory === 'Mobile App' && (
              <span className="inline-block mr-3 text-2xl text-red-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
              </span>
            )}
            {activeCategory === 'Databases' && (
              <span className="inline-block mr-3 text-2xl text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
              </span>
            )}
            {activeCategory}
          </h2>
          {/* Changed to responsive grid for up to 4 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skillCategories[activeCategory].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-[#0A0A0A] text-center text-gray-300 rounded-md text-base transition-transform transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Skills