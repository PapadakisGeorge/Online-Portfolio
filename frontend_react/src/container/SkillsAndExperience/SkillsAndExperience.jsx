import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import { ExpandableCard } from '../../components';
import './SkillsAndExperience.scss';

function SkillsAndExperience() {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experienceQuery = '*[_type == "experience"]';

    client.fetch(experienceQuery)
      .then((data) => {
        data.forEach((item) => {
          item.isExpanded = false;
        });
        setExperiences(data);
      });

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      });

  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skillsAndExperience-container">
        <motion.div className="app__skillsAndExperience-skills-list">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skillsAndExperience-skills-item app__flex"
                key={skill.name}
              >
                <div 
                  className="app__flex" 
                  style={{ backroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
        </motion.div>
        <motion.div className="app__skillsAndExperience-experience-list">
            {experiences.map((experience) => (
              <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skillsAndExperience-experience-item app__flex"
              key={experience.name}
            >
              <div className="app__flex">
                <img src={urlFor(experience.imageURL)} alt={experience.name} />
              </div>
              <ExpandableCard 
                name={experience.name} 
                title={experience.jobTitle} 
                subtitle={experience.company} 
                description={experience.description}
                image={urlFor(experience.imageURL)}
              />
            </motion.div>
            ))}
          </motion.div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(SkillsAndExperience, "app__skillsAndExperience"), "skillsAndExperience", "app__papayaWhipbg");