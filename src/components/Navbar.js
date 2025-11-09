import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Aiclogo.jpg';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logo} alt="AIC Logo" />
          <span>AIC Chebisaas</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? 'hamburger open' : 'hamburger'}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/')}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          
          <li className="nav-item dropdown">
            <div 
              className={`nav-link ${isActive('/about') || isActive('/pastors') || isActive('/church-elders') ? 'active' : ''}`}
              onClick={() => toggleDropdown('about')}
            >
              About Us <i className="bi bi-chevron-down"></i>
            </div>
            <ul className={`dropdown-menu ${openDropdown === 'about' ? 'show' : ''}`}>
              <li>
                <Link to="/about" className="dropdown-link" onClick={closeMenu}>
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/pastors" className="dropdown-link" onClick={closeMenu}>
                  Our Pastors
                </Link>
              </li>
              <li>
                <Link to="/church-elders" className="dropdown-link" onClick={closeMenu}>
                  Church Elders
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <div 
              className={`nav-link ${isActive('/services') || isActive('/sermons') ? 'active' : ''}`}
              onClick={() => toggleDropdown('worship')}
            >
              Worship <i className="bi bi-chevron-down"></i>
            </div>
            <ul className={`dropdown-menu ${openDropdown === 'worship' ? 'show' : ''}`}>
              <li>
                <Link to="/services" className="dropdown-link" onClick={closeMenu}>
                  Service Times
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="dropdown-link" onClick={closeMenu}>
                  Sermons
                </Link>
              </li>
              <li>
                <Link to="/choir" className="dropdown-link" onClick={closeMenu}>
                  Choir
                </Link>
              </li>
              <li>
                <Link to="/praise-worship" className="dropdown-link" onClick={closeMenu}>
                  Praise & Worship
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <div 
              className={`nav-link ${isActive('/departments') || isActive('/prayer-groups') ? 'active' : ''}`}
              onClick={() => toggleDropdown('ministries')}
            >
              Ministries <i className="bi bi-chevron-down"></i>
            </div>
            <ul className={`dropdown-menu ${openDropdown === 'ministries' ? 'show' : ''}`}>
              <li>
                <Link to="/departments" className="dropdown-link" onClick={closeMenu}>
                  Church Departments
                </Link>
              </li>
              <li>
                <Link to="/prayer-groups" className="dropdown-link" onClick={closeMenu}>
                  Prayer Groups
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link 
              to="/events" 
              className={`nav-link ${isActive('/events')}`}
              onClick={closeMenu}
            >
              Events
            </Link>
          </li>
          
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact')}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;