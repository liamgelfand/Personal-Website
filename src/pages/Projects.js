import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import MenuBar from '../components/MenuBar';
import '../styles/Projects.css';

// Importing images
import incite from '../images/InciteWebsiteSS.png';
import gradecalc from '../images/GradeCalculator.png'
import facialrecog from '../images/EmotionalRecognition.png'
import tkinter from '../images/Hangman.png'

const projectsColumn1 = [
  { id: 1, name: 'Incite Website', imgSrc: incite, link: '/project1' },
  { id: 2, name: 'Grade Calculator', imgSrc: gradecalc, link: '/project2' },
];

const projectsColumn2 = [
  { id: 3, name: 'Emotianal Recognitoin', imgSrc: facialrecog, link: '/project3' },
  { id: 4, name: 'Hangman', imgSrc: tkinter, link: '/project4' },
];

function Projects() {
  return (
    <div className='project-page'>
      <MenuBar />
      <div className='title'>Projects</div>
      <div className='project-container'>
        <div className='column'>
          {projectsColumn1.map(project => (
            <Link to={project.link} key={project.id} className='project-tile'>
              <img src={project.imgSrc} alt={project.name} />
              <div className='project-name'>{project.name}</div>
            </Link>
          ))}
        </div>
        <div className='column'>
          {projectsColumn2.map(project => (
            <Link to={project.link} key={project.id} className='project-tile'>
              <img src={project.imgSrc} alt={project.name} />
              <div className='project-name'>{project.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
