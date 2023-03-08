import React from "react";
import holiProd from "../imgs/holiProd.jpeg";
import anna from "../imgs/annadristi.jpeg";
import Footer from "../components/Footer";
import { motion, useScroll, Variants } from "framer-motion"


const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5
    }
  }
};

const Projects = () => {
  return (
    <div className="h-screen">
      <h1 className="flex justify-center whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[4.2rem] font-semibold
      text-gray-800">
        Our Projects
      </h1>
      <article className="flex flex-col mx-8 md:mx-16">

        {/*Holi Section */}
      
        <section className="flex-col">
          <h1
            className="inline-block whitespace-nowrap text-[2.5rem] md:text-[3rem] lg:text-[4.2rem] font-bold
            bg-gradient-to-r from-cyan-500 via-yellow-400 to-orange-500  bg-clip-text
            text-transparent "
          >
            Eco Hues
          </h1>
          <div
            className="flex flex-col lg:flex-row md:flex-row py-5 md:space-x-4 lg:space-x-20 space-y-5
          md:space-y-0 md:h-[30rem] lg:h-auto"
          >
            <img
              className="rounded-3xl lg:h-[600px]"
              src={holiProd}
              alt="product pic"
            />
            <div className="bg-[#ffffffd5] p-4 md:p-5 lg:p-8 rounded-3xl text-lg lg:text-2xl leading-relaxed text-slate-800
            font-semibold overflow-y-scroll !scrollbar-thin !scrollbar-thumb-rounded-lg !scrollbar-thumb-yellow-400">
              <p>
              <span className="text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] font-semibold">
                Introducing Enactus EcoHues - the perfect solution for an
                organic and eco-friendly Holi celebration! </span> 
                <br />
                <br />
                Our organic Holi
                colors are made from 100% biodegradable materials, ensuring that
                you can enjoy the festival of colors without harming the
                environment. They're made from natural ingredients such
                as turmeric and beetroot, which are not only safe for
                the environment but also gentle on the skin. They are free from
                harmful chemicals, heavy metals, and synthetic dyes, ensuring
                that you can enjoy the festival without any worries.
                <br />
                <br />
                Enactus
                EcoHues offers a wide range of colors to choose from, including
                vibrant shades of red, pink, orange and yellow. Our colors are
                easy to use and come in convenient packaging, making them
                perfect for both indoor and outdoor celebrations.
              </p>
            </div>
          </div>
        </section>

        {/*Anna dristi section*/}
      <motion.div
      className="anna-container"
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      >
        <section className="flex-col mt-10">
          <h1
            className="inline-block whitespace-nowrap text-[2.5rem] md:text-[3rem] lg:text-[4.2rem] font-bold
            bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text
            text-transparent "
          >
            अन्न-Drishti
          </h1>
          <div
            className="flex flex-col lg:flex-row md:flex-row py-5 md:space-x-4 lg:space-x-20 space-y-5
          md:space-y-0 md:h-[30rem] lg:h-auto"
          >
            <img
              className="rounded-3xl lg:h-[600px]"
              src={anna}
              alt="anna dristi"
            />
            <div className="bg-[#ffffffd5] p-4 md:p-5 lg:p-8 rounded-3xl text-lg lg:text-2xl leading-relaxed text-slate-800
            font-semibold overflow-y-scroll !scrollbar-thin !scrollbar-thumb-rounded-lg !scrollbar-thumb-yellow-400">
              <p>
                <span className="text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] font-semibold">We, at Enactus SMIT, </span> 
                through our project<span className="lg:text-[1.6rem] font-semibold"> अन्न-Drishti</span>, aim to eliminate
                food wastage by processing the wasted food into useful manures and
                fertilisers.
                <br/>
                <br/>
                The project will contact our hostel mess to give us the food thrown away
                every day. Apart from this, we will also be contacting local restaurants and
                colleges for the same.
                <br/>
                <br/>
                Once collected, our team will process it into manure and biogas with the
                help of local communities around us thus promoting Social
                Entrepreneurship.
                The produced biogas and manure will then be sold to local businesses,
                tea-estates and online.
              </p>
            </div>
          </div>
        </section>
        </motion.div>
      </article>
      <div className="flex-1 mx-8 md:mx-16">
          <Footer />
      </div>
      
    </div>
  );
};

export default Projects;
