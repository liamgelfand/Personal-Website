// AboutMe.js
import React from 'react';
import '../styles/About.css';
// import profilePic from '../images/profile.jpg'; // Make sure you have a profile picture in this path
import MenuBar from '../components/MenuBar';


const AboutMe = () => {
    return (
        <div className="page-container">
            <MenuBar />
            <div className="background">
                <div className="about-me-container">
                    {/* <img src={profilePic} alt="Liam Gelfand" className="profile-pic" /> */}
                    <h1>About Me</h1>
                    <section className="about-section">
                        <h2>Introduction</h2>
                        <p>
                            Hi, I'm Liam Gelfand. I'm a computer science student specializing in computational data analytics. This summer, I'll be working as a Software Engineering Intern, and I have previous experience as a full stack developer.
                        </p>
                    </section>
                    <section className="about-section">
                        <h2>Professional Background</h2>
                        <p>
                            I have a diverse background in full-stack development, having worked on various projects that span both front-end and back-end technologies. My upcoming internship as a Software Engineering Intern is a testament to my dedication and passion for the field.
                        </p>
                    </section>
                    <section className="about-section">
                        <h2>Hobbies and Interests</h2>
                        <p>
                            Outside of academics and professional work, I'm an avid sports enthusiast, particularly passionate about hockey and soccer. I also have a keen interest in machine learning and AI concepts. When I'm not coding or studying, you'll likely find me engaging in physically active pursuits.
                        </p>
                    </section>
                    <section className="about-section">
                        <h2>Get in Touch</h2>
                        <p>
                            Feel free to reach out to me through <a href="mailto:liam@example.com">email@example.com</a> or connect with me on <a href="https://www.linkedin.com/in/liamgelfand">LinkedIn</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;