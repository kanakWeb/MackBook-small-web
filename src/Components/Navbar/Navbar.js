import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navBar d-flex justify-content-between align-item-center ">
      <h2>Master-tech</h2>
      <div>
        <NavLink className={({isActive})=>isActive?'active-link':'link'} to="/">
          Home
        </NavLink>
        <NavLink className={({isActive})=>isActive?'active-link':'link'} to="/Reviews">
          Reviews
        </NavLink>
        <NavLink className={({isActive})=>isActive?'active-link':'link'} to="/DashBoard">
          DashBoard
        </NavLink>
        <NavLink className={({isActive})=>isActive?'active-link':'link'} to="/Blogs">
          Blogs
        </NavLink>
        <NavLink className={({isActive})=>isActive?'active-link':'link'} to="/About">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
