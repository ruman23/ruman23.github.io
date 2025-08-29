// Footer.js
import React from "react";
import "./Footer.css";
import cv from "../assets/cv.pdf";
import { FaLinkedin, FaGithub, FaGitlab, FaGoogleScholar } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="copyright">© 2025 Md Ruman Islam. All rights reserved.</p>

        <ul className="footer-social" aria-label="Profiles and CV" style={{ display: "flex", gap: "12px", listStyle: "none", padding: 0, margin: 0, justifyContent: "center" }}>
          <li>
            <a
              href="https://linkedin.com/in/ruman-i"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ruman23"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://gitlab.com/ruman23"
              target="_blank"
              rel="noopener noreferrer"
              title="GitLab"
              aria-label="GitLab profile"
            >
              <FaGitlab />
            </a>
          </li>
          <li>
            <a
              href="https://scholar.google.com/citations?user=cJZu7JgAAAAJ&hl=en&authuser=1"
              target="_blank"
              rel="noopener noreferrer"
              title="Google Scholar"
              aria-label="Google Scholar profile"
            >
              <FaGoogleScholar />
            </a>
          </li>
          <li>
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              title="Curriculum Vitae (PDF)"
              aria-label="Open Curriculum Vitae"
            >
              <ImProfile />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;