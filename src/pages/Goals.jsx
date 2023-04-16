import React, { useEffect, useState } from "react";
import GoalsCard from "../components/GoalsCard";
import Footer from "../components/Footer";
import { storage } from '../firebase';
import {  ref, getDownloadURL} from 'firebase/storage';


const Goals = () => {
  const [GoalsImages, setGoalsImages] = useState([]);

	useEffect(() => {
	  
	

	const logoRefs = [
    //if you are importing these images make sure 1.webp will be your "GoalImages[0]"
		ref(storage, "images/1.webp"),
		ref(storage, "images/2.webp"),
		ref(storage, "images/3.webp"),
		ref(storage, "images/4.webp"),
		ref(storage, "images/5.webp"),
		ref(storage, "images/6.webp"),
		ref(storage, "images/7.webp"),
		ref(storage, "images/8.webp"),
		ref(storage, "images/9.webp"),
		ref(storage, "images/10.webp"),
		ref(storage, "images/11.webp"),
		ref(storage, "images/12.webp"),
		ref(storage, "images/13.webp"),
		ref(storage, "images/14.webp"),
		ref(storage, "images/15.webp"),
		ref(storage, "images/16.webp"),
		ref(storage, "images/17.webp"),
		
		
	  ];
	  Promise.all(logoRefs.map(getDownloadURL))
		.then((urls) => setGoalsImages(urls))
		.catch((error) => console.log(error));
	}, []);

  const sdgs = [
    {
      img: GoalsImages[0],
      url: "https://www.un.org/sustainabledevelopment/poverty/",
      name: "End poverty in all its forms everywhere",
    },
    {
      name: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture",
      img: GoalsImages[1],
      url: "https://www.un.org/sustainabledevelopment/hunger/",
    },
    {
      name: "Ensure healthy lives and promote well-being for all at all ages",
      img: GoalsImages[2],
      url: "https://www.un.org/sustainabledevelopment/health/",
    },
    {
      name: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
      img: GoalsImages[3],
      url: "https://www.un.org/sustainabledevelopment/education/",
    },
    {
      name: "Achieve gender equality and empower all women and girls",
      img: GoalsImages[4],
      url: "https://www.un.org/sustainabledevelopment/gender-equality/",
    },
    {
      name: "Ensure availability and sustainable management of water and sanitation for all",
      img: GoalsImages[5],
      url: "https://www.un.org/sustainabledevelopment/water-and-sanitation/",
    },
    {
      name: "Ensure access to affordable, reliable, sustainable and modern energy for all",
      img: GoalsImages[6],
      url: "https://www.un.org/sustainabledevelopment/sustainable-consumption-production/",
    },
    {
      name: "Promote sustained, inclusive and sustainable economic growth, full and productive employment, and decent work for all",
      img: GoalsImages[7],
      url: "https://www.un.org/sustainabledevelopment/economic-growth/",
    },
    {
      title: "Industry, Innovation and Infrastructure",
      name: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
      img: GoalsImages[8],
      url: "https://www.un.org/sustainabledevelopment/infrastructure-industrialization/",
    },
    {
      // title: 'Reduced Inequalities',
      name: "Reduce inequality within and among countries",
      img: GoalsImages[9],
      url: "https://www.un.org/sustainabledevelopment/inequality/",
    },
    {
      title: "Sustainable Cities and Communities",
      name: "Make cities and human settlements inclusive, safe, resilient and sustainable",
      img: GoalsImages[10],
      url: "https://www.un.org/sustainabledevelopment/cities/",
    },
    {
      title: "Responsible Consumption and Production",
      name: "Ensure sustainable consumption and production patterns",
      img: GoalsImages[11],
      url: "https://www.un.org/sustainabledevelopment/sustainable-consumption-production/",
    },
    {
      title: "Climate Action",
      name: "Take urgent and ambitious action to combat climate change and its impacts",
      img: GoalsImages[12],
      url: "https://www.un.org/sustainabledevelopment/climate-action/",
    },
    {
      title: "Life Below Water",
      name: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development",
      img: GoalsImages[13],
      url: "https://www.un.org/sustainabledevelopment/oceans/",
    },
    {
      title: "Life on Land",
      name: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss",
      img: GoalsImages[14],
      url: "https://www.un.org/sustainabledevelopment/biodiversity/",
    },
    {
      title: "Peace, Justice and Strong Institutions",
      name: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions at all levels",
      img: GoalsImages[15],
      url: "https://www.un.org/sustainabledevelopment/peace-justice/",
    },
    {
      title: "Partnerships for the Goals",
      name: "Strengthen the means of implementation and revitalize the global partnership for sustainable development",
      img: GoalsImages[16],
      url: "https://www.un.org/sustainabledevelopment/global-partnerships/",
    },
  ];
  return (
    <div className="h-screen">
      <div>
        <h1 className="flex justify-center whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[4.2rem] font-semibold
        text-gray-800">
          Our Goals
        </h1>
      </div>
      <div className=" bg-[#ffffffd5] rounded-3xl shadow-lg w-[70%] mx-auto px-6 ">
        <article className="text-justify md:text-[1.2rem] lg:text-[1.5rem] text-gray-900 font-medium indent-20 mt-8 leading-relaxed py-4">
          We at Enactus SMIT strive to develop an environment of
          entrepreneurship and innovation for the students of today, to help
          them create a better and more sustainable world of tomorrow. Orur
          organization coordinates our vision of the future with the 17
          Sustainable Development Goals as suggested by the United Nations
          Organization. We also continuously collaborate and cooperate with
          businesses, markets, and the local population when carrying out our
          regular tasks and even in our projects to form an amicable
          relationship for our future endeavors.
        </article>
      </div>
      <div className=" relative flex px-4  flex-wrap  mx-auto items-center flex-row justify-center">
        {sdgs.map((goal, img, index) => (
          <GoalsCard
            key={index}
            name={goal.name}
            description={goal.description}
            img={goal.img}
            url={goal.url}
          />
        ))}
      </div>
      <div className="flex-1">
        <Footer />
      </div>
    </div>
  );
};

export default Goals;
