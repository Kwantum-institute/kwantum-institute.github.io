import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faInfo,
  faPhone,
  faList,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar3D.css";

const Navbar3D = () => {
  return (
    <div className="ml-10">
      <ul className="navbar-3d">
        <li style={{ "--i": 5 }} data-text="Home">
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faHouse} />
            </span>
            Home
          </a>
        </li>
        <li style={{ "--i": 4 }} data-text="About">
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faInfo} />
            </span>
            About
          </a>
        </li>
        <li style={{ "--i": 3 }} data-text="Contact">
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            Contact
          </a>
        </li>
        <li style={{ "--i": 2 }} data-text="Services">
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faList} />
            </span>
            Services
          </a>
        </li>
        <li style={{ "--i": 1 }} data-text="Portfolio">
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar3D;
