import Navbar from "./Navbar.jsx";
import BottomNavbar from "./BottomNavbar.jsx";
import { Outlet } from "react-router-dom";

function LayoutsNav() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="lg:hidden">
        <BottomNavbar />
      </div>
    </>
  );
}

export default LayoutsNav;
