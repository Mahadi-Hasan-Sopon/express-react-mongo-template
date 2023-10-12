import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayouts() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default MainLayouts;
