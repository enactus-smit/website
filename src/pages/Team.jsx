import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import {
	PresidentTeacherCard,
	TeamCard,
	TeamNameCard,
} from "../components/TeamCard";
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

const Team = () => {
	const [presidentTeacherImages, setPresidentTeacherImages] = useState([]);
	const [teamImages, setTeamImages] = useState([]);

	useEffect(() => {
		const imageRefs = [
			ref(storage, "images/Bikash_sir.webp"),
			ref(storage, "images/Aryan.png"),
		];
		Promise.all(imageRefs.map(getDownloadURL))
			.then((urls) => setPresidentTeacherImages(urls))
			.catch((error) => console.log(error));

		const teamImageRefs = [
			ref(storage, "images/Kunal.png"),
			ref(storage, "images/Namrata.png"),
			ref(storage, "images/Yash.webp"),
			ref(storage, "images/Aditya.webp"),
			ref(storage, "images/Ahana.png"),
		];
		Promise.all(teamImageRefs.map(getDownloadURL))
			.then((urls) => setTeamImages(urls))
			.catch((error) => console.log(error));
	}, []);
	const presidentsTeachers = [
		{
			name: "Teacher",
			image: presidentTeacherImages[0],
		},
		{
			name: "President",
			image: presidentTeacherImages[1],
		},
	];

	const teams = [
		{
			name: "Vice Precident",
			image: teamImages[0],
		},
		{
			name: "Head of Operations",
			image: teamImages[1],
		},
		{
			name: "Vice President of Finance ",
			image: teamImages[2],
		},
		{
			name: "Vice President of Events ",
			image: teamImages[3],
		},
		{
			name: "Vice President of Media and Communications ",
			image: teamImages[4],
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
      text-gray-800">
				Our Team
			</h1>

			<div className="flex flex-col">
				<div className="flex flex-wrap justify-center">
					{presidentsTeachers.map((presidentTeacher, index) => (
						<PresidentTeacherCard
							key={index}
							name={presidentTeacher.name}
							image={presidentTeacher.image}
						/>
					))}
				</div>
				<div className="flex flex-wrap justify-center">
					{teams.map((team, index) => (
						<TeamCard
							name={team.name}
							key={index}
							image={team.image}
						/>
					))}
				</div>
				<div className="flex flex-wrap justify-center">
					{teamNames.map((teamName, index) => (
						<TeamNameCard
							name={teamName.name}
							members={teamName.members}
							director={teamName.director}
							id={teamName.id}
							key={index}
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
