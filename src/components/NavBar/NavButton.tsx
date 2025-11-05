import { type FC, type ReactNode } from "react";
import { NavLink } from "react-router";

type NavBtnProps = {
  children: ReactNode;
  to: string;
  className: string;
};

const NavButton: FC<NavBtnProps> = ({ children, to, className }) => {
  return (
    <li className={className}>
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={to}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavButton;
