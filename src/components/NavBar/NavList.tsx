import NavButton from "./NavButton";
import { type FC } from "react";

const NavList: FC = () => {
  return (
    <ul className={`nav-list flex items-center gap-5 justify-center `}>
      <NavButton>Home</NavButton>
      <NavButton>About</NavButton>
      <NavButton>world</NavButton>
    </ul>
  );
};

export default NavList;
