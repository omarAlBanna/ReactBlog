import { type FC } from "react";

import NavList from "./NavList";

const Navbar: FC = () => {
  return (
    <>
      <header className=" bg-stone-50 py-2 px-10 relative">
        <nav className="flex items-center justify-between p-0.5">
          <NavList />
          <button className="hamburger hidden text-2xl">&#9776;</button>
          <button className="login-btn bg-cyan-600 text-base sm:text-lg md:text-xl text-stone-50 rounded-lg hover:bg-cyan-700 active:bg-cyan-800 px-3 py-1 cursor-pointer">
            Log In
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
