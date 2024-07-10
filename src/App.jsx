import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Navbar3D from "./components/Navbar3D";
import background from "./assets/earth_background.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-20">
        <h1 className="mt-10 text-2xl">Kwantum Institute</h1>
        <Navbar3D className="lg:flex" />
        <Hero />
      </div>
    </>
  );
}

export default App;
