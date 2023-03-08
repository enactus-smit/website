import React from "react";
import { motion, useScroll, Variants } from "framer-motion"


const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5
    }
  }
};

const PresidentTeacherCard = (props) => (
  <motion.div
  className="word-container"
  initial="offscreen"
  whileInView="onscreen"
  variants={cardVariants}
  viewport={{ once: true }}
  >
  
  <div className="w-64 h-64 m-4 rounded overflow-hidden shadow-lg">
    <img
      src={props.image}
      alt={props.name}
      className="w-full h-64 object-cover"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">
        <p>{props.name}</p>
      </div>
    </div>
  </div>
  </motion.div>
);

const TeamCard = (props) => (
  <motion.div
  className="word-container"
  initial="offscreen"
  whileInView="onscreen"
  variants={cardVariants}
  viewport={{ once: true }}
  >
  <div className="w-64 h-64 m-4 rounded overflow-hidden shadow-lg">
    <img
      src={props.image}
      alt={props.name}
      className="w-full h-64 object-cover"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">
        <p>{props.name}</p>
      </div>
    </div>
  </div>
  </motion.div>
);

const TeamNameCard = ({ name, members, director }) => {
  return (
    <motion.div
    className="word-container"
    initial="offscreen"
    whileInView="onscreen"
    variants={cardVariants}
    viewport={{ once: true }}
    >
    
    <div className="w-48 lg:w-72 h-auto leading-loose m-4 shadow-lg bg-white text-center rounded-xl ">
      <div className="pt-4 pb-2 bg-yellow-400">
        <div className="font-bold text-xl mb-2 ">{name}</div>
      </div>
      <div className="text-lg font-semibold pt-2 ">{director}</div>
      <ul>
        {members.map((member) => (
          <li className="mb-2">{member} </li>
        ))}
      </ul>
    </div>
    </motion.div>
  );
};

export { PresidentTeacherCard, TeamCard, TeamNameCard };
