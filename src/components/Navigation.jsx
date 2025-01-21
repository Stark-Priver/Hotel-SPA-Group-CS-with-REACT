import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = (theme) => {
    if (theme === "light") {
      setIsDarkMode(false);
      document.body.classList.remove("dark-theme");
    } else if (theme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-theme");
    } else if (theme === "system") {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDarkScheme);
      document.body.classList.toggle("dark-theme", prefersDarkScheme);
    }
    setIsDropdownOpen(false); // Close dropdown after selecting theme
  };

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkScheme);
    document.body.classList.toggle("dark-theme", prefersDarkScheme);
  }, []);

  return (
    <Router>
      <nav className={`navigation ${isDarkMode ? "dark" : "light"}`}>
        <div className="nav-container">
          <div className="nav-logo">Hotel SPA</div>
          <button className="nav-toggle" onClick={toggleMenu}>
            {isOpen ? "✖" : "☰"}
          </button>

          <button
            className="theme-toggle"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {isDarkMode ? "🌞" : "🌙"} Theme
          </button>
          <div className={`theme-dropdown ${isDropdownOpen ? "show" : ""}`}>
            <button onClick={() => toggleTheme("light")}>🌞 Light</button>
            <button onClick={() => toggleTheme("dark")}>🌙 Dark</button>
            <button onClick={() => toggleTheme("system")}>
              🔲 System Default
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
          <button
            className="theme-toggle"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {isDarkMode ? "🌞" : "🌙"} Theme
          </button>
          <div className={`theme-dropdown ${isDropdownOpen ? "show" : ""}`}>
            <button onClick={() => toggleTheme("light")}>🌞 Light</button>
            <button onClick={() => toggleTheme("dark")}>🌙 Dark</button>
            <button onClick={() => toggleTheme("system")}>
              🔲 System Default
            </button>
          </div>
        </div>
      </nav>
    </Router>
  );
}

export default Navigation;
