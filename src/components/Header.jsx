import React from 'react'
import logo from "../imgs/Enactus_Full_Color_logo.png"
import logoSmit from "../imgs/smit_logo.png"
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  const navigate = useNavigate();
  
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
          <li className="nav-item" onClick={navigate={('/Events')}}><a href="/">Home</a></li>
          <li className="nav-item"><a href="/">Team 2022-2023</a></li>
          <li className="nav-item"><a href="/">Events</a></li>
          <li className="nav-item"><a href="/">Our Projects</a></li>
          <li className="nav-item"><a href="/">Our Goals</a></li>
          <li className="nav-item"><a href="/">Contact Us</a></li>
          <li className="nav-item"><a href="/">Collaborations</a></li>
        </ul>
      </nav>
      <div className=" bg-yellow-400 w-full overflow-hidden h-2 mt-2">

      </div>
    </div>
  )
}

export default Header