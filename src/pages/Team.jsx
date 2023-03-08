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
import Footer from "../components/Footer";

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
      name: "Engagement",
      director: "Gunjan Chakrabartty",
      members: [
        "Abhinav Anand",
        "Abhrajit ray",
        "Asmita Mukherjee",
        "Nishita Dutta",
      ],
    },
    {
      name: "Event Management",
      director: "Rythem Goyal",
      members: [
        "Anauksa Das",
        "Arpan Ari",
        "Devratna",
        "Indraneel",
        "Jatin Karki",
        "Koustabh Das",
        "Neelvie Chhetri",
        "Nikita Kar",
        "Rheah Pundi",
      ],
    },
    {
      name: "Media & Communications",
      director: "Jatin Sharma",
      members: [
        "Gourav",
        "Keshav Gupta",
        "Manasvi Gupta",
        "Nirzor Choudhary",
        "Yeting Heruka",
      ],
    },
    {
      name: "Outreach",
      director: "Achintya Sharma",
      members: ["Adrija Chakrabarti", "Kusangla Lepcha", "Torsha Guha"],
    },
    {
      name: "Survey",
      director: "Suryasnato Mitra",
      members: ["Ayusmaan Panigrahi ", "Gamin Ghaley", "Soheli Das"],
    },
  ];
  return (
    <div className="h-screen">
      <h1 className="flex justify-center whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[4.2rem] font-semibold
      text-gray-800">
        Our Team
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
            <TeamNameCard
              name={teamName.name}
              members={teamName.members}
              director={teamName.director}
            />
          ))}
        </div>
      </div>
      <div className="mx-8 md:mx-20">
        <Footer />
      </div>
    </div>
  );
};

export default Team;
