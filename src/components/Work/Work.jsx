import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { workExp } from "../../utils/data";
import css from "./Work.module.scss";
import { fadeIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";

const Work = () => {
  const [positions, setPositions] = useState([0, 50, 100]); // Starting positions of circles
  const [directions, setDirections] = useState([1, -1, 1]); // Directions of movement (1 = down, -1 = up)

  // Handle circle movement and collision detection
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prevPositions) => {
        return prevPositions.map((pos, i) => {
          // Move the circle
          let newPos = pos + directions[i] * 2; // Move by 2% each tick

          // Check if the circle collides with others or the boundaries
          if (newPos <= 0 || newPos >= 100) {
            setDirections((prevDirections) => {
              const newDirections = [...prevDirections];
              newDirections[i] = -newDirections[i]; // Reverse direction on boundary
              return newDirections;
            });
          }

          // Check for collisions with other circles
          prevPositions.forEach((otherPos, j) => {
            if (i !== j && Math.abs(newPos - otherPos) < 5) { // If positions are within 5% of each other
              setDirections((prevDirections) => {
                const newDirections = [...prevDirections];
                newDirections[i] = -newDirections[i]; // Reverse direction on collision
                newDirections[j] = -newDirections[j];
                return newDirections;
              });
            }
          });

          return newPos;
        });
      });
    }, 100); // Adjust the speed of the movement

    return () => clearInterval(interval);
  }, [positions, directions]);

  return (
    <motion.section 
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="work"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <span className="primaryText yPaddings">My Education and Experience</span>

        <div className={`flexCenter ${css.experiences}`}>
          {workExp.map((exp, i) => (
            <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
              <div className={css.post}>
                <h1>{exp.place}</h1>
                <p>{exp.tenure}</p>
                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className={css.link}>
                    Official Website
                  </a>
                )}
                <br/>
                {exp.certificate && (
                  <a href={exp.certificate} target="_blank" rel="noopener noreferrer" className={css.link}>
                    Internship Completion Certificate
                  </a>
                )}
              </div>
              <div className={css.role}>
                <h1>{exp.role}</h1>
                <p>{exp.detail}</p>
              </div>
            </motion.div>
          ))}

          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
            {positions.map((pos, i) => (
              <div key={i} style={{ top: `${pos}%` }}>
                <div className={css.circle}></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
