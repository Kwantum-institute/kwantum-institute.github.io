import Hero from "./components/Hero";
import Navbar3D from "./components/Navbar3D";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="bg"></div>
      <Navbar3D />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
