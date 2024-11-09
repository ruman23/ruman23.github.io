import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      position: "Graduate Research Assistant",
      company: "University of Nebraska Omaha (UNO)",
      logo: require('../assets/uno_logo.png'),
      duration: "Aug 2022 - Present",
      description: `I have been working as a Graduate Research Assistant at the University of Nebraska Omaha since August 2022. My work spans Digital Twin, DL-based Networking Congestion Control, Cyber Physical Systems, Networking Security and Privacy, Virtual Reality Privacy, and Machine Learning (ML) for IoT's Congestion Control.`,
      tasks: [
        "Worked on Digital Twin-based systems.",
        "Developed DL-based networking congestion control solutions.",
        "Involved in Cyber Physical System research.",
        "Researched networking security and privacy.",
        "Worked on Virtual Reality Privacy projects.",
        "Developed ML models for IoT’s congestion control."
      ]
    },
    {
      position: "Software Engineer",
      company: "Samsung R&D Institute Bangladesh",
      logo: require('../assets/samsung_logo.png'),
      duration: "Dec 2018 – Jul. 2022",
      description: `Worked as a Software Engineer, specializing in cloud data processing, IoT device communication, and optimizing onboarding systems for IoT devices.`,
      tasks: [
        "Fetched, parsed, and displayed cloud data to users.",
        "Communicated with IoT devices for seamless integration.",
        "Optimized IoT device onboarding systems for the cloud."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="title-container">
        <h1>Work Experience</h1>
      </div>

      <div className="experience-content">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-details">
            <div className="header-info">
              <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
              <div>
                <h2 className="position">{exp.position}</h2>
                <h3 className="company-name">{exp.company}</h3>
                <p className="duration">{exp.duration}</p>
              </div>
            </div>
            <p className="description">{exp.description}</p>
            <ul className="tasks">
              {exp.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
