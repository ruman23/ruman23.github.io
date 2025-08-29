import React from 'react';
import './Projects.css';
import projKohls from '../assets/proj_kohls.png'; // <- replace with your file
import projAutonomous from '../assets/proj_autonomous.png'; // <- replace with your file
import projYolo from '../assets/proj_yolo.png'; // <- replace with your file

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {/* Add more projects below if you like, reusing the same card structure */}

        <article className="projects-card projects-card-media">
        <div className="projects-media">
            <img
            src={projAutonomous} // replace with your image path
            alt="Chrysler Pacifica Autonomous Driving Project"
            loading="lazy"
            />
        </div>

        <div className="projects-content">
            <h4 className="projects-title">Transitioning Drive-by-Wire to Autonomous Driving Systems</h4>
            <p className="projects-meta">
            <span>Autonomous Vehicles and Robotics Laboratory</span>
            <span className="dot">•</span>
            <span>2024–2025</span>
            </p>
            <p className="projects-desc">
            Worked on transitioning a Chrysler Pacifica Plug-in Hybrid from Drive-by-Wire to an autonomous driving system using ROS and Autoware.AI, integrating sensors, generating maps, and demonstrating offline autonomy.
            </p>
            <p className="projects-links">
            <a href="https://mediahub.unl.edu/media/23715" target="_blank" rel="noopener noreferrer">Demo</a> |{" "}
            <a href="https://avrlab.unl.edu/" target="_blank" rel="noopener noreferrer">Lab</a> |{" "}
            <a href="https://avrlab.unl.edu/team-members/" target="_blank" rel="noopener noreferrer">Team</a> |{" "}
            <a href="https://arxiv.org/pdf/2410.06492" target="_blank" rel="noopener noreferrer">arXiv</a>
            </p>
        </div>
        </article>


        {/* ---- Project: YOLOv7 + TensorRT + ROS (multithreaded) ---- */}
        <article className="projects-card projects-card-media">
          <div className="projects-media">
            <img
              src={projYolo}
              alt="YOLOv7 + TensorRT + ROS multi-threaded pipeline on Jetson Orin Nano"
              loading="lazy"
            />
          </div>

          <div className="projects-content">
            <h4 className="projects-title">Multi-Threaded YOLOv7 Object Detection for Drones on Jetson Orin Nano with ROS & TensorRT</h4>
            <p className="projects-meta">
              <span>Real‑time Drone Infrastructure Monitoring</span>
              <span className="dot">•</span>
              <span>2024–2025</span>
            </p>
            <p className="projects-desc">
                  Deployed YOLOv7/YOLOv7-Tiny with NVIDIA TensorRT and ROS Noetic on Jetson Orin Nano.
                  Designed a multi-threaded pipeline (GPU inference → post-processing/NMS → visualization & ROS publish) to maximize throughput and significantly increase frame rate.
                  The system streams annotated images and detection summaries over ROS topics, enabling real-time,
                  on-drone monitoring of critical infrastructure such as bridge damage.
            </p>
            <p className="projects-links">
              <a href="https://gitlab.com/ruman23/yolov7_ros" target="_blank" rel="noopener noreferrer">GitLab</a>
            </p>
          </div>
        </article>

        {/* ---- Project: Kohll’s Rx Analytics (media card) ---- */}
        <article className="projects-card projects-card-media">
          <div className="projects-media">
            <img
              src={projKohls}
              alt="Screenshot of the Kohll’s Rx analytics dashboard monthly report"
              loading="lazy"
            />
          </div>

          <div className="projects-content">
            <h4 className="projects-title">Healthcare Transaction Analytics (Kohll’s Rx)</h4>
            <p className="projects-meta">
              <span>Data Insights App · Built with R Shiny</span>
              <span className="dot">•</span>
              <span>2025</span>
            </p>
            <p className="projects-desc">
              Analyzed data, designed, and developed a Windows-based web tool for Kohll’s Rx to support better business decisions.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
