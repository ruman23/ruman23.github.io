import React, { useState } from 'react';
import './About.css';
import cv from '../assets/cv.pdf';
import {
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaGoogleScholar,
  FaLock,
  FaNetworkWired,
  FaServer,
  FaEnvelope
} from 'react-icons/fa6';
import { ImProfile } from 'react-icons/im';

function About() {
  const [copyMessage, setCopyMessage] = useState('');

  const handleEmailClick = (email) => {
    navigator.clipboard.writeText(email);
    setCopyMessage('Email copied!');
    setTimeout(() => setCopyMessage(''), 2000);
  };

  return (
    <section id="about" aria-labelledby="about-heading">
      {/* <h1 id="about-heading">About</h1> */}
      <p className="about-intro">
        <span className="highlighted-name">Md Ruman Islam</span> is a Ph.D. student in Computing &amp; Information Science at the
        &nbsp;<a href="https://www.unomaha.edu" target="_blank" rel="noopener noreferrer">University of Nebraska Omaha</a>, advised by
        &nbsp;<a href="https://unocps.github.io" target="_blank" rel="noopener noreferrer">Dr. Pei‑Chi Huang</a>.
        His research focuses on the intersection of <strong>cybersecurity</strong>, <strong>cyber‑physical systems</strong>, and
        <strong> machine learning</strong>. Previously, he worked as a Software Engineer at
        &nbsp;<a href="https://research.samsung.com/srbd" target="_blank" rel="noopener noreferrer">Samsung R&amp;D Institute Bangladesh</a>.
      </p>

      <div className="centered-section">
        <h2>Research Interests</h2>
        <ul className="interest-pills" role="list">
          <li className="interest-pill">
            <span className="icon" aria-hidden="true"><FaLock /></span>
            <span className="label">Network Security and Privacy</span>
          </li>
          <li className="interest-pill">
            <span className="icon" aria-hidden="true"><FaNetworkWired /></span>
            <span className="label">AI/ML in Networking Systems</span>
          </li>
          <li className="interest-pill">
            <span className="icon" aria-hidden="true"><FaServer /></span>
            <span className="label">Real-Time and Cyber-Physical Systems</span>
          </li>
        </ul>


        <h2>Contact</h2>
        <div className="contact-info">
          {copyMessage && (
            <p className="copy-message" role="status" aria-live="polite">{copyMessage}</p>
          )}
          <p>
            <span className="icon" aria-hidden="true"><FaEnvelope /></span>
            <span onClick={() => handleEmailClick('mail2ruman.i@gmail.com')} className="clickable-email">mail2ruman.i@gmail.com</span>
          </p>
          <br />
          <p>
            <span className="icon" aria-hidden="true"><FaEnvelope /></span>
            <span onClick={() => handleEmailClick('mdrumanislam@unomaha.edu')} className="clickable-email">mdrumanislam@unomaha.edu</span>
          </p>
        </div>
        <div className="social-block" aria-label="Profiles and CV">
          <ul className="social-icons">
            <li>
              <a href="https://linkedin.com/in/ruman-i" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn profile">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/ruman23" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub profile">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/ruman23" target="_blank" rel="noopener noreferrer" title="GitLab" aria-label="GitLab profile">
                <FaGitlab />
              </a>
            </li>
            <li>
              <a href="https://scholar.google.com/citations?user=cJZu7JgAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer" title="Google Scholar" aria-label="Google Scholar profile">
                <FaGoogleScholar />
              </a>
            </li>
            <li>
              <a href={cv} target="_blank" rel="noopener noreferrer" title="Curriculum Vitae (PDF)" aria-label="Open Curriculum Vitae">
                <ImProfile />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
