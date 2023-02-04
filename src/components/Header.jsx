import React, { useCallback, useState } from 'react'
import logo from "../imgs/Enactus_Full_Color_logo.png"
import logoSmit from "../imgs/smit_logo.png"
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  const navigate = useNavigate(); 
  
  //funtion for route changing 
  const routeChange = useCallback( (path) => { 
    navigate(path);
}, [navigate] );

//funtion for menu button in small screens
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setDisplayMenu(false);
    } else {
      setTimeout(() => {
        setDisplayMenu(true);
      }, 100);
    }
  };

  return (
    <div className="flex flex-col w-auto justify-between overflow-hidden mt-7 ">
      <div className="flex justify-between mx-16 mb-4">
        <img className=''
        width={110}
        height={100}
        src = {logo}
        alt = "logo-enactus"
        />
        <img
        width={180}
        height={200}
        src = {logoSmit}
        alt = "logo-smit"
        />
      </div>
      <nav className="flex justify-center">
        <ul className="hidden md:flex md:px-2 lg:px-6 space-x-6 font-medium text-md
          lg:space-x-12">
          <li className="nav-item" onClick={() => routeChange("/home")}>Home</li>
          <li className="nav-item" onClick={() => routeChange("/team")}>Team 2022-2023</li>
          <li className="nav-item" onClick={() => routeChange("/events")}>Events</li>
          <li className="nav-item" onClick={() => routeChange("/projects")}>Our Projects</li>
          <li className="nav-item" onClick={() => routeChange("/goals")}>Our Goals</li>
          <li className="nav-item" onClick={() => routeChange("/contact")}>Contact Us</li>
          <li className="nav-item" onClick={() => routeChange("/collaborations")}>Collaborations</li>
        </ul>
      </nav>
      <div className=" bg-yellow-400 w-full overflow-hidden h-2 mt-2">

      </div>
    </div>
  )
};

export default Header