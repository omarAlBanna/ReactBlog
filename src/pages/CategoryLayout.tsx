import { Outlet } from "react-router";
import SubNav from "../components/SubNav/SubNav";

const CategoryLayout = () => {
  return (
    <>
      <SubNav />
      <Outlet />
    </>
  );
};

export default CategoryLayout;

export async function loader() {
  try {
    const response = await fetch("http://localhost:5173/data.json");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const resData = await response.json();
    return resData;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("data fetching failed.");
      return null;
    }
  }
}
