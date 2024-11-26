import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = ({ scrollToSection, refs }) => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="navbar-main">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div
          className={`navbar-items ${isMobile ? "navbar-items-mobile" : ""}`}
        >
          {/* Use scrollToSection to navigate */}
          <button
            className="navbar-item"
            onClick={() => scrollToSection(refs.carouselRef)}
          >
            Home
          </button>
          <button
            className="navbar-item"
            onClick={() => scrollToSection(refs.aboutRef)}
          >
            About
          </button>
          <button
            className="navbar-item"
            onClick={() => scrollToSection(refs.doRef)}
          >
            Product
          </button>
          <button
            className="navbar-item"
            onClick={() => scrollToSection(refs.machineRef)}
          >
            Infrastructure
          </button>
          <button
            className="navbar-item"
            onClick={() => scrollToSection(refs.contactRef)}
          >
            Contact
          </button>
        </div>
        <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? "X" : <>&#9776;</>}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
