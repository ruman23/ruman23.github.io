import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { category: "Languages Spoken", items: ["Bangla", "English", "Hindi (Beginner)"] },
    { category: "Programming Languages", items: ["Swift", "C", "C++", "Python", "SwiftUI", "Java", "PHP", "HTML", "CSS", "JavaScript", "FXML"] },
    { category: "Development Environments and Frameworks", items: ["Git","Xcode", "NS3", "Autoware.AI","Wireshark","QXDM" ,"Scikit-learn", "TensorFlow", "MATLAB", "Jupyter Notebook", "Laravel", "Firebase", "OpenCV", "PyQt", "Bootstrap", "React", "Autoware.AI", "OpenAI Gym"] },
    { category: "Databases", items: ["MySQL", "Firebase"] },
    { category: "Libraries and APIs", items: ["OpenCV", "PlantUML", "OpenFace", "graphics.h library"] },
    { category: "Platforms", items: ["iOS","Linux", "Raspberry Pi","Android", "Oculus (VR)", "Mac OS", "Windows"] },
    { category: "Collaboration and Project Management Tools", items: ["Slack", "Jira"] }
  ];

  return (
    <section id="skills">
      <h1>My Skills</h1>
      {skills.map((skillCategory, index) => (
        <div key={index} className="skill-category">
          <h2>{skillCategory.category}</h2>
          <div className="skills-container">
            {skillCategory.items.map((skill, idx) => (
              <div key={idx} className="skill-circle">
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
