// MenuBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MenuBar.css';
import logo from '../images/lg-logo.png';

const MenuBar = () => {
  return (
    <div className="menu-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className='name'>
        <Link to="/" className="menu-option">Liam Gelfand</Link>
      </div>
      <div className="menu-options">
        <Link to="/about-me" className="menu-option">About</Link>
        <Link to="/projects" className="menu-option">Projects</Link>
        <Link to="/contact" className="menu-option">Contact</Link>
      </div>
    </div>
  );
};

export default MenuBar;
