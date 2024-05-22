import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import AboutMe from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import HomePage from './pages/Home'; 
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


