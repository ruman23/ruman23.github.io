import React from 'react';
import './About.css';
import unoLogo from '../assets/uno_logo.png';
import cv from '../assets/cv.pdf';
import sustLogo from '../assets/sust_logo.png';
// Import Font Awesome icons
import { FaLinkedin, FaGithub, FaGitlab, FaGoogleScholar } from 'react-icons/fa6';
import { ImProfile } from "react-icons/im";

function About() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <p>
      I'm <strong>Md Ruman Islam</strong>, a Ph.D. student in Computing & Information Science at the University of Nebraska Omaha. My research focuses on cybersecurity, cyber-physical systems, IoT, and machine learning. I also have industry experience as a Software Engineer at Samsung R&D Institute.
      </p>

      <h2>Research Interests</h2>
      <ul className="research-interests">
        <li>Cybersecurity</li>
        <li>Cyber-Physical Systems</li>
        <li>Internet of Things (IoT)</li>
        <li>Machine Learning</li>
      </ul>

      <h2>Contact</h2>
      <div className="contact-info">
        <p>Email: <a href="mailto:mail2ruman.i@gmail.com">mail2ruman.i@gmail.com</a></p>
        <ul className="social-icons">
          <li><a href="https://linkedin.com/in/ruman-i" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
          <li><a href="https://github.com/ruman23" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
          <li><a href="https://gitlab.com/ruman23" target="_blank" rel="noopener noreferrer"><FaGitlab /></a></li>
          <li><a href="https://scholar.google.com/citations?user=cJZu7JgAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer"><FaGoogleScholar /></a></li>
          <li><a href={cv} target="_blank" rel="noopener noreferrer"><ImProfile /></a></li>
        </ul>
      </div>

      <h2>Education</h2>
      <div className="education-container">
        {/* Ph.D. Entry */}
        <div className="education-item">
          <img src={unoLogo} alt="UNO Logo" className="education-logo" />
          <div className="education-details">
            <h3>University of Nebraska Omaha (UNO)</h3>
            <p className="degree">Doctor of Philosophy (Ph.D.), Computing & Information Science</p>
            <p className="dates">Aug. 2022 - Present</p>
          </div>
        </div>

        {/* M.Sc. Entry */}
        <div className="education-item">
          <img src={unoLogo} alt="UNO Logo" className="education-logo" />
          <div className="education-details">
            <h3>University of Nebraska Omaha (UNO)</h3>
            <p className="degree">Master of Science (M.Sc.), Computing & Information Science</p>
            <p className="dates">Aug. 2022 - Present</p>
          </div>
        </div>

        {/* B.Sc. Entry */}
        <div className="education-item">
          <img src={sustLogo} alt="SUST Logo" className="education-logo" />
          <div className="education-details">
            <h3>Shahjalal University of Science and Technology (SUST)</h3>
            <p className="degree">Bachelor of Science (B.Sc.), Computer Science and Engineering</p>
            <p className="dates">Apr. 2014 - Dec. 2018</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
