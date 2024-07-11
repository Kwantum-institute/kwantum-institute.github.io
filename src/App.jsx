import { useState } from "react";
import Hero from "./components/Hero";
import Navbar3D from "./components/Navbar3D";
import backgroundImage from "./assets/reel.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div
          className="hidden bg bg-repeat-y absolute bg-[length:120%] -top-[200px] left-0 w-full h-[2000px] bg-center bg-fixed -z-10 saturate-0 contrast-[0.1]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <Navbar3D />
      </div>
      <Hero />
    </>
  );
}

export default App;
