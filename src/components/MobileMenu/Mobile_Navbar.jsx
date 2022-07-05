import React, { useState } from "react";
import "./Mobile_Navbar.css";
import { Link } from "react-scroll";

const MobileNav = () => {
  const [menuIcon, setMenuicon] = useState(true);

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      setMenuicon(false);
    } else {
      x.className = "topnav";
      setMenuicon(true);
    }
  }

  return (
    <div className="nav_container">
      <div className="topnav" id="myTopnav">
      <a href="#home" className="active"></a>
      <Link to="Intro" spy={true} smooth={true}><a href="#Intro">Home</a></Link>
      <Link to="services" spy={true} smooth={true}><a href="#services">Services</a></Link>
      <Link to="portfolio" spy={true} smooth={true}><a href="#portfolio">Projects</a></Link>
      <Link to="education" spy={true} smooth={true}><a href="#education">Education</a></Link>
      <Link to="works" spy={true} smooth={true}><a href="#works">Experience</a></Link>
      <Link to="contact" spy={true} smooth={true}><a href="#contact">Contact</a></Link>
      <Link to="testimonial" spy={true} smooth={true}> <a href="#testimonial">Certification</a></Link>
        <a href="#news">Resume</a>
        <a className="icon" onClick={myFunction}>
          {menuIcon ? (
            <i className="fa fa-bars"></i>
          ) : (
            <i className="fa fa-times" aria-hidden="true"></i>
          )}
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
