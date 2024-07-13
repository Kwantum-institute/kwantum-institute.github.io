import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Banner />
      <nav className="fixed top-0 z-10 w-full p-5 bg-black flex flex-row items-center justify-between">
        <div className="flex gap-5 items-center">
          <Link to="/" className="text-white text-3xl font-black">
            <h1 className="text-[#faeed0] inline">Kwan</h1>
            <h1 className="text-blue-200 inline">tum</h1>
            <h1 className="inline"> Institute</h1>
          </Link>
          <ul className="flex flex-row gap-4 text-white">
            <li className="text-gray-400">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-400">
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blogs">Educational Blogs</Link>
            </li>
            <li>
              <Link to="/nutshell">Nutshell Knowledge</Link>
            </li>
            <li>
              <Link to="/history">Historical Science</Link>
            </li>
          </ul>
        </div>
        <div className="flex text-white items-center gap-5">
          <Link to="/login">Log In</Link>
          <Link to="/sign-up" className="px-5 py-2 rounded-full bg-blue-500">
            Sign Up
          </Link>
        </div>
      </nav>
      <div className="flex flex-col h-screen justify-between">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
