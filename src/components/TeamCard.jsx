import React from "react";

const PresidentTeacherCard = (props) => (
  <div className="w-64 h-64 m-4 rounded overflow-hidden shadow-lg">
    <img src={props.image} alt={props.name} className="w-full h-64 object-cover" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">
        <p>{props.name}</p></div>
    </div>
  </div>
);

const TeamCard = (props) => (
  <div className="w-64 h-64 m-4 rounded overflow-hidden shadow-lg">
    <img src={props.image} alt={props.name} className="w-full h-64 object-cover" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">
        <p>{props.name}</p></div>
    </div>
  </div>
);

const TeamNameCard = ({ name, members }) => {
    return (
      <div className="w-48 h-64 m-4 rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <ul>
            {members.map(member => (
              <li className="mb-2">{member} </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };


export { PresidentTeacherCard, TeamCard, TeamNameCard };