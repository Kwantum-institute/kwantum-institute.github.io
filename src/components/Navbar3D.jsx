import React from "react";
import "./Navbar3D.css";

const Navbar3D = () => {
  return (
    <div className="mt-150px lg:mt-[400px] mb-[250px] lg:ml-10 flex flex-col items-center justify-center gap-20">
      <div className="relative">
        <h1 className="lg:hidden text-center mb-20">Kwantum Institute</h1>
        <div className="lg:-left-3 text-xl lg:text-[150px] lg:leading-[150px] absolute lg:bottom-[100px] text-3d">
          Kwantum Institute
        </div>
        <div className="lg:-left-[250px] text-xl lg:text-[40px] lg:leading-[50px] absolute lg:bottom-[0px] text-3d-s">
          We aim <br />
          to educate <br />
          others on <br />
          various <br />
          scientific <br />
          topics.
        </div>
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
    </div>
  );
};

export default Navbar3D;
