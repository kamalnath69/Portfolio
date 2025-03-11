import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "ICMST-2025",
      images: ["./si.png"],
      description: `
        <h3>Overview</h3>
        <p>Developed a static website for the International Conference on Mathematics in Science and Technology 2025, providing a comprehensive platform for mathematicians and researchers worldwide.</p>
        <h3>Key Features</h3>
        <ul>
          <li>Conference schedule and program details</li>
          <li>Speaker profiles and presentation abstracts</li>
          <li>Registration and submission portal</li>
          <li>Interactive venue maps and information</li>
        </ul>
        <h3>Technologies Used</h3>
        <ul>
          <li>React.js for frontend development</li>
          <li>SCSS for styled components</li>
          <li>Responsive design principles</li>
          <li>SEO optimization techniques</li>
        </ul>
      `,
    },
    {
      id: 2,
      title: "Crowdify - Location-Based Social Platform",
      images: ["./si2.png"],
      description: `
        <h3>Overview</h3>
        <p>Crowdify is an innovative social platform that connects users based on their real-time location, enabling mutual assistance and community building.</p>
        <h3>Key Features</h3>
        <ul>
          <li>Real-time location tracking and sharing</li>
          <li>Secure user connection system</li>
          <li>Real-time chat functionality</li>
          <li>Request-based connection system</li>
          <li>Privacy-focused location sharing</li>
        </ul>
        <h3>Technologies Used</h3>
        <ul>
          <li>React Native for cross-platform mobile development</li>
          <li>Socket.io for real-time communication</li>
          <li>MongoDB for database management</li>
          <li>Google Maps API for location services</li>
          <li>JWT for authentication</li>
        </ul>
      `,
    },
    {
      id: 3,
      title: "AI-Powered Fake News Detector",
      images: ["./si3.jpg"],
      description: `
        <h3>Overview</h3>
        <p>An advanced fake news detection system that utilizes machine learning algorithms to analyze and verify news authenticity.</p>
        <h3>Key Features</h3>
        <ul>
          <li>Natural Language Processing for text analysis</li>
          <li>Source credibility verification</li>
          <li>Cross-reference checking</li>
          <li>Confidence score generation</li>
          <li>Real-time news verification</li>
        </ul>
        <h3>Technologies Used</h3>
        <ul>
          <li>Python with TensorFlow and scikit-learn</li>
          <li>BERT model for text classification</li>
          <li>React.js for frontend interface</li>
          <li>Flask RESTful API</li>
          <li>PostgreSQL for database</li>
        </ul>
      `,
    },
  ];

  const closeModal = () => setSelectedProject(null);

  // Disable scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Re-enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean-up on component unmount
    };
  }, [selectedProject]);

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>Perfect solution for digital experience</p>
          </div>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          {projects.map((project, i) => (
            <motion.img
              key={project.id}
              variants={fadeIn("up", "tween", 0.5 + i * 0.2, 0.6)}
              src={project.images[0]}
              alt={`project-${project.id}`}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </motion.section>
  );
};

const Modal = ({ project, onClose }) => {
  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onClose}>
          &times;
        </button>

        <div className={css.modalBody}>
          <div className={css.imagesSection}>
            <div className={css.horizontalScroll}>
              {project.images.map((img, index) => (
                <img key={index} src={img} alt={`project-img-${index}`} />
              ))}
            </div>
          </div>
          <div className={css.descriptionSection}>
            <div className={css.verticalScroll}>
              <h2>{project.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
