// MenuBar.js
import React from 'react';
import '../styles/MenuBar.css';
import logo from '../images/lg-logo.png'; 

const MenuBar = () => {
  return (
    <div className="menu-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className='name'>Liam Gelfand</div>
      <div className="menu-options">
        <a href="#about-me" className="menu-option">About Me</a>
        <a href="#projects" className="menu-option">Projects</a>
        <a href="#contact" className="menu-option">Contact</a>
      </div>
    </div>
  );
};

export default MenuBar;
