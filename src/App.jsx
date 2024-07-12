import Hero from "./components/Hero";
import Navbar3D from "./components/Navbar3D";
import backgroundImage from "./assets/earth_background.jpg";

function App() {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center">
      <div
        className="absolute bg bg-repeat-y bg-[length:120%] -top-[200px] left-0 w-full h-[2000px] bg-center bg-fixed -z-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <Navbar3D />
      <Hero />
      <div className="mb-20 text-white">Made by Sambeige</div>
    </div>
  );
}

export default App;
