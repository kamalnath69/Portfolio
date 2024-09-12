import React, { useState } from 'react';
import css from './Experties.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion.js';
import { WhatDoIHelp } from '../../utils/data.js';
import { FaNodeJs, FaReact, FaAws } from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiJavascript, SiJava, SiPython, SiHtml5, SiCss3,
  SiDjango, SiTailwindcss, SiVisualstudiocode, SiGithub, SiGit,
  SiBitbucket, SiVirtualbox, SiCanva, SiMicrosoftoffice, SiEclipseide, SiPycharm,
  SiPostman, SiMicrosoftazure
} from 'react-icons/si';

// Example icon for core competencies
const SiDatastructure = SiJavascript; // Replace with actual icons if available
const SiAlgorithm = SiJavascript; // Replace with actual icons if available
const SiOop = SiJavascript; // Replace with actual icons if available

const skillsData = {
  Languages: [
    { name: 'C', icon: SiJavascript, bg: '#F7DF1E' },
    { name: 'Python', icon: SiPython, bg: '#3776AB' },
    { name: 'Java', icon: SiJava, bg: '#007396' },
    { name: 'HTML', icon: SiHtml5, bg: '#E34F26' },
    { name: 'CSS', icon: SiCss3, bg: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, bg: '#F7DF1E' },
  ],
  'Core Competencies': [
    { name: 'Data Structures', icon: SiDatastructure, bg: '#4285F4' },
    { name: 'Algorithms', icon: SiAlgorithm, bg: '#DB4437' },
    { name: 'OOPS', icon: SiOop, bg: '#F4B400' },
  ],
  Frameworks: [
    { name: 'Django', icon: SiDjango, bg: '#092E20' },
    { name: 'Express', icon: SiExpress, bg: '#000000' },
    { name: 'React Native', icon: FaReact, bg: '#61DAFB' },
    { name: 'TailwindCSS', icon: SiTailwindcss, bg: '#38B2AC' },
  ],
  Libraries: [
    { name: 'React.js', icon: FaReact, bg: '#61DAFB' },
    { name: 'MatPlotLib', icon: FaReact, bg: '#11557C' },
  ],
  Tools: [
    { name: 'VSCode', icon: SiVisualstudiocode, bg: '#007ACC' },
    { name: 'GitHub', icon: SiGithub, bg: '#181717' },
    { name: 'Git', icon: SiGit, bg: '#F05032' },
    { name: 'BitBucket', icon: SiBitbucket, bg: '#0052CC' },
    { name: 'VirtualBox', icon: SiVirtualbox, bg: '#183A61' },
    { name: 'Canva', icon: SiCanva, bg: '#00C4CC' },
    { name: 'MSOffice', icon: SiMicrosoftoffice, bg: '#D83B01' },
    { name: 'Eclipse', icon: SiEclipseide, bg: '#2C2255' },
    { name: 'Pycharm', icon: SiPycharm, bg: '#21D789' },
    { name: 'Postman', icon: SiPostman, bg: '#FF6C37' },
  ],
  'Cloud Tools': [
    { name: 'EC2', icon: FaAws, bg: '#FF9900' },
    { name: 'AWS Lambda', icon: FaAws, bg: '#FF9900' },
    { name: 'Azure', icon: SiMicrosoftazure, bg: '#0089D6' },
    { name: 'Cloudinary', icon: FaReact, bg: '#F67C06' },
  ],
};

const tabs = [
  { key: 'Languages', icon: SiJavascript },
  { key: 'Core Competencies', icon: SiDatastructure },
  { key: 'Frameworks', icon: SiDjango },
  { key: 'Libraries', icon: FaReact },
  { key: 'Tools', icon: SiVisualstudiocode },
  { key: 'Cloud Tools', icon: FaAws },
];

const Experties = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <section className={css.wrapper}>
      <a className="anchor" id="experties"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        {/* Left Side - Tabs and Skills */}
        <div className={css.leftSide}>
          <div className={css.tabs}>
            {tabs.map((tab, i) => (
              <div
                key={i}
                className={`${css.tab} ${activeTab === tab.key ? css.activeTab : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <tab.icon />
              </div>
            ))}
          </div>
          <div className={css.skills}>
            {skillsData[activeTab].map((skill, i) => (
              <motion.div
                variants={fadeIn('up', 'tween', (i + 1) * 0.2, 1)}
                className={css.skill}
                key={i}
              >
                <skill.icon />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side - What Do I Help */}
        <motion.div
          variants={textVariant(0.5)}
          className={css.rightSide}
        >
          <span className="primaryText">What do I help?</span>
          {WhatDoIHelp.map((paragraph, i) => (
            <span className={css.secondaryText} key={i}>{paragraph}</span>
          ))}

          <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">285+</span>
              <span className="secondaryText">Project Completed</span>
            </div>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">190+</span>
              <span className="secondaryText">Happy Clients</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experties;
