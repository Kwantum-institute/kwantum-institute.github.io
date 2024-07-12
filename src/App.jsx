import Banner from "./components/Banner";
import Navbar3D from "./components/Navbar3D";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="bg"></div>
      <Banner />
      <Navbar3D />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
