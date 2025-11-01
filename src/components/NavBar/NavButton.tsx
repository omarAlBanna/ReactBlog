import { type FC, type ReactNode } from "react";
import { NavLink } from "react-router";

type NavBtnProps = {
  children: ReactNode;
  to: string;
};

const NavButton: FC<NavBtnProps> = ({ children, to }) => {
  return (
    <li className="nav-link">
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
};

export default NavButton;
