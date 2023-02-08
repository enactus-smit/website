import React from "react";
import CollabCard from "../components/CollabCard";
import hult_prize from "../imgs/hult_prize.png";
import art from "../imgs/Art.png";
import Footer from "../components/Footer";
const Collaborations = () => {
  return (
    <div className="">
      <h1 className="text-center my-5 text-4xl ">Collaborations</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:justify-evenly px-10 h-screen ">
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
      <Footer />
    </div>
  );
};

export default Collaborations;
