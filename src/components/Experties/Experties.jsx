import { WhatDoIHelp } from "../../utils/data";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import css from './Experties.module.scss'; // Custom CSS module
import { FaReact, FaAws } from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiJavascript, SiJava, SiPython, SiHtml5, SiCss3, SiC,
  SiDjango, SiTailwindcss, SiVisualstudiocode, SiGithub, SiGit,
  SiBitbucket, SiVirtualbox, SiCanva, SiMicrosoftoffice, SiEclipseide, SiPycharm,
  SiPostman, SiMicrosoftazure
} from 'react-icons/si';

const skillsData = {
  Languages: [
    { name: 'C', icon: SiC, bg: '#F7DF1E' },
    { name: 'Python', icon: SiPython, bg: '#3776AB' },
    { name: 'Java', icon: SiJava, bg: '#007396' },
    { name: 'HTML', icon: SiHtml5, bg: '#E34F26' },
    { name: 'CSS', icon: SiCss3, bg: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, bg: '#F7DF1E' },
  ],
  'Core Competencies': [
    { name: 'Data Structures', icon: SiJavascript, bg: '#4285F4' },
    { name: 'Algorithms', icon: SiJavascript, bg: '#DB4437' },
    { name: 'OOPS', icon: SiJavascript, bg: '#F4B400' },
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
  { key: 'Languages', label: 'Languages', icon: SiJavascript },
  { key: 'Core Competencies', label: 'Core Competencies', icon: SiJavascript },
  { key: 'Frameworks', label: 'Frameworks', icon: SiDjango },
  { key: 'Libraries', label: 'Libraries', icon: FaReact },
  { key: 'Tools', label: 'Tools', icon: SiVisualstudiocode },
  { key: 'Cloud Tools', label: 'Cloud Tools', icon: FaAws },
];

const Experties = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <section className={css.wrapper} id="about">
      <motion.div
        className={css.highlightSection}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={css.profileSummary}>
          <span className="primaryText">Know About Me!</span>
          {WhatDoIHelp.map((item, index) => (
            <p key={index} className={css.secondaryText}>{item}</p>
          ))}
        </div>

      </motion.div>
      {/* Top Bar with Tabs */}
      <span className="primaryText" style={{alignSelf:"center"}}>What I Know?</span>
      <div className={css.topBar}>
        {tabs.map((tab) => (
          <motion.div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            whileHover={{ scale: 1.1 }}
            className={`${css.tabButton} ${activeTab === tab.key ? css.activeTab : ''}`}
          >
            <tab.icon />
            <span>{tab.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className={css.mainContent}>
        <motion.div
          key={activeTab}
          className={css.skillsGrid}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skillsData[activeTab].map((skill, i) => (
            <motion.div
              key={i}
              className={css.skillCard}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <skill.icon className={css.skillIcon} style={{ background: skill.bg }} />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Highlight Section */}
      
    </section>
  );
};

export default Experties;
