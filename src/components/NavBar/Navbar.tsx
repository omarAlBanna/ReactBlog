import { type FC } from "react";
import { useLanguageContext } from "../../store/LangContext";
import NavList from "./NavList";

export type NavBarProps = {
  categories: {
    EN: {
      sports: {
        "sub-categories": string[];
      };
      news: {
        "sub-categories": string[];
      };
      gaming: {
        "sub-categories": string[];
      };
    };
    AR: {
      رياضة: {
        "sub-categories": string[];
      };
      اخبار: {
        "sub-categories": string[];
      };
      العاب: {
        "sub-categories": string[];
      };
    };
  };
  lang?: string;
};

const Navbar: FC<NavBarProps> = ({ categories }) => {
  const { language, toggleLang } = useLanguageContext();

  return (
    <>
      <header className=" bg-stone-50 py-2 sm:px-10 relative">
        <nav className="flex items-center justify-between sm:p-0.5">
          <NavList lang={language} categories={categories} />
          <button className="hamburger hidden text-2xl">&#9776;</button>
          <div className="flex items-center justify-between gap-3">
            <button
              className="text-cyan-600 text-xs sm:text-lg md:text-xl border rounded-lg cursor-pointer border-cyan-600 px-3 py-1 hover:bg-cyan-100"
              onClick={toggleLang}
            >
              {language === "EN" ? "English" : "العربية"}
            </button>
            <button className="login-btn bg-cyan-600 text-xs sm:text-lg md:text-xl text-stone-50 rounded-lg hover:bg-cyan-700 active:bg-cyan-800 px-3 py-1 cursor-pointer">
              {language === "EN" ? "Log In" : "تسجيل دخول"}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
