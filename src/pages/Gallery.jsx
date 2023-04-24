import React from "react";
import ImgCard from "../components/ImgCard";

const Gallery = () => {
  return (
    <div>
      <h1
        className="flex justify-center whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[4.2rem] font-semibold
        text-gray-800"
      >
        Gallery
      </h1>
      <ImgCard img="" name="name" />
    </div>
  );
};

export default Gallery;
