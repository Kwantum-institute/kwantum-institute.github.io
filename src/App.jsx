import Hero from "./components/Hero";
import Navbar3D from "./components/Navbar3D";
import backgroundImage from "./assets/reel.png";

function App() {
  return (
    <div className="bg-black relative w-full overflow-hidden">
      <div
        className="hidden absolute bg bg-repeat-y bg-[length:120%] -top-[200px] left-0 w-full h-[2000px] bg-center bg-fixed -z-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <Navbar3D />
      <Hero />
    </div>
  );
}

export default App;
