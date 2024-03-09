import React from "react";
import "./about.css";
import { IoArrowBackSharp } from "react-icons/io5";

const About = () => {
  const handleDownloadResume = () => {
    // Replace 'your_resume.pdf' with the actual filename of your PDF in the public folder
    const pdfUrl = process.env.PUBLIC_URL + "./Resume.pdf";

    // Open the PDF in a new window or tab for preview
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="outer-box-about">
      <div className="inner-box-about">
        <a href="/" className="back-about">
          {" "}
          <IoArrowBackSharp className="back-icon-about" /> BACK{" "}
        </a>
        <div className="left-section-about">
          <h1 className="heading">About!</h1>
          <p className="aboutdes">Hello! Myself Anshif Salam, I'm a Computer Science and Engineering graduate from 
								College of Engineering, Munnar in the year of 2023, with a strong foundation in 
								technology and a passion for creating innovative solutions. Throughout my academic 
								journey, I've been deeply involved in numerous projects, honing my skills and 
								fostering a keen interest in software development. After College, I continued to do the projects as well ans 
								specialized course in Software Development Engineering and Test (SDET) have continued to expand 
								my knowledge and expertise. Currently, I am on the lookout for an exciting opportunity 
								in a dynamic software company where I can apply my technical proficiency to contribute 
								meaningfully to the development of impactful and user-centric software products. Beyond 
								the realm of technology, my interests extend to event management—I've successfully coordinated 
								various events during my college years—and a love for traveling, which fuels my curiosity and 
								broadens my perspective.
				</p>
          <a href="#!" className="Dwnload" onClick={handleDownloadResume}>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;


