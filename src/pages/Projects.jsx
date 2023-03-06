import React from "react";
import holiProd from "../imgs/holiProd.jpeg";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div className="">
      <h1 className="flex justify-center whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[4.2rem] font-semibold">
        Projects
      </h1>
      <article className="flex flex-col h-screen mx-8 md:mx-16">
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
          md:space-y-0 h-[30rem]"
          >
            <img
              className="rounded-3xl"
              src={holiProd}
              alt="product pic"
            />
            <div className="bg-[#ffffffd5] md:p-5 lg:p-8 rounded-3xl text-xl lg:text-2xl md:leading-snug text-slate-800
            font-semibold overflow-y-scroll">
              <p>
                Introducing Enactus EcoHues - the perfect solution for an
                organic and eco-friendly Holi celebration!
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

      </article>
      <div className="flex-1">
          <Footer />
        </div>
    </div>
  );
};

export default Projects;
