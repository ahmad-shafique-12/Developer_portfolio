import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import FileExporlor from './Components/FileExporlor';
import About from './Components/About';
import Stack from './Components/Stack';
import Experience from './Components/Experience';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Home from './Components/Home';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<FileExporlor />} />
            <Route path="about" element={<About />} />
            <Route path="mystack" element={<Stack />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Project />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
