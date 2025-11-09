import { type FC, type ReactNode } from "react";
import { NavLink } from "react-router";

type NavBtnProps = {
  children: ReactNode;
  to: string;
  className: string;
  mode: "side-bar" | "nav-bar";
};

const NavButton: FC<NavBtnProps> = ({ children, to, className, mode }) => {
  return (
    <li className={className}>
      <NavLink
        className={({ isActive }) =>
          isActive && mode === "nav-bar" ? "active" : ""
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavButton;
