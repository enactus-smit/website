import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};

const ImgCard = (props) => {
  return (
    <div className="flex flex-col p-10">
      <motion.div
        className="word-container"
        initial="offscreen"
        whileInView="onscreen"
        variants={cardVariants}
        viewport={{ once: true }}
      >
        <div className=" rounded-3xl shadow-lg h-auto w-[300px] mx-auto p-6">
          <img
            src={props.img}
            className="mx-auto rounded-lg max-h-36"
            alt={props.name}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ImgCard;
