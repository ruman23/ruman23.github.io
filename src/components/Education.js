import React from 'react';
import './Education.css';
import unoLogo from '../assets/uno_logo.png';
import sustLogo from '../assets/sust_logo.png';

function Education() {
  return (
    <section id="education">
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
            <p className="degree">Master of Science (M.Sc.), Computer Science</p>
            <p className="dates">Aug. 2022 - Dec. 2024</p>
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

export default Education;
