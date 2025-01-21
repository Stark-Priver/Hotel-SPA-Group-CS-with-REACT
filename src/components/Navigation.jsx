// Navigation.jsx
import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-logo">Hotel SPA</div>
          <button className="nav-toggle" onClick={toggleMenu}>
            {isOpen ? "✖" : "☰"}
          </button>
          <ul className={`nav-list ${isOpen ? "open" : ""}`}>
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link to="/footer">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Router>
  );
}

export default Navigation;
