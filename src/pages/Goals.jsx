import React from "react";
import first from "../imgs/1.png";
import second from "../imgs/2.png";
import third from "../imgs/3.png";
import fourth from "../imgs/4.png";
import fifth from "../imgs/5.png";
import sixth from "../imgs/6.png";
import seventh from "../imgs/7.png";
import eighth from "../imgs/8.png";
import ninth from "../imgs/9.png";
import tenth from "../imgs/10.png";
import eleventh from "../imgs/11.png";
import twth from "../imgs/12.png";
import tith from "../imgs/13.png";
import fth from "../imgs/14.png";
import fifteenth from "../imgs/15.png";
import sixteenth from "../imgs/16.png";
import seventeenth from "../imgs/17.png";
import GoalsCard from "../components/GoalsCard";
import Footer from "../components/Footer";

const sdgs = [
  {
    img: first,
    url: "https://www.un.org/sustainabledevelopment/poverty/",
    name: "End poverty in all its forms everywhere",
  },
  {
    name: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture",
    img: second,
    url: "https://www.un.org/sustainabledevelopment/hunger/",
  },
  {
    name: "Ensure healthy lives and promote well-being for all at all ages",
    img: third,
    url: "https://www.un.org/sustainabledevelopment/health/",
  },
  {
    name: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
    img: fourth,
    url: "https://www.un.org/sustainabledevelopment/education/",
  },
  {
    name: "Achieve gender equality and empower all women and girls",
    img: fifth,
    url: "https://www.un.org/sustainabledevelopment/gender-equality/",
  },
  {
    name: "Ensure availability and sustainable management of water and sanitation for all",
    img: sixth,
    url: "https://www.un.org/sustainabledevelopment/water-and-sanitation/",
  },
  {
    name: "Ensure access to affordable, reliable, sustainable and modern energy for all",
    img: seventh,
    url: "https://www.un.org/sustainabledevelopment/sustainable-consumption-production/",
  },
  {
    name: "Promote sustained, inclusive and sustainable economic growth, full and productive employment, and decent work for all",
    img: eighth,
    url: "https://www.un.org/sustainabledevelopment/economic-growth/",
  },
  {
    title: "Industry, Innovation and Infrastructure",
    name: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
    img: ninth,
    url: "https://www.un.org/sustainabledevelopment/infrastructure-industrialization/",
  },
  {
    // title: 'Reduced Inequalities',
    name: "Reduce inequality within and among countries",
    img: tenth,
    url: "https://www.un.org/sustainabledevelopment/inequality/",
  },
  {
    title: "Sustainable Cities and Communities",
    name: "Make cities and human settlements inclusive, safe, resilient and sustainable",
    img: eleventh,
    url: "https://www.un.org/sustainabledevelopment/cities/",
  },
  {
    title: "Responsible Consumption and Production",
    name: "Ensure sustainable consumption and production patterns",
    img: twth,
    url: "https://www.un.org/sustainabledevelopment/sustainable-consumption-production/",
  },
  {
    title: "Climate Action",
    name: "Take urgent and ambitious action to combat climate change and its impacts",
    img: tith,
    url: "https://www.un.org/sustainabledevelopment/climate-action/",
  },
  {
    title: "Life Below Water",
    name: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development",
    img: fth,
    url: "https://www.un.org/sustainabledevelopment/oceans/",
  },
  {
    title: "Life on Land",
    name: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss",
    img: fifteenth,
    url: "https://www.un.org/sustainabledevelopment/biodiversity/",
  },
  {
    title: "Peace, Justice and Strong Institutions",
    name: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions at all levels",
    img: sixteenth,
    url: "https://www.un.org/sustainabledevelopment/peace-justice/",
  },
  {
    title: "Partnerships for the Goals",
    name: "Strengthen the means of implementation and revitalize the global partnership for sustainable development",
    img: seventeenth,
    url: "https://www.un.org/sustainabledevelopment/global-partnerships/",
  },
];

const Goals = () => {
  return (
    <>
      <div>
        <h1 className="flex justify-center whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[4.2rem] font-semibold">
          Our Goals
        </h1>
      </div>
      <div className="bg-[#ffffffd5] rounded-3xl shadow-lg w-[800px] mx-auto px-6 ">
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
      <div className=" relative flex px-4  flex-wrap  mx-auto items-center flex-row justify-center  ">
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
      <div className="mx-8 md:mx-20">
        <Footer />
      </div>
    </>
  );
};

export default Goals;
