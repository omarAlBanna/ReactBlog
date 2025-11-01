import NavButton from "./NavButton";
import { type FC } from "react";
import type { NavBarProps } from "./Navbar";

const NavList: FC<NavBarProps> = ({ categories, lang }) => {
  const categoryLanguage = lang === "EN" ? categories.EN : categories.AR;
  const navCategories = Object.keys(categoryLanguage);

  return (
    <ul className={`nav-list flex items-center gap-5 justify-center `}>
      <NavButton to={lang === "EN" ? "/home" : "/الرئيسية"}>
        {lang === "EN" ? "Home" : "الصفحة الرئيسية"}
      </NavButton>
      <NavButton to={lang === "EN" ? "/about" : "/معلومات"}>
        {lang === "EN" ? "About" : "معلومات"}
      </NavButton>
      {navCategories.map((category) => {
        return (
          <NavButton key={category} to={`/${category}`}>
            {category}
          </NavButton>
        );
      })}
    </ul>
  );
};

export default NavList;
