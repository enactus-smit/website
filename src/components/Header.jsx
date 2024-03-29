import React, { useCallback, useState, useEffect } from "react";
// import logo from "../imgs/Enactus_Full_Color_logo.png";
// import logoSmit from "../imgs/smit_logo.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import usePersistedState from "use-persisted-state";
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

const Header = () => {
  const [logo, setlogo] = useState([]);

  useEffect(() => {
    const logoRefs = [
      ref(storage, "images/Enactus_Full_Color_logo.png"),
      ref(storage, "images/smit_logo.png"),
    ];
    Promise.all(logoRefs.map(getDownloadURL))
      .then((urls) => setlogo(urls))
      .catch((error) => console.log(error));
  }, []);
  const useActive = usePersistedState("active");
  const [active, setActive] = useActive("state-key-101", 1);
  const [isOpen, setIsOpen] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  const navigate = useNavigate();

  //funtion for route changing
  const routeChange = useCallback(
    (num, path) => {
      navigate(path);
      window.scrollTo(0, 0);
      setActive(num);
    },
    [navigate, setActive]
  );

  //funtion for menu button in small screens
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setDisplayMenu(false);
    } else {
      setTimeout(() => {
        setDisplayMenu(true);
      }, 200);
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col w-auto justify-between overflow-hidden pt-7 bg-white z-50 ">
      <div className="flex justify-between mx-4 md:mx-16 mb-4">
        <img
          className=""
          width={110}
          height={100}
          src={logo[0]}
          alt="logo-enactus"
        />
        <img
          className="invisible md:visible"
          width={180}
          height={200}
          src={logo[1]}
          alt="logo-smit"
        />
        {/*nav button*/}

        <div
          className={` mt-3 z-50 right-0 text-sm font-medium md:hidden cursor-pointer ${
            isOpen ? "absolute" : "fixed"
          }`}
        >
          <Bars3Icon
            className={`h-6 w-6 mr-3 fill-yellow-500 transition-transform duration-[.6] ${
              isOpen ? "rotate-90 fill-black" : "rotate-0"
            }`}
            onClick={toggleMenu}
          />
        </div>
      </div>
      <nav className="flex justify-center">
        <ul
          className="hidden md:flex md:px-2 lg:px-6 space-x-6 font-semibold text-md
          lg:space-x-12"
        >
          <li
            className={`${active === 1 ? " text-yellow-400 " : "nav-item "} `}
            onClick={() => routeChange(1, "/")}
          >
            Home
          </li>
          <li
            onClick={() => routeChange(2, "/team")}
            className={`${active === 2 ? " text-yellow-400 " : "nav-item "} `}
          >
            Team 2022-2023
          </li>
          <li
            className={`${active === 3 ? " text-yellow-400 " : "nav-item"} `}
            onClick={() => {
              routeChange(3, "/events");
            }}
          >
            {console.log(active)}
            Events
          </li>
          <li
            className={`${active === 4 ? " text-yellow-400 " : "nav-item"} `}
            onClick={() => {
              routeChange(4, "/projects");
            }}
          >
            Our Projects
          </li>
          <li
            className={`${active === 5 ? " text-yellow-400 " : "nav-item"} `}
            onClick={() => {
              routeChange(5, "/goals");
            }}
          >
            Our Goals
          </li>
          <li
            className={`${active === 6 ? " text-yellow-400 " : "nav-item"} `}
            onClick={() => {
              routeChange(6, "/contact");
            }}
          >
            Contact Us
          </li>
          <li
            className={`${active === 7 ? " text-yellow-400 " : "nav-item"} `}
            onClick={() => {
              routeChange(7, "/collaborations");
            }}
          >
            Collaborations
          </li>
          <li
            className={`${active === 8 ? " text-yellow-400 " : "nav-item"} `}
            onClick={() => {
              routeChange(8, "/gallery");
            }}
          >
            Gallery
          </li>
        </ul>
      </nav>
      {/*The bar*/}
      <div className=" bg-yellow-400 w-full overflow-hidden h-2 mt-2"></div>

      {/*navigation panel*/}

      <div className="flex fixed inset-y-0 right-0 top-0 md:hidden">
        <nav
          className={`${
            isOpen ? "w-[45vw]" : "w-0"
          } duration-[.3s] h-[100vh] bg-yellow-400/90`}
        >
          <ul
            className={`absolute left-10 mr-6 mt-[25vw] space-y-10 font-semibold
        md:hidden ${displayMenu ? "inline-block" : "hidden"}`}
            onClick={toggleMenu}
          >
            <li
              className="text-gray-800 hover:text-black cursor-pointer duration-700"
              onClick={() => routeChange(1, "/")}
            >
              Home
            </li>
            <li
              className="text-gray-800 hover:text-black cursor-pointer duration-700"
              onClick={() => routeChange(2, "/team")}
            >
              Team 2022-2023
            </li>
            <li
              className="text-gray-800 hover:text-black cursor-pointer duration-700"
              onClick={() => routeChange(3, "/events")}
            >
              Events
            </li>
            <li
              className="text-gray-800 hover:text-black cursor-pointer duration-700"
              onClick={() => routeChange(4, "/projects")}
            >
              Our Projects
            </li>
            <li
              className="text-gray-800 hover:text-black cursor-pointer duration-700"
              onClick={() => routeChange(5, "/goals")}
            >
              Our Goals
            </li>
            <li
              className="text-gray-800 hover:text-black cursor-pointer duration-700"
              onClick={() => routeChange(6, "/contact")}
            >
              Contact Us
            </li>
            <li
              className="text-gray-800 hover:text-black cursor-pointer duration-700"
              onClick={() => routeChange(7, "/collaborations")}
            >
              Collaborations
            </li>
            <li
              className="text-gray-800 hover:text-black cursor-pointer duration-700"
              onClick={() => routeChange(7, "/gallery")}
            >
              Gallery
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
