import { Outlet, useLoaderData } from "react-router";
import Navbar from "../components/NavBar/Navbar";

const RootLayout = () => {
  const data = useLoaderData();

  return (
    <>
      <Navbar categories={data.categories} />
      <Outlet />
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
