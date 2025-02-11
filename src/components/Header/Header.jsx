import React from "react";
import "./Header.css";
import CTA from "./CTA";
import me from "../../Assets/head.jpg";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Ayan Pal</h1>
        <CTA />

        <HeaderSocials />
        <div className="me">
          <img src={me} alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;