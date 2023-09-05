import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "../images/logo (1).png"

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <Navbar />
    </header>
  );
};

export default Header;
