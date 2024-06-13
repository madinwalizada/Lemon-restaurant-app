import React from "react";
import "../Styles/main.css";
import logo from "../lemon-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column logo">
          <img src={logo} alt="Logo" className="logo-footer" />
        </div>
        <div className="footer-column navigation">
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column contact">
          <h4>Contact Us</h4>
          <p>1234 Street Name</p>
          <p>City, State, 12345</p>
          <p>(123) 456-7890</p>
        </div>
        <div className="footer-column social-media">
          <h4>Follow Us</h4>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
