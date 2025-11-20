import React from "react";
import "./navbar.css";
import { AiFillApple } from "react-icons/ai";
import { FaShoppingBasket } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = ({basket}) => {
  console.log(basket);
  
  
  return (
    <nav>
      <div className="container">
        <NavLink to='/'>
          <AiFillApple size={50} />
        </NavLink>

        <menu>
          <ul>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/basket'>
              <FaShoppingBasket size={30} />
              <sup>{basket.length}</sup>
            </NavLink>
          </ul>
        </menu>
      </div>
    </nav>
  );
};

export default Navbar;
