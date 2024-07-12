import React from "react";
import "./Navbar3D.css";

const Navbar3D = () => {
  return (
    <div className="mt-[250px] lg:mt-[450px] mb-[100px] lg:mb-[200px] lg:ml-0 flex flex-col items-center justify-center gap-20">
      <div className="relative lg:left-[100px]">
        <div className="absolute bottom-[370px] -left-[55px] text-center lg:text-left lg:-left-3 text-6xl lg:text-[150px] lg:leading-[150px] lg:bottom-[100px] text-3d">
          Kwantum Institute
        </div>
        <div className="hidden lg:inline lg:-left-[250px] lg:-bottom-[60px] text-xl lg:text-[40px] lg:leading-[50px] absolute text-3d-s">
          We
          <br />
          educate <br />
          others on <br />
          various <br />
          scientific <br />
          disciplines
        </div>
        <ul className="flex flex-col relative left-3 lg:flex-row navbar-3d items-center justify-center">
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
