import { type FC } from "react";
import { useLanguageContext } from "../../store/LangContext";
import NavList from "./NavList";
import { Link } from "react-router";
import { useLoginContext } from "../../store/LoggedInContext";
type LanguageCategories = Record<string, { "sub-categories": string[] }>;
export type Categories = {
  EN: LanguageCategories;
  AR: LanguageCategories;
};
export type NavBarProps = {
  categories: Categories;
  mode: "nav-bar" | "side-bar";
  sideBarStatus?: string;
  open?: () => void;
  close?: () => void;
};

const Navbar: FC<NavBarProps> = ({ categories, open }) => {
  const { language, toggleLang } = useLanguageContext();
  const { loggedIn, LogOut } = useLoginContext();
  return (
    <>
      <header className=" bg-stone-50 py-2 sm:px-10 relative shadow-lg shadow-stone-300">
        <nav className="flex items-center justify-between sm:p-0.5">
          <NavList mode="nav-bar" categories={categories} />
          <button
            data-testId="open-sideBar"
            onClick={open}
            className="hamburger hidden text-2xl text-cyan-600 px-4"
          >
            &#9776;
          </button>
          <div role="div" className="flex items-center justify-between gap-3">
            <button
              data-testId="langToggle"
              className="text-cyan-600 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg border rounded-lg cursor-pointer border-cyan-600 px-1 sm:px-3 py-0.5 sm:py-1 hover:bg-cyan-100 active:bg-cyan-200"
              onClick={toggleLang}
            >
              <Link to={"/home"}>
                {language === "EN" ? "English" : "العربية"}
              </Link>
            </button>

            {loggedIn ? (
              <button
                data-testId="logout"
                onClick={LogOut}
                className="login-btn bg-cyan-600 text-stone-50 rounded-lg hover:bg-cyan-700 px-3 py-1"
              >
                {language === "EN" ? "Logout" : "خروج"}
              </button>
            ) : (
              <Link
                data-testId="anchor"
                to="/login"
                className="login-btn bg-cyan-600 text-stone-50 rounded-lg hover:bg-cyan-700 px-3 py-1"
              >
                {language === "EN" ? "Login" : "دخول"}
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
