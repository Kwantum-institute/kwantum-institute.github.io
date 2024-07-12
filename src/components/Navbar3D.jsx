import React from "react";
import "./Navbar3D.css";

const Navbar3D = () => {
  const navLinks = [
    { text: "Home", href: "#", index: 5 },
    { text: "About", href: "#", index: 4 },
    { text: "Science", href: "#", index: 3 },
    { text: "Technology", href: "#", index: 2 },
    { text: "About", href: "#", index: 1 },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-20 mt-[250px] lg:mt-[420px] mb-[100px] lg:mb-[200px] lg:ml-0">
      <div className="relative lg:left-[100px]">
        <div className="absolute bottom-[370px] -left-[55px] text-center lg:text-left lg:-left-3 text-6xl lg:text-[150px] lg:leading-[150px] lg:bottom-[100px] text-3d">
          Kwantum Institute
        </div>
        <div className="hidden lg:inline lg:-left-[250px] lg:-bottom-[60px] text-xl lg:text-[40px] lg:leading-[50px] absolute text-3d-s">
          We
          <br />
          educate
          <br />
          others on
          <br />
          various
          <br />
          scientific
          <br />
          disciplines
        </div>
        <ul className="flex flex-col relative left-3 lg:flex-row navbar-3d items-center justify-center">
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
    </div>
  );
};

export default Navbar3D;
