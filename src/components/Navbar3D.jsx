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
    <div className="mt-20 ml-10">
      <ul className="lg:flex navbar-3d">
        <li style={{ "--i": 5 }}>
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faHouse} />
            </span>
            About
          </a>
        </li>
        <li style={{ "--i": 4 }}>
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faInfo} />
            </span>
            About
          </a>
        </li>
        <li style={{ "--i": 3 }}>
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            About
          </a>
        </li>
        <li style={{ "--i": 2 }}>
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faList} />
            </span>
            About
          </a>
        </li>
        <li style={{ "--i": 1 }}>
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar3D;
