import NavButton from "./NavButton";
import { type FC } from "react";
import type { NavBarProps } from "./Navbar";
import { useLanguageContext } from "../../store/LangContext";

const NavList: FC<NavBarProps> = ({ categories, mode }) => {
  const { language } = useLanguageContext();
  const pickedLangCategories = categories[language];
  const navCategories = Object.keys(pickedLangCategories);

  return (
    <ul
      className={` flex ${
        mode === "nav-bar"
          ? "flex-row justify-center gap-2 sm:gap-5 nav-list "
          : "flex-col gap-4  h-full"
      }
      } items-center  `}
    >
      <NavButton
        mode={mode}
        className={`nav-link  ${
          mode === "nav-bar" ? "nav-bar-link" : "side-bar-link"
        }`}
        to={"/"}
      >
        {language === "EN" ? "Home" : "الصفحة الرئيسية"}
      </NavButton>
      <NavButton
        mode={mode}
        className={`nav-link  ${
          mode === "nav-bar" ? "nav-bar-link" : "side-bar-link"
        }`}
        to={"/about"}
      >
        {language === "EN" ? "About" : "معلومات"}
      </NavButton>
      {navCategories.map((category) => {
        return (
          <NavButton
            mode={mode}
            className={`nav-link  ${
              mode === "nav-bar" ? "nav-bar-link" : "side-bar-link"
            }`}
            key={category}
            to={`/${category}`}
          >
            {category}
          </NavButton>
        );
      })}
    </ul>
  );
};

export default NavList;
