import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Effect to update body class based on the theme
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const footerOffset = footer ? footer.offsetTop : 0;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >= footerOffset) {
        setIsSticky(false); // Footer reached, set navbar to relative
      } else {
        setIsSticky(true); // Navbar sticks to top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <nav className={`navigation ${!isSticky ? "sticky" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">Hotel SPA</div>
          <button className="nav-toggle" onClick={toggleMenu}>
            {isOpen ? "✖" : "☰"}
          </button>
          <ul className={`nav-list ${isOpen ? "open" : ""}`}>
            <li>
              <button onClick={toggleTheme}>
                {theme === "light" ? "🌙 " : "☀️"}
              </button>
            </li>
            <li className="nav-item">
              <NavLink to="/" activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" activeClassName="active-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" activeClassName="active-link">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/testimonials" activeClassName="active-link">
                Testimonials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/footer" activeClassName="active-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Router>
  );
}

export default Navigation;
