import React from "react";
import CollabCard from "../components/CollabCard";
import hult_prize from "../imgs/hult_prize.png";
import art from "../imgs/Art.png";
import Footer from "../components/Footer";
const Collaborations = () => {
  return (
    <div>
      <h1 className="flex justify-center whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[4.2rem] font-semibold">
        Collaborations
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:justify-evenly px-10 ">
        <CollabCard 
        name="Institute Innovision Council" 
        />
        <CollabCard
          name="Hult Prize Foundation"
          url="https://www.hultprize.org/"
          img={hult_prize}
        />

        <CollabCard
          name="Art Plant Paint"
          url="https://www.instagram.com/art.plant.paint/?igshid=ZDdkNTZiNTM%3D"
          owner="Tanushka Chauhan"
          img={art}
        />
      </div>
      <div className="mx-8 md:mx-20">
        <Footer />
      </div>
    </div>
  );
};

export default Collaborations;
