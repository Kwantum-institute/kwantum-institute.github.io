import { useState } from "react";
import Hero from "./components/Hero";
import Navbar3D from "./components/Navbar3D";
import background from "./assets/earth_background.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mt-[150px] mb-[250px] flex flex-col items-center justify-center gap-20">
        <div className="relative">
          <h1 className="lg:hidden text-center mb-20">Kwantum Institute</h1>
          <Navbar3D />
          <div className="text-xl lg:text-[150px] lg:leading-[150px] absolute top-0 top-[-90px] lg:left-3 text-3d">
            Kwantum Institute
          </div>
          <p class="z-1 hidden text-3xl lg:block absolute top-[280px] right-0 text-right p-10">
            A dedicated and
            <br />
            dynamic student-led initiative, <br />
            Kwantum Institute aims to educate others <br />
            on various academic topics.
          </p>
          <p class="block lg:hidden text-center m-10">
            A dedicated and dynamic student-led initiative, Kwantum Institute
            aims to teach others on various academic topics using forms of blogs
            to more serious planned series of articles.
          </p>
        </div>
      </div>
      <Hero />
    </>
  );
}

export default App;
