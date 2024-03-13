// Filename - App.js
import "./App.css"
import '@fortawesome/fontawesome-free/css/all.css';

// App.js
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Project from "./Pages/Project/project";
import Contact from "./Pages/Contact/contact";
// import Change from "./Pages/colourChange/colour";
function App() {
  
  return (
    <Router>
      {/* <Change/> */}
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
