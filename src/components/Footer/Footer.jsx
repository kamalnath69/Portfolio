import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { motion } from 'framer-motion';
import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
           <span className="primaryText">
           Ready to turn ideas <br />
           into reality?
          </span>
           <span className="primaryText">
          Explore my work and <br />
          <span className={css.extra}>let's innovate together.</span>
          </span>
        </div>


        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Contact Information</span>
            <p>Coimbatore, Tamil Nadu, India</p>
          </div>
          <ul className={css.menu}>
          <li><a href="#me">Me!</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Education</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
