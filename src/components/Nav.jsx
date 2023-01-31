import React from "react";

const Nav = () => {
  return (
    <div className=" bg-[#747171] min-w-max text-white ">
      <div className="py-2 px-4 flex justify-between">
        <h1 className="text-4xl">Enactus Logo</h1>
        <ul className="flex text-center justify-between">
          <li>Our Projects</li>
          <li>Constution</li>
          <li>Events</li>
          <li>Contact Us</li>
        </ul>
        <h1 className="text-4xl">SMIT Logo</h1>
      </div>
    </div>
  );
};

export default Nav;
