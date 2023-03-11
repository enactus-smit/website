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
      duration: 0.8
    }
  }
};

const GoalsCard = (props) => {
  return (
    <div className="flex flex-col p-10">
      <a href={props.url}>
      <motion.div
      className="word-container"
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true }}
      >
        <div
          className="bg-[#ffffffd5] rounded-3xl shadow-lg h-auto w-[300px] mx-auto p-6
           hover:bg-slate-200 duration-700"
          
        >
          <img
            src={props.img}
            className="mx-auto rounded-lg max-h-36"
            alt={props.name}
          />
          <h1 className=" text-center text-gray-800 mt-6 text-xl font-bold">{props.name}</h1>
          <h1 className="text-lg text-center">{props.owner}</h1>
        </div>
        </motion.div>
      </a>
    </div>
  );
};

export default GoalsCard;