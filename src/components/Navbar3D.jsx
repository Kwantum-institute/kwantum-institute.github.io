import React from "react";
import "./Navbar3D.css";

const Navbar3D = () => {
  const navLinks = [
    ,
    { text: "About", href: "#", index: 4 },
    { text: "Science", href: "#", index: 3 },
    { text: "Technology", href: "#", index: 2 },
    { text: "Theory", href: "#", index: 1 },
  ];

  return (
    <div className="h-[700px] flex flex-col relative justify-center items-center">
      <div className="w-2/3 flex flex-col items-center gap-5">
        <div className="relative flex flex-col lg:flex-row mb-20 gap-9 text-6xl lg:text-8xl text-center">
          <div className="text-3d-right lg:hidden">Kwantum</div>
          <div className="text-3d-left hidden lg:inline">Kwantum</div>
          <div className="text-3d-right">Institute</div>
        </div>
        <div className="absolute invisible lg:visible translate-x-[155px] translate-y-[150px] leading-[75px] text-3d-s text-6xl skew-y-[-15deg]">
          We
          <br />
          Teach
          <br />
          People
          <br />
          Science
        </div>
      </div>
      <ul className="">
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
    </div>
  );
};

export default Navbar3D;
