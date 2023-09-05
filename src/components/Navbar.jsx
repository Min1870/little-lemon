import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegTimesCircle, FaGripLines } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle((pre) => !pre);
  };
  return (
    <>
      <div className="mobile-nav" onClick={toggleNav}>
        {toggle ? <FaRegTimesCircle /> : <FaGripLines />}
      </div>
      <nav className={`nav ${toggle ? "active" : ""}`}>
        <Link to={"/"} className="nav-item">
          Home
        </Link>
        <Link to={"/about"} className="nav-item">
          About
        </Link>
        <Link to={"/menu"} className="nav-item">
          Menu
        </Link>
        <Link to={"/booking"} className="nav-item">
          Reservations
        </Link>
        <Link to={"/"} className="nav-item">
          Order online
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
