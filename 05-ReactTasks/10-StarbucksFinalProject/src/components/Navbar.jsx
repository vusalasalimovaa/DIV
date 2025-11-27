import React from "react";
import { SlBasket } from "react-icons/sl";
import starbucks from "../assets/starbucks.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[1150px] mx-auto py-3">
      <nav className="flex items-center justify-between bg-white">
      <NavLink to={"/"}>
        <img src={starbucks} alt="starbucks" className="w-15 h-15" />
      </NavLink>

      <div className="hidden md:flex items-center gap-5">
        <NavLink to={"/menu"} className="text-xl">
          Menu
        </NavLink>
        <NavLink to={'/basket'}>
          <SlBasket size={25} />
        </NavLink>
      </div>

      <button className="md:hidden p-2">
        <RxHamburgerMenu size={25} />
      </button>
    </nav>
    </div>
    
  );
};

export default Navbar;
