import React from "react";
import "./Herosection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Herosection = () => {
  return (
    <div className="hero_banner" id="hero_section">
      <div className="container">
        <div className="hero_content text-center">
          <h2>Best Courses For You.</h2>
          <h1>Most Famous Learning Platform.</h1>
        </div>
        <div className="down_arrow">
          <Link className="link" to="courses" smooth={true} duration={2000}>
            <FontAwesomeIcon icon={faAngleDoubleDown}></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
