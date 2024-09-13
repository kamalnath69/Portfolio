import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Digital Experience Project",
      images: ["./showCase1.png", "./showCase1.png", "./showCase2.png"],
      description: `
        <h3>Overview</h3>
        <p>This project focuses on enhancing digital experiences through modern UI/UX practices. We designed and developed a responsive website with sleek transitions and intuitive navigation.</p>
        <h3>Key Features</h3>
        <ul>
          <li>Responsive design across all devices</li>
          <li>Custom animations for user interactions</li>
          <li>Optimized for performance</li>
        </ul>
        <h3>Technologies Used</h3>
        <p>React, Framer Motion, Sass, and more</p>
        <p>React, Framer Motion, Sass, and more</p>
        <p>React, Framer Motion, Sass, and more</p>
        <p>React, Framer Motion, Sass, and more</p>
      `,
    },
    {
      id: 2,
      title: "Creative Portfolio",
      images: ["./showCase2.png", "./showCase2-1.png"],
      description: `
        <h3>Overview</h3>
        <p>This is a creative portfolio website for showcasing projects and creative work.</p>
        <h3>Key Features</h3>
        <ul>
          <li>Dynamic image galleries</li>
          <li>Smooth navigation experience</li>
          <li>Engaging and modern visual elements</li>
        </ul>
        <h3>Technologies Used</h3>
        <p>React, CSS Modules, JavaScript</p>
      `,
    },
    {
      id: 3,
      title: "E-commerce Solution",
      images: ["./showCase3.png", "./showCase3-1.png"],
      description: `
        <h3>Overview</h3>
        <p>An e-commerce solution with an integrated payment gateway, product listings, and user reviews.</p>
        <h3>Key Features</h3>
        <ul>
          <li>Integrated payment system</li>
          <li>Product filtering and search</li>
          <li>User reviews and ratings</li>
        </ul>
        <h3>Technologies Used</h3>
        <p>React, Redux, Node.js</p>
        <p>React, Redux, Node.js</p>
        <p>React, Redux, Node.js</p>
        <p>React, Redux, Node.js</p>
        <p>React, Redux, Node.js</p>
        <p>React, Redux, Node.js</p>
        <p>React, Redux, Node.js</p>
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
          <span className="secondaryText">Explore More Works</span>
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
