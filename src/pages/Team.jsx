import React from "react";
import {
  PresidentTeacherCard,
  TeamCard,
  TeamNameCard,
} from "../components/TeamCard";
import Aryan from "../imgs/Aryan.png";
import Kunal from "../imgs/Kunal.png";
import Namrata from "../imgs/Namrata.png";
import Yash from "../imgs/Yash.png";
import Ahana from "../imgs/Ahana.png";
import Aditya from "../imgs/Aditya.png";
import Sir from "../imgs/Bikash_sir.png";

const Team = () => {
  const presidentsTeachers = [
    {
      name: "Teacher",
      image: Sir,
    },
    {
      name: "President",
      image: Aryan,
    },
  ];

  const teams = [
    {
      name: "Vice Precident",
      image: Kunal,
    },
    {
      name: "Head of Operations",
      image: Namrata,
    },
    {
      name: "Vice President of Finance ",
      image: Yash,
    },
    {
      name: "Vice President of Events ",
      image: Aditya,
    },
    {
      name: "Vice President of Media and Communications ",
      image: Ahana,
    },
  ];

  const teamNames = [
    {
      name: "Team",
      members: ["Member", "Member", "Member"],
    },
    {
      name: "Team",
      members: ["Member", "Member", "Member"],
    },
    {
      name: "Team",
      members: ["Member", "Member", "Member"],
    },
  ];
  return (
    <div>
      <h1 className="flex justify-center whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[4.2rem] font-semibold">
        Teams
      </h1>

      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center">
          {presidentsTeachers.map((presidentTeacher) => (
            <PresidentTeacherCard
              name={presidentTeacher.name}
              image={presidentTeacher.image}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center">
          {teams.map((team) => (
            <TeamCard name={team.name} image={team.image} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center">
          {teamNames.map((teamName) => (
            <TeamNameCard name={teamName.name} members={teamName.members} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
