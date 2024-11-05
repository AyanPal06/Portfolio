import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services" data-aos="zoom-in" data-aos-duration="800">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service_container">
        <a href="#portfolio" style={{ textDecoration: "none", color: "white" }}>
          <article className="service">
            <div className="service_head">
              <h3>FrontEnd Developer </h3>
            </div>
            <ul className="service_list">
              <li>
                <BiCheck className="service_list_icon" />
                <p>
                  I focus on delivering smooth, intuitive interfaces that
                  prioritize user experience. Every click and scroll should feel
                  effortless.
                </p>
              </li>
              <li>
                <BiCheck className="service_list_icon" />
                <p>
                  I specialize in building responsive designs that adapt to any
                  screen size, ensuring accessibility and a modern look across
                  devices.
                </p>
              </li>
              <li>
                <BiCheck className="service_list_icon" />
                <p>
                  I aim for clean, optimized code to ensure fast load times and
                  a fluid user experience, without sacrificing quality or
                  functionality.
                </p>
              </li>
            </ul>
          </article>
        </a>

        <a href="#portfolio" style={{ textDecoration: "none", color: "white" }}>
          <article  className="service">
            <div className="service_head">
              <h3> BackEnd Developer </h3>
            </div>
            <ul className="service_list">
              <li>
                <BiCheck className="service_list_icon" />
                <p>
                  My backend solutions focus on efficient API communication,
                  ensuring smooth interactions between the server and client for
                  real-time performance.
                </p>
              </li>
              <li>
                <BiCheck className="service_list_icon" />
                <p>
                  I enjoy designing scalable, robust backend systems that can
                  handle complex data flows and ensure application stability.
                </p>
              </li>
              <li>
                <BiCheck className="service_list_icon" />
                <p>
                  Prioritizing data security and system reliability, I create
                  backend architectures that safeguard user information while
                  maintaining high availability.
                </p>
              </li>
            </ul>
          </article>
        </a>
      </div>
    </section>
  );
}

export default Services;
