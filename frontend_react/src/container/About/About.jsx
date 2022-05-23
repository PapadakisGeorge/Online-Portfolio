import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => setAbouts(data))
  }, []);

  return (
    <>
      <h2 className="head-text">If I know one thing is that <span>Malenia</span> <br/> is the <span>Blade of Miquela</span></h2>
    
      <div className="app__profiles">
        {abouts.map((about, index) => 
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}>
              <img src={urlFor(about.imageURL)} alt={about.title}/>
              <h2 className="bolt-text" style={{ marginTop: 20 }}>{about.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>)}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about') , "about", "app_secondarybg");