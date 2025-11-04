import NavButton from "./NavButton";
import { type FC } from "react";
import type { NavBarProps } from "./Navbar";
import { useLanguageContext } from "../../store/LangContext";

const NavList: FC<NavBarProps> = ({ categories }) => {
  const { language } = useLanguageContext();
  const pickedLangCategories = categories[language];
  const navCategories = Object.keys(pickedLangCategories);

  return (
    <ul className={`nav-list flex items-center gap-5 justify-center `}>
      <NavButton to={"/"}>
        {language === "EN" ? "Home" : "الصفحة الرئيسية"}
      </NavButton>
      <NavButton to={"/about"}>
        {language === "EN" ? "About" : "معلومات"}
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
