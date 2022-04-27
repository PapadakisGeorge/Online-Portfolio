import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './ExpandableCard.scss';

function ExpandableCard(props) {
  const [isExpanded, setExpanded] = useState(false)

  return (
    <motion.div 
      onClick={() => setExpanded(!isExpanded) }
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, type: "tween" }}
      className="app__card-item"
      data-tip
      data-for={props.name}
      key={props.name}
    > 
      
      {!isExpanded && (
        <motion.div >
          <h4 className="bold-text">{props.title}</h4>
          <p className="p-text">{props.subtitle}</p>
        </motion.div>
      )}
      {isExpanded && (
        <motion.div >
          <p className="p-text">{props.description}</p>
        </motion.div>
      )}
  </motion.div>
 )
}

export default ExpandableCard;