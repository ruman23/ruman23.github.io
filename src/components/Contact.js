import React, { useState } from 'react';
import './Contact.css';
import { HiOutlineMail } from "react-icons/hi";
import { CiLinkedin } from "react-icons/ci";

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mail2ruman.i@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide the message after 2 seconds
  };

  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <p>If you would like to connect, discuss a project, or have any questions, please feel free to reach out:</p>
      
      <div className="contact-details">
        <p onClick={handleCopyEmail} className="click-to-copy">
          <HiOutlineMail className="contact-icon" />
          <strong>Email:</strong> <span className="contact-info">mail2ruman.i@gmail.com</span>
        </p>
        {copied && <span className="copy-confirmation">Email copied to clipboard!</span>}
        <p>
          <CiLinkedin className="contact-icon" />
          <strong>LinkedIn:</strong> <span className="contact-info"><a href="https://linkedin.com/in/ruman-i" target="_blank" rel="noopener noreferrer">linkedin.com/in/ruman-i</a></span>
        </p>
      </div>

      <p className="thank-you-message">Thank you for browsing my website and for taking the time to scroll down!</p>
    </section>
  );
}

export default Contact;
