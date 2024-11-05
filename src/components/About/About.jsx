import React from "react";
import "./About.css";
import ME from "../../Assets/me.jpeg.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
function about() {
  return (
    <section id="about" data-aos="fade-left">
      <h5> Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <p>
          I'm a final-year CSE student and full-stack developer specializing in the MERN stack. I love building seamless, scalable web apps that solve real-world problems.<br/>
          <br/> With strong skills in both front-end and back-end development, I'm now seeking an entry-level role to kickstart my career in software development and turn ideas into impactful digital solutions.
          </p>
           <br/>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;