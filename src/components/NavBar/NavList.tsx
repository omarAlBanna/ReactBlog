import NavButton from "./NavButton";
import { type FC } from "react";
import type { NavBarProps } from "./Navbar";
const NavList: FC<NavBarProps> = ({ categories }) => {
  const navCategories = Object.keys(categories.EN);
  return (
    <ul className={`nav-list flex items-center gap-5 justify-center `}>
      <NavButton to="/home">Home</NavButton>
      <NavButton to="/about">About</NavButton>
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
