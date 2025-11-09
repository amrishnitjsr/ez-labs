import { useState } from 'react';
import './Navbar.css';
import BackgroundTexture from './BackgroundTexture.svg';
import LogoPng from '../assets/logo.png';
import BrushStroke from '../assets/brush-stroke.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Background Texture */}
      <div className="navbar-background">
        <img src={BackgroundTexture} alt="" className="navbar-texture" />
      </div>
      
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home" className="logo-link">
            <img src={LogoPng} alt="VFilms Logo" className="logo-image" />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#services" className="navbar-link">Services</a>
          </li>
          <li className="navbar-item">
            <a href="#their-stories" className="navbar-link">Their Stories</a>
          </li>
          <li className="navbar-item">
            <a href="#our-story" className="navbar-link">Our Story</a>
          </li>
          <li className="navbar-item">
            <a href="#varnan" className="navbar-link">Varnan</a>
          </li>
        </ul>

        {/* CTA Button and Menu Toggle */}
        <div className="navbar-actions">
          <button className="cta-button">
            Let's Talk
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="white"/>
            </svg>
          </button>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="navbar-logo-right">
            <img src={BrushStroke} alt="Brush Stroke" className="logo-right-image" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
