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
    </section>
  );
}

export default About;
