import React from "react";
import "./Navbar3D.css";

const Navbar3D = () => {
  return (
    <div className="z-10 lg:mt-[250px] lg:ml-10">
      <ul className="flex flex-col lg:flex-row navbar-3d items-center justify-center">
        <li style={{ "--i": 5 }}>
          <a href="#">
            <span>
              <div>K</div>
            </span>
            Home
          </a>
        </li>
        <li style={{ "--i": 4 }}>
          <a href="#">About</a>
        </li>
        <li style={{ "--i": 3 }}>
          <a href="#">Science</a>
        </li>
        <li style={{ "--i": 2 }}>
          <a href="#">Technology</a>
        </li>
        <li style={{ "--i": 1 }}>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar3D;
