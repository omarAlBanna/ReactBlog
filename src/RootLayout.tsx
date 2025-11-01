import { Outlet } from "react-router";
import Navbar from "./components/NavBar/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
