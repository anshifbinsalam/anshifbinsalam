// Filename - App.js
import "./App.css"
import '@fortawesome/fontawesome-free/css/all.css';

// App.js
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Project from "./Pages/project";
import Contact from "./Pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
