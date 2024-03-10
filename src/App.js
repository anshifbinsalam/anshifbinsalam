// Filename - App.js
import "./App.css"
import '@fortawesome/fontawesome-free/css/all.css';

// App.js
import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/index";
import About from "./Pages/about";
import Project from "./Pages/project";
import Contact from "./Pages/contact";

function App() {
  return (
    <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>

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
