import { Outlet, useLoaderData } from "react-router";
import Navbar from "../components/NavBar/Navbar";
import SideBar from "../components/SideBar/SideBar";
import { useState } from "react";
const RootLayout = () => {
  const data = useLoaderData();
  const [sideBarStatus, setSideBarStatus] = useState("hidden");

  return (
    <>
      <Navbar
        open={() =>
          sideBarStatus === "hidden"
            ? setSideBarStatus("block")
            : setSideBarStatus("hidden")
        }
        mode="nav-bar"
        categories={data.categories}
      />
      <div className="wrapper flex items-stretch min-h-screen relative">
        <SideBar
          close={() => setSideBarStatus("hidden")}
          sideBarStatus={sideBarStatus}
          mode="side-bar"
          categories={data.categories}
        />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
export const loader = async () => {
  try {
    const response = await fetch("http://localhost:5173/data.json");
    if (!response.ok) {
      throw new Error("Data fetching failed.");
    }
    const resData = await response.json();
    return resData;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An error occured.");
    }
  }
};
