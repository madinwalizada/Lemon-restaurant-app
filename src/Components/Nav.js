import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../lemon-logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function Nav() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <header className="container">
      <img src={logo} alt="Logo" className="logo" />
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        {/* <Link to="/about-us">About</Link>
        <Link to="/menu">Menu</Link> */}
        <Link to="/booking">Book</Link>
        {/* <Link to="/confirmed-booking">Booking Confirmation</Link> */}
        {/* <Link to="/">Order online</Link> */}
        {/* <Link to="/main">Main</Link> */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Nav;
