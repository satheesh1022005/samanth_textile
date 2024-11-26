import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="navbar-main">
      <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`navbar-items ${isMobile ? "navbar-items-mobile" : ""}`}>
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/" className="navbar-item">
          About
        </Link>
        <Link to="/" className="navbar-item">
          Product
        </Link>
        <Link to="/" className="navbar-item">
          Infrastructure
        </Link>
        <Link to="/about" className="navbar-item">
          Contact
        </Link>
      </div>
      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? "X" : <>&#9776;</>}
      </div>
    </nav>
    </div>
  );
};

export default Navbar;

{
  /* <div className="navbar-item dropdown">
          <button className="dropdown-btn">
            Product<span className="dropdown-icon">&#9662;</span>
          </button>
          <div className="dropdown-content">
            <Link to="/link1">Link 1</Link>
            <Link to="/link2">Link 2</Link>
            <Link to="/link3">Link 3</Link>
          </div>
        </div>
        <div className="navbar-item dropdown">
          <button className="dropdown-btn">
            Shop<span className="dropdown-icon">&#9662;</span>
          </button>
          <div className="dropdown-content">
            <Link to="/link1">Link 1</Link>
            <Link to="/link2">Link 2</Link>
            <Link to="/link3">Link 3</Link>
          </div>
        </div>
        <div className="navbar-item dropdown">
          <button className="dropdown-btn">
            More<span className="dropdown-icon">&#9662;</span>
          </button>
          <div className="dropdown-content">
            <Link to="/link1">Link 1</Link>
            <Link to="/link2">Link 2</Link>
            <Link to="/link3">Link 3</Link>
          </div>
        </div> */
}
