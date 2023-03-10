import React from "react";

const CollabCard = (props) => {
  return (
    <div className="flex flex-col p-10">
      <a href={props.url}>
        <div
          className="bg-[#8c929933] rounded-3xl shadow-lg h-[18rem] w-[300px] mx-auto p-6 hover:bg-yellow-400 duration-700"
          
        >
          <img
            src={props.img}
            className="mx-auto rounded-lg max-h-28"
            alt={props.name}
          />
          <h1 className=" text-center mt-6 text-2xl font-bold">{props.name}</h1>
          <h1 className="text-lg text-center">{props.owner}</h1>
        </div>
      </a>
    </div>
  );
};

export default CollabCard;
