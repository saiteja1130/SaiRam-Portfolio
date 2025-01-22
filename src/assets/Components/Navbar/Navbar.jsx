import React, { useEffect, useState } from "react";
import menu from "../../../images/menu.jpg";
import close_menu from "../../../images/close-menu.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let [navToggle, setNavToggle] = useState(false);

  return (
    <div className="shadow-blue-400  shadow-md z-50 sticky top-0 bg-black  border-b-2 border-black">
      <nav className="flex justify-between items-center px-3 py-2  sm:px-3  md:px-5 ">
        <div className="flex items-center gap-2">
          <h1 className="text-white text-lg font-[500] sm:text-lg md:text-2xl">
            Sairam Sanku | Java Developer
          </h1>
          <p className="h-2 m-0 w-2 bg-green-400 rounded-lg"></p>
        </div>
        <ul className="text-white  sm:flex items-center hidden ml-auto md:gap-6 lg:gap-10 sm:gap-3">
          <li className="">
            <NavLink className="px-2 py-1" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="px-2 py-1" to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink className="px-2 py-1" to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink className="px-2 py-1" to="/achivements">Achivements</NavLink>
          </li>
          <li>
            <NavLink className="px-2 py-1" to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div>
          <img
            src={menu}
            alt=""
            className="w-8 block sm:hidden md:hidden cursor-pointer"
            onClick={() => setNavToggle(true)}
          />
        </div>
        <div
          className={`sm:hidden fixed top-0 right-0 bg-black text-white h-full w-1/2 transition-transform duration-500 border-l-2 border-black z-50 ${
            navToggle ? "custom-shadow" : "translate-x-full over-flow"
          } `}
        >
          <img
            src={close_menu}
            className="w-8 absolute top-5 left-5 cursor-pointer"
            onClick={() => setNavToggle(false)}
          />
          <ul className=" flex flex-col px-6 gap-6 py-20  text-xl">
          <li className="" onClick={() => setNavToggle(false)}>
            <NavLink  className="px-2 py-1" to="/">Home</NavLink>
          </li>
          <li onClick={() => setNavToggle(false)}>
            <NavLink className="px-2 py-1" to="/skills">Skills</NavLink>
          </li>
          <li onClick={() => setNavToggle(false)}>
            <NavLink className="px-2 py-1" to="/projects">Projects</NavLink>
          </li>
          <li onClick={() => setNavToggle(false)}>
            <NavLink className="px-2 py-1" to="/achivements">Achivements</NavLink>
          </li >
          <li onClick={() => setNavToggle(false)}>
            <NavLink className="px-2 py-1" to="/contact">Contact</NavLink>
          </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
