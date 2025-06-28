// import React, { useState, useEffect } from 'react';
// import Sidebar from './Sidebar';

// function Toggle() {
//   const [darkMode, setDarkMode] = useState(false);

//   // Run only on client after hydration
//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme');
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//     if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
//       setDarkMode(true);
//       document.documentElement.classList.add('dark');
//     } else {
//       setDarkMode(false);
//       document.documentElement.classList.remove('dark');
//     }
//   }, []);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(prev => !prev);
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
//       <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
//       <main className="flex-1 p-8">
//         <h1 className="text-3xl font-bold">Welcome to my portfolio!</h1>
//         <p className="mt-4">This is where your main content will be displayed.</p>
//       </main>
//     </div>
//   );
// }

// export default Toggle;
