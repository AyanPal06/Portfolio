import React from "react";
import "./Footer.css";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import img from "../../Assets/Ap logo.jpg"
function Footer() {
  return (
    <footer>
      <a href="/" className="footer_logo">
        <img
          style={{
            width: "6rem",
            height: "4rem",
            borderRadius: "8px",
            transition: "transform 0.3s ease",
          }}
        className=".footer_logo"
        src={img}/>
      </a>

      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Skills</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Projects</a>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com/AyanPal06">
          <BsGithub />
        </a>

        <a href="https://x.com/AyanPal63087154">
          <BsTwitter />
        </a>
        <a href="https://www.linkedin.com/in/ayan-pal-45732222a/">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; @Ayan Pal. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;