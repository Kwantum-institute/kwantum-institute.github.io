import React from "react";
import "./Navbar3D.css";

const Navbar3D = () => {
  const navLinks = [
    { text: "About", href: "#", index: 4 },
    { text: "Science", href: "#", index: 3 },
    { text: "Technology", href: "#", index: 2 },
    { text: "Theory", href: "#", index: 1 },
  ];

  return (
    <div className="h-[700px] flex flex-col relative justify-center items-center">
      <div className="w-2/3 flex flex-col items-center">
        <div className="relative gap-5 flex flex-col lg:flex-row mb-20 text-6xl lg:text-8xl text-center">
          <div className="text-3d-right lg:hidden">
            <h1 className="text-[#faeed0] inline">Kwan</h1>
            <h1 className="text-blue-200 inline">tum</h1>
          </div>
          <div className="text-3d-left hidden lg:inline">
            <h1 className="text-[#faeed0] inline">Kwan</h1>
            <h1 className="text-blue-200 inline">tum</h1>
          </div>
          <div className="text-3d-right lg:hidden">Institute</div>
          <div className="text-3d-left hidden lg:inline">Institute</div>
        </div>
        <ul>
          {navLinks.map(({ text, href, index }) => (
            <li key={index} style={{ "--i": index }}>
              <a href={href}>
                <span>
                  <div>{text[0]}</div>
                </span>
                {text}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute hidden-on-sm translate-x-[155px] translate-y-[150px] leading-[75px] text-3d-s text-6xl skew-y-[-15deg]">
          We
          <br />
          <p className="text-[#faeed0] inline">Teach</p>
          <br />
          People
          <br />
          Science
        </div>
      </div>
    </div>
  );
};

export default Navbar3D;
