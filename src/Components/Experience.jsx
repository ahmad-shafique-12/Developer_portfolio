    import React, { useState } from 'react';
    import img1 from '../images/imgi_7_WD.png'
    import img2 from '../images/imgi_6_letskill.png'


    // Main Experience component
    export default function ExperienceData() {
    const [expandedId, setExpandedId] = useState(null); // State to keep track of the currently expanded item

    const experiences = [
        {
        id: 1,
        title: 'Fontend Developement',
        company: 'web Devrs',
        date: ' 2024 - dec-2024',
        description: 'Assisted in building modern web interfaces with React.',
        skillsUsed: ['Html', 'Css', ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-8 h-8 text-blue-400">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
            </svg>
        ), // Example icon for mobile app
        companyLogo: img1 // Dummy image URL
        },
        {
        id: 2,
        title: 'Mern Stack| BootCamp',
        company: 'LetSkill',
        date: 'Dec 2024 - mar 2025',
        description: 'Worked on MERN-based web apps and gained hands-on experience.',
        skillsUsed: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chess-knight w-8 h-8 text-yellow-400">
            <path d="M15 15h.01"/><path d="M12 19c-2.2 0-4-1.8-4-4 0-.7.3-1.4.8-2l1.6-3.2C10.7 8.3 11 7.7 11 7c0-1.7-1.3-3-3-3S5 5.3 5 7c0 .7.3 1.4.8 2L7.4 12c.5.9.8 1.5.8 2 0 2.2-1.8 4-4 4H2"/><path d="M17 12V5h-2.5a2.5 2.5 0 0 1-5 0V7.5"/><path d="M21 21v-7h-5v7h5z"/><path d="M18 10V5.5L16.5 4l-1.5 1.5V10"/>
            </svg>
        ), // Example icon for web developer
        companyLogo: img2 // Dummy image URL
        },
        // {
        //   id: 3,
        //   title: 'Frontend Developer Intern',
        //   company: 'Tech Solutions Inc.',
        //   date: 'Jan 2023 - May 2023',
        //   description: 'Assisted in the development of user interfaces for web applications, contributing to component design and front-end logic.',
        //   skillsUsed: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
        //   icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-8 h-8 text-orange-400">
        //       <polyline points="16 18 22 12 16 6" />
        //       <polyline points="8 6 2 12 8 18" />
        //     </svg>
        //   ), // Example icon for internship
        //   companyLogo: 'https://placehold.co/60x60/334155/E2E8F0?text=TS' // Dummy image URL
        // }
    ];

    // Function to toggle the expanded state of an experience item
    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id); // If clicked again, collapse; otherwise, expand
    };

    return (
        <div className="min-h-screen w-full bg-[#0A0A0A] text-white p-4 sm:p-8 flex flex-col items-center font-inter">
        <div className="w-full max-w-5xl">
            <h1 className="text-4xl font-bold mb-12 text-gray-100 text-center">My Experience</h1>

            <div className="relative">
            {/* Vertical line for desktop/tablet view */}
            <div className=" absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700 top-0"></div>

            {experiences.map((exp, index) => (
                <div
                key={exp.id}
                className={`
                    flex flex-col md:flex-row items-center w-full mb-12
                    ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                `}
                >
                {/* Experience Card Content */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-12 relative">
                    <div
                    className={`
                        bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700
                        w-full max-w-md overflow-hidden transition-all duration-500 ease-in-out
                    `}
                    >
                    <div className="flex justify-between items-center mb-1">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <button
                        onClick={() => toggleExpand(exp.id)}
                        className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none"
                        aria-expanded={expandedId === exp.id}
                        aria-controls={`details-${exp.id}`}
                        >
                        {expandedId === exp.id ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up">
                            <path d="m18 15-6-6-6 6"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                            <path d="m6 9 6 6 6-6"/>
                            </svg>
                        )}
                        </button>
                    </div>
                    <p className="text-gray-400 mb-2">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-4">{exp.date}</p>

                    {/* Company Logo - Added Image Element */}
                    {exp.companyLogo && (
                        <div className="mb-4">
                        <img
                            src={exp.companyLogo}
                            alt={`${exp.company} logo`}
                            className="rounded-lg w-16 h-16 object-cover"
                            onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop
                            e.target.src = `https://placehold.co/60x60/334155/E2E8F0?text=Logo`; // Fallback image
                            }}
                        />
                        </div>
                    )}

                    {/* Expanded Content */}
                    <div
                        id={`details-${exp.id}`}
                        className={`
                        grid transition-all duration-500 ease-in-out
                        ${expandedId === exp.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                        `}
                    >
                        <div className="overflow-hidden"> {/* This div ensures smooth height transition */}
                        {exp.description && (
                            <p className="text-gray-300 mb-4">{exp.description}</p>
                        )}
                        {exp.skillsUsed && exp.skillsUsed.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                            {exp.skillsUsed.map((skill, i) => (
                                <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                                {skill}
                                </span>
                            ))}
                            </div>
                        )}
                        </div>
                    </div>
                    </div>
                </div>

                {/* Dot and Connector */}
                <div className="relative z-10 my-4 md:my-0">
                    <div className="w-4 h-4 bg-gray-500 rounded-full flex items-center justify-center">
                    {/* Icon inside the dot, if desired */}
                    <span className="text-xs">{exp.icon && exp.icon}</span>
                    </div>
                    {/* Horizontal line for mobile view */}
                    <div className="md:hidden absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -z-10"></div>
                </div>

                {/* Right Column (for even index) / Left Column (for odd index) - empty for now, or add content */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-12">
                    {/* Content for the other side if needed, or leave empty for staggered layout */}
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    }
