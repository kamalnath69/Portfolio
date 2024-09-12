import React from "react";
import { workExp } from "../../utils/data";
import css from "./Work.module.scss";
import {motion} from 'framer-motion';
import { fadeIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";

const Work = () => {
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
        {/* heading */}
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
            <div><div className={css.circle} style={{ background: "#FF6F61" }}></div></div>
            <div><div className={css.circle} style={{ background: "#5D3A9B" }}></div></div>
            <div><div className={css.circle} style={{ background: "#EEC048" }}></div></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
