import React, { useState } from 'react';
import './About.css';
import unoLogo from '../assets/uno_logo.png';
import cv from '../assets/cv.pdf';
import sustLogo from '../assets/sust_logo.png';
// Import Font Awesome icons
import { FaLinkedin, FaGithub, FaGitlab, FaGoogleScholar } from 'react-icons/fa6';
import { ImProfile } from "react-icons/im";

function About() {
  const [copyMessage, setCopyMessage] = useState('');

  const handleEmailClick = (email) => {
    navigator.clipboard.writeText(email);
    setCopyMessage('Email copied!');
    setTimeout(() => setCopyMessage(''), 2000); // Clear message after 2 seconds
  };

  return (
    <section id="about">
      <h1>About Me</h1>
      <p>I am <span className="highlighted-name">Md Ruman Islam</span>, a Ph.D. student in Computing & Information Science (CIS) at the 
        &nbsp;<a href="https://www.unomaha.edu">University of Nebraska Omaha</a>,&nbsp; under the supervision of 
        &nbsp;<a href="https://unocps.github.io">Dr. Pei-Chi Huang</a>.&nbsp; My research spans Cybersecurity, Cyber-Physical Systems, and Machine Learning. 
        Alongside my academic pursuits, I have industry experience as a Software Engineer at
        &nbsp;<a href="https://research.samsung.com/srbd">Samsung R&D Institute</a>.
      </p>

      <h2>Research Interests</h2>
      <ul className="research-interests">
        <li>Cybersecurity</li>
        <li>Cyber-Physical Systems</li>
        <li>Machine Learning</li>
      </ul>

      <h2>Contact</h2>
      <div className="contact-info">
        {/* Display the copy message on top */}
        {copyMessage && <p className="copy-message">{copyMessage}</p>}
        <p>Email: <span onClick={() => handleEmailClick("mail2ruman.i@gmail.com")} className="clickable-email">mail2ruman.i@gmail.com</span></p>
        <p>Email: <span onClick={() => handleEmailClick("mdrumanislam@unomaha.edu")} className="clickable-email">mdrumanislam@unomaha.edu</span></p>
        
        <ul className="social-icons">
          <li><a href="https://linkedin.com/in/ruman-i" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a></li>
          <li><a href="https://github.com/ruman23" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a></li>
          <li><a href="https://gitlab.com/ruman23" target="_blank" rel="noopener noreferrer" title="GitLab"><FaGitlab /></a></li>
          <li><a href="https://scholar.google.com/citations?user=cJZu7JgAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer" title="Google Scholar"><FaGoogleScholar /></a></li>
          <li><a href={cv} target="_blank" rel="noopener noreferrer" title="Curriculum Vitae"><ImProfile /></a></li>
        </ul>
      </div>
    </section>
  );
}

export default About;
