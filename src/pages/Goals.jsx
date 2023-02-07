import React from "react";
import CollabCard from "../components/CollabCard";



const sdgs = [
  {
    
    
    img: '1',
    url: 'https://www.un.org/sustainabledevelopment/poverty/',
    name: 'End poverty in all its forms everywhere',
  },
  {
    
    name: 'End hunger, achieve food security and improved nutrition, and promote sustainable agriculture',
    img: '2.png',
    url: 'https://www.un.org/sustainabledevelopment/hunger/'
  },
  {
    
    name: 'Ensure healthy lives and promote well-being for all at all ages',
    img: '3.png',
    url: 'https://www.un.org/sustainabledevelopment/health/'
  },
  {
    
    name: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all',
    img: '4.png',
    url: 'https://www.un.org/sustainabledevelopment/education/'
    },
    {
    
   name: 'Achieve gender equality and empower all women and girls',
    img: '5.png ',
    url: 'https://www.un.org/sustainabledevelopment/gender-equality/'
    },
    {
   
    name: 'Ensure availability and sustainable management of water and sanitation for all',
    img: '6.png',
    url: 'https://www.un.org/sustainabledevelopment/water-and-sanitation/'
    },
    {
    
    name: 'Ensure access to affordable, reliable, sustainable and modern energy for all',
    img: '7.png',
    url: 'https://www.un.org/sustainabledevelopment/sustainable-consumption-production/'
    },
    {
    
   name: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment, and decent work for all',
    img: '8.png',
    url: 'https://www.un.org/sustainabledevelopment/economic-growth/'
    },
    {
    title: 'Industry, Innovation and Infrastructure',
    name: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation',
    img: '9.png',
    url: 'https://www.un.org/sustainabledevelopment/infrastructure-industrialization/'
    },
    {
    // title: 'Reduced Inequalities',
    name: 'Reduce inequality within and among countries',
    image: '10.png',
    url: 'https://www.un.org/sustainabledevelopment/inequality/'
    },
    {
    title: 'Sustainable Cities and Communities',
    name: 'Make cities and human settlements inclusive, safe, resilient and sustainable',
    image: '11.png',
    url: 'https://www.un.org/sustainabledevelopment/cities/'
    },
    {
    title: 'Responsible Consumption and Production',
    name: 'Ensure sustainable consumption and production patterns',
    image: '12.png',
    url: 'https://www.un.org/sustainabledevelopment/sustainable-consumption-production/'
    },
    {
      title: 'Climate Action',
      name: 'Take urgent and ambitious action to combat climate change and its impacts',
      image: '13.png',
      url: 'https://www.un.org/sustainabledevelopment/climate-action/'
      },
      {
      title: 'Life Below Water',
      name: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development',
      image: '14.png',
     url: 'https://www.un.org/sustainabledevelopment/oceans/'
      },
      {
      title: 'Life on Land',
    name: 'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss',
      image: '15.png',
      url: 'https://www.un.org/sustainabledevelopment/biodiversity/'
      },
      {
      title: 'Peace, Justice and Strong Institutions',
      name: 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions at all levels',
      img: '16.png',
     url: 'https://www.un.org/sustainabledevelopment/peace-justice/'
      },
      {
      title: 'Partnerships for the Goals',
     name: 'Strengthen the means of implementation and revitalize the global partnership for sustainable development',
      image: '17.png',
      url: 'https://www.un.org/sustainabledevelopment/global-partnerships/'
      }
    ];

const Goals = () => {
  return (
    <>
    <div>
      <h1 className="text-center my-5 text-4xl">Our Goals</h1>
    </div>
    <div className=" relative flex px-4  flex-wrap  mx-auto items-center flex-row justify-center  ">
      
      {sdgs.map((goal,img, index) => (
        <CollabCard 
          key={index}
          name={goal.name}
          description={goal.description}
          img={goal.img}
          url={goal.url}
          
          
          
         
        />
      
        
      ))}
    </div>

    </>
  );
};

export default Goals;
