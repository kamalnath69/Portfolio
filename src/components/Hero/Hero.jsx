import React, { useState } from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hello,
            <br />
            I'm Kamal Nath,
            <br />
            <span className={css.typingEffect}>
              <Typewriter
                words={[
                  "a MERN Developer",
                  "a Creative Designer",
                  "a Tech Enthusiast",
                  "a Problem Solver",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person.png"
            alt="Kamal Nath"
          />
          
          {/* Dot Position */}
          <button
           className={css.dotTrigger}
           onMouseEnter={() => setShowPopup(true)}
           onMouseLeave={() => setShowPopup(false)}
          ></button>
          {showPopup && (
            <div className={css.popup}>
              Sorry, ignore this and see my skills.
            </div>
          )}
        </motion.div>

        <div className={css.contactInfo}>
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={css.socialIcons}
          >
            <a className={css.email} href="mailto:kamalnath9669@gmail.com">
              kamalnath9669@gmail.com
            </a>
          </motion.div>
        </div>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">2</div>
<div className="secondaryText">
  <div>Years of</div>
  <div>Learning & Growth</div>
</div>


          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./mern.png" alt="Certificate" />
            <span>CERTIFIED PROFESSIONAL</span>
            <span>MERN STACK DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
