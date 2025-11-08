import { type FC } from "react";
import { useLanguageContext } from "../../store/LangContext";
import NavList from "./NavList";
import { Link } from "react-router";

type LanguageCategories = Record<string, { "sub-categories": string[] }>;
type Categories = {
  EN: LanguageCategories;
  AR: LanguageCategories;
};
export type NavBarProps = {
  categories: Categories;
};

const Navbar: FC<NavBarProps> = ({ categories }) => {
  const { language, toggleLang } = useLanguageContext();

  return (
    <>
      <header className=" bg-stone-50 py-2 sm:px-10 relative shadow-lg shadow-stone-300">
        <nav className="flex items-center justify-between sm:p-0.5">
          <NavList categories={categories} />
          <button className="hamburger hidden text-2xl text-cyan-600 px-4">
            &#9776;
          </button>
          <div className="flex items-center justify-between gap-3">
            <button
              className="text-cyan-600 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg border rounded-lg cursor-pointer border-cyan-600 px-1 sm:px-3 py-0.5 sm:py-1 hover:bg-cyan-100 active:bg-cyan-200"
              onClick={toggleLang}
            >
              <Link to={"/home"}>
                {language === "EN" ? "English" : "العربية"}
              </Link>
            </button>

            <Link
              to={"/login"}
              className="login-btn bg-cyan-600 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-stone-50 rounded-lg hover:bg-cyan-700 active:bg-cyan-800 px-3 py-1 cursor-pointer"
            >
              {language === "EN" ? "Login" : "دخول"}
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
