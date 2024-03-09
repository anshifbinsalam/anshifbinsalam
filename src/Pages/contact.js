import React, { useEffect } from "react";
import "./contact.css";
import { IoArrowBackSharp, IoMail, IoCall, IoLogoLinkedin, IoArrowForward } from "react-icons/io5";

const Contact = () => {
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ContactCard = ({ title, content, connect, icon }) => (
    <div className="card">
      <div className="card__content">
        {icon}
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{content}</p>
        {connect && (
          <a href={connect} target="_blank" rel="noopener noreferrer">
            <button className="card-button">Connect   <IoArrowForward className="arrow-icon" /></button>
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="outer-box-contact">
      <div className="inner-box-contact">
        <a href="/" className="back-proj">
          {" "}
          {windowSize < 768 ? (
            <>
              <IoArrowBackSharp className="back-icon" /> BACK
            </>
          ) : (
            <>
              <IoArrowBackSharp className="back-icon-proj" /> BACK
            </>
          )}

        </a>
        <div className="left-section-contact">
          <h1 className="contactheading">Contact</h1>
          <p className="contactcard">
            Excited to connect with you! <br />
            Feel free to drop me a message below, and let's explore new
            opportunities together.
          </p>
          <div className="contact-cards-container">
            <ContactCard
              title="Email"
              content="anshifsalamk@gmail.com"
              connect="mailto:anshifsalamk@gmail.com?subject=Hello Anshif!&body=I came across your portfolio and would like to connect with you."
              icon={<IoMail size={30} className="contact-icon" />}
            />
            <ContactCard
              title="Phone"
              content="+91 7306428115"
              connect="tel:+917306428115"
              icon={<IoCall size={30} className="contact-icon" />}
            />
            <ContactCard
              title="LinkedIn"
              content="Anshif Salam"
              connect="https://www.linkedin.com/in/anshif-salam-5a20901aa"
              icon={<IoLogoLinkedin size={30} className="contact-icon" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
