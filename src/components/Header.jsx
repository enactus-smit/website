import React, { useCallback, useState } from 'react'
import logo from "../imgs/Enactus_Full_Color_logo.png"
import logoSmit from "../imgs/smit_logo.png"
import { Bars3Icon } from '@heroicons/react/24/solid';
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
    <div className="flex flex-col w-auto justify-between overflow-hidden pt-7 bg-white z-50 ">
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
        <ul className="hidden md:flex md:px-2 lg:px-6 space-x-6 font-semibold text-md
          lg:space-x-12">
          <li className="nav-item" onClick={() => routeChange("/")}>Home</li>
          <li className="nav-item" onClick={() => routeChange("/team")}>Team 2022-2023</li>
          <li className="nav-item" onClick={() => routeChange("/events")}>Events</li>
          <li className="nav-item" onClick={() => routeChange("/projects")}>Our Projects</li>
          <li className="nav-item" onClick={() => routeChange("/goals")}>Our Goals</li>
          <li className="nav-item" onClick={() => routeChange("/contact")}>Contact Us</li>
          <li className="nav-item" onClick={() => routeChange("/collaborations")}>Collaborations</li>
        </ul>
      </nav>
      {/*The bar*/}
      <div className=" bg-yellow-400 w-full overflow-hidden h-2 mt-2">

      </div>
     {/*navigation panel*/}

     <div className="flex absolute inset-y-0 right-0 top-0 md:hidden">
        <nav className={`${isOpen ? "w-[45vw]" : "w-0"} duration-[.3s] h-screen bg-slate-600/90`}>
        <ul className={`absolute left-20 mr-6 mt-[25vw] space-y-10 text-white font-semibold
        md:hidden ${displayMenu ? "inline-block" : "hidden"}`} onClick={toggleMenu}>
          <li className="cursor-pointer" onClick={() => routeChange("/")}>Home</li>
          <li className="cursor-pointer" onClick={() => routeChange("/team")}>Team 2022-2023</li>
          <li className="cursor-pointer" onClick={() => routeChange("/events")}>Events</li>
          <li className="cursor-pointer" onClick={() => routeChange("/projects")}>Our Projects</li>
          <li className="cursor-pointer" onClick={() => routeChange("/goals")}>Our Goals</li>
          <li className="cursor-pointer" onClick={() => routeChange("/contact")}>Contact Us</li>
          <li className="cursor-pointer" onClick={() => routeChange("/collaborations")}>Collaborations</li>
          </ul>
        </nav>
      </div>


      {/*nav button*/}

      <div className="inline absolute py-10 px-4 inset-y-0 right-0 text-sm font-medium md:hidden cursor-pointer" >
        <Bars3Icon className={`h-6 w-6 mr-3 fill-yellow-600 transition-transform duration-[.6] ${isOpen ? "rotate-90": "rotate-0"}`} 
        onClick={toggleMenu} />
      </div>

    </div>
  )
};

export default Header