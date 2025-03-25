import NavBar from "../Shared/Navbar/NavBar";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";
import "./style.css";

const Main = () => {
  return (
    <div className="md:w-[90%] mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
