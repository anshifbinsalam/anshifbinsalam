import React, { useState, useEffect } from "react";
import "./project.css";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


const Project = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [selectedProject, setSelectedProject] = useState(1); // Default selected project is 1

  const handleProjectClick = (projectNumber) => {
    setSelectedProject(projectNumber);
  };

  const getProjectContent = () => {
    switch (selectedProject) {
      case 1:
        return (
          <>
            <h1 className="projhead">PROJECT #1</h1>
            <h2 className="projsubhead">Granthashala <span className="date">(Sep 2023 - Feb 2024)</span>  </h2>
            <p className="projdes">
                 - Developed a user-friendly web application for an online bookstore. <br/>
                 - Enabled book purchases, author self-publishing, and an admin panel for seamless management.<br/>
                 - Produced essential project documents including SRS Document, Data Flow Diagram, Wire Frame, and Agile framework.<br/>
                 - Created a web app using PHP as frontend and MySQL as backend.<br/>
                 - Implemented a secure login system and a user-friendly interface.<br/>
                 - Designed a user-friendly interface for the admin panel.<br/><br/>
                 <span className="subhead">Technologies-used:</span> PHP, MySQL, HTML, CSS, JavaScript, and Bootstrap.<br/> <br/>
                 <span className="subhead">Roles and Responsibilities:</span> Working as a developer for the project  <br/>
                  </p>
          </>
        );
      case 2:
        return (
          <>
            <h1 className="projhead">PROJECT #2</h1>
            <h2 className="projsubhead">Automated Pen Tester <span className="date">(Nov 2022 - June 2023) </span> </h2>
            <p className="projdes">
            - Created a Web Application for Pen Testers where they can test their websites.<br/>
            - Checks the given websites have any Cross Site Scripting, Common Vulnerabilities and Exposures.<br/>
            - Checks the input forms in the website have any SQL injections, both inband and inferential SQL Injections are verified.<br/>
            - Checks the website for any sensitive data exposure.<br/>  <br/>
            <span className="subhead">Technologies-used: </span>Python, Django, HTML, CSS, React JS, and Bootstrap.<br/><br/>  
            <span className="subhead">Roles and Responsibilities:</span> Created the whole frontend for the project using React JS. <br/>
            </p>
          </>
        );
      // Add cases for other projects as needed
      case 3:
        return (
          <>
            <h1 className="projhead">PROJECT #3</h1>
            <h2 className="projsubhead">Kaizen 8 <span className="date">(April 2023) </span></h2>
            <p className="projdes">
            - Developed and launched "KAIZEN 8," a dynamic website for a college tech fest, hosted publically. <br/>
            - Designed the website to provide comprehensive details about the tech fest, including guest speakers, workshops  and registration information. <br/>
            - Created a user-friendly interface for the website, enabling easy navigation and registration. <br/><br/>  
            <span className="subhead">Technologies-used:</span> React JS, Three.JS and Python. <br/><br/>  
            <span className="subhead">Roles and Responsibilities:</span> Helped in the frontend of the project   (Created different landing pages for the speakers, workshops and loading pages). <br/>
            </p>        
          </>
        );
      case 4:
        return (
          <>
            <h1 className="projhead">PROJECT #4</h1>
            <h2 className="projsubhead">Url Analyzer <span className="date">(Jun 2022 - Sep 2022) </span></h2>
            <p className="projdes">
            - College level mini-project as part of syllabus, focusing on detection of malicious URLs. <br/>
            - Developed website, which helps in providing details about authenticity of URLs.<br/>
            - Helps in avoiding phishing and malicious URL protecting the user.<br/>
            - Created a user-friendly interface for the website, enabling easy navigation and surfing. <br/><br/>
            <span className="subhead">Technologies-used:</span> Python,Django,React JS, JavaScript, and Bootstrap. <br/><br/>
            <span className="subhead">Roles and Responsibilities:</span> Created a module where URL Redirection history is checked, Helped in the frontend. <br/>
            </p>
          </>
        );
      case 5:
        return (
          <>
            <h1 className="projhead">PROJECT #5</h1>
            <h2 className="projsubhead">Iliad 22 <span className="date">(May 2022) </span></h2>
            <p className="projdes">
            - Part of the design and development team of a website for the college arts festival.<br/>
            - Designed the website to provide comprehensive details about the arts fest, including guest speakers, and registration information.<br/>
            - Students can register for the events and can view the details of the events.<br/>
            - Created a user-friendly interface for the website, enabling easy navigation and registration.<br/><br/>
            <span className="subhead">Technologies-used:</span> Python, Django, React JS and JSON<br/><br/>
            <span className="subhead">Roles and Responsibilities:</span> Helped in the registration module for parsing json data. <br/>
            </p>  
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="outer-box-proj">
      <div className="inner-box-proj">
        <a href="/" className="back-proj">
          {" "}
          <IoArrowBackSharp className="back-icon-proj" /> BACK{" "}
        </a>
        <div className="left-section-proj">
          {getProjectContent()}
          <div className="right-section-proj">
            <div className="menu-box-proj">
              <h3 className="menu-proj">PROJECTS</h3>
              <ul className="snip1241-proj">
                <li>
                  <Link to="#!" onClick={() => handleProjectClick(1)}>
                      {windowSize < 768 ? (
                    <p>1.Grantha- shala</p>
                    ) : (
                   <p>1. Granthashala</p>
                    )}
                  </Link>
                </li>
                <li>
                  <Link to="#!" onClick={() => handleProjectClick(2)}>
                    2.Automated Pen Tester
                  </Link>
                </li>
                <li>
                  <Link to="#!" onClick={() => handleProjectClick(3)}>
                    3.Kaizen 8
                  </Link>
                </li>
                <li>
                  <Link to="#!" onClick={() => handleProjectClick(4)}>
                    4.Url Analyzer
                  </Link>
                </li>
                <li>
                  <Link to="#!" onClick={() => handleProjectClick(5)}>
                    5.Iliad 22
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;