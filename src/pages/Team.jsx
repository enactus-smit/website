import React from "react";
import { PresidentTeacherCard, TeamCard, TeamNameCard } from "../components/TeamCard";
import Aryan from "../imgs/Aryan.png";

const Team = () => {
  const presidentsTeachers = [
    {
      name: "President",
      image: Aryan,
    },
    {
      name: "Teacher",
      image: "/"
    }
  ];

  const teams = [
    {
      name: "VP",
      image: "/"
    },
    {
      name: "Team 2",
      image: "/images/team2.jpg"
    },
    {
      name: "Team 3",
      image: "/images/team3.jpg"
    }
  ];

  const teamNames = [
    {
      name: "Team 4",
      members: ["Member", "Member", "Member"]
    },
    {
      name: "Team 5",
      members: ["Member", "Member", "Member"]
    },
    {
      name: "Team 6",
      members: ["Member", "Member", "Member"]
    }
  ];
  return (
    <div>
      <h1 className="flex justify-center whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[4.2rem] font-semibold">
        Teams
      </h1>
      



  
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-center">
        {presidentsTeachers.map(presidentTeacher => (
          <PresidentTeacherCard
            name={presidentTeacher.name}
            image={presidentTeacher.image}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {teams.map(team => (
          <TeamCard name={team.name} image={team.image} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {teamNames.map(teamName => (
          <TeamNameCard name={teamName.name} members={teamName.members} />
        ))}
      </div>
    </div>
 </div>
  );
};

export default Team;
