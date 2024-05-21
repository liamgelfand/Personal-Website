// HomePage.js
import React from 'react';
import '../styles/Home.css';
import '../components/MenuBar.js';
import MenuBar from '../components/MenuBar.js';
import Guy from '../images/green-guy.png';
import CustomCursor from '../components/CustomCursor.js';


const HomePage = () => {
  return (
    <div className="container">
    {/* <CustomCursor/> */}
    <img src={Guy} alt="Green Guy" className="guy-image" />      
    <h1 className="header">
        Hey, I'm Liam. I like to code. <br />
        Welcome to my corner of the internet
      </h1>
        < MenuBar/> 
    </div>
  );
};

export default HomePage;
