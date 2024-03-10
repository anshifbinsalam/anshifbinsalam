// Filename - App.js
import "./App.css"
import '@fortawesome/fontawesome-free/css/all.css';


import React from "react";
// import Navbar from "./components/Navbar";
// import {
// 	BrowserRouter as 
// 	Routes,
// 	Route,
// } from "react-router-dom";
import {
	HashRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./Pages/index";
import About from "./Pages/about";
import Project from "./Pages/project";
import Contact from "./Pages/contact";

function App() {
	return (
		<div className='App'>
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route path="/project" element={<Project />} />
			</Routes>
		</Router>
		</div>
	);
}

export default App;
