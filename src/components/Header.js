import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';  // Hamburger icon
import { RxCross1 } from 'react-icons/rx';         // Cross icon
import { RiProgress8Fill, RiProgress8Line } from 'react-icons/ri';  // Progress icons for visited and current
import { GoCircle } from "react-icons/go";

import './Header.css';  // Importing the styles

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = ['home', 'about', 'skills', 'experience', 'portfolio', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = (window.scrollY / totalHeight) * 100;
      setScrollPosition(scroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close the menu on mobile after clicking
  };

  const renderCircles = () => {
    return sectionIds.map((id, index) => {
      const isLastSection = index === sectionIds.length - 1;
      const isCurrent = isLastSection
        ? scrollPosition >= (index / sectionIds.length) * 100 // Stay active at the bottom
        : scrollPosition >= (index / sectionIds.length) * 100 && scrollPosition < ((index + 1) / sectionIds.length) * 100;
      const isVisited = scrollPosition > ((index + 1) / sectionIds.length) * 100;

      let IconComponent = GoCircle; // Default icon (unvisited)
      if (isVisited) {
        IconComponent = RiProgress8Fill; // Visited sections
      } else if (isCurrent) {
        IconComponent = RiProgress8Line; // Current section
      }

      return (
        <div key={id} className="nav-item" onClick={() => scrollToSection(id)}>
          <div className="progress-icon">
            <IconComponent size={20} />  {/* Render the appropriate icon */}
          </div>
          <li>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </li>
        </div>
      );
    });
  };

  return (
    <header>
      <div className="nav-container">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RxCross1 size={30} /> : <GiHamburgerMenu size={30} />}  {/* Toggle between hamburger and cross icons */}
        </div>
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            {renderCircles()}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
