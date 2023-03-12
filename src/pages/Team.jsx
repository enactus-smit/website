import React from "react";
import Footer from "../components/Footer";
import {
	PresidentTeacherCard,
	TeamCard,
	TeamNameCard,
} from "../components/TeamCard";
import Aditya from "../imgs/Aditya.webp";
import Ahana from "../imgs/Ahana.webp";
import Aryan from "../imgs/Aryan.webp";
import Sir from "../imgs/Bikash_sir.webp";
import Kunal from "../imgs/Kunal.webp";
import Namrata from "../imgs/Namrata.webp";
import Yash from "../imgs/Yash.webp";

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
			name: "Outreach",
			director: "Achintya Sharma",
			members: ["Adrija Chakrabarti", "Kusangla Lepcha", "Torsha Guha"],
		},
		{
			name: "Survey",
			director: "Suryasnato Mitra",
			members: ["Ayusmaan Panigrahi ", "Gamin Ghaley", "Soheli Das"],
		},
		{
			name: "Tech ",
			director: "Abhrajit ray",
			members: ["Abhinav Anand", "Asmita Mukherjee"],
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
			name: "Event Management",
			director: "Rythem Goyal",
			members: [
				"Anauksa Das",
				"Arpan Ari",
				"Devratna",
				"Gunjan Chakrabartty",
				"Indraneel Saunik",
				"Jatin Karki",
				"Koustabh Das",
				"Neelvie Chhetri",
				"Nikita Kar",
				"Nishita Dutta",
				"Rheah Pundi",
			],
		},
	];
	return (
		<div className="h-screen">
			<h1
				className="flex justify-center whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[4.2rem] font-semibold
      text-gray-800"
			>
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
			<div className="flex-1">
				<Footer />
			</div>
		</div>
	);
};

export default Team;
