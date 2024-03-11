import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className=" pt-[65px] pb-5 min-h-screen font-sans ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
