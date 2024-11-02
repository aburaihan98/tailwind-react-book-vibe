import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import NavBar from "./headers/NavBar";

export default function Root() {
  return (
    <>
      <div className="w-11/12 m-auto">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
